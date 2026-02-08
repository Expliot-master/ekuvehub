"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            <span className="text-primary">Ekuve</span>
            <span className="text-foreground"> Hub</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            This is one of the best Roblox scripts, and it's better than Ronix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-2" asChild>
              <a href="https://discord.gg/Ekuve" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Join Discord
              </a>
            </Button>
            <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
              <a href="#keys">
                Get Key
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
