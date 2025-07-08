import Image from "next/image"
import Link from "next/link"
import { Star, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestimonialSubmissionForm } from "@/components/testimonial-submission-form"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Craftsville, CA",
    rating: 5,
    content:
      "The custom dining table that Artisan Woodcraft created for our home is absolutely stunning. The attention to detail and craftsmanship is exceptional. It's become the centerpiece of our home and we receive compliments from everyone who visits.",
    image: "/images/person.jpg?height=100&width=100",
    project: "Custom Walnut Dining Table",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Interior Designer",
    location: "Metropolitan Design Studio",
    rating: 5,
    content:
      "I've worked with many carpenters over my 15 years as an interior designer, and Artisan Woodcraft stands out for their precision, reliability, and artistic vision. They don't just execute plans – they enhance them with their expertise.",
    image: "/images/person.jpg?height=100&width=100",
    project: "Multiple Residential Projects",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Restaurant Owner",
    location: "Harvest Table Restaurant",
    rating: 5,
    content:
      "When we needed custom tables and a bar for our new restaurant, Artisan Woodcraft delivered beyond our expectations. The pieces are not only beautiful but have withstood heavy daily use for years. Worth every penny.",
    image: "/images/person.jpg?height=100&width=100",
    project: "Restaurant Furnishings",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Homeowner",
    location: "Coastal Heights",
    rating: 5,
    content:
      "John and his team transformed our outdated kitchen into a stunning space with custom cabinetry that maximizes every inch. The craftsmanship is impeccable, and the attention to detail is evident in every drawer and door.",
    image: "/images/person.jpg?height=100&width=100",
    project: "Kitchen Renovation",
  },
  {
    id: 5,
    name: "Jennifer Williams",
    role: "Office Manager",
    location: "Innovate Tech Inc.",
    rating: 4,
    content:
      "Our custom conference table and reception desk have completely elevated our office space. Clients are always impressed by the quality and design. The team was professional throughout the entire process.",
    image: "/images/person.jpg?height=100&width=100",
    project: "Office Furniture",
  },
  {
    id: 6,
    name: "Robert Garcia",
    role: "Homeowner",
    location: "Hillside Estates",
    rating: 5,
    content:
      "The built-in bookshelves and entertainment center that Artisan Woodcraft designed for our living room are perfect. They understood exactly what we wanted and delivered a beautiful, functional piece that looks like it was always part of the house.",
    image: "/images/person.jpg?height=100&width=100",
    project: "Built-in Cabinetry",
  },
]

export default function TestimonialsPage() {
  return (
    <div className="
     px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Client Testimonials</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Don&apos;t just take our word for it. Hear what our clients have to say about their experience working with Artisan
          Woodcraft.
        </p>
      </div>

      {/* Testimonial Stats */}
      <section className="mb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-amber-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-amber-700">4.9</div>
              <div className="mb-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={`h-5 w-5 ${star <= 4 ? "fill-amber-500 text-amber-500" : "fill-amber-500 text-amber-500"}`}
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-amber-700">500+</div>
              <p className="text-sm text-muted-foreground">Satisfied Clients</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-amber-700">98%</div>
              <p className="text-sm text-muted-foreground">Would Recommend Us</p>
            </CardContent>
          </Card>
          <Card className="bg-amber-50">
            <CardContent className="flex flex-col items-center p-6 text-center">
              <div className="mb-2 text-4xl font-bold text-amber-700">20+</div>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="mb-16">
        <h2 className="mb-8 font-serif text-3xl font-bold">Featured Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <Card key={testimonial.id} className="flex h-full flex-col">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="mb-6 flex-1">
                  <Quote className="mb-2 h-8 w-8 text-amber-200" />
                  <p className="italic text-muted-foreground">{testimonial.content}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/images/person.jpg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testimonials by Project Type */}
      <section className="mb-16">
        <h2 className="mb-8 font-serif text-3xl font-bold">Testimonials by Project Type</h2>
        <Tabs defaultValue="furniture" className="w-full">
          <TabsList className="mb-8 w-full justify-start border-b pb-px">
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
              Home Renovations
            </TabsTrigger>
            <TabsTrigger
              value="commercial"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-700"
            >
              Commercial Projects
            </TabsTrigger>
          </TabsList>

          <TabsContent value="furniture" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.slice(0, 2).map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mb-6 italic text-muted-foreground">{testimonial.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/images/person.jpg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="renovations" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.slice(3, 5).map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mb-6 italic text-muted-foreground">{testimonial.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/images/person.jpg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.slice(2, 4).map((testimonial) => (
                <Card key={testimonial.id}>
                  <CardContent className="p-6">
                    <div className="mb-4 flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mb-6 italic text-muted-foreground">{testimonial.content}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 overflow-hidden rounded-full">
                          <Image
                            src={testimonial.image || "/images/person.jpg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-sm text-muted-foreground">{testimonial.project}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* All Testimonials */}
      <section className="mb-16">
        <h2 className="mb-8 font-serif text-3xl font-bold">All Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="flex h-full flex-col">
              <CardContent className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="mb-6 flex-1">
                  <p className="italic text-muted-foreground">{testimonial.content}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/images/person.jpg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.project}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Submit a Testimonial */}
      <section className="mb-16 rounded-lg bg-amber-50 p-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-6 text-center font-serif text-3xl font-bold">Share Your Experience</h2>
          <p className="mb-8 text-center text-muted-foreground">
            We value your feedback. If you&apos;ve worked with us, please take a moment to share your experience.
          </p>
          <TestimonialSubmissionForm />
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="mb-16">
        <h2 className="mb-8 font-serif text-3xl font-bold">Video Testimonials</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="overflow-hidden rounded-lg bg-gray-100">
              <div className="relative aspect-video w-full">
                <div className="flex h-full w-full items-center justify-center bg-gray-200">
                  <p className="text-muted-foreground">Video Testimonial {i}</p>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-700 text-white">
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
                        className="h-8 w-8"
                      >
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold">Client Name {i}</h3>
                <p className="text-sm text-muted-foreground">Project Type {i}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg bg-amber-100 p-8 md:p-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Join Our Satisfied Clients?
          </h2>
          <p className="mt-4 max-w-[600px] text-muted-foreground">
            Let&apos;s discuss your vision and create something extraordinary together. From concept to completion, we&apos;ll
            guide you through every step.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
              <Link href="/quote">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-amber-700 text-amber-700 hover:bg-amber-700/10"
            >
              <Link href="/portfolio">View Our Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

