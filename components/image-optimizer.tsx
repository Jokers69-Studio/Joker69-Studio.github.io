"use client";

import React, { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Settings,
  Zap,
  CheckCircle,
  AlertCircle,
  Loader2,
  FileImage,
  TrendingDown,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface OptimizationResult {
  path: string;
  success: boolean;
  originalSize: number;
  optimizedSize: number;
  reductionPercentage: number;
  error?: string;
}

interface OptimizationSummary {
  totalImages: number;
  optimized: number;
  failed: number;
  totalOriginalSize: number;
  totalOptimizedSize: number;
  totalReduction: number;
  totalReductionBytes: number;
}

interface ImageOptimizerProps {
  className?: string;
}

export function ImageOptimizer({ className }: ImageOptimizerProps) {
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [results, setResults] = useState<OptimizationResult[]>([]);
  const [summary, setSummary] = useState<OptimizationSummary | null>(null);
  const [settings, setSettings] = useState({
    quality: 85,
    format: "jpeg" as "jpeg" | "png" | "webp" | "avif",
    maxWidth: 1920,
    maxHeight: 1080,
  });

  const formatBytes = useCallback((bytes: number): string => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  }, []);

  const handleOptimize = useCallback(async () => {
    setIsOptimizing(true);
    setResults([]);
    setSummary(null);

    try {
      const response = await fetch("/api/optimize-images", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(settings),
      });

      const data = await response.json();

      if (data.success) {
        setResults(data.results);
        setSummary(data.summary);
      } else {
        console.error("Optimization failed:", data.error);
      }
    } catch (error) {
      console.error("Error during optimization:", error);
    } finally {
      setIsOptimizing(false);
    }
  }, [settings]);

  const getStatusIcon = (success: boolean) => {
    return success ? (
      <CheckCircle className="h-4 w-4 text-green-500" />
    ) : (
      <AlertCircle className="h-4 w-4 text-red-500" />
    );
  };

  const getStatusBadge = (success: boolean) => {
    return (
      <Badge variant={success ? "default" : "destructive"} className="text-xs">
        {success ? "Success" : "Failed"}
      </Badge>
    );
  };

  return (
    <div className={cn("space-y-6", className)}>
      {/* Settings Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Optimization Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Quality</label>
              <input
                type="range"
                min="1"
                max="100"
                value={settings.quality}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    quality: parseInt(e.target.value),
                  }))
                }
                className="w-full"
              />
              <span className="text-xs text-muted-foreground">
                {settings.quality}%
              </span>
            </div>
            <div>
              <label className="text-sm font-medium">Format</label>
              <select
                value={settings.format}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    format: e.target.value as "jpeg" | "png" | "webp" | "avif",
                  }))
                }
                className="w-full p-2 border rounded-md"
              >
                <option value="jpeg">JPEG</option>
                <option value="png">PNG</option>
                <option value="webp">WebP</option>
                <option value="avif">AVIF</option>
              </select>
            </div>
          </div>

          <Button
            onClick={handleOptimize}
            disabled={isOptimizing}
            className="w-full"
          >
            {isOptimizing ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Optimizing Images...
              </>
            ) : (
              <>
                <Zap className="h-4 w-4 mr-2" />
                Optimize Images
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Results */}
      {summary && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Optimization Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {summary.totalImages}
                </div>
                <div className="text-sm text-muted-foreground">
                  Total Images
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {summary.optimized}
                </div>
                <div className="text-sm text-muted-foreground">Optimized</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-600">
                  {summary.failed}
                </div>
                <div className="text-sm text-muted-foreground">Failed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {summary.totalReduction.toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Size Reduction
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Original Size:</span>
                <span className="font-medium">
                  {formatBytes(summary.totalOriginalSize)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Optimized Size:</span>
                <span className="font-medium">
                  {formatBytes(summary.totalOptimizedSize)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Space Saved:</span>
                <span className="font-medium text-green-600">
                  {formatBytes(summary.totalReductionBytes)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Detailed Results */}
      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileImage className="h-5 w-5" />
              Image Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg"
                >
                  <div className="flex items-center gap-3 flex-1">
                    {getStatusIcon(result.success)}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {result.path.split("/").pop()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {result.path}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    {result.success ? (
                      <>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">
                            Size Reduction
                          </div>
                          <div className="text-sm font-medium text-green-600">
                            {result.reductionPercentage.toFixed(1)}%
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground">
                            Saved
                          </div>
                          <div className="text-sm font-medium">
                            {formatBytes(
                              result.originalSize - result.optimizedSize
                            )}
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="text-xs text-red-600">{result.error}</div>
                    )}
                    {getStatusBadge(result.success)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
