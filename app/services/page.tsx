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
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Globe,
  Smartphone,
  Server,
  Palette,
  Code,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function ServicesPage() {
  const services = [
    {
      title: "Custom Web Development",
      icon: Globe,
      description:
        "End-to-end web applications built with modern technologies like React, Next.js, and Node.js. From corporate websites to complex enterprise platforms.",
      features: [
        "Responsive & Mobile-First Design",
        "Performance Optimization",
        "SEO & Analytics Integration",
        "Modern UI/UX Implementation",
        "Cross-browser Compatibility",
        "Content Management Systems",
      ],
      pricing: "Starting at $5,000",
    },
    {
      title: "Mobile App Development",
      icon: Smartphone,
      description:
        "Native and cross-platform mobile applications for iOS and Android, designed to engage users and drive business growth.",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "App Store Optimization",
        "Push Notifications & Analytics",
        "Offline Functionality",
        "In-app Purchase Integration",
      ],
      pricing: "Starting at $8,000",
    },
    {
      title: "Enterprise Solutions",
      icon: Server,
      description:
        "Scalable backend systems, API development, and cloud infrastructure designed for enterprise-level requirements.",
      features: [
        "Microservices Architecture",
        "Database Design & Optimization",
        "Cloud Deployment & DevOps",
        "Security Implementation",
        "Performance Monitoring",
        "Integration Services",
      ],
      pricing: "Starting at $10,000",
    },
    {
      title: "Brand & UX Design",
      icon: Palette,
      description:
        "Complete brand identity and user experience design services that create memorable and effective digital presence.",
      features: [
        "Brand Strategy & Identity",
        "User Research & Testing",
        "Wireframing & Prototyping",
        "Visual Design Systems",
        "Design System Development",
        "Brand Guidelines",
      ],
      pricing: "Starting at $3,000",
    },
    {
      title: "Digital Transformation",
      icon: Code,
      description:
        "Comprehensive digital transformation services including legacy system modernization and process optimization.",
      features: [
        "System Architecture Review",
        "Legacy System Migration",
        "Process Automation",
        "Technology Stack Modernization",
        "Performance Optimization",
        "Team Training & Support",
      ],
      pricing: "Contact for Quote",
    },
    {
      title: "Strategic Consulting",
      icon: MessageCircle,
      description:
        "Expert technical guidance and strategic planning to help organizations make informed technology decisions.",
      features: [
        "Technology Assessment",
        "Digital Strategy Planning",
        "Architecture Consulting",
        "Team Leadership & Mentoring",
        "Project Management",
        "Technical Documentation",
      ],
      pricing: "Starting at $200/hour",
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
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Jokers69 Studio offers comprehensive development and design
              services to help organizations bring their digital vision to life.
              From concept to deployment, we work with you to create exceptional
              digital experiences that drive results.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium mb-2">What&apos;s included:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <span className="text-lg font-semibold text-primary">
                      {service.pricing}
                    </span>
                    <Button asChild size="sm">
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-muted-foreground mb-6">
                Let&apos;s discuss your project requirements and explore how
                Jokers69 Studio can help you achieve your digital goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">View Our Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
