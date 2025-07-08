import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const outdoorProjects = [
  {
    id: 1,
    title: "Garden Pergola with Seating",
    description:
      "Weather-resistant teak pergola with built-in seating and planters for a serene garden retreat",
    image: "/images/image.avif",
    location: "Kothrud, Pune",
    size: "12 x 10 feet",
    material: "Weather-treated Teak",
    price: "₹1,85,000",
    year: "2023",
    category: "Garden Structures",
  },
  {
    id: 2,
    title: "Outdoor Dining Pavilion",
    description:
      "Spacious covered dining area with traditional Maharashtrian architectural elements",
    image: "/images/image.avif",
    location: "Baner, Pune",
    size: "16 x 12 feet",
    material: "Solid Rosewood Frame",
    price: "₹2,75,000",
    year: "2023",
    category: "Dining Areas",
  },
  {
    id: 3,
    title: "Children&apos;s Playground Set",
    description:
      "Safe and engaging wooden playground with swings, slides, and climbing features",
    image: "/images/image.avif",
    location: "Hinjewadi, Pune",
    size: "20 x 15 feet",
    material: "Treated Pine Wood",
    price: "₹1,25,000",
    year: "2023",
    category: "Play Structures",
  },
  {
    id: 4,
    title: "Garden Bridge & Walkway",
    description:
      "Decorative wooden bridge over garden pond with matching walkway and railings",
    image: "/images/image.avif",
    location: "Pune Cantonment",
    size: "25 feet length",
    material: "Pressure-treated Hardwood",
    price: "₹95,000",
    year: "2022",
    category: "Garden Features",
  },
  {
    id: 5,
    title: "Outdoor Kitchen Counter",
    description:
      "Weather-resistant outdoor kitchen setup with storage and preparation areas",
    image: "/images/image.avif",
    location: "Wakad, Pune",
    size: "8 x 4 feet",
    material: "Marine-grade Plywood",
    price: "₹1,45,000",
    year: "2023",
    category: "Outdoor Kitchen",
  },
  {
    id: 6,
    title: "Traditional Gazebo",
    description:
      "Octagonal gazebo with intricate woodwork and traditional Indian architectural details",
    image: "/images/image.avif",
    location: "Deccan, Pune",
    size: "12 x 12 feet",
    material: "Teak with Brass Fittings",
    price: "₹3,25,000",
    year: "2022",
    category: "Gazebos",
  },
];

export default function OutdoorPage() {
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
          Outdoor Projects
        </h1>
        <p className="max-w-3xl text-muted-foreground text-lg">
          Extend your living space into the outdoors with our custom-built
          structures. Using weather-resistant materials and traditional joinery
          techniques, we create beautiful outdoor spaces that withstand
          Pune&apos;s diverse climate.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {outdoorProjects.map((project) => (
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
                  <span className="font-medium">Size:</span>
                  <span>{project.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Material:</span>
                  <span>{project.material}</span>
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

      <div className="mt-16">
        <div className="bg-gradient-to-br from-green-50 to-amber-50 dark:from-green-950/30 dark:to-amber-950/30 rounded-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold mb-4">
                Weather-Resistant Craftsmanship
              </h2>
              <p className="text-muted-foreground mb-6">
                Our outdoor projects are built to last through Pune&apos;s
                monsoons, summers, and winters. We use only the finest
                weather-resistant materials and time-tested construction
                techniques.
              </p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Marine-grade finishes for monsoon protection
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Traditional joinery for structural integrity
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  UV-resistant treatments for summer durability
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-700 rounded-full mr-3"></div>
                  Regular maintenance and repair services
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-amber-700 mb-2">
                    25+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Outdoor Projects
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-amber-700 mb-2">
                    5 Yr
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quality Warranty
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-700 hover:bg-amber-800"
                >
                  <Link href="/qoute">Get Outdoor Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-amber-700 text-amber-700 hover:bg-amber-50"
                >
                  <Link href="/contact">Site Visit</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title:
    "Outdoor Projects Portfolio - Ganesh Thakur Woodcraft | Garden Structures in Pune",
  description:
    "Explore our outdoor woodworking projects including pergolas, gazebos, and garden structures. Weather-resistant craftsmanship by Ganesh Thakur serving Pune, Maharashtra.",
  keywords:
    "outdoor woodwork Pune, garden structures Maharashtra, pergola construction Pune, gazebo builder India, outdoor furniture Pune",
};
