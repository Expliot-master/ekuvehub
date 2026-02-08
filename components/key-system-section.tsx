"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { Clock, Key, ExternalLink, Play, Copy, Check, Terminal } from "lucide-react";

const keyOptions = [
  {
    name: "Lootlabs",
    duration: "8h Key",
    extendable: "Extendable to 48h",
    link: "/api/redirect/lootlabs",
    tutorial: "/api/redirect/tutorial-lootlabs",
    featured: true,
  },
  {
    name: "Shrtfly",
    duration: "4h Key",
    extendable: "Extendable to 48h",
    link: "/api/redirect/shrtfly",
    tutorial: "/api/redirect/tutorial-shrtfly",
    featured: false,
  },
];

export function KeySystemSection() {
  return (
    <section id="key-system" className="py-20 bg-secondary/30 scroll-mt-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Key</span> System
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose a key system to obtain a key and redeem the script.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {keyOptions.map((option) => (
            <TiltCard key={option.name} className="rounded-xl">
              <Card 
                className={`relative overflow-hidden transition-all duration-300 hover:border-primary/50 h-full ${
                  option.featured ? "border-primary/30" : ""
                }`}
              >
                {option.featured && (
                  <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-bl-lg font-medium z-20">
                    Recommended
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Key className="w-5 h-5 text-primary" />
                    {option.name}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {option.duration} • {option.extendable}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full gap-2" asChild>
                    <a href={option.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4" />
                      Get Key
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                    <a href={option.tutorial} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4" />
                      Watch Tutorial
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>

        <div className="mt-8 text-center space-y-2">
          <p className="text-destructive font-medium">
            Bypassing the key system will result in a Ban
          </p>
          <p className="text-muted-foreground text-sm">
            If the tab does not open, please disable your adblocker and try again.
          </p>
        </div>

        <CopyScriptBlock />
      </div>
    </section>
  );
}

const SCRIPT_CODE = `loadstring(game:HttpGet("https://raw.githubusercontent.com/ekuve/ekuvehub/main/main.lua"))()`;

function CopyScriptBlock() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(SCRIPT_CODE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const textarea = document.createElement("textarea");
      textarea.value = SCRIPT_CODE;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mt-12 max-w-2xl mx-auto">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-foreground">
          <Terminal className="inline-block w-5 h-5 mr-2 text-primary" />
          Copy & paste this script into your Roblox executor
        </h3>
      </div>

      <div className="relative group">
        <div className="absolute -inset-0.5 bg-primary/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
        <div className="relative bg-card border border-border rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 bg-secondary/50 border-b border-border">
            <span className="text-xs font-mono text-muted-foreground">Lua Script</span>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
            </div>
          </div>
          <div className="p-4">
            <pre className="text-sm font-mono text-foreground/90 whitespace-pre-wrap break-all select-all">
              {SCRIPT_CODE}
            </pre>
          </div>
          <div className="px-4 pb-4">
            <Button
              onClick={handleCopy}
              className="w-full gap-2"
              variant={copied ? "outline" : "default"}
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4" />
                  Copied to Clipboard!
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  Copy Script
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
