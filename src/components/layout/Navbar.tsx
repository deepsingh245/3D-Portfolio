import React from 'react';
import { AnimatedThemeToggler } from '@/components/magicui/animated-theme-toggler';

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-950/95 dark:supports-[backdrop-filter]:bg-gray-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="font-bold text-xl text-gray-900 dark:text-white">
          Portfolio
        </div>
        <AnimatedThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;