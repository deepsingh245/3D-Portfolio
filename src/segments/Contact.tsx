import { RetroGrid } from "@/components/magicui/retro-grid";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <Card className="border-x-0 border-t-0 relative">
      <div className="relative h-[500px] w-full overflow-hidden">
        <RetroGrid />
      </div>
      <div className="p-6 absolute w-full top-0 left-0 right-0 h-full flex flex-col justify-between items-center">
        <h1 className="font-extrabold text-xl mb-4">Contact</h1>
        <form onSubmit={onSubmit} className="grid gap-4 w-xl">
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
          />
          <div className="flex items-center gap-3">
            <Button type="submit" disabled={status === "loading"}>
              {status === "loading" ? "Sending..." : "Send message"}
            </Button>
            {status === "success" && (
              <span className="text-sm text-green-600">Sent!</span>
            )}
            {status === "error" && (
              <span className="text-sm text-red-600">Failed. Try again.</span>
            )}
          </div>
        </form>
      </div>
    </Card>
  );
};

export default Contact;
