"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Custom Teak Dining Table",
    category: "Custom Furniture",
    description:
      "A handcrafted 8-seater dining table made from premium Indian teak with traditional joinery and modern design elements, crafted for a family in Baner, Pune.",
    image: "/images/image.avif",
    tags: ["Teak Wood", "Traditional Joinery", "Indian Design"],
    price: "Starting at ₹75,000",
  },
  {
    id: 2,
    title: "Modern Kitchen Renovation",
    category: "Renovations",
    description:
      "Complete kitchen transformation featuring custom modular cabinetry, kitchen island, and storage solutions using sustainable wood for a home in Viman Nagar.",
    image: "/images/image.avif",
    tags: ["Kitchen", "Modular Cabinetry", "Sheesham Wood"],
    price: "Starting at ₹4,50,000",
  },
  {
    id: 3,
    title: "Traditional Wooden Pergola",
    category: "Outdoor",
    description:
      "Custom-designed traditional Indian pergola with integrated seating and weather-resistant natural finishes, perfect for outdoor entertaining in Pune's climate.",
    image: "/images/image.avif",
    tags: ["Outdoor", "Traditional Design", "Weather Resistant"],
    price: "Starting at ₹1,25,000",
  },
];

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="group overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-background to-amber-50/30 dark:to-amber-950/30"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.image || "/images/image.avif"}
              alt={project.title}
              fill
              className={`object-cover transition-all duration-700 ${
                hoveredId === project.id
                  ? "scale-110 brightness-110"
                  : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <Badge className="absolute left-4 top-4 bg-gradient-to-r from-amber-600 to-amber-700 border-0 shadow-lg">
              {project.category}
            </Badge>
            {project.price && (
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-sm font-medium bg-black/50 backdrop-blur-sm px-2 py-1 rounded">
                  {project.price}
                </span>
              </div>
            )}
          </div>
          <CardContent className="p-6">
            <h3 className="mb-3 font-serif text-xl font-semibold group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
              {project.title}
            </h3>
            <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-amber-200 dark:border-amber-800 text-xs hover:bg-amber-50 dark:hover:bg-amber-950/50 transition-colors"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <Link
              href={`/portfolio/${project.id}`}
              className="group/link flex items-center gap-2 text-sm font-medium text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
            >
              View Project Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
