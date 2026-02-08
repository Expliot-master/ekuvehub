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
  ChevronUp,
  ChevronDown,
  Crown,
} from "lucide-react";
import Image from "next/image";

export function PremiumPreview() {
  const [activeTab, setActiveTab] = useState<"main" | "auto">("auto");
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Main tab states
  const [instantPrompt, setInstantPrompt] = useState(false);
  const [walkSpeed, setWalkSpeed] = useState(33);
  const [jumpPower, setJumpPower] = useState(50);
  const [gravity, setGravity] = useState(196);
  const [infiniteJump, setInfiniteJump] = useState(true);
  const [fly, setFly] = useState(false);
  
  // Auto tab states
  const [autoSellInventory, setAutoSellInventory] = useState(false);
  const [autoCollectBrainrots, setAutoCollectBrainrots] = useState(false);
  const [autoRadioactiveObby, setAutoRadioactiveObby] = useState(false);
  const [hopRadioactiveObby, setHopRadioactiveObby] = useState(false);
  const [farmRadioactiveCoins, setFarmRadioactiveCoins] = useState(false);
  const [autoUpgradeBrainrots, setAutoUpgradeBrainrots] = useState(false);
  const [onlyUpgradeBest, setOnlyUpgradeBest] = useState(false);
  const [autoRebirth, setAutoRebirth] = useState(true);
  const [autoBringBrainrots, setAutoBringBrainrots] = useState(true);
  const [hopServer, setHopServer] = useState(true);
  const [saveCelestialTimer, setSaveCelestialTimer] = useState(true);
  const [celestialHopSeconds, setCelestialHopSeconds] = useState(10);
  
  // Expandable sections
  const [radioactiveExpanded, setRadioactiveExpanded] = useState(true);
  const [upgradeExpanded, setUpgradeExpanded] = useState(true);
  const [rebirthExpanded, setRebirthExpanded] = useState(true);
  const [bringExpanded, setBringExpanded] = useState(true);

  const resetValues = () => {
    setWalkSpeed(16);
    setJumpPower(50);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-yellow-500/5 to-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-500 px-4 py-2 rounded-full mb-4">
            <Crown className="w-5 h-5" />
            <span className="font-semibold">Premium Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-yellow-500">Premium</span> Script Preview
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Unlock Op Features Normal Player can&apos;t have.   
          </p>
        </div>

        <div className="flex justify-center mb-6">
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            variant="outline"
            className="gap-2 border-yellow-500/50 hover:bg-yellow-500/10"
          >
            <Expand className="w-4 h-4" />
            {isExpanded ? "Collapse Preview" : "Expand Preview"}
          </Button>
        </div>

        <Card className={`max-w-4xl mx-auto overflow-hidden border-yellow-500/30 shadow-2xl shadow-yellow-500/5 transition-all duration-300 ${!isExpanded && "max-h-[200px]"}`}>
          {/* Window Header */}
          <div className="flex items-center justify-between bg-[#1a1a2e] px-4 py-3 border-b border-yellow-500/20">
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
                className="bg-yellow-500 hover:bg-yellow-600 text-black text-xs gap-2 h-7 px-3 font-semibold"
              >
                <Crown className="w-4 h-4" />
                Premium
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
            <div className="flex min-h-[500px]">
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
                        ? "bg-yellow-500/20 text-yellow-500"
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
                        ? "bg-yellow-500/20 text-yellow-500"
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
                      className="rounded-full ring-2 ring-yellow-500/50"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        ekuvescripthub
                      </p>
                      <p className="text-xs text-yellow-500 truncate">
                        Premium User
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="flex-1 bg-[#0d0d1a] p-6 overflow-y-auto max-h-[500px]">
                {activeTab === "main" && (
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Instant Prompt</span>
                      <Switch checked={instantPrompt} onCheckedChange={setInstantPrompt} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">WalkSpeed</span>
                        <span className="text-sm text-muted-foreground w-12 text-right">{walkSpeed}</span>
                      </div>
                      <Slider value={[walkSpeed]} onValueChange={(v) => setWalkSpeed(v[0])} max={500} step={1} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">JumpPower</span>
                        <span className="text-sm text-muted-foreground w-12 text-right">{jumpPower}</span>
                      </div>
                      <Slider value={[jumpPower]} onValueChange={(v) => setJumpPower(v[0])} max={500} step={1} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Gravity</span>
                        <span className="text-sm text-muted-foreground w-12 text-right">{gravity}</span>
                      </div>
                      <Slider value={[gravity]} onValueChange={(v) => setGravity(v[0])} max={500} step={1} />
                    </div>
                    <button onClick={resetValues} className="w-full text-left group">
                      <span className="text-sm font-medium text-foreground group-hover:text-yellow-500 transition-colors">Reset</span>
                      <p className="text-xs text-yellow-500/70">Reset WalkSpeed and JumpPower</p>
                    </button>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Infinite jump</span>
                      <Switch checked={infiniteJump} onCheckedChange={setInfiniteJump} />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Fly</span>
                      <Switch checked={fly} onCheckedChange={setFly} />
                    </div>
                  </div>
                )}

                {activeTab === "auto" && (
                  <div className="space-y-4">
                    {/* Auto Sell Inventory */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-sm font-medium text-foreground">Auto Sell Inventory</span>
                        <p className="text-xs text-muted-foreground">Sell everything except brainrots which are auto bringed</p>
                      </div>
                      <Switch checked={autoSellInventory} onCheckedChange={setAutoSellInventory} />
                    </div>

                    {/* Auto Collect Brainrots */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground">Auto Collect Brainrots</span>
                      <Switch checked={autoCollectBrainrots} onCheckedChange={setAutoCollectBrainrots} />
                    </div>

                    {/* Radioactive Section */}
                    <div className="border-t border-border/30 pt-4">
                      <button 
                        onClick={() => setRadioactiveExpanded(!radioactiveExpanded)}
                        className="w-full flex items-center justify-between mb-3"
                      >
                        <span className="text-sm font-semibold text-foreground">Radioactive</span>
                        {radioactiveExpanded ? <ChevronUp className="w-4 h-4 text-yellow-500" /> : <ChevronDown className="w-4 h-4 text-yellow-500" />}
                      </button>
                      {radioactiveExpanded && (
                        <div className="space-y-3 pl-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">Auto Radioactive Obby</span>
                            <Switch checked={autoRadioactiveObby} onCheckedChange={setAutoRadioactiveObby} />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">Hop for radioactive obby (OP)</span>
                            <Switch checked={hopRadioactiveObby} onCheckedChange={setHopRadioactiveObby} />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">Farm Radioactive Coins</span>
                            <Switch checked={farmRadioactiveCoins} onCheckedChange={setFarmRadioactiveCoins} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Auto Upgrade Brainrots Section */}
                    <div className="border-t border-border/30 pt-4">
                      <button 
                        onClick={() => setUpgradeExpanded(!upgradeExpanded)}
                        className="w-full flex items-center justify-between mb-3"
                      >
                        <span className="text-sm font-semibold text-foreground">Auto Upgrade Brainrots</span>
                        {upgradeExpanded ? <ChevronUp className="w-4 h-4 text-yellow-500" /> : <ChevronDown className="w-4 h-4 text-yellow-500" />}
                      </button>
                      {upgradeExpanded && (
                        <div className="space-y-3 pl-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">Auto Upgrade Brainrots</span>
                            <Switch checked={autoUpgradeBrainrots} onCheckedChange={setAutoUpgradeBrainrots} />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">Only Upgrade Best Brainrot</span>
                            <Switch checked={onlyUpgradeBest} onCheckedChange={setOnlyUpgradeBest} />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">Only These Classes</span>
                            <div className="bg-secondary/50 px-3 py-1.5 rounded text-xs text-muted-foreground">
                              Common,...
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Auto Rebirth Section */}
                    <div className="border-t border-border/30 pt-4">
                      <button 
                        onClick={() => setRebirthExpanded(!rebirthExpanded)}
                        className="w-full flex items-center justify-between mb-3"
                      >
                        <span className="text-sm font-semibold text-foreground">Auto Rebirth</span>
                        {rebirthExpanded ? <ChevronUp className="w-4 h-4 text-yellow-500" /> : <ChevronDown className="w-4 h-4 text-yellow-500" />}
                      </button>
                      {rebirthExpanded && (
                        <div className="space-y-3 pl-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-foreground">Auto Rebirth</span>
                              <p className="text-xs text-muted-foreground">Auto upgrade speed and rebirth when possible</p>
                            </div>
                            <Switch checked={autoRebirth} onCheckedChange={setAutoRebirth} />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Auto Bring Brainrots Section */}
                    <div className="border-t border-border/30 pt-4">
                      <button 
                        onClick={() => setBringExpanded(!bringExpanded)}
                        className="w-full flex items-center justify-between mb-3"
                      >
                        <span className="text-sm font-semibold text-foreground">Auto Bring Brainrots</span>
                        {bringExpanded ? <ChevronUp className="w-4 h-4 text-yellow-500" /> : <ChevronDown className="w-4 h-4 text-yellow-500" />}
                      </button>
                      {bringExpanded && (
                        <div className="space-y-3 pl-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-foreground">Auto Bring Brainrots</span>
                              <p className="text-xs text-muted-foreground">Automatically bring better brainrots to replace worse ones (ignore level) or free slots in your base</p>
                            </div>
                            <Switch checked={autoBringBrainrots} onCheckedChange={setAutoBringBrainrots} />
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-foreground">Only These Classes</span>
                            <div className="bg-secondary/50 px-3 py-1.5 rounded text-xs text-muted-foreground">
                              Secret,...
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-foreground">Hop server</span>
                              <p className="text-xs text-muted-foreground">Hop if not better brainrots found</p>
                            </div>
                            <Switch checked={hopServer} onCheckedChange={setHopServer} />
                          </div>
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="text-sm text-foreground">Save Celestial timer</span>
                              <p className="text-xs text-muted-foreground">Save when celestial spawn in each server and when happen hop to the server</p>
                            </div>
                            <Switch checked={saveCelestialTimer} onCheckedChange={setSaveCelestialTimer} />
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <div>
                                <span className="text-sm text-foreground">Second before celestial hop</span>
                                <p className="text-xs text-muted-foreground">Adjust the time before hopping to a server with celestial spawning (depend</p>
                              </div>
                              <span className="text-sm text-muted-foreground w-12 text-right">{celestialHopSeconds}</span>
                            </div>
                            <Slider value={[celestialHopSeconds]} onValueChange={(v) => setCelestialHopSeconds(v[0])} max={60} step={1} />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {!isExpanded && (
            <div className="bg-[#0d0d1a] p-6 flex items-center justify-center">
              <p className="text-muted-foreground text-sm">Click "Expand Preview" to see all premium features</p>
            </div>
          )}
        </Card>
      </div>
    </section>
  );
}
