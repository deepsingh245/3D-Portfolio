import { Dock, DockIcon } from "@/components/magicui/dock";
import { HomeIcon, Search, Settings } from "lucide-react";
import { InteractiveGridPattern } from "./components/magicui/interactive-grid-pattern";
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";
import { cn } from "./lib/utils";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground transition-all duration-300">
        <AnimatedThemeToggler className="fixed top-0 right-0 m-4" />
      </div>
      <Dock
        className="backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg fixed bottom-0 left-0 right-0 mb-2"
        direction="middle"
        iconDistance={100}
        iconSize={50}
      >
        <DockIcon>
          <Settings />
        </DockIcon>
        <DockIcon>
          <Search />
        </DockIcon>
        <DockIcon>
          <HomeIcon />
        </DockIcon>
      </Dock>
    </>
  );
};

export default Home;
