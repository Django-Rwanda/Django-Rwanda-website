import { Card } from "@/src/components/ui/card";
import {
  BookOpen,
  DollarSign,
  Handshake,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resources for Entrepreneurs | Django Rwanda",
  description:
    "Startup toolkit, funding directory, mentorship, and resources for African entrepreneurs",
};

const resourceIcons = [BookOpen, DollarSign, Handshake, Lightbulb];
const resourceLinks = [
  "/resources/startup-toolkit",
  "/resources/funding-directory",
  "/resources/mentorship",
  "/resources/problem-solutions",
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-foreground md:text-5xl">
              Resources for Entrepreneurs
            </h1>
            <p className="max-w-2xl text-lg text-foreground/70">
              Everything you need to launch and grow your startup. Access tools,
              funding, mentorship, and solutions for African markets.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
