import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import {
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Palette,
} from "lucide-react";
import Footer from "@/components/footer";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Vue.js",
        "Angular",
      ],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        "Node.js",
        "Express.js",
        "Python",
        "FastAPI",
        "REST APIs",
        "GraphQL",
        "Microservices",
        "Serverless",
      ],
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "DevOps",
      ],
    },
    {
      title: "Mobile Development",
      icon: Smartphone,
      skills: [
        "React Native",
        "Flutter",
        "iOS Development",
        "Android Development",
        "PWA",
      ],
    },
    {
      title: "Design & UX",
      icon: Palette,
      skills: [
        "Figma",
        "Adobe Creative Suite",
        "Sketch",
        "Prototyping",
        "User Research",
        "Brand Identity",
      ],
    },
    {
      title: "Emerging Technologies",
      icon: Code,
      skills: [
        "AI/ML Integration",
        "Blockchain",
        "IoT",
        "AR/VR",
        "Data Analytics",
        "Automation",
      ],
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
                <BreadcrumbPage>Capabilities</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl font-bold mb-6">Our Capabilities</h1>
            <p className="text-lg text-muted-foreground mb-8">
              At Jokers69 Studio, we leverage cutting-edge technologies and
              proven methodologies to deliver exceptional digital solutions. Our
              diverse skill set enables us to tackle projects of any scale and
              complexity.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((category) => (
                <div
                  key={category.title}
                  className="bg-card border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="bg-muted px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
