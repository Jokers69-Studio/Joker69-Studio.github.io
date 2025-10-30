"use client";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Mail,
  Heart,
  ExternalLink,
  Code,
  Palette,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = React.useState<number | null>(null);
  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    {
      href: "mailto:thejokkers69@gmail.com",
      label: "Email",
      icon: Mail,
      description: "Get in touch",
    },
    {
      href: "https://github.com/thejokers69",
      label: "GitHub",
      icon: Github,
      description: "View our code",
    },
  ];

  const quickLinks = [
    { href: "/about", label: "About", icon: "🎭" },
    { href: "/projects", label: "Projects", icon: "📂" },
    { href: "/skills", label: "Skills", icon: "💪" },
  ];

  return (
    <footer className="relative mt-20 border-t border-border/40 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* Enhanced decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-blue-500/5 pointer-events-none" />

      {/* Floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-purple-200/10 dark:bg-purple-800/5 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-pink-200/10 dark:bg-pink-800/5 rounded-full blur-xl animate-pulse" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                🎭
              </div>
              <div>
                <h3 className="font-bold text-xl bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Jokers69 Studio
                </h3>
                <p className="text-sm text-muted-foreground">
                  Creative Innovation
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Where creativity meets innovation. We craft digital experiences
              that inspire, engage, and transform ideas into reality.
            </p>
            <div className="flex gap-2">
              <Badge
                variant="outline"
                className="bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/30 dark:text-purple-300 dark:border-purple-700 hover:scale-105 transition-transform"
              >
                <Code className="h-3 w-3 mr-1" />
                Development
              </Badge>
              <Badge
                variant="outline"
                className="bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/30 dark:text-pink-300 dark:border-pink-700 hover:scale-105 transition-transform"
              >
                <Palette className="h-3 w-3 mr-1" />
                Design
              </Badge>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="text-lg group-hover:scale-110 transition-transform">
                    {link.icon}
                  </span>
                  <span className="group-hover:translate-x-1 transition-transform">
                    {link.label}
                  </span>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-6">
            <h4 className="font-semibold text-lg">Let&apos;s Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="justify-start px-0 h-auto py-2 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 group transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <a
                      href={link.href}
                      target={
                        link.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        link.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-3 w-full"
                    >
                      <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                      <div className="text-left">
                        <div className="font-medium">{link.label}</div>
                        <div className="text-xs text-muted-foreground">
                          {link.description}
                        </div>
                      </div>
                      {link.href.startsWith("http") && (
                        <ExternalLink className="h-3 w-3 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      )}
                    </a>
                  </Button>
                );
              })}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-3">
                Ready to start a project?
              </p>
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 group hover:scale-105 transition-all duration-300"
              >
                <a
                  href="mailto:thejokkers69@gmail.com"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  Get in touch
                  <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {currentYear ?? ''} Jokers69 Studio.</span>
            <span className="flex items-center gap-1">
              Made with{" "}
              <Heart
                className="h-3 w-3 text-red-500 animate-pulse"
                fill="currentColor"
              />{" "}
              and creativity
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Playful. Innovative. Impactful.
              <Sparkles className="h-3 w-3" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
