import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const resources = [
  {
    id: 1,
    title: "Woodworking Basics: A Beginner's Guide",
    description:
      "Learn the fundamentals of woodworking, including tools, techniques, and safety tips.",
    image: "/images/image.avif?height=200&width=300",
    link: "#",
  },
  {
    id: 2,
    title: "Choosing the Right Finish for Your Wood Project",
    description:
      "Explore different types of wood finishes and how to choose the best one for your project.",
    image: "/images/image.avif?height=200&width=300",
    link: "#",
  },
  {
    id: 3,
    title: "Woodworking Glossary: Common Terms and Definitions",
    description:
      "A comprehensive glossary of woodworking terms and definitions to help you understand the craft.",
    image: "/images/image.avif?height=200&width=300",
    link: "#",
  },
]

export default function ResourcesPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Resource Center
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Helpful articles, guides, and resources for woodworking enthusiasts and
          our clients.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id} className="overflow-hidden">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={resource.image || "/images/image.avif"}
                alt={resource.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 font-serif text-xl font-semibold">
                <Link href={resource.link} className="hover:underline">
                  {resource.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground">{resource.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}