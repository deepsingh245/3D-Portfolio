"use client";

import { Moon, SunDim } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Initialize theme state from document
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    // Check if View Transitions API is supported
    const supportsViewTransitions = "startViewTransition" in document;

    if (supportsViewTransitions) {
      // Use View Transitions API for smooth animation
      await document.startViewTransition(() => {
        flushSync(() => {
          const dark = document.documentElement.classList.toggle("dark");
          setIsDarkMode(dark);
        });
      }).ready;

      const { top, left, width, height } =
        buttonRef.current.getBoundingClientRect();
      const y = top + height / 2;
      const x = left + width / 2;

      const right = window.innerWidth - left;
      const bottom = window.innerHeight - top;
      const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${maxRad}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: "ease-in-out",
          pseudoElement: "::view-transition-new(root)",
        }
      );
    } else {
      // Fallback for browsers that don't support View Transitions API
      const dark = document.documentElement.classList.toggle("dark");
      setIsDarkMode(dark);
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(
        "p-3 rounded-lg bg-card border border-border hover:bg-accent transition-all duration-300 shadow-lg hover:shadow-xl",
        "flex items-center justify-center cursor-pointer",
        className
      )}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <SunDim className="h-6 w-6 text-foreground" />
      ) : (
        <Moon className="h-6 w-6 text-foreground" />
      )}
    </button>
  );
};
