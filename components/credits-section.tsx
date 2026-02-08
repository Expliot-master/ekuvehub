"use client";

import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";

export function CreditsSection() {
  return (
    <section id="credits" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">Credits</span>
        </h2>

        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:items-start">
          <TiltCard className="rounded-xl w-full max-w-md" tiltAmount={8}>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-primary/30 rounded-full blur-md" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                    <Image
                      src="/images/ekuve-profile.webp"
                      alt="ekuve profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Developer / Owner
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">ekuve</h3>
                </div>
              </div>
            </div>
          </TiltCard>

          <TiltCard className="rounded-xl w-full max-w-md" tiltAmount={8}>
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <div className="absolute -inset-1 bg-primary/30 rounded-full blur-md" />
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-primary">
                    <Image
                      src="/images/hexa-profile.webp"
                      alt="Hexa profile"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="text-center">
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    Website Dev / Bot Dev
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mt-1">Hexa</h3>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
