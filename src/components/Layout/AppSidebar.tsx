"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Home,
  User,
  FolderOpen,
  Wrench,
  Mail,
  Github,
  ExternalLink,
  Code,
  Palette,
  Rocket,
  Heart,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

const navigationItems = [
  {
    title: "Home",
    url: "#home",
    icon: Home,
    description: "Welcome & Overview",
  },
  {
    title: "About",
    url: "#about",
    icon: User,
    description: "Learn about our studio",
  },
  {
    title: "Projects",
    url: "#projects",
    icon: FolderOpen,
    description: "Featured work & innovations",
  },
  {
    title: "Skills",
    url: "#skills",
    icon: Wrench,
    description: "Our technical expertise",
  },
];

const quickActions = [
  {
    title: "Contact Us",
    url: "mailto:thejokkers69@gmail.com",
    icon: Mail,
    variant: "default" as const,
  },
  {
    title: "GitHub",
    url: "https://github.com/thejokers69",
    icon: Github,
    variant: "outline" as const,
    external: true,
  },
];

const services = [
  {
    name: "Development",
    icon: Code,
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
  },
  {
    name: "Design",
    icon: Palette,
    color: "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300",
  },
  {
    name: "Innovation",
    icon: Rocket,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
];

export function AppSidebar() {
  const handleNavClick = (url: string) => {
    if (url.startsWith("#")) {
      const element = document.querySelector(url);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (url.startsWith("http") || url.startsWith("mailto:")) {
      window.open(url, url.startsWith("mailto:") ? "_self" : "_blank");
    }
  };

  return (
    <Sidebar variant="inset" className="border-r border-border/40">
      <SidebarHeader className="border-b border-border/40 p-6">
        <div className="flex items-center space-x-3 group">
          <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
            🎭
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent leading-tight">
              Jokers69 Studio
            </span>
            <span className="text-xs text-muted-foreground">
              Creative Innovation
            </span>
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex gap-2">
            <Badge
              variant="outline"
              className="text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-700"
            >
              ✨ Available
            </Badge>
            <Badge variant="outline" className="text-xs">
              Remote
            </Badge>
          </div>
          <ModeToggle />
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavClick(item.url)}
                    className="group data-[state=open]:bg-accent data-[state=open]:text-accent-foreground hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-950/30 dark:hover:to-pink-950/30 transition-all duration-300"
                  >
                    <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col items-start">
                      <span className="font-medium">{item.title}</span>
                      <span className="text-xs text-muted-foreground">
                        {item.description}
                      </span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-6" />

        {/* Services */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Our Services
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors group cursor-pointer"
                >
                  <div
                    className={`p-2 rounded-md ${service.color} group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className="h-3 w-3" />
                  </div>
                  <span className="text-sm font-medium">{service.name}</span>
                </div>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator className="my-6" />

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
            Connect
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="space-y-2">
              {quickActions.map((action) => (
                <Button
                  key={action.title}
                  variant={action.variant}
                  size="sm"
                  onClick={() => handleNavClick(action.url)}
                  className="w-full justify-start gap-2 hover:scale-105 transition-all duration-300"
                >
                  <action.icon className="h-4 w-4" />
                  {action.title}
                  {action.external && (
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  )}
                </Button>
              ))}
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 p-4">
        <div className="space-y-3">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-2">
              Let&apos;s build something amazing together
            </p>
            <Button
              size="sm"
              onClick={() => handleNavClick("mailto:thejokkers69@gmail.com")}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0"
            >
              <Heart className="h-3 w-3 mr-2" fill="currentColor" />
              Start a Project
            </Button>
          </div>

          <div className="text-center">
            <p className="text-xs bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-medium">
              🎭 Playful. Innovative. Impactful.
            </p>
          </div>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
