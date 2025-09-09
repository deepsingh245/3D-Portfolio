import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/hooks/useTheme";

const Skills = () => {
  const { theme } = useTheme();
  const skills = [
    "React",
    "Angular",
    "Next.js",
    "Tailwind",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Firebase",
    "MySQL",
    "Git",
    "Figma",
  ];
  return (
    <Card className="flex flex-col items-start gap-4 border-x-0 border-t-0 p-6 borer-b-2">
      <p className="font-extrabold">Skills</p>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            {...(theme === "dark" ? { variant: "default" } : {})}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </Card>
  );
};

export default Skills;
