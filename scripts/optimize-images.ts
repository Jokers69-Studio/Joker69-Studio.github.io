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
      console.log(`
Usage: npm run optimize-images [options]

Options:
  --output=<dir>     Output directory for optimized images
  --quality=<1-100>  Image quality (default: 85)
  --format=<format>  Output format: jpeg, png, webp, avif (default: jpeg)
  --dry-run         Show what would be optimized without making changes
  --help, -h        Show this help message

Examples:
  npm run optimize-images
  npm run optimize-images --output=./optimized
  npm run optimize-images --quality=90 --format=webp
  npm run optimize-images --dry-run
      `);
      return;
    }

    if (options.dryRun) {
      console.log('🔍 DRY RUN MODE - No changes will be made\n');
      const images = await imageOptimizer.detectImages(projectRoot);
      console.log(`Found ${images.length} images to optimize:`);
      images.forEach(img => console.log(`  - ${img}`));
      return;
    }

    // Configure optimizer based on options
    const optimizer = new (await import('../lib/image-optimizer')).ImageOptimizer({
      quality: options.quality,
      format: options.format as 'jpeg' | 'png' | 'webp' | 'avif'
    });

    // Run optimization
    const results = await optimizer.optimizeAllImages(projectRoot, options.outputDir);

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