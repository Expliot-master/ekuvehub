"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import {
  Search,
  Home,
  RefreshCw,
  Minus,
  Maximize2,
  X,
  Expand,
} from "lucide-react";
import Image from "next/image";

export function ScriptSection() {
  const [activeTab, setActiveTab] = useState<"main" | "auto">("main");
  const [isExpanded, setIsExpanded] = useState(false);
  const [instantPrompt, setInstantPrompt] = useState(false);
  const [walkSpeed, setWalkSpeed] = useState(33);
  const [jumpPower, setJumpPower] = useState(50);
  const [gravity, setGravity] = useState(196);
  const [infiniteJump, setInfiniteJump] = useState(true);
  const [fly, setFly] = useState(false);
  const [autoSellInventory, setAutoSellInventory] = useState(false);
  const [autoCollect, setAutoCollect] = useState(false);

  const resetValues = () => {
    setWalkSpeed(16);
    setJumpPower(50);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Free</span> Script Preview
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Preview of the Ekuve Script Hub free features.
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="gap-2"
          >
            <Expand className="w-4 h-4" />
            {isExpanded ? "Collapse Preview" : "Expand Preview"}
          </Button>
        </div>

        <Card className={`max-w-4xl mx-auto overflow-hidden border-border/50 shadow-2xl transition-all duration-300 ${!isExpanded && "max-h-[200px]"}`}>
          {/* Window Header */}
          <div className="flex items-center justify-between bg-[#1a1a2e] px-4 py-3 border-b border-border/30">
            <div className="flex items-center gap-3">
              <Image
                src="/images/ekuve-profile.webp"
                alt="Ekuve Hub"
                width={24}
                height={24}
                className="rounded"
              />
              <span className="text-sm font-medium text-foreground">
                Escape Tsunami For Brainrots!
              </span>
              <span className="text-xs text-muted-foreground">by ekuve</span>
            </div>
            <div className="flex items-center gap-3">
              <Button
                size="sm"
                className="bg-[#5865F2] hover:bg-[#4752c4] text-white text-xs gap-2 h-7 px-3"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 71 55"
                  fill="currentColor"
                >
                  <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.8371 44.6363 54.2093 44.9293 54.5843 45.2082C54.7130 45.304 54.7046 45.5041 54.5765 45.5858C52.7977 46.6197 50.959 47.4931 49.0193 48.2228C48.8934 48.2707 48.8374 48.4172 48.899 48.5383C49.9569 50.6034 51.1743 52.5699 52.5161 54.4378C52.5765 54.5139 52.6744 54.5477 52.7668 54.5195C58.5765 52.7249 64.4592 50.0174 70.5765 45.5576C70.6297 45.5182 70.6632 45.4590 70.6688 45.3942C72.1546 30.0791 68.1605 16.7757 60.1871 4.9823C60.1676 4.9429 60.1437 4.9147 60.1045 4.8978Z" />
                </svg>
                .gg/ekuve
              </Button>
              <div className="flex items-center gap-1">
                <button className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors">
                  <Minus className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-secondary rounded text-muted-foreground hover:text-foreground transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-destructive/80 rounded text-muted-foreground hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {isExpanded && (
            <div className="flex min-h-[400px]">
              {/* Sidebar */}
              <div className="w-48 bg-[#12121f] border-r border-border/30 flex flex-col">
                {/* Search */}
                <div className="p-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search"
                      className="pl-9 bg-secondary/50 border-border/30 h-9 text-sm"
                    />
                  </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 p-2 space-y-1">
                  <button
                    onClick={() => setActiveTab("main")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === "main"
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    Main
                  </button>
                  <button
                    onClick={() => setActiveTab("auto")}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      activeTab === "auto"
                        ? "bg-primary/20 text-primary"
                        : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                    }`}
                  >
                    <RefreshCw className="w-4 h-4" />
                    Auto
                  </button>
                </nav>

                {/* Profile */}
                <div className="p-3 border-t border-border/30">
                  <div className="flex items-center gap-2">
                    <Image
                      src="/images/ekuve-profile.webp"
                      alt="ekuvescripthub"
                      width={36}
                      height={36}
                      className="rounded-full"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        ekuvescripthub
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        ekuvescripthub
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-[#0d0d1a] p-6">
                {activeTab === "main" && (
                  <div className="space-y-5">
                    {/* Instant Prompt */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        Instant Prompt
                      </span>
                      <Switch
                        checked={instantPrompt}
                        onCheckedChange={setInstantPrompt}
                      />
                    </div>

                    {/* WalkSpeed */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          WalkSpeed
                        </span>
                        <span className="text-sm text-muted-foreground w-12 text-right">
                          {walkSpeed}
                        </span>
                      </div>
                      <Slider
                        value={[walkSpeed]}
                        onValueChange={(v) => setWalkSpeed(v[0])}
                        max={500}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* JumpPower */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          JumpPower
                        </span>
                        <span className="text-sm text-muted-foreground w-12 text-right">
                          {jumpPower}
                        </span>
                      </div>
                      <Slider
                        value={[jumpPower]}
                        onValueChange={(v) => setJumpPower(v[0])}
                        max={500}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Gravity */}
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">
                          Gravity
                        </span>
                        <span className="text-sm text-muted-foreground w-12 text-right">
                          {gravity}
                        </span>
                      </div>
                      <Slider
                        value={[gravity]}
                        onValueChange={(v) => setGravity(v[0])}
                        max={500}
                        step={1}
                        className="w-full"
                      />
                    </div>

                    {/* Reset */}
                    <button
                      onClick={resetValues}
                      className="w-full text-left group"
                    >
                      <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                        Reset
                      </span>
                      <p className="text-xs text-primary/70">
                        Reset WalkSpeed and JumpPower
                      </p>
                    </button>

                    {/* Infinite Jump */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        Infinite jump
                      </span>
                      <Switch
                        checked={infiniteJump}
                        onCheckedChange={setInfiniteJump}
                      />
                    </div>

                    {/* Fly */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        Fly
                      </span>
                      <Switch checked={fly} onCheckedChange={setFly} />
                    </div>
                  </div>
                )}

                {activeTab === "auto" && (
                  <div className="space-y-5">
                    {/* Auto Sell Inventory */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          Auto Sell Inventory
                        </span>
                        <p className="text-xs text-muted-foreground">
                          Sell everything except brainrots which are auto bringed
                        </p>
                      </div>
                      <Switch
                        checked={autoSellInventory}
                        onCheckedChange={setAutoSellInventory}
                      />
                    </div>

                    {/* Auto Collect Brainrots */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">
                        Auto Collect Brainrots
                      </span>
                      <Switch
                        checked={autoCollect}
                        onCheckedChange={setAutoCollect}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {!isExpanded && (
            <div className="bg-[#0d0d1a] p-6 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Click "Expand Preview" to see the full interface</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
