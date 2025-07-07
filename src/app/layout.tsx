import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/providers/theme-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jokers69 Studio - Where Creativity Meets Innovation",
  description:
    "Jokers69 Studio is your go-to hub for software development, creative projects, and collaboration. Crafting sleek, functional, and cutting-edge applications.",
  keywords:
    "software development, creative projects, web development, innovation",
  authors: [{ name: "Jokers69 Studio" }],
  openGraph: {
    title: "Jokers69 Studio",
    description: "Where Creativity Meets Innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-poppins min-h-screen`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
