"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

interface AnimatedThemeTogglerProps {
  className?: string;
}

export function AnimatedThemeToggler({ className = "" }: AnimatedThemeTogglerProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 ${className}`}
      aria-label="Toggle theme"
    >
      <div className="relative h-5 w-5">
        <Sun
          className={`absolute inset-0 h-5 w-5 text-yellow-500 transition-all duration-300 ease-in-out ${
            isDark 
              ? "scale-0 rotate-90 opacity-0" 
              : "scale-100 rotate-0 opacity-100"
          }`}
        />
        <Moon
          className={`absolute inset-0 h-5 w-5 text-blue-400 transition-all duration-300 ease-in-out ${
            isDark 
              ? "scale-100 rotate-0 opacity-100" 
              : "scale-0 -rotate-90 opacity-0"
          }`}
        />
      </div>
    </button>
  );
}