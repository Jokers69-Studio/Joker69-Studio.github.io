"use client";

import { useState, useEffect, useCallback, memo } from "react";
import { Search, Sparkles, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "@/components/ui/sidebar";

// Search data - you can expand this with your actual content
const searchData = [
  { title: "About Studio", url: "/about", category: "Studio" },
  { title: "Our Story", url: "/about", category: "Studio" },
  { title: "Capabilities", url: "/skills", category: "Skills" },
  { title: "Projects", url: "/projects", category: "Work" },
  { title: "Contact Us", url: "/contact", category: "Contact" },
  { title: "Services", url: "/services", category: "Services" },
  { title: "Software Development", url: "/services", category: "Services" },
  { title: "Creative Projects", url: "/services", category: "Services" },
  { title: "Collaboration", url: "/services", category: "Services" },
  { title: "React", url: "/skills", category: "Skills" },
  { title: "Node.js", url: "/skills", category: "Skills" },
  { title: "TypeScript", url: "/skills", category: "Skills" },
  { title: "UI/UX", url: "/skills", category: "Skills" },
  { title: "Animation", url: "/skills", category: "Skills" },
  { title: "Design", url: "/skills", category: "Skills" },
];

export const SearchForm = memo(function SearchForm({
  ...props
}: React.ComponentProps<"form">) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  // Handle search input changes
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const query = e.target.value;
      setSearchQuery(query);

      if (query.trim() === "") {
        setSearchResults([]);
        setShowResults(false);
        return;
      }

      setIsSearching(true);

      // Simulate search delay for better UX
      setTimeout(() => {
        const filtered = searchData.filter(
          (item) =>
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.category.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);
        setShowResults(true);
        setIsSearching(false);
      }, 150);
    },
    []
  );

  // Handle form submission
  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        // Redirect to search page with query
        window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
      }
    },
    [searchQuery]
  );

  // Clear search
  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
    setShowResults(false);
  }, []);

  // Handle result click
  const handleResultClick = useCallback((url: string) => {
    window.location.href = url;
    setShowResults(false);
  }, []);

  // Close results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest(".search-container")) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-container relative">
      <form onSubmit={handleSubmit} {...props}>
        <SidebarGroup className="py-2 px-2">
          <SidebarGroupContent className="relative group">
            <Label htmlFor="search" className="sr-only">
              Search Jokers69 Studio Portfolio
            </Label>
            <SidebarInput
              id="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="🎭 Search projects, skills, creativity..."
              className="pl-10 pr-10 bg-gradient-to-r from-sidebar-accent/40 to-sidebar-accent/60 border-sidebar-border/50 hover:border-sidebar-border hover:from-sidebar-accent/60 hover:to-sidebar-accent/80 focus:from-sidebar-accent/70 focus:to-sidebar-accent/90 focus:border-sidebar-primary/50 focus:ring-2 focus:ring-sidebar-primary/20 transition-all duration-300 rounded-lg shadow-sm hover:shadow-md placeholder:text-sidebar-foreground/50 placeholder:font-medium"
            />
            <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-sidebar-foreground/60 group-hover:text-sidebar-foreground/80 transition-colors duration-200 select-none" />

            {searchQuery && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearSearch}
                className="absolute top-1/2 right-2 -translate-y-1/2 h-6 w-6 p-0 hover:bg-sidebar-accent/50"
              >
                <X className="h-3 w-3" />
              </Button>
            )}

            {isSearching && (
              <Sparkles className="pointer-events-none absolute top-1/2 right-3 size-3 -translate-y-1/2 text-sidebar-primary/60 animate-pulse select-none" />
            )}
          </SidebarGroupContent>
        </SidebarGroup>
      </form>

      {/* Search Results */}
      {showResults && (
        <div className="absolute top-full left-0 right-0 z-50 mt-1 bg-background border border-border rounded-lg shadow-lg max-h-64 overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="p-2">
              {searchResults.map((result, index) => (
                <button
                  key={`${result.title}-${index}`}
                  onClick={() => handleResultClick(result.url)}
                  className="w-full text-left p-2 hover:bg-accent hover:text-accent-foreground rounded-md transition-colors duration-200 flex items-center justify-between group"
                >
                  <div className="flex flex-col">
                    <span className="font-medium text-sm">{result.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {result.category}
                    </span>
                  </div>
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>
          ) : searchQuery.trim() !== "" ? (
            <div className="p-4 text-center text-muted-foreground">
              <p className="text-sm">
                No results found for &quot;{searchQuery}&quot;
              </p>
              <p className="text-xs mt-1">Try different keywords</p>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
});
