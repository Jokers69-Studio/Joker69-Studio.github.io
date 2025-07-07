import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About: React.FC = () => {
  return (
    <section id="home" className="relative text-center py-20 px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 via-pink-50/20 to-blue-50/40 dark:from-purple-950/15 dark:via-pink-950/8 dark:to-blue-950/15 pointer-events-none rounded-2xl" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="relative mb-16">
          <div className="relative inline-block">
            <img
              src="/assets/img/Logo-Of-TheJokerML.jpg"
              alt="Jokers69 Studio Logo"
              className="mx-auto mb-8 w-48 h-48 rounded-full border-4 border-gradient-to-r from-purple-400 to-pink-400 shadow-2xl shadow-purple-500/25 dark:shadow-purple-500/40 transition-all duration-300 hover:scale-105"
              width={192}
              height={192}
            />
            <div className="absolute -top-3 -right-3">
              <Badge
                variant="secondary"
                className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 border border-green-200 dark:border-green-700 animate-pulse px-3 py-1"
              >
                ✨ Available
              </Badge>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6 tracking-tight">
            🎭 Jokers69 Studio
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
            Where Creativity Meets Innovation
          </p>
          <p className="text-base md:text-lg text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital masterpieces through cutting-edge
            technology and creative excellence
          </p>
        </div>

        {/* Services Section */}
        <div id="about" className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent">
              🚀 What We Do
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Specializing in innovative solutions that bring your vision to
              life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group relative overflow-hidden border-2 hover:border-purple-200 dark:hover:border-purple-700 hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-500/30 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50/30 dark:from-card dark:to-purple-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/5 to-pink-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 pb-4">
                <div className="mb-4 p-3 w-fit mx-auto bg-purple-100 dark:bg-purple-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🛠</span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                  Software Development
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  Crafting sleek, functional, and cutting-edge applications with
                  modern technologies and best practices.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-2 hover:border-pink-200 dark:hover:border-pink-700 hover:shadow-2xl hover:shadow-pink-500/20 dark:hover:shadow-pink-500/30 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-pink-50/30 dark:from-card dark:to-pink-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 pb-4">
                <div className="mb-4 p-3 w-fit mx-auto bg-pink-100 dark:bg-pink-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🎨</span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                  Creative Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  Bringing ideas to life through dynamic design and innovative
                  coding solutions that captivate and engage.
                </p>
              </CardContent>
            </Card>

            <Card className="group relative overflow-hidden border-2 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-2xl hover:shadow-blue-500/20 dark:hover:shadow-blue-500/30 transition-all duration-500 hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50/30 dark:from-card dark:to-blue-950/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardHeader className="relative z-10 pb-4">
                <div className="mb-4 p-3 w-fit mx-auto bg-blue-100 dark:bg-blue-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl">🤝</span>
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  Collaboration
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-muted-foreground leading-relaxed">
                  Partnering with developers, designers, and innovators to push
                  creative boundaries and achieve excellence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
