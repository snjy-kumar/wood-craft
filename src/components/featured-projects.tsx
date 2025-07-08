"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    id: 1,
    title: "Custom Walnut Dining Table",
    category: "Custom Furniture",
    description: "A handcrafted 8-foot dining table made from solid walnut with a live edge and custom steel base.",
    image: "/images/image.avif?height=600&width=800",
    tags: ["Walnut", "Live Edge", "Custom Design"],
  },
  {
    id: 2,
    title: "Modern Kitchen Renovation",
    category: "Renovations",
    description: "Complete kitchen transformation featuring custom cabinetry, island, and built-in storage solutions.",
    image: "/images/image.avif?height=600&width=800",
    tags: ["Kitchen", "Cabinetry", "Maple"],
  },
  {
    id: 3,
    title: "Outdoor Cedar Pergola",
    category: "Outdoor",
    description: "Custom-designed cedar pergola with integrated seating and weather-resistant finishes.",
    image: "/images/image.avif?height=600&width=800",
    tags: ["Cedar", "Outdoor", "Pergola"],
  },
]

export function FeaturedProjects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <div className="p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <Card
          key={project.id}
          className="overflow-hidden transition-all duration-300 hover:shadow-lg"
          onMouseEnter={() => setHoveredId(project.id)}
          onMouseLeave={() => setHoveredId(null)}
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={project.image || "/images/image.avif"}
              alt={project.title}
              fill
              className={`object-cover transition-transform duration-500 ${
                hoveredId === project.id ? "scale-110" : "scale-100"
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <Badge className="absolute left-3 top-3 bg-amber-600">{project.category}</Badge>
          </div>
          <CardContent className="p-5">
            <h3 className="mb-2 font-serif text-xl font-semibold">{project.title}</h3>
            <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="border-amber-200 text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
            <Link
              href={`/portfolio/${project.id}`}
              className="flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800"
            >
              View Project Details
              <ArrowRight className="h-4 w-4" />
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

