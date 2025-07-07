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
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import Footer from "@/components/footer";

export default function ContactPage() {
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
                <BreadcrumbPage>Contact</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Contact Our Studio</h1>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to bring your digital vision to life? Whether you have a
              project in mind, want to explore partnership opportunities, or
              need expert consultation, we&apos;re here to help. Let&apos;s
              start the conversation.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Business Inquiries</p>
                      <p className="text-muted-foreground">
                        hello@jokers69studio.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+1 (555) JOKER-69</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-4 border rounded-lg">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">Studio Location</p>
                      <p className="text-muted-foreground">
                        San Francisco Bay Area, CA
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex gap-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href="#" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#" className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="sm">
                      <Link href="#" className="flex items-center gap-2">
                        <Twitter className="h-4 w-4" />
                        Twitter
                      </Link>
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h4 className="font-semibold mb-2">Business Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                      <p>Sunday: By appointment only</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border rounded-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Start a Project</h2>
                <p className="text-muted-foreground mb-4">
                  Tell us about your project and we&apos;ll get back to you
                  within 24 hours.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">$100,000+</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="project"
                      className="block text-sm font-medium mb-2"
                    >
                      Project Details *
                    </label>
                    <textarea
                      id="project"
                      rows={5}
                      className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                      required
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Send Project Brief
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
