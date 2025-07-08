import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { FeaturedProjects } from "@/components/featured-projects";
import { TestimonialCarousel } from "@/components/testimonial-carousel";
import { ServicesList } from "@/components/services-list";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Skip to main content link */}
      <div id="main-content" className="sr-only">
        Main content starts here
      </div>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] min-h-[600px] w-full overflow-hidden"
        aria-label="Hero section"
      >
        <Image
          src="/images/image.avif"
          alt="Master carpenter Ganesh Thakur crafting a custom wooden table in his Pune workshop"
          fill
          priority
          className="object-cover transition-transform duration-1000 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="relative z-10 flex h-full flex-col items-start justify-center space-y-6 container-spacing text-white">
          <div className="max-w-4xl">
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-balance">
              Craftsmanship <br />
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Perfected Over 20 Years
              </span>
            </h1>
            <p className="mt-6 max-w-[600px] text-lg leading-relaxed text-gray-100 md:text-xl text-pretty">
              Transforming raw wood into timeless masterpieces in Pune,
              Maharashtra. Custom furniture, renovations, and fine woodworking
              by Ganesh Thakur and his dedicated team of 5 skilled craftsmen who
              bring passion and precision to every project.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3 min-h-[52px] shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 btn-focus"
                asChild
              >
                <Link href="/qoute">Get a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/90 text-white bg-white/10 backdrop-blur-sm min-h-[52px] transition-all duration-300 hover:bg-white/20 hover:border-white hover:-translate-y-0.5 btn-focus"
                asChild
              >
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
        >
          <div className="h-8 w-5 rounded-full border-2 border-white/60">
            <div className="mt-2 h-1 w-1 mx-auto rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section
        className="section-padding bg-gradient-to-b from-background to-muted/30"
        aria-label="Why choose us"
      >
        <div className="container mx-auto container-spacing">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4 text-balance">
              Why Choose{" "}
              <span className="text-primary">Ganesh Thakur Woodcraft</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-responsive-lg text-pretty">
              Experience the difference that comes with decades of expertise and
              an unwavering commitment to excellence.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: (
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
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
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
                ),
                title: "Master Craftsmanship",
                description:
                  "Over 20 years of experience creating custom, heirloom-quality woodwork built to last generations.",
              },
              {
                icon: (
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
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  >
                    <path d="M3 7V5c0-1.1.9-2 2-2h2" />
                    <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
                    <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
                    <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
                    <rect width="7" height="5" x="7" y="7" rx="1" />
                    <rect width="7" height="5" x="10" y="12" rx="1" />
                  </svg>
                ),
                title: "Custom Designs",
                description:
                  "Personalized approach to every project, ensuring each piece perfectly matches your vision and space.",
              },
              {
                icon: (
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
                    className="h-8 w-8 text-primary"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v6l4 2" />
                  </svg>
                ),
                title: "Premium Materials",
                description:
                  "Only the finest sustainably sourced woods and materials, selected for beauty, durability, and character.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="group border-none bg-transparent shadow-none transition-all duration-300 hover:shadow-lg hover:bg-card/50 card-shadow-lg"
              >
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="mb-6 rounded-full bg-gradient-to-br from-primary/10 to-primary/20 p-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="mb-4 font-serif text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section
        className="section-padding bg-gradient-to-b from-muted/30 to-background"
        aria-label="Featured projects"
      >
        <div className="container mx-auto container-spacing">
          <div className="flex flex-col items-center justify-between gap-6 mb-12 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-2 text-balance">
                Featured Projects
              </h2>
              <p className="text-muted-foreground text-responsive-lg text-pretty">
                A showcase of our finest custom woodworking
              </p>
            </div>
            <Link
              href="/portfolio"
              className="group flex items-center gap-2 text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 transition-colors"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <Separator className="my-8 bg-gradient-to-r from-transparent via-amber-200 dark:via-amber-800 to-transparent" />
          <FeaturedProjects />
        </div>
      </section>

      {/* Services Overview */}
      <section className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 py-16 text-amber-50 md:py-24 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Our Services
            </h2>
            <p className="text-amber-200 text-lg max-w-2xl mx-auto">
              Comprehensive woodworking services in Pune, Maharashtra, tailored
              to your unique needs and vision by Ganesh Thakur&apos;s expert
              team
            </p>
          </div>
          <ServicesList />
          <div className="mt-12 text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-amber-50/10 to-background dark:via-amber-950/10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Hear what our satisfied clients have to say about our work
            </p>
            <div className="flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-amber-400 text-amber-400 transition-all duration-300 hover:scale-110"
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground font-medium">
                5.0 out of 5 stars
              </span>
            </div>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-950/50 py-16 md:py-24 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-200/30 dark:bg-amber-800/30"></div>
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-amber-300/20 dark:bg-amber-700/20"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-2xl">
              Let&apos;s discuss your vision and create something extraordinary
              together. From concept to completion, we&apos;ll guide you through
              every step of bringing your dream woodwork to life.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
              >
                Request a Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700/10 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                Schedule a Consultation
              </Button>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>Same-day Response</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span>20+ Years Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pune Heritage & Local Context */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 dark:from-orange-950/20 dark:via-amber-950/20 dark:to-yellow-950/20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
              Rooted in{" "}
              <span className="text-amber-700 dark:text-amber-400">
                Pune&apos;s Heritage
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Serving Maharashtra&apos;s cultural capital with traditional
              woodworking excellence. Our workshop combines time-honored
              Maharashtrian craftsmanship with contemporary design
              sensibilities.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-amber-800 dark:text-amber-400">
                  Local Expertise
                </h3>
                <p className="text-muted-foreground text-sm">
                  Deep understanding of Pune&apos;s climate, architecture, and
                  design preferences developed over 20+ years
                </p>
              </div>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-amber-800 dark:text-amber-400">
                  Traditional Techniques
                </h3>
                <p className="text-muted-foreground text-sm">
                  Preserving ancient Maharashtrian woodworking methods including
                  hand carving and traditional joinery
                </p>
              </div>
            </div>

            <div className="text-center group md:col-span-2 lg:col-span-1">
              <div className="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-2xl p-6 mb-4 group-hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-amber-800 dark:text-amber-400">
                  Premium Materials
                </h3>
                <p className="text-muted-foreground text-sm">
                  Sourcing finest Teak, Rosewood, and other premium woods from
                  trusted suppliers across Maharashtra
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-4 text-amber-800 dark:text-amber-400">
                  Serving Pune&apos;s Finest Neighborhoods
                </h3>
                <p className="text-muted-foreground mb-6">
                  From the historic lanes of Pune Cantonment to the modern
                  developments of Hinjewadi, we&apos;ve crafted beautiful wooden
                  pieces for homes and offices across the city.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span>Kothrud</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span>Baner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span>Hinjewadi</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span>Wakad</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span>Deccan</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-amber-700 rounded-full"></div>
                    <span>Pune Cantonment</span>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-amber-700 to-orange-700 text-white rounded-2xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-3xl font-bold mb-2">500+</div>
                      <div className="text-sm text-amber-100">
                        Happy Clients
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">20+</div>
                      <div className="text-sm text-amber-100">
                        Years in Pune
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">5</div>
                      <div className="text-sm text-amber-100">
                        Expert Craftsmen
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold mb-2">100%</div>
                      <div className="text-sm text-amber-100">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
