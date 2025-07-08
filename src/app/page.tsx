import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { FeaturedProjects } from "@/components/featured-projects"
import { TestimonialCarousel } from "@/components/testimonial-carousel"
import { ServicesList } from "@/components/services-list"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/image.avif?height=1080&width=1920"
          alt="Master carpenter crafting a custom wooden table"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="  relative z-10 flex h-full flex-col items-start justify-center space-y-6 px-4 text-white md:px-6">
          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Craftsmanship <br />
            <span className="text-amber-400">Perfected Over 20 Years</span>
          </h1>
          <p className="max-w-[600px] text-lg text-gray-200 md:text-xl">
            Transforming raw wood into timeless masterpieces. Custom furniture, renovations, and fine woodworking by a
            master craftsman.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700">
              Get a Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 md:py-24">
        <div className=" px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-amber-100 p-3">
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
                    className="h-6 w-6 text-amber-800"
                  >
                    <path d="M12 22v-5" />
                    <path d="M9 8V2" />
                    <path d="M15 8V2" />
                    <path d="M18 8v4" />
                    <path d="M6 8v4" />
                    <path d="M12 17v-5" />
                    <path d="M6 12v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5" />
                    <path d="M6 8h12" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">Master Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Over 20 years of experience creating custom, heirloom-quality woodwork built to last generations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-amber-100 p-3">
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
                    className="h-6 w-6 text-amber-800"
                  >
                    <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                    <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                    <rect width="7" height="5" x="7" y="7" rx="1" />
                    <rect width="7" height="5" x="10" y="12" rx="1" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">Custom Designs</h3>
                <p className="text-muted-foreground">
                  Personalized approach to every project, ensuring each piece perfectly matches your vision and space.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-transparent shadow-none">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-amber-100 p-3">
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
                    className="h-6 w-6 text-amber-800"
                  >
                    <path d="M12 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C10.21 6.04 10 5.53 10 5c0-.53.21-1.04.59-1.41C10.96 3.21 11.47 3 12 3z" />
                    <path d="M12 14c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z" />
                    <path d="M12 19c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z" />
                    <path d="M17 3c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C15.21 6.04 15 5.53 15 5c0-.53.21-1.04.59-1.41C15.96 3.21 16.47 3 17 3z" />
                    <path d="M7 3c.53 0 1.04.21 1.41.59C8.79 3.96 9 4.47 9 5c0 .53-.21 1.04-.59 1.41C8.04 6.79 7.53 7 7 7c-.53 0-1.04-.21-1.41-.59C5.21 6.04 5 5.53 5 5c0-.53.21-1.04.59-1.41C5.96 3.21 6.47 3 7 3z" />
                    <path d="M7 9c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59C5.21 12.04 5 11.53 5 11c0-.53.21-1.04.59-1.41C5.96 9.21 6.47 9 7 9z" />
                    <path d="M17 9c.53 0 1.04.21 1.41.59.38.37.59.88.59 1.41 0 .53-.21 1.04-.59 1.41-.37.38-.88.59-1.41.59-.53 0-1.04-.21-1.41-.59-.38-.37-.59-.88-.59-1.41 0-.53.21-1.04.59-1.41.37-.38.88-.59 1.41-.59z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">Premium Materials</h3>
                <p className="text-muted-foreground">
                  Only the finest sustainably sourced woods and materials, selected for beauty, durability, and
                  character.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24">
        <div className="px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Featured Projects
              </h2>
              <p className="mt-2 text-muted-foreground">A showcase of our finest custom woodworking</p>
            </div>
            <Link href="/portfolio" className="flex items-center gap-2 text-amber-700 hover:text-amber-800">
              View all projects
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Separator className="my-8 bg-amber-200" />
          <FeaturedProjects />
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-amber-900 py-16 text-amber-50 md:py-24">
        <div className=" px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="mt-4 text-amber-200">Comprehensive woodworking services tailored to your unique needs</p>
          </div>
          <ServicesList />
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className=" px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Client Testimonials
            </h2>
            <p className="mt-4 text-muted-foreground">Hear what our satisfied clients have to say about our work</p>
            <div className="mt-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-100 py-16 md:py-24">
        <div className=" px-4 md:px-6">
          <div className="flex flex-col items-center text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Ready to Transform Your Space?
            </h2>
            <p className="mt-4 max-w-[600px] text-muted-foreground">
              Let&apos;s discuss your vision and create something extraordinary together. From concept to completion, we&apos;ll
              guide you through every step.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="bg-amber-700 hover:bg-amber-800">
                Request a Quote
              </Button>
              <Button size="lg" variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-700/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

