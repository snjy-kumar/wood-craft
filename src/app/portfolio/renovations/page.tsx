import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const renovationProjects = [
  {
    id: 1,
    title: "Complete Kitchen Renovation",
    description:
      "Modern L-shaped kitchen with premium hardwood cabinets, granite countertops, and traditional brass handles",
    image: "/images/image.avif",
    location: "Kothrud, Pune",
    area: "120 sq ft",
    duration: "6 weeks",
    price: "₹3,50,000",
    year: "2023",
    category: "Kitchen",
  },
  {
    id: 2,
    title: "Master Bedroom Makeover",
    description:
      "Complete bedroom renovation with built-in wardrobes, study area, and traditional wooden ceiling",
    image: "/images/image.avif",
    location: "Baner, Pune",
    area: "200 sq ft",
    duration: "4 weeks",
    price: "₹2,75,000",
    year: "2023",
    category: "Bedroom",
  },
  {
    id: 3,
    title: "Living Room Transformation",
    description:
      "Open-plan living space with custom entertainment unit, built-in storage, and wooden flooring",
    image: "/images/image.avif",
    location: "Hinjewadi, Pune",
    area: "300 sq ft",
    duration: "5 weeks",
    price: "₹4,25,000",
    year: "2023",
    category: "Living Room",
  },
  {
    id: 4,
    title: "Home Office Setup",
    description:
      "Dedicated workspace with built-in desk, library shelving, and ergonomic storage solutions",
    image: "/images/image.avif",
    location: "Deccan, Pune",
    area: "150 sq ft",
    duration: "3 weeks",
    price: "₹1,85,000",
    year: "2022",
    category: "Office",
  },
  {
    id: 5,
    title: "Traditional Dining Area",
    description:
      "Classical dining space with carved wooden panels, traditional furniture, and ambient lighting",
    image: "/images/image.avif",
    location: "Pune Cantonment",
    area: "180 sq ft",
    duration: "5 weeks",
    price: "₹3,10,000",
    year: "2022",
    category: "Dining Room",
  },
  {
    id: 6,
    title: "Children&apos;s Playroom",
    description:
      "Safe and colorful play area with custom storage, reading nook, and educational wall panels",
    image: "/images/image.avif",
    location: "Wakad, Pune",
    area: "140 sq ft",
    duration: "3 weeks",
    price: "₹1,65,000",
    year: "2023",
    category: "Children&apos;s Room",
  },
];

export default function RenovationsPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-8">
        <Link
          href="/portfolio"
          className="inline-flex items-center text-amber-700 hover:text-amber-800 mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Portfolio
        </Link>
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-4">
          Home Renovations
        </h1>
        <p className="max-w-3xl text-muted-foreground text-lg">
          Transform your living spaces with our comprehensive renovation
          services. Ganesh Thakur and his team specialize in creating
          functional, beautiful spaces that blend traditional craftsmanship with
          modern convenience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {renovationProjects.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              <Badge className="absolute top-4 left-4 bg-amber-700">
                {project.category}
              </Badge>
            </div>
            <CardContent className="p-6">
              <h3 className="font-serif text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {project.description}
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>{project.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Area:</span>
                  <span>{project.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>{project.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Investment:</span>
                  <span className="text-amber-700 font-semibold">
                    {project.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Year:</span>
                  <span>{project.year}</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-amber-700 hover:bg-amber-800">
                View Details
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/20 rounded-xl p-8 md:p-12">
        <div className="text-center">
          <h2 className="font-serif text-2xl font-semibold mb-4">
            Planning a Renovation?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team handles everything from design consultation to final
            installation. We ensure minimal disruption to your daily life while
            delivering exceptional results that exceed expectations.
          </p>
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-700 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">
                Completed Renovations
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-700 mb-2">20+</div>
              <div className="text-sm text-muted-foreground">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-700 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-amber-700 hover:bg-amber-800"
            >
              <Link href="/qoute">Get Renovation Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-50"
            >
              <Link href="/contact">Schedule Consultation</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title:
    "Home Renovations Portfolio - Ganesh Thakur Woodcraft | Complete Makeovers in Pune",
  description:
    "Explore our home renovation projects by master carpenter Ganesh Thakur. Complete room makeovers, kitchen renovations, and interior transformations in Pune, Maharashtra.",
  keywords:
    "home renovation Pune, interior renovation Maharashtra, kitchen renovation Pune, bedroom makeover India, living room renovation",
};
