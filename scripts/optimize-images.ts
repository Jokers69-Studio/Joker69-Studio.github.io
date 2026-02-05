#!/usr/bin/env node

import { imageOptimizer } from '../lib/image-optimizer';
import path from 'path';

async function main() {
  const args = process.argv.slice(2);
  const projectRoot = process.cwd();
  
  console.log('🎭 Jokers69 Studio - Image Optimizer');
  console.log('=====================================\n');

  try {
    // Parse command line arguments
    const options = {
      outputDir: args.find(arg => arg.startsWith('--output='))?.split('=')[1],
      quality: parseInt(args.find(arg => arg.startsWith('--quality='))?.split('=')[1] || '85'),
      format: args.find(arg => arg.startsWith('--format='))?.split('=')[1] || 'jpeg',
      dryRun: args.includes('--dry-run'),
      help: args.includes('--help') || args.includes('-h')
    };

    if (options.help) {
      console.log('\nUsage: npm run optimize-images [options]\n\nOptions:\n  --output=<dir>     Output directory for optimized images\n  --quality=<1-100>  Image quality (default: 85)\n  --format=<format>  Output format: jpeg, png, webp, avif (default: jpeg)\n  --dry-run         Show what would be optimized without making changes\n  --help, -h        Show this help message\n\nExamples:\n  npm run optimize-images\n  npm run optimize-images --output=./optimized\n  npm run optimize-images --quality=90 --format=webp\n  npm run optimize-images --dry-run\n      ');
      return;
    }

    if (options.dryRun) {
      console.log('🔍 DRY RUN MODE - No changes will be made\n');
      const images = await imageOptimizer.detectImages(projectRoot);
      console.log('Found images to optimize:', images.length);
      images.forEach(img => console.log('  -', img));
      return;
    }

    // Validate and sanitize options
    const projectRootResolved = path.resolve(projectRoot);

    if (options.outputDir) {
      const resolvedOutput = path.resolve(projectRootResolved, options.outputDir);
      const normalizedBase = projectRootResolved.endsWith(path.sep) ? projectRootResolved : projectRootResolved + path.sep;
      if (resolvedOutput !== projectRootResolved && !resolvedOutput.startsWith(normalizedBase)) {
        console.error('Output directory must be inside the project root. Received:', options.outputDir);
        process.exit(1);
      }
      options.outputDir = resolvedOutput;
    }

    const allowedFormats = ['jpeg', 'png', 'webp', 'avif'];
    if (!allowedFormats.includes(options.format)) {
      console.warn('Invalid format provided, defaulting to jpeg:', options.format);
      options.format = 'jpeg';
    }

    if (isNaN(options.quality) || options.quality < 1) options.quality = 1;
    if (options.quality > 100) options.quality = 100;

    // Configure optimizer based on options
    const optimizer = new (await import('../lib/image-optimizer')).ImageOptimizer({
      quality: options.quality,
      format: options.format as 'jpeg' | 'png' | 'webp' | 'avif'
    });

    // Run optimization
    const results = await optimizer.optimizeAllImages(projectRootResolved, options.outputDir);

    // Generate and display report
    const report = optimizer.generateReport(results);
    console.log('\n' + report);

    // Save report to file
    const reportPath = path.join(projectRoot, 'image-optimization-report.txt');
    await import('fs').then(fs => 
      fs.promises.writeFile(reportPath, report)
    );
    console.log(`\n📄 Report saved to: ${reportPath}`);

  } catch (error) {
    console.error('❌ Error during image optimization:', error);
    process.exit(1);
  }
}

// Run the script
main().catch(console.error); 