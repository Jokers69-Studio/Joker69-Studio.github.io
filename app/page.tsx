import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import { ArrowRight, Code, User, FolderOpen } from "lucide-react";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbPage>Home</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-8 p-6">
          {/* Hero Section */}
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                🎭 Welcome to Jokers69 Studio
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Where creativity meets innovation. We&apos;re a dynamic studio
                crafting digital experiences that inspire, engage, and transform
                ideas into reality.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <Link href="/about" className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Our Story
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg border-2"
              >
                <Link href="/projects" className="flex items-center gap-2">
                  <FolderOpen className="h-5 w-5" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Explore Our Studio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/about"
                className="group p-6 border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary"
              >
                <div className="flex items-center gap-3 mb-3">
                  <User className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    Our Story
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Discover our studio&apos;s mission, values, and the creative
                  minds behind our innovative solutions.
                </p>
              </Link>

              <Link
                href="/skills"
                className="group p-6 border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Code className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    Capabilities
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Explore our comprehensive technology stack and expertise in
                  building cutting-edge digital solutions.
                </p>
              </Link>

              <Link
                href="/projects"
                className="group p-6 border rounded-lg hover:shadow-md transition-all duration-200 hover:border-primary"
              >
                <div className="flex items-center gap-3 mb-3">
                  <FolderOpen className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-medium group-hover:text-primary transition-colors">
                    Our Portfolio
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  View our latest projects and successful collaborations with
                  clients across various industries.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
