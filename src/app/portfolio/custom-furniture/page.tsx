import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const customFurnitureProjects = [
  {
    id: 1,
    title: "Traditional Teak Dining Set",
    description:
      "Handcrafted 8-seater dining table with matching chairs featuring traditional Maharashtrian designs",
    image: "/images/image.avif",
    location: "Kothrud, Pune",
    material: "Premium Teak Wood",
    price: "₹1,25,000",
    year: "2023",
    category: "Dining Room",
  },
  {
    id: 2,
    title: "Modern Rosewood TV Console",
    description:
      "Sleek entertainment unit with hidden cable management and soft-close drawers",
    image: "/images/image.avif",
    location: "Baner, Pune",
    material: "Rosewood",
    price: "₹75,000",
    year: "2023",
    category: "Living Room",
  },
  {
    id: 3,
    title: "Custom Walk-in Wardrobe",
    description:
      "Spacious wardrobe system with modular shelving and premium brass fittings",
    image: "/images/image.avif",
    location: "Hinjewadi, Pune",
    material: "Engineered Wood with Sheesham Veneer",
    price: "₹2,10,000",
    year: "2023",
    category: "Bedroom",
  },
  {
    id: 4,
    title: "Executive Office Desk",
    description:
      "Large executive desk with built-in storage and cable management for modern office",
    image: "/images/image.avif",
    location: "Deccan, Pune",
    material: "Solid Mango Wood",
    price: "₹95,000",
    year: "2022",
    category: "Office",
  },
  {
    id: 5,
    title: "Children's Study Corner",
    description:
      "Ergonomic study desk with bookshelf and storage designed for growing children",
    image: "/images/image.avif",
    location: "Wakad, Pune",
    material: "Particle Board with Oak Laminate",
    price: "₹45,000",
    year: "2023",
    category: "Children's Room",
  },
  {
    id: 6,
    title: "Traditional Pooja Mandir",
    description:
      "Intricate carved wooden temple with traditional motifs and brass accents",
    image: "/images/image.avif",
    location: "Pune Cantonment",
    material: "Solid Teak with Hand Carving",
    price: "₹85,000",
    year: "2022",
    category: "Religious",
  },
];

export default function CustomFurniturePage() {
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
          Custom Furniture
        </h1>
        <p className="max-w-3xl text-muted-foreground text-lg">
          Explore our collection of bespoke furniture pieces, each designed and
          crafted to meet our clients&apos; unique requirements. From
          traditional Maharashtrian designs to contemporary styles, every piece
          reflects Ganesh Thakur&apos;s mastery and attention to detail.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {customFurnitureProjects.map((project) => (
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

      <div className="mt-16 text-center">
        <h2 className="font-serif text-2xl font-semibold mb-4">
          Ready for Your Custom Furniture?
        </h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Let Ganesh Thakur and his team create a unique piece that perfectly
          fits your space and style. Contact us today for a consultation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
            <Link href="/qoute">Get a Quote</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-amber-700 text-amber-700 hover:bg-amber-50"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title:
    "Custom Furniture Portfolio - Ganesh Thakur Woodcraft | Bespoke Pieces in Pune",
  description:
    "Browse our collection of custom furniture pieces crafted by master carpenter Ganesh Thakur. From traditional to contemporary designs, serving Pune and Maharashtra.",
  keywords:
    "custom furniture Pune, bespoke furniture Maharashtra, handcrafted furniture India, traditional furniture designs, contemporary woodwork Pune",
};
