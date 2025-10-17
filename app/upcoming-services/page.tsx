import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Clock,
  Sparkles,
  Rocket,
  Zap,
  Shield,
  Brain,
  Mail,
  Bell,
  ArrowRight,
  Star,
  Users,
  Globe,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function UpcomingServicesPage() {
  const upcomingServices = [
    {
      title: "AI-Powered Analytics Dashboard",
      description:
        "Advanced analytics with machine learning insights and predictive modeling for your business data.",
      icon: Brain,
      status: "In Development",
      eta: "Q2 2024",
      features: [
        "Real-time Analytics",
        "Predictive Insights",
        "Custom Dashboards",
        "API Integration",
      ],
    },
    {
      title: "Blockchain Integration Platform",
      description:
        "Secure blockchain solutions for enterprise applications with smart contract deployment.",
      icon: Shield,
      status: "Planning",
      eta: "Q3 2024",
      features: [
        "Smart Contracts",
        "DeFi Solutions",
        "NFT Marketplace",
        "Crypto Payments",
      ],
    },
    {
      title: "Advanced Cloud Infrastructure",
      description:
        "Scalable cloud solutions with auto-scaling, load balancing, and global CDN distribution.",
      icon: Globe,
      status: "Research",
      eta: "Q4 2024",
      features: [
        "Auto-scaling",
        "Global CDN",
        "Microservices",
        "DevOps Automation",
      ],
    },
    {
      title: "Mobile App Development Suite",
      description:
        "Cross-platform mobile development tools with native performance and offline capabilities.",
      icon: Zap,
      status: "Concept",
      eta: "2025",
      features: [
        "Cross-platform",
        "Offline Sync",
        "Push Notifications",
        "App Store Optimization",
      ],
    },
  ];

  const benefits = [
    {
      icon: Rocket,
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead with the latest innovations and emerging technologies.",
    },
    {
      icon: Users,
      title: "Expert Team",
      description:
        "Our specialized team brings years of experience in advanced development.",
    },
    {
      icon: Star,
      title: "Premium Quality",
      description:
        "Enterprise-grade solutions with comprehensive testing and optimization.",
    },
  ];

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
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Upcoming Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Hero Section */}
          <section className="relative text-center py-16 px-4 overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-purple-50/20 to-pink-50/40 dark:from-blue-950/15 dark:via-purple-950/8 dark:to-pink-950/15 pointer-events-none rounded-2xl" />

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200/20 dark:bg-blue-800/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200/20 dark:bg-purple-800/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-200/20 dark:bg-pink-800/20 rounded-full blur-xl animate-pulse" />

            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Clock className="h-6 w-6 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">
                  Coming Soon
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6 tracking-tight">
                🚀 Upcoming Services
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Get ready for the future of digital innovation. We&apos;re
                working on groundbreaking services that will revolutionize how
                you build and scale your projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-lg bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Bell className="mr-2 h-5 w-5" />
                  Get Notified
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link href="/contact">
                    <Mail className="mr-2 h-5 w-5" />
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Upcoming Services Grid */}
          <section className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                What&apos;s Coming Next
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Discover the innovative services we&apos;re developing to help
                you stay ahead of the competition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingServices.map((service, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden border-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                          {service.title}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs px-2 py-1 bg-muted rounded-full">
                            {service.status}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            ETA: {service.eta}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </CardDescription>

                    <div className="space-y-2">
                      <h4 className="font-medium text-sm">Key Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="text-xs px-2 py-1 bg-secondary/50 rounded-md"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
                Why Choose Our Upcoming Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                We&apos;re committed to delivering exceptional value through
                innovative solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="text-center group hover:shadow-lg transition-shadow duration-300"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="max-w-4xl mx-auto w-full">
            <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-bold">
                  Stay Updated
                </CardTitle>
                <CardDescription className="text-lg">
                  Be the first to know when these exciting services launch. Get
                  exclusive early access and special pricing.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1"
                  />
                  <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    <Bell className="mr-2 h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="max-w-4xl mx-auto w-full text-center">
            <div className="bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                While we work on these exciting new services, explore our
                current offerings and start your digital transformation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/services">
                    <Rocket className="mr-2 h-5 w-5" />
                    View Current Services
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    <ArrowRight className="mr-2 h-5 w-5" />
                    Start a Project
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
