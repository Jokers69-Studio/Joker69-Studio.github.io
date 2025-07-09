import { NextRequest, NextResponse } from 'next/server';
import { imageOptimizer } from '@/lib/image-optimizer';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      quality = 85, 
      format = 'jpeg', 
      maxWidth, 
      maxHeight,
      projectRoot = process.cwd() 
    } = body;

    // Validate inputs
    if (quality < 1 || quality > 100) {
      return NextResponse.json(
        { error: 'Quality must be between 1 and 100' },
        { status: 400 }
      );
    }

    if (!['jpeg', 'png', 'webp', 'avif'].includes(format)) {
      return NextResponse.json(
        { error: 'Invalid format. Must be jpeg, png, webp, or avif' },
        { status: 400 }
      );
    }

    // Configure optimizer
    const optimizer = new (await import('@/lib/image-optimizer')).ImageOptimizer({
      quality,
      format: format as 'jpeg' | 'png' | 'webp' | 'avif',
      maxWidth,
      maxHeight
    });

    // Run optimization
    const results = await optimizer.optimizeAllImages(projectRoot);

    // Generate report
    const report = optimizer.generateReport(results);

    // Calculate summary
    const successful = results.filter(r => r.success);
    const totalOriginalSize = successful.reduce((sum, r) => sum + r.originalSize, 0);
    const totalOptimizedSize = successful.reduce((sum, r) => sum + r.optimizedSize, 0);
    const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100;

    return NextResponse.json({
      success: true,
      summary: {
        totalImages: results.length,
        optimized: successful.length,
        failed: results.length - successful.length,
        totalOriginalSize: totalOriginalSize,
        totalOptimizedSize: totalOptimizedSize,
        totalReduction: totalReduction,
        totalReductionBytes: totalOriginalSize - totalOptimizedSize
      },
      results: results.map(r => ({
        path: r.originalPath,
        success: r.success,
        originalSize: r.originalSize,
        optimizedSize: r.optimizedSize,
        reductionPercentage: r.reductionPercentage,
        error: r.error
      })),
      report
    });

  } catch (error) {
    console.error('Image optimization error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to optimize images',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const projectRoot = searchParams.get('projectRoot') || process.cwd();

    // Just detect images without optimizing
    const images = await imageOptimizer.detectImages(projectRoot);

    return NextResponse.json({
      success: true,
      images: images.map(img => ({
        path: img,
        relativePath: path.relative(process.cwd(), img),
        size: null // Would need to read file stats
      })),
      totalImages: images.length
    });

  } catch (error) {
    console.error('Image detection error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to detect images',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 