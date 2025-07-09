import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

interface ImageOptimizationResult {
  originalPath: string;
  optimizedPath: string;
  originalSize: number;
  optimizedSize: number;
  reductionPercentage: number;
  success: boolean;
  error?: string;
}

interface OptimizationConfig {
  quality?: number;
  format?: 'jpeg' | 'png' | 'webp' | 'avif';
  maxWidth?: number;
  maxHeight?: number;
  progressive?: boolean;
}

export class ImageOptimizer {
  private config: OptimizationConfig;
  private supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.tiff'];

  constructor(config: OptimizationConfig = {}) {
    this.config = {
      quality: 85,
      format: 'jpeg',
      maxWidth: 1920,
      maxHeight: 1080,
      progressive: true,
      ...config
    };
  }

  /**
   * Detect all images in the project
   */
  async detectImages(projectRoot: string = process.cwd()): Promise<string[]> {
    const images: string[] = [];
    const supportedExtensions = this.supportedExtensions;
    
    async function scanDirectory(dir: string): Promise<void> {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          // Skip node_modules, .git, and other common directories
          if (entry.isDirectory()) {
            if (!['node_modules', '.git', '.next', 'dist', 'build', 'out'].includes(entry.name)) {
              await scanDirectory(fullPath);
            }
          } else if (entry.isFile()) {
            const ext = path.extname(entry.name).toLowerCase();
            if (supportedExtensions.includes(ext)) {
              images.push(fullPath);
            }
          }
        }
      } catch (error) {
        console.warn(`Error scanning directory ${dir}:`, error);
      }
    }

    await scanDirectory(projectRoot);
    return images;
  }

  /**
   * Optimize a single image
   */
  async optimizeImage(
    inputPath: string, 
    outputPath?: string,
    customConfig?: OptimizationConfig
  ): Promise<ImageOptimizationResult> {
    const config = { ...this.config, ...customConfig };
    const result: ImageOptimizationResult = {
      originalPath: inputPath,
      optimizedPath: outputPath || inputPath,
      originalSize: 0,
      optimizedSize: 0,
      reductionPercentage: 0,
      success: false
    };

    try {
      // Get original file size
      const originalStats = await fs.stat(inputPath);
      result.originalSize = originalStats.size;

      // Read the image
      const image = sharp(inputPath);
      
      // Resize if needed
      if (config.maxWidth || config.maxHeight) {
        image.resize(config.maxWidth, config.maxHeight, {
          fit: 'inside',
          withoutEnlargement: true
        });
      }

      // Apply format-specific optimizations
      let optimizedBuffer: Buffer;
      
      switch (config.format) {
        case 'jpeg':
          optimizedBuffer = await image
            .jpeg({ 
              quality: config.quality, 
              progressive: config.progressive 
            })
            .toBuffer();
          break;
          
        case 'png':
          optimizedBuffer = await image
            .png({ 
              quality: config.quality, 
              progressive: config.progressive 
            })
            .toBuffer();
          break;
          
        case 'webp':
          optimizedBuffer = await image
            .webp({ 
              quality: config.quality 
            })
            .toBuffer();
          break;
          
        case 'avif':
          optimizedBuffer = await image
            .avif({ 
              quality: config.quality 
            })
            .toBuffer();
          break;
          
        default:
          optimizedBuffer = await image.toBuffer();
      }

      // Write optimized image
      await fs.writeFile(result.optimizedPath, optimizedBuffer);
      
      // Get optimized file size
      const optimizedStats = await fs.stat(result.optimizedPath);
      result.optimizedSize = optimizedStats.size;
      
      // Calculate reduction percentage
      result.reductionPercentage = ((result.originalSize - result.optimizedSize) / result.originalSize) * 100;
      result.success = true;

    } catch (error) {
      result.error = error instanceof Error ? error.message : 'Unknown error';
      console.error(`Error optimizing ${inputPath}:`, error);
    }

    return result;
  }

  /**
   * Optimize all images in the project
   */
  async optimizeAllImages(
    projectRoot: string = process.cwd(),
    outputDir?: string
  ): Promise<ImageOptimizationResult[]> {
    const images = await this.detectImages(projectRoot);
    const results: ImageOptimizationResult[] = [];

    console.log(`Found ${images.length} images to optimize...`);

    for (const imagePath of images) {
      console.log(`Optimizing: ${imagePath}`);
      
      let outputPath = imagePath;
      if (outputDir) {
        const relativePath = path.relative(projectRoot, imagePath);
        outputPath = path.join(outputDir, relativePath);
        
        // Ensure output directory exists
        await fs.mkdir(path.dirname(outputPath), { recursive: true });
      }

      const result = await this.optimizeImage(imagePath, outputPath);
      results.push(result);

      if (result.success) {
        console.log(`✓ Optimized: ${path.basename(imagePath)} (${result.reductionPercentage.toFixed(1)}% reduction)`);
      } else {
        console.log(`✗ Failed: ${path.basename(imagePath)} - ${result.error}`);
      }
    }

    return results;
  }

  /**
   * Generate optimization report
   */
  generateReport(results: ImageOptimizationResult[]): string {
    const successful = results.filter(r => r.success);
    const failed = results.filter(r => !r.success);
    
    const totalOriginalSize = successful.reduce((sum, r) => sum + r.originalSize, 0);
    const totalOptimizedSize = successful.reduce((sum, r) => sum + r.optimizedSize, 0);
    const totalReduction = ((totalOriginalSize - totalOptimizedSize) / totalOriginalSize) * 100;

    return `
Image Optimization Report
========================

Total Images Processed: ${results.length}
Successfully Optimized: ${successful.length}
Failed: ${failed.length}

Total Size Reduction: ${(totalOriginalSize - totalOptimizedSize).toLocaleString()} bytes (${totalReduction.toFixed(1)}%)

Original Total Size: ${(totalOriginalSize / 1024).toFixed(2)} KB
Optimized Total Size: ${(totalOptimizedSize / 1024).toFixed(2)} KB

${failed.length > 0 ? `\nFailed Images:\n${failed.map(r => `- ${r.originalPath}: ${r.error}`).join('\n')}` : ''}
    `.trim();
  }
}

// Export a default instance
export const imageOptimizer = new ImageOptimizer();

// Export types
export type { ImageOptimizationResult, OptimizationConfig }; 