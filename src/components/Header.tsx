import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, Github, Mail, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const Header: React.FC = () => {
  const navigationItems = [
    { href: "#about", label: "About", description: "Learn about our studio" },
    {
      href: "#projects",
      label: "Projects",
      description: "Featured work & innovations",
    },
    {
      href: "#skills",
      label: "Skills",
      description: "Our technical expertise",
    },
  ];

  const socialLinks = [
    { href: "mailto:thejokkers69@gmail.com", label: "Contact", icon: Mail },
    { href: "https://github.com/thejokers69", label: "GitHub", icon: Github },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center space-x-3 group">
          <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
            🎭
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Jokers69 Studio
            </span>
            <span className="text-xs text-muted-foreground hidden sm:block">
              Creative Innovation
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            {navigationItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 transition-all duration-300"
                  )}
                  href={item.href}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Contact Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30">
                Contact
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 w-[300px]">
                  <div className="row-span-3">
                    <div className="mb-4">
                      <h4 className="font-medium text-sm text-muted-foreground">
                        Get in touch
                      </h4>
                    </div>
                    <div className="space-y-2">
                      {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                          <a
                            key={link.href}
                            href={link.href}
                            target={
                              link.href.startsWith("http")
                                ? "_blank"
                                : undefined
                            }
                            rel={
                              link.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <Icon className="h-4 w-4" />
                            <span className="text-sm">{link.label}</span>
                            {link.href.startsWith("http") && (
                              <ExternalLink className="h-3 w-3 ml-auto" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <ModeToggle />

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="outline"
                size="icon"
                className="hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 transition-all duration-300"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2 text-left">
                  <span className="text-xl">🎭</span>
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Jokers69 Studio
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-6 mt-8">
                {/* Navigation Links */}
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Navigation
                  </h3>
                  {navigationItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex flex-col space-y-1 text-lg font-medium transition-colors hover:text-primary group"
                    >
                      <span className="group-hover:translate-x-2 transition-transform duration-300">
                        {item.label}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {item.description}
                      </span>
                    </a>
                  ))}
                </div>

                {/* Contact Links */}
                <div className="space-y-4 border-t pt-6">
                  <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    Connect
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((link) => {
                      const Icon = link.icon;
                      return (
                        <a
                          key={link.href}
                          href={link.href}
                          target={
                            link.href.startsWith("http") ? "_blank" : undefined
                          }
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-all duration-300 group"
                        >
                          <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                          <span className="font-medium">{link.label}</span>
                          {link.href.startsWith("http") && (
                            <ExternalLink className="h-4 w-4 ml-auto group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          )}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
