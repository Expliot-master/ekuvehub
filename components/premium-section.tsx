"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TiltCard } from "@/components/ui/tilt-card";
import {
  Crown,
  CreditCard,
  Bitcoin,
  ExternalLink,
  Globe,
  Sparkles,
  Zap,
  Shield,
  Check,
  Star,
} from "lucide-react";

const paymentMethods = {
  direct: ["PayPal (F&F)", "Cash App"],
  crypto: ["LTC", "BTC"],
};

const purchaseLinks = [
  {
    name: "Buy on Website",
    url: "https://ekuve.mysellauth.com/",
    icon: Globe,
    highlight: true,
  },
  {
    name: "Buy with Robux",
    url: "https://www.roblox.com/game-pass/1684678929/Premium",
    icon: CreditCard,
    highlight: false,
  },
];

const premiumFeatures = [
  { icon: Zap, text: "OP Features" },
  { icon: Sparkles, text: "No more annoying key system" },
  { icon: Shield, text: "24/7 Working" },
];

export function PremiumSection() {
  const [sparkles, setSparkles] = useState<
    { id: number; x: number; y: number; delay: number }[]
  >([]);

  useEffect(() => {
    // Generate sparkle positions
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 3,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <section id="premium" className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-amber-500/10 to-yellow-500/5" />

      {/* Animated sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle) => (
          <div
            key={sparkle.id}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
            style={{
              left: `${sparkle.x}%`,
              top: `${sparkle.y}%`,
              animationDelay: `${sparkle.delay}s`,
              boxShadow: "0 0 10px 2px rgba(234, 179, 8, 0.6)",
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500/20 via-amber-400/30 to-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 text-yellow-400 px-6 py-3 rounded-full mb-6 shadow-lg shadow-yellow-500/20">
            <Crown className="w-5 h-5 animate-bounce" />
            <span className="font-bold tracking-wide">PREMIUM ACCESS</span>
            <Crown className="w-5 h-5 animate-bounce" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
            {"Purchase Premuim"}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get access to all super amazing premium features.{" "}
            <span className="text-yellow-400 font-semibold">No more keys.</span>{" "}
            No more waiting.
          </p>
        </div>

        {/* Main Premium Card */}
        <div className="max-w-5xl mx-auto pt-6">
          <TiltCard className="rounded-xl overflow-visible" tiltAmount={5} scale={1.01}>
            <Card className="relative overflow-visible border-2 border-yellow-500/40 bg-gradient-to-br from-black/80 via-yellow-950/20 to-black/80 backdrop-blur-xl shadow-2xl shadow-yellow-500/20">
              {/* Premium badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 text-black px-8 py-2 rounded-full font-bold text-sm tracking-wider shadow-lg shadow-yellow-500/50 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  <span>WORTH IT!!!!</span>
                  <Sparkles className="w-4 h-4" />
                </div>
              </div>

              <CardContent className="p-8 pt-12">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Features */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-400 mb-2 flex items-center gap-2">
                        <Crown className="w-6 h-6" />
                        Premium Benefits
                      </h3>
                      <p className="text-muted-foreground">
                        Everything you need to exploit
                      </p>
                    </div>

                    <div className="space-y-4">
                      {premiumFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/30 transition-all hover:bg-yellow-500/10 group"
                        >
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <feature.icon className="w-5 h-5 text-yellow-400" />
                          </div>
                          <span className="font-medium text-foreground">
                            {feature.text}
                          </span>
                          <Check className="w-5 h-5 text-green-400 ml-auto" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Purchase */}
                  <div className="space-y-6">
                    {/* Price Display */}
                    <div className="text-center p-6 rounded-2xl bg-gradient-to-b from-yellow-500/10 to-transparent border border-yellow-500/20">
                      <p className="text-muted-foreground mb-2">
                        One-time payment
                      </p>
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-5xl font-black bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text text-transparent">
                          LIFETIME
                        </span>
                      </div>
                      <p className="text-yellow-400 mt-2 font-medium">
                        Access Forever
                      </p>
                    </div>

                    {/* Purchase Buttons */}
                    <div className="space-y-3">
                      {purchaseLinks.map((link) => (
                        <Button
                          key={link.name}
                          className={`w-full h-14 text-lg font-bold gap-3 transition-all ${
                            link.highlight
                              ? "bg-gradient-to-r from-yellow-500 via-amber-400 to-yellow-500 hover:from-yellow-400 hover:via-amber-300 hover:to-yellow-400 text-black shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 hover:scale-[1.02]"
                              : "bg-secondary/50 hover:bg-secondary border border-yellow-500/30 hover:border-yellow-500/50"
                          }`}
                          onClick={() =>
                            window.open(link.url, "_blank", "noopener,noreferrer")
                          }
                        >
                          <link.icon className="w-5 h-5" />
                          {link.name}
                          <ExternalLink className="w-4 h-4 ml-auto opacity-50" />
                        </Button>
                      ))}
                    </div>

                    {/* Payment Methods */}
                    <div className="p-4 rounded-xl bg-secondary/30 border border-border/50">
                      <div className="flex items-center gap-2 mb-3">
                        <CreditCard className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                          Payment Methods
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {paymentMethods.direct.map((method) => (
                          <span
                            key={method}
                            className="bg-background/50 px-3 py-1.5 rounded-full text-xs text-foreground border border-border/50"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2 mt-3 mb-2">
                        <Bitcoin className="w-4 h-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">
                          Crypto
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {paymentMethods.crypto.map((method) => (
                          <span
                            key={method}
                            className="bg-background/50 px-3 py-1.5 rounded-full text-xs text-foreground border border-border/50"
                          >
                            {method}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs text-center text-muted-foreground">
                      After purchase, create a ticket in our{" "}
                      <span className="text-yellow-400">Discord server</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TiltCard>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 text-muted-foreground">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm">Secure Payment</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">Instant Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm">24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}
