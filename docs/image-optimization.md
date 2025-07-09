# 🎭 Image Optimization System

Jokers69 Studio's comprehensive image optimization system automatically detects and optimizes images in your project to improve performance and reduce file sizes.

## Features

- **Automatic Detection**: Scans your entire project for image files
- **Multiple Formats**: Supports JPEG, PNG, WebP, and AVIF
- **Quality Control**: Adjustable quality settings (1-100%)
- **Size Optimization**: Configurable max dimensions
- **Batch Processing**: Optimize all images at once
- **Detailed Reporting**: Comprehensive optimization reports
- **GitHub Integration**: Automatic optimization via GitHub Actions

## Configuration

### Imgbot Configuration (`.imgbotconfig`)

```json
{
    "schedule": "weekly",
    "ignoredFiles": [
        "*.jpg",
        "image1.png", 
        "public/special_images/*"
    ],
    "aggressiveCompression": false,
    "compressWiki": true,
    "minKBReduced": 500,
    "prTitle": "Custom Image Optimization",
    "prBody": "Optimized images: {optimization_ratio}"
}
```

**Settings:**

- `schedule`: How often to run optimization (`daily`, `weekly`, `monthly`)
- `ignoredFiles`: Files/folders to skip during optimization
- `aggressiveCompression`: Use lossy compression (true) or lossless (false)
- `compressWiki`: Also optimize wiki images
- `minKBReduced`: Minimum KB reduction to create a PR
- `prTitle`: Custom title for optimization PRs
- `prBody`: Custom body for optimization PRs

## Usage

### Command Line

```bash
# Optimize all images with default settings
npm run optimize-images

# Dry run - see what would be optimized without making changes
npm run optimize-images:dry-run

# Custom settings
npm run optimize-images -- --quality=90 --format=webp --output=./optimized
```

### API Endpoint

```javascript
// POST /api/optimize-images
const response = await fetch('/api/optimize-images', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    quality: 85,
    format: 'jpeg',
    maxWidth: 1920,
    maxHeight: 1080
  })
});

const result = await response.json();
```

### React Component

```tsx
import { ImageOptimizer } from '@/components/image-optimizer';

function MyPage() {
  return (
    <div>
      <h1>Image Optimization</h1>
      <ImageOptimizer />
    </div>
  );
}
```

## Supported Formats

| Format | Extension | Features |
|--------|-----------|----------|
| JPEG | `.jpg`, `.jpeg` | Lossy compression, good for photos |
| PNG | `.png` | Lossless, good for graphics with transparency |
| WebP | `.webp` | Modern format, excellent compression |
| AVIF | `.avif` | Latest format, best compression |

## GitHub Actions

The system includes automatic GitHub Actions that:

1. **Triggers**: Runs when image files are added or modified
2. **Detection**: Automatically finds all images in the project
3. **Optimization**: Processes images with configurable settings
4. **Commit**: Creates commits with optimized images
5. **Report**: Generates detailed optimization reports

### Manual Trigger

You can manually trigger optimization from the GitHub Actions tab with custom settings:

- **Quality**: 1-100 (default: 85)
- **Format**: jpeg, png, webp, avif (default: jpeg)

## File Structure

```
├── .imgbotconfig                 # Imgbot configuration
├── lib/
│   └── image-optimizer.ts       # Core optimization logic
├── scripts/
│   └── optimize-images.ts       # CLI script
├── components/
│   └── image-optimizer.tsx      # React UI component
├── app/api/
│   └── optimize-images/
│       └── route.ts             # API endpoint
└── .github/workflows/
    └── image-optimization.yml   # GitHub Action
```

## Best Practices

### 1. Quality Settings

- **Photos**: 80-90% quality
- **Graphics**: 85-95% quality
- **WebP/AVIF**: 75-85% quality (better compression)

### 2. Format Selection

- **Photos**: JPEG or WebP
- **Graphics with transparency**: PNG or WebP
- **Modern browsers**: WebP or AVIF
- **Maximum compatibility**: JPEG

### 3. Size Limits

- **Hero images**: 1920px max width
- **Thumbnails**: 300-500px max
- **Icons**: 64-128px max

### 4. Ignore Patterns

```json
{
  "ignoredFiles": [
    "*.jpg",                    // Ignore all JPG files
    "logo.png",                 // Ignore specific file
    "public/special_images/*",  // Ignore entire folder
    "**/screenshots/**"         // Ignore nested folder
  ]
}
```

## Performance Impact

### Before Optimization

- Large image files (2-5MB each)
- Slow page loading
- High bandwidth usage
- Poor mobile performance

### After Optimization

- Reduced file sizes (50-80% smaller)
- Faster page loading
- Lower bandwidth usage
- Better mobile experience

## Troubleshooting

### Common Issues

1. **Sharp not installed**

   ```bash
   pnpm add sharp
   ```

2. **Permission errors**

   ```bash
   chmod +x scripts/optimize-images.ts
   ```

3. **Memory issues with large images**
   - Reduce maxWidth/maxHeight
   - Process images in smaller batches
   - Use lower quality settings

4. **GitHub Action failures**
   - Check file permissions
   - Verify Node.js version
   - Review workflow logs

### Debug Mode

```bash
# Enable verbose logging
DEBUG=image-optimizer npm run optimize-images
```

## Integration with Imgbot

This system works alongside [Imgbot](https://imgbot.net/) for comprehensive image optimization:

1. **Local Optimization**: Use our custom system for immediate optimization
2. **Imgbot Integration**: Let Imgbot handle ongoing optimization
3. **Combined Workflow**: Both systems complement each other

## Contributing

To extend the image optimization system:

1. **Add new formats**: Extend the `ImageOptimizer` class
2. **Custom filters**: Implement new optimization algorithms
3. **UI improvements**: Enhance the React component
4. **API extensions**: Add new endpoints for specific use cases

## License

This image optimization system is part of Jokers69 Studio and follows the same MIT license as the main project.
