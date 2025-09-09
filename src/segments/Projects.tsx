import { Card } from "@/components/ui/card";
import GridLayout from "@/shared/gridLayout";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";

const features = [
  {
    Icon: FileTextIcon,
    name: "3D Portfolio",
    description:
      "Interactive 3D portfolio built with React, Three.js, and modern web technologies.",
    href: "https://github.com/deepsingh245/3D-Portfolio",
    cta: "View on GitHub",
    background: (
      <img
        src="/projects/3d-portfolio.jpg"
        alt="3D Portfolio"
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: InputIcon,
    name: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration and admin dashboard.",
    href: "https://github.com/deepsingh245/ecommerce-platform",
    cta: "View on GitHub",
    background: (
      <img
        src="/projects/ecommerce.jpg"
        alt="E-Commerce Platform"
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    Icon: GlobeIcon,
    name: "Task Management App",
    description:
      "Real-time collaborative task management with drag-and-drop functionality.",
    href: "https://github.com/deepsingh245/task-manager",
    cta: "View on GitHub",
    background: (
      <img
        src="/projects/task-manager.jpg"
        alt="Task Management App"
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    Icon: CalendarIcon,
    name: "Weather Dashboard",
    description:
      "Beautiful weather dashboard with location-based forecasts and interactive maps.",
    href: "https://github.com/deepsingh245/weather-dashboard",
    cta: "View on GitHub",
    background: (
      <img
        src="/projects/weather-dashboard.jpg"
        alt="Weather Dashboard"
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    Icon: BellIcon,
    name: "Social Media Analytics",
    description:
      "Analytics dashboard for tracking social media engagement and performance metrics.",
    href: "https://github.com/deepsingh245/social-analytics",
    cta: "View on GitHub",
    background: (
      <img
        src="/projects/social-analytics.jpg"
        alt="Social Media Analytics"
        className="absolute -right-20 -top-20 opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

const Projects = () => {
  return (
    <Card className="flex flex-col items-start gap-4 border-x-0 border-t-0 p-6 borer-b-2">
      <p className="font-extrabold">Projects</p>
      <GridLayout features={features} />
    </Card>
  );
};

export default Projects;
