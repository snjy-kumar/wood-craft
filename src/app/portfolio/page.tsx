import Link from "next/link"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function PortfolioPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Our Portfolio</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Browse our collection of handcrafted woodworking projects. Each piece is meticulously designed and built with
          the highest quality materials and techniques.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-12">
        <TabsList className="mb-8 w-full justify-start border-b pb-px">
          <TabsTrigger
            value="all"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-700"
          >
            All Projects
          </TabsTrigger>
          <TabsTrigger
            value="furniture"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-700"
          >
            Custom Furniture
          </TabsTrigger>
          <TabsTrigger
            value="renovations"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-700"
          >
            Renovations
          </TabsTrigger>
          <TabsTrigger
            value="outdoor"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-700"
          >
            Outdoor
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <ProjectCard key={i} id={i + 1} />
          ))}
        </TabsContent>

        <TabsContent value="furniture" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCard key={i} id={i + 1} />
          ))}
        </TabsContent>

        <TabsContent value="renovations" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCard key={i + 3} id={i + 4} />
          ))}
        </TabsContent>

        <TabsContent value="outdoor" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <ProjectCard key={i + 6} id={i + 7} />
          ))}
        </TabsContent>
      </Tabs>

      <div className="mt-12 text-center">
        <p className="mb-6 text-muted-foreground">
          Interested in discussing your own custom project? We&apos;d love to hear from you.
        </p>
        <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}

function ProjectCard({ id }: { id: number }) {
  const categories = ["Custom Furniture", "Renovations", "Outdoor"]
  const categoryIndex = (id - 1) % 3

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={`/images/image.avif?height=600&width=800&text=Project ${id}`}
          alt={`Project ${id}`}
          fill
          className="object-cover transition-transform duration-500 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <Badge className="absolute left-3 top-3 bg-amber-600">{categories[categoryIndex]}</Badge>
      </div>
      <CardContent className="p-5">
        <h3 className="mb-2 font-serif text-xl font-semibold">Project {id}</h3>
        <p className="mb-4 text-sm text-muted-foreground">
          A beautiful custom woodworking project showcasing our attention to detail and craftsmanship.
        </p>
        <Link
          href={`/portfolio/${id}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-800"
        >
          View Project Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </CardContent>
    </Card>
  )
}

