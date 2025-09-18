import { Highlighter } from "@/components/magicui/highlighter";
import { Card, CardDescription } from "@/components/ui/card";

const About = () => {
  return (
    <Card className="flex flex-col items-start gap-4 border-x-0 border-t-0 p-6 borer-b-2">
      {/* <Highlighter action="highlight" color="#87CEFA">
          text stand out
        </Highlighter>{" "} */}
      <p className="font-extrabold">About</p>
      <CardDescription>
        ✨ I’m a {""}
        <Highlighter action="underline" color="#FF9800">
          frontend engineer
        </Highlighter>{" "}
        who loves turning ideas into sleek, interactive experiences.
      </CardDescription>
      <CardDescription>
        💻 Skilled in React, Angular, Next.js, and Tailwind — with TypeScript,
        Node.js, and databases powering the backend.
      </CardDescription>
      <CardDescription>
        🎨 I enjoy bridging design and code, often sketching before bringing it
        to life in the browser.
      </CardDescription>
      <CardDescription>
        🚀 Always curious, always building — from dynamic UIs to full-stack
        applications.
      </CardDescription>
      <CardDescription>
        🌍 Based in India, open to exciting opportunities where creativity meets
        engineering.
      </CardDescription>
    </Card>
  );
};

export default About;
