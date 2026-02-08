"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";

interface SettingsPopupProps {
  open: boolean;
  onClose: () => void;
  cursorEnabled: boolean;
  onCursorToggle: (enabled: boolean) => void;
  particlesEnabled: boolean;
  onParticlesToggle: (enabled: boolean) => void;
  accentColor: string;
  onAccentChange: (color: string) => void;
}

const accentColors = [
  { name: "Crimson", value: "crimson", hue: "oklch(0.55 0.22 25)" },
  { name: "Emerald", value: "emerald", hue: "oklch(0.55 0.18 155)" },
  { name: "Sapphire", value: "sapphire", hue: "oklch(0.55 0.18 250)" },
  { name: "Amber", value: "amber", hue: "oklch(0.65 0.18 75)" },
  { name: "Violet", value: "violet", hue: "oklch(0.55 0.2 300)" },
];

function ToggleSwitch({
  enabled,
  onToggle,
  id,
}: {
  enabled: boolean;
  onToggle: (v: boolean) => void;
  id: string;
}) {
  return (
    <button
      id={id}
      role="switch"
      aria-checked={enabled}
      onClick={() => onToggle(!enabled)}
      className={`relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border-2 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
        enabled
          ? "border-primary bg-primary/20"
          : "border-border bg-secondary"
      }`}
    >
      <span
        className={`pointer-events-none block h-5 w-5 rounded-full shadow-lg transition-transform duration-200 ${
          enabled
            ? "translate-x-5 bg-primary"
            : "translate-x-0.5 bg-muted-foreground"
        }`}
      />
    </button>
  );
}

export function SettingsPopup({
  open,
  onClose,
  cursorEnabled,
  onCursorToggle,
  particlesEnabled,
  onParticlesToggle,
  accentColor,
  onAccentChange,
}: SettingsPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Settings"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm animate-in fade-in duration-200" />

      {/* Popup */}
      <div
        ref={popupRef}
        className="relative w-full max-w-md animate-in fade-in slide-in-from-top-4 duration-300 ease-out"
      >
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-2xl shadow-primary/5">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/40 px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
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
              </div>
              <h2 className="text-lg font-semibold text-foreground">
                Settings
              </h2>
            </div>
            <button
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              aria-label="Close settings"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-1 p-4">
            {/* Accent Color */}
            <div className="rounded-xl bg-secondary/30 p-4">
              <h3 className="mb-1 text-sm font-medium text-foreground">
                Accent Color
              </h3>
              <p className="mb-3 text-xs text-muted-foreground">
                Choose your preferred theme color
              </p>
              <div className="flex flex-wrap gap-2">
                {accentColors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => onAccentChange(color.value)}
                    className={`flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-medium transition-all duration-200 ${
                      accentColor === color.value
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border/50 bg-secondary/50 text-muted-foreground hover:border-border hover:text-foreground"
                    }`}
                    aria-label={`Set accent color to ${color.name}`}
                    aria-pressed={accentColor === color.value}
                  >
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{ background: color.hue }}
                    />
                    {color.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Cursor */}
            <div className="flex items-center justify-between rounded-xl bg-secondary/30 p-4">
              <div className="flex-1">
                <label
                  htmlFor="cursor-toggle"
                  className="text-sm font-medium text-foreground"
                >
                  Custom Cursor
                </label>
                <p className="text-xs text-muted-foreground">
                  Animated glow cursor effect
                </p>
              </div>
              <ToggleSwitch
                id="cursor-toggle"
                enabled={cursorEnabled}
                onToggle={onCursorToggle}
              />
            </div>

            {/* Particles */}
            <div className="flex items-center justify-between rounded-xl bg-secondary/30 p-4">
              <div className="flex-1">
                <label
                  htmlFor="particles-toggle"
                  className="text-sm font-medium text-foreground"
                >
                  Particle Background
                </label>
                <p className="text-xs text-muted-foreground">
                  Interactive network animation
                </p>
              </div>
              <ToggleSwitch
                id="particles-toggle"
                enabled={particlesEnabled}
                onToggle={onParticlesToggle}
              />
            </div>

            {/* Reduced Motion */}
            <div className="rounded-xl bg-secondary/30 p-4">
              <h3 className="mb-1 text-sm font-medium text-foreground">
                About
              </h3>
              <p className="text-xs text-muted-foreground">
                Ekuve Hub v2.0 - Preferences are saved locally in your browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
