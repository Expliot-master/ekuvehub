"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SettingsPopup } from "@/components/settings-popup";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Get Key", href: "#key-system" },
  { name: "Premium", href: "#premium" },
  { name: "Credits", href: "#credits" },
];

interface NavbarProps {
  cursorEnabled: boolean;
  onCursorToggle: (enabled: boolean) => void;
  particlesEnabled: boolean;
  onParticlesToggle: (enabled: boolean) => void;
  accentColor: string;
  onAccentChange: (color: string) => void;
}

export function Navbar({
  cursorEnabled,
  onCursorToggle,
  particlesEnabled,
  onParticlesToggle,
  accentColor,
  onAccentChange,
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl font-black tracking-wide">
              <span className="text-primary">EKUVE</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2">
            {/* Discord */}
            <a
              href="https://discord.gg/Ekuve"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary"
              aria-label="Join Discord"
            >
              <svg
                width="16"
                height="12"
                viewBox="0 0 71 55"
                fill="currentColor"
              >
                <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.504 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9056 44.6363 54.2778 44.9293 54.6528 45.2082C54.7815 45.304 54.7731 45.504 54.6332 45.5858C52.8645 46.6197 51.0258 47.4931 49.0876 48.2228C48.9617 48.2707 48.9057 48.4172 48.9673 48.5383C50.0252 50.6034 51.2426 52.5699 52.5765 54.435C52.6369 54.5139 52.7348 54.5477 52.8272 54.5195C58.6368 52.7249 64.5196 50.0174 70.5765 45.5576C70.6297 45.5182 70.6632 45.459 70.6688 45.3942C72.1546 30.0791 68.1605 16.7757 60.1871 4.9823C60.1676 4.9429 60.1437 4.9147 60.1045 4.8978Z" />
              </svg>
            </a>

            {/* Settings Button */}
            <button
              onClick={() => setSettingsOpen(true)}
              className={`flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary ${
                settingsOpen ? "border-primary/50 bg-primary/10 text-primary" : ""
              }`}
              aria-label="Open settings"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/50 bg-secondary/50 text-muted-foreground transition-colors hover:border-primary/50 hover:bg-primary/10 hover:text-primary md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl md:hidden">
            <div className="container mx-auto flex flex-col gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Settings Popup */}
      <SettingsPopup
        open={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        cursorEnabled={cursorEnabled}
        onCursorToggle={onCursorToggle}
        particlesEnabled={particlesEnabled}
        onParticlesToggle={onParticlesToggle}
        accentColor={accentColor}
        onAccentChange={onAccentChange}
      />
    </>
  );
}
