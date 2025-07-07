import { Search, Sparkles } from "lucide-react";

import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

export function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <form {...props}>
      <SidebarGroup className="py-2 px-2">
        <SidebarGroupContent className="relative group">
          <Label htmlFor="search" className="sr-only">
            Search Jokers69 Studio Portfolio
          </Label>
          <SidebarInput
            id="search"
            placeholder="🎭 Search projects, skills, creativity..."
            className="pl-10 pr-4 bg-gradient-to-r from-sidebar-accent/40 to-sidebar-accent/60 border-sidebar-border/50 hover:border-sidebar-border hover:from-sidebar-accent/60 hover:to-sidebar-accent/80 focus:from-sidebar-accent/70 focus:to-sidebar-accent/90 focus:border-sidebar-primary/50 focus:ring-2 focus:ring-sidebar-primary/20 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md placeholder:text-sidebar-foreground/50 placeholder:font-medium"
          />
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-sidebar-foreground/60 group-hover:text-sidebar-foreground/80 transition-colors duration-200 select-none" />
          <Sparkles className="pointer-events-none absolute top-1/2 right-3 size-3 -translate-y-1/2 text-sidebar-foreground/40 group-hover:text-sidebar-primary/60 transition-all duration-300 opacity-0 group-hover:opacity-100 select-none" />
        </SidebarGroupContent>
      </SidebarGroup>
    </form>
  );
}
