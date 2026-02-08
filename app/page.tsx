"use client";

import { useState, useEffect } from "react";
import { HeroSection } from "@/components/hero-section";
import { KeySystemSection } from "@/components/key-system-section";
import { PremiumSection } from "@/components/premium-section";
import { GamesSection } from "@/components/games-section";
import { CreditsSection } from "@/components/credits-section";
import { Footer } from "@/components/footer";
import { ParallaxBackground } from "@/components/parallax-background";
import { CustomCursor } from "@/components/custom-cursor";
import { Navbar } from "@/components/navbar";

const accentMap: Record<string, { primary: string; accent: string; ring: string }> = {
  crimson: {
    primary: "oklch(0.55 0.22 25)",
    accent: "oklch(0.55 0.22 25)",
    ring: "oklch(0.55 0.22 25)",
  },
  emerald: {
    primary: "oklch(0.55 0.18 155)",
    accent: "oklch(0.55 0.18 155)",
    ring: "oklch(0.55 0.18 155)",
  },
  sapphire: {
    primary: "oklch(0.55 0.18 250)",
    accent: "oklch(0.55 0.18 250)",
    ring: "oklch(0.55 0.18 250)",
  },
  amber: {
    primary: "oklch(0.65 0.18 75)",
    accent: "oklch(0.65 0.18 75)",
    ring: "oklch(0.65 0.18 75)",
  },
  violet: {
    primary: "oklch(0.55 0.2 300)",
    accent: "oklch(0.55 0.2 300)",
    ring: "oklch(0.55 0.2 300)",
  },
};

export default function Home() {
  const [cursorEnabled, setCursorEnabled] = useState(true);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [accentColor, setAccentColor] = useState("crimson");

  // Load saved preferences
  useEffect(() => {
    try {
      const saved = localStorage.getItem("ekuve-settings");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (typeof parsed.cursor === "boolean") setCursorEnabled(parsed.cursor);
        if (typeof parsed.particles === "boolean") setParticlesEnabled(parsed.particles);
        if (typeof parsed.accent === "string" && accentMap[parsed.accent]) setAccentColor(parsed.accent);
      }
    } catch {
      // ignore
    }
  }, []);

  // Save preferences
  useEffect(() => {
    try {
      localStorage.setItem(
        "ekuve-settings",
        JSON.stringify({ cursor: cursorEnabled, particles: particlesEnabled, accent: accentColor })
      );
    } catch {
      // ignore
    }
  }, [cursorEnabled, particlesEnabled, accentColor]);

  // Apply accent color CSS variables
  useEffect(() => {
    const colors = accentMap[accentColor];
    if (!colors) return;
    const root = document.documentElement;
    root.style.setProperty("--primary", colors.primary);
    root.style.setProperty("--accent", colors.accent);
    root.style.setProperty("--ring", colors.ring);
    root.style.setProperty("--destructive", colors.primary);
    root.style.setProperty("--chart-1", colors.primary);
    root.style.setProperty("--sidebar-primary", colors.primary);
    root.style.setProperty("--sidebar-ring", colors.ring);
  }, [accentColor]);

  return (
    <main className="min-h-screen bg-transparent relative">
      {particlesEnabled && <ParallaxBackground />}
      {cursorEnabled && <CustomCursor />}
      <div className="relative z-20">
        <Navbar
          cursorEnabled={cursorEnabled}
          onCursorToggle={setCursorEnabled}
          particlesEnabled={particlesEnabled}
          onParticlesToggle={setParticlesEnabled}
          accentColor={accentColor}
          onAccentChange={setAccentColor}
        />
        <HeroSection />
        <PremiumSection />
        <KeySystemSection />
        <GamesSection />
        <CreditsSection />
        <Footer />
      </div>
    </main>
  );
}
