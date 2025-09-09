import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";

export const ScrollBasedVelocityCard = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <ScrollVelocityContainer className="text-4xl md:text-7xl md:leading-[5rem] font-bold tracking-[-0.02em]">
        <ScrollVelocityRow
          baseVelocity={10}
          direction={1}
          className="inter font-bold text-[54px]"
        >
          <h1 className="scroll-m-20 text-center text-6xl font-extrabold tracking-tight text-balance mx-6">
            It’s not a bug. It’s an undocumented feature.
          </h1>
        </ScrollVelocityRow>
        <ScrollVelocityRow
          baseVelocity={10}
          direction={-1}
          className="inter font-bold text-[54px]"
        >
          Fix it later...
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
};
