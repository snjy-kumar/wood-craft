import Image from "next/image"
import Link from "next/link"
import { Award, CheckCircle, PenToolIcon as Tool } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Timeline } from "@/components/timeline"

export default function AboutPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">About Us</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          With over 20 years of experience, we&ampos;ve built a reputation for exceptional craftsmanship, attention to detail,
          and customer satisfaction.
        </p>
      </div>

      {/* Master Craftsman Story */}
      <section className="mb-16 grid gap-8 md:grid-cols-2 md:gap-12">
        <div className="order-2 md:order-1">
          <h2 className="mb-4 font-serif text-3xl font-bold">The Master Craftsman</h2>
          <p className="mb-4 text-muted-foreground">
            John Carpenter&ampos;s journey began over two decades ago with a simple passion for working with wood. What
            started as a hobby in his father&ampos;s garage has evolved into a renowned woodworking studio creating custom
            pieces for clients nationwide.
          </p>
          <p className="mb-4 text-muted-foreground">
            After completing his formal training in fine woodworking at the prestigious American School of
            Craftsmanship, John spent years honing his skills under master woodworkers before establishing Artisan
            Woodcraft in 2003.
          </p>
          <p className="mb-4 text-muted-foreground">
            His philosophy is simple: create pieces that combine timeless design with uncompromising quality. Each
            project is approached with meticulous attention to detail, from selecting the perfect wood to applying the
            final finish.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              <span>Master Craftsman Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              <span>20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-amber-600" />
              <span>500+ Projects Completed</span>
            </div>
          </div>
        </div>
        <div className="relative order-1 aspect-square overflow-hidden rounded-lg md:order-2">
          <Image
            src="/images/image.avif?height=800&width=800"
            alt="John Carpenter, Master Woodworker"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16 bg-amber-50 -mx-4 px-4 py-16 md:-mx-6 md:px-6">
        <div className="">
          <h2 className="mb-10 text-center font-serif text-3xl font-bold">Our Values</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="border-none bg-white">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-amber-100 p-3">
                  <Tool className="h-6 w-6 text-amber-800" />
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">Craftsmanship</h3>
                <p className="text-muted-foreground">
                  We believe in doing things the right way, not the easy way. Every joint, every finish, every detail
                  matters.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white">
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
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">Vision</h3>
                <p className="text-muted-foreground">
                  We see the potential in every piece of wood and work with you to bring your vision to life.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white">
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
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We source materials responsibly and create pieces designed to last for generations, not years.
                </p>
              </CardContent>
            </Card>
            <Card className="border-none bg-white">
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
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
                  </svg>
                </div>
                <h3 className="mb-2 font-serif text-xl font-semibold">Integrity</h3>
                <p className="text-muted-foreground">
                  We stand behind our work with honesty, transparency, and a commitment to your satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workshop Tour */}
      <section className="mb-16">
        <h2 className="mb-6 font-serif text-3xl font-bold">Our Workshop</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/images/image.avif?height=600&width=600" alt="Workshop tools" fill className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/images/image.avif?height=600&width=600" alt="Wood materials" fill className="object-cover" />
          </div>
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image src="/images/image.avif?height=600&width=600" alt="Workspace overview" fill className="object-cover" />
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="mb-6 text-muted-foreground">
            Our 2,500 square foot workshop is equipped with state-of-the-art tools and machinery, allowing us to handle
            projects of any size or complexity.
          </p>
          <Button className="bg-amber-700 hover:bg-amber-800">Schedule a Workshop Tour</Button>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="mb-16">
        <h2 className="mb-6 font-serif text-3xl font-bold">Certifications & Awards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Award className="h-10 w-10 text-amber-600" />
              <div>
                <h3 className="font-serif text-lg font-semibold">Master Craftsman Certification</h3>
                <p className="text-sm text-muted-foreground">American Guild of Woodworkers, 2010</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Award className="h-10 w-10 text-amber-600" />
              <div>
                <h3 className="font-serif text-lg font-semibold">Best Custom Furniture Design</h3>
                <p className="text-sm text-muted-foreground">National Woodworking Exhibition, 2018</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-start gap-4 p-6">
              <Award className="h-10 w-10 text-amber-600" />
              <div>
                <h3 className="font-serif text-lg font-semibold">Sustainable Craftsmanship Award</h3>
                <p className="text-sm text-muted-foreground">Green Building Council, 2021</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="mb-16">
        <h2 className="mb-10 font-serif text-3xl font-bold">Our Journey</h2>
        <Timeline />
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div>
            <h2 className="font-serif text-3xl font-bold">Meet Our Team</h2>
            <p className="mt-2 text-muted-foreground">The skilled craftspeople behind our exceptional work</p>
          </div>
          <Link href="/team" className="flex items-center gap-2 text-amber-700 hover:text-amber-800">
            View all team members
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
        </div>
        <Separator className="my-8 bg-amber-200" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Card key={i} className="overflow-hidden">
              <div className="relative aspect-square w-full overflow-hidden">
                <Image
                  src={`/images/image.avif?height=400&width=400&text=Team Member ${i}`}
                  alt={`Team Member ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 text-center">
                <h3 className="font-serif text-lg font-semibold">Team Member {i}</h3>
                <p className="text-sm text-muted-foreground">Master Craftsman</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg bg-amber-100 p-8 md:p-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">Ready to Start Your Project?</h2>
          <p className="mt-4 max-w-[600px] text-muted-foreground">
            Let&ampos;s discuss your vision and create something extraordinary together. From concept to completion, we&ampos;ll
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
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

