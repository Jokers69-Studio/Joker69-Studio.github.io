"use client";

import React from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "./AppSidebar";
import Footer from "@/components/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gradient-to-br from-gray-50 via-white to-purple-50/20 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950/10 text-gray-900 dark:text-white overflow-x-hidden">
        <AppSidebar />

        <SidebarInset className="flex-1 flex flex-col">
          {/* Background decoration */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-200/15 dark:bg-purple-800/8 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-pink-200/15 dark:bg-pink-800/8 rounded-full blur-3xl animate-pulse delay-700" />
            <div className="absolute top-3/4 left-1/3 w-64 h-64 bg-blue-200/15 dark:bg-blue-800/8 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <main className="relative z-10 flex-1 pt-12 pb-8">
            <div className="container mx-auto max-w-7xl px-6">{children}</div>
          </main>

          <Footer />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
