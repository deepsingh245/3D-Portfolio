import React from "react";
import { InteractiveGridPattern } from "../components/magicui/interactive-grid-pattern";
import { cn } from "@/lib/utils";

const GridPattern = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
};

export default GridPattern;
