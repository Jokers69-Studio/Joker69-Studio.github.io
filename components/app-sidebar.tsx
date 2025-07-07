import * as React from "react";
import Link from "next/link";
import { User, Code, FolderOpen, Mail, Briefcase } from "lucide-react";
import { SearchForm } from "@/components/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarGroup,
} from "@/components/ui/sidebar";

// Navigation data with submenu structure
const data = {
  navMain: [
    {
      title: "About Studio",
      url: "#",
      items: [
        {
          title: "Our Story",
          url: "/about",
          icon: User,
        },
        {
          title: "Capabilities",
          url: "/skills",
          icon: Code,
        },
      ],
    },
    {
      title: "Our Work",
      url: "#",
      items: [
        {
          title: "Projects",
          url: "/projects",
          icon: FolderOpen,
        },
        {
          title: "Contact Us",
          url: "/contact",
          icon: Mail,
        },
        {
          title: "Services",
          url: "/services",
          icon: Briefcase,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="p-4">
          <h2 className="text-lg font-semibold">🎭 Jokers69 Studio</h2>
        </div>
        <SearchForm />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-medium">
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub>
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link
                            href={subItem.url}
                            className="flex items-center gap-2"
                          >
                            <subItem.icon className="h-4 w-4" />
                            {subItem.title}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
