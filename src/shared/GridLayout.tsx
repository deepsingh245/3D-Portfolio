import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";

interface GridLayoutProps {
  features: Array<{
    Icon: React.ComponentType<any>;
    name: string;
    description: string;
    href: string;
    cta: string;
    background: React.ReactNode;
    className: string;
  }>;
}

const GridLayout = ({ features }: GridLayoutProps) => {
  return (
    <BentoGrid className="lg:grid-rows-3">
      {features.map((feature) => (
        <BentoCard key={feature.name} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default GridLayout;
