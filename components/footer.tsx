"use client";

import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">
              <span className="text-primary">Ekuve</span>
              <span className="text-foreground"> Hub</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Premium Roblox Script Hub
            </p>
          </div>

          <Button variant="outline" className="gap-2 bg-transparent" asChild>
            <a href="https://discord.gg/Ekuve" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Discord.gg/Ekuve
            </a>
          </Button>
        </div>

        <div className="mt-8 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Ekuve Hub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
