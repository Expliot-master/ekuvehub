"use client";

import Image from "next/image";
import { TiltCard } from "@/components/ui/tilt-card";

const teamMembers = [
  {
    name: "ekuve",
    role: "Developer / Owner",
    image:
      "https://i.ibb.co/wNdqFCLt/ba3b6954a99f935aff18e4932fd8b6ea.png",
  },
  {
    name: "wr4o",
    role: "Co-Owner / Community Manager",
    image:
      "https://i.ibb.co/TqTB4RFw/a8db4d9031f15077a0cdf1360118a7bb.png",
  },
  {
    name: "Hexa",
    role: "Website Dev / Bot Dev",
    image:
      "https://i.ibb.co/1JsqyMqs/5f490279beac66bc763ec64012d55c7e-1.webp",
  },
];

export function CreditsSection() {
  return (
    <section id="credits" className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className="text-primary">Credits</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <TiltCard
              key={member.name}
              className="rounded-xl"
              tiltAmount={8}
            >
              <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
                <div className="flex flex-col items-center gap-5">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary/30 rounded-full blur-md" />
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-primary">
                      <Image
                        src={member.image}
                        alt={`${member.name} profile`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <span className="text-xs sm:text-sm font-medium text-primary uppercase tracking-wider">
                      {member.role}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-1">
                      {member.name}
                    </h3>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
