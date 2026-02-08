"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import { Gamepad2 } from "lucide-react";

const supportedGames = [
  "Escape Tsunami For Brainrots",
  "BIG PAINTBALL 2",
  "RIVALS",
  "Murderers VS Sheriffs",
  "[Duel] Murderers VS Sheriffs",
  "99 Nights In the Forest",
  "ARSENAL",
  "Build A Boat for Treasure",
];

export function GamesSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">Supported</span> Games
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ekuve Hub currently supports these popular Roblox games.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {supportedGames.map((game) => (
            <TiltCard key={game} className="rounded-xl">
              <Card className="group hover:border-primary/50 transition-all duration-300 cursor-pointer h-full">
                <CardContent className="p-4 flex items-center gap-3">
                  <Gamepad2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{game}</span>
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
