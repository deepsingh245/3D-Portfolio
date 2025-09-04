import { Dock, DockIcon } from "@/components/magicui/dock";
import { Search, Settings } from "lucide-react";
import { ThemeToggle } from "./components/ThemeToggle";
import { InteractiveGridPattern } from "./components/magicui/interactive-grid-pattern";
import { cn } from "./lib/utils";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950">
      <ThemeToggle />
      <Dock
        className="backdrop-blur-md bg-white/30 dark:bg-black/30 shadow-lg"
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
      </Dock>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
        <InteractiveGridPattern
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />
      </div>
    </div>
  );
};

export default Home;
