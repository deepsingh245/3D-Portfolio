import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

export interface GridLayoutProps {
  features: Array<{
    Icon: any;
    name: string;
    description: string;
    tech_stack: string[];
    showButtonText: boolean;
    liveHref?: string;
    sourceHref?: string;
    background: React.ReactNode;
    className: string;
  }>;
}

const GridLayout = ({ features }: GridLayoutProps) => {
  return (
    <BentoGrid className="lg:grid-rows-2">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default GridLayout;
