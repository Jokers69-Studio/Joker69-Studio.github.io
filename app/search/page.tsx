"use client";

import { useState, useEffect, useCallback } from "react";
import { Search, Sparkles, ArrowRight, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/components/footer";
import Link from "next/link";

// Comprehensive search data
const searchData = [
  // Studio pages
  {
    title: "About Studio",
    url: "/about",
    category: "Studio",
    description: "Learn about our studio's mission and values",
    tags: ["about", "studio", "mission"],
  },
  {
    title: "Our Story",
    url: "/about",
    category: "Studio",
    description: "Discover the creative journey behind Jokers69 Studio",
    tags: ["story", "journey", "creative"],
  },

  // Skills and capabilities
  {
    title: "Capabilities",
    url: "/skills",
    category: "Skills",
    description: "Explore our comprehensive technology stack and expertise",
    tags: ["skills", "technology", "expertise"],
  },
  {
    title: "React Development",
    url: "/skills",
    category: "Skills",
    description: "Modern React applications with TypeScript",
    tags: ["react", "typescript", "frontend"],
  },
  {
    title: "Node.js Backend",
    url: "/skills",
    category: "Skills",
    description: "Server-side development with Node.js and Express",
    tags: ["nodejs", "backend", "express"],
  },
  {
    title: "UI/UX Design",
    url: "/skills",
    category: "Skills",
    description: "User interface and experience design",
    tags: ["ui", "ux", "design"],
  },
  {
    title: "Animation",
    url: "/skills",
    category: "Skills",
    description: "Creative animations and micro-interactions",
    tags: ["animation", "creative", "interactions"],
  },
  {
    title: "TypeScript",
    url: "/skills",
    category: "Skills",
    description: "Type-safe JavaScript development",
    tags: ["typescript", "javascript", "development"],
  },

  // Projects and work
  {
    title: "Projects",
    url: "/projects",
    category: "Work",
    description: "View our latest projects and successful collaborations",
    tags: ["projects", "portfolio", "work"],
  },
  {
    title: "JokerCard API",
    url: "/projects",
    category: "Work",
    description: "A playful, fast API for managing card games",
    tags: ["api", "games", "nodejs"],
  },
  {
    title: "CodeJoker CLI",
    url: "/projects",
    category: "Work",
    description: "A command-line tool to boost productivity",
    tags: ["cli", "productivity", "python"],
  },
  {
    title: "JokerSphere",
    url: "/projects",
    category: "Work",
    description: "A social platform for sharing ideas",
    tags: ["social", "platform", "react"],
  },

  // Services
  {
    title: "Services",
    url: "/services",
    category: "Services",
    description: "Comprehensive digital solutions and services",
    tags: ["services", "solutions", "digital"],
  },
  {
    title: "Upcoming Services",
    url: "/upcoming-services",
    category: "Services",
    description: "Exciting new services coming soon - AI, Blockchain, and more",
    tags: ["upcoming", "ai", "blockchain", "future"],
  },
  {
    title: "Software Development",
    url: "/services",
    category: "Services",
    description: "Custom software solutions and applications",
    tags: ["development", "software", "custom"],
  },
  {
    title: "Creative Projects",
    url: "/services",
    category: "Services",
    description: "Bringing ideas to life through dynamic design",
    tags: ["creative", "design", "ideas"],
  },
  {
    title: "Collaboration",
    url: "/services",
    category: "Services",
    description: "Partnering with developers and innovators",
    tags: ["collaboration", "partnership", "innovation"],
  },

  // Contact
  {
    title: "Contact Us",
    url: "/contact",
    category: "Contact",
    description: "Get in touch for collaborations and projects",
    tags: ["contact", "collaboration", "projects"],
  },
];

const categories = ["All", "Studio", "Skills", "Work", "Services", "Contact"];

export default function SearchPage() {
  // Initialize recentSearches from localStorage using lazy initialization
  const [recentSearches, setRecentSearches] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("recentSearches");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Initialize searchQuery from URL parameter using lazy initialization
  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get("q") || "";
    }
    return "";
  });

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const [isSearching, setIsSearching] = useState(false);

  // Handle initial search if query exists in URL
  useEffect(() => {
    if (searchQuery) {
      handleSearch(searchQuery, selectedCategory);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run once on mount

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query, selectedCategory);
  };

  // Handle category filter
  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    handleSearch(searchQuery, category);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setSelectedCategory("All");
  };

  // Handle search
  const handleSearch = useCallback(
    (query: string, category: string = "All") => {
      setSearchQuery(query);
      setSelectedCategory(category);

      if (!query.trim()) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      setIsSearching(true);

      // Save to recent searches
      if (query.trim()) {
        const currentRecent = JSON.parse(
          localStorage.getItem("recentSearches") || "[]"
        );
        const updated = [
          query,
          ...currentRecent.filter((s: string) => s !== query),
        ].slice(0, 5);
        setRecentSearches(updated);
        localStorage.setItem("recentSearches", JSON.stringify(updated));
      }

      // Simulate search delay
      setTimeout(() => {
        const filtered = searchData.filter((item) => {
          const matchesQuery =
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase()) ||
            item.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            );

          const matchesCategory =
            category === "All" || item.category === category;

          return matchesQuery && matchesCategory;
        });

        setSearchResults(filtered);
        setIsSearching(false);
      }, 300);
    },
    []
  );

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
                <BreadcrumbPage>Search</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 p-6">
          {/* Search Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              🔍 Search Jokers69 Studio
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find projects, skills, services, and everything about our creative
              studio
            </p>
          </div>

          {/* Search Input */}
          <div className="max-w-2xl mx-auto w-full">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="text"
                placeholder="Search for projects, skills, services..."
                value={searchQuery}
                onChange={handleInputChange}
                className="pl-10 pr-10 h-12 text-lg"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearSearch}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              {isSearching && (
                <Sparkles className="absolute right-10 top-1/2 transform -translate-y-1/2 text-primary animate-pulse h-4 w-4" />
              )}
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryFilter(category)}
                className="transition-all duration-200"
              >
                <Filter className="h-3 w-3 mr-1" />
                {category}
              </Button>
            ))}
          </div>

          {/* Recent Searches */}
          {!searchQuery && recentSearches.length > 0 && (
            <div className="max-w-2xl mx-auto w-full">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Recent searches:
              </h3>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((search, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleSearch(search)}
                    className="text-xs"
                  >
                    {search}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Search Results */}
          {searchQuery && (
            <div className="max-w-4xl mx-auto w-full">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">
                  {isSearching
                    ? "Searching..."
                    : `${searchResults.length} results found`}
                </h2>
                {searchResults.length > 0 && (
                  <Badge variant="secondary">
                    {selectedCategory === "All"
                      ? "All Categories"
                      : selectedCategory}
                  </Badge>
                )}
              </div>

              {searchResults.length > 0 ? (
                <div className="grid gap-4">
                  {searchResults.map((result, index) => (
                    <Card
                      key={`${result.title}-${index}`}
                      className="hover:shadow-md transition-shadow duration-200"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">
                              <Link
                                href={result.url}
                                className="hover:text-primary transition-colors duration-200"
                              >
                                {result.title}
                              </Link>
                            </CardTitle>
                            <p className="text-muted-foreground text-sm mb-3">
                              {result.description}
                            </p>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline" className="text-xs">
                                {result.category}
                              </Badge>
                              {result.tags.slice(0, 3).map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="secondary"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <Button
                            asChild
                            size="sm"
                            variant="ghost"
                            className="ml-4"
                          >
                            <Link href={result.url}>
                              <ArrowRight className="h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              ) : !isSearching ? (
                <Card className="text-center py-12">
                  <CardContent>
                    <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold mb-2">
                      No results found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      No results found for &quot;{searchQuery}&quot; in{" "}
                      {selectedCategory === "All"
                        ? "all categories"
                        : selectedCategory}
                    </p>
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">Try:</p>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Using different keywords</li>
                        <li>• Checking your spelling</li>
                        <li>• Selecting a different category</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ) : null}
            </div>
          )}

          {/* Popular Searches */}
          {!searchQuery && (
            <div className="max-w-2xl mx-auto w-full">
              <h3 className="text-sm font-medium text-muted-foreground mb-4 text-center">
                Popular searches:
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {["React", "Projects", "Services", "Skills", "About"].map(
                  (term) => (
                    <Button
                      key={term}
                      variant="outline"
                      size="sm"
                      onClick={() => handleSearch(term)}
                      className="text-sm"
                    >
                      {term}
                    </Button>
                  )
                )}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
}
