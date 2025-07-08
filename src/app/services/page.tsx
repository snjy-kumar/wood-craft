import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceProcessSteps } from "@/components/service-process-steps";
import { BeforeAfterSlider } from "@/components/before-after-slider";

export default function ServicesPage() {
  return (
    <div
      className="
     px-4 py-12 md:px-6 md:py-16 lg:py-20"
    >
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          From custom furniture to complete home renovations, we offer a wide
          range of woodworking services tailored to your unique needs and
          vision.
        </p>
      </div>

      {/* Services Overview */}
      <section className="mb-16">
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
              value="outdoor"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-amber-700"
            >
              Outdoor Structures
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
              <div>
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  Custom Furniture
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Our custom furniture is designed and built specifically for
                  you, taking into account your space, style preferences, and
                  functional needs. Each piece is handcrafted using traditional
                  woodworking techniques combined with modern precision.
                </p>
                <p className="mb-6 text-muted-foreground">
                  We work with a wide range of domestic and exotic hardwoods,
                  and can incorporate other materials such as metal, glass, and
                  stone to create truly unique pieces that will become family
                  heirlooms.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Tables, desks, and dining sets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Chairs, benches, and seating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Cabinets, bookcases, and storage solutions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Beds and bedroom furniture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Custom built-ins and wall units</span>
                  </li>
                </ul>
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/quote">Request a Quote</Link>
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/image.avif?height=600&width=800"
                    alt="Custom dining table"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/image.avif?height=400&width=400"
                      alt="Custom chair"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/image.avif?height=400&width=400"
                      alt="Custom cabinet"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="renovations" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  Home Renovations
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Transform your living spaces with our custom woodworking and
                  cabinetry services. We specialize in kitchen and bathroom
                  renovations, built-in shelving, custom trim work, and more.
                </p>
                <p className="mb-6 text-muted-foreground">
                  Our renovation services include design consultation, material
                  selection, custom fabrication, and professional installation.
                  We work closely with homeowners, interior designers, and
                  contractors to ensure a seamless process.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Kitchen remodels and custom cabinetry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Bathroom vanities and storage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Built-in bookcases and entertainment centers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Custom trim, molding, and architectural details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Home office and workspace solutions</span>
                  </li>
                </ul>
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/quote">Request a Quote</Link>
                </Button>
              </div>
              <div>
                <BeforeAfterSlider />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="outdoor" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  Outdoor Structures
                </h2>
                <p className="mb-4 text-muted-foreground">
                  Extend your living space to the outdoors with our
                  custom-designed and built structures. We use weather-resistant
                  woods and finishes to ensure durability and longevity in
                  outdoor environments.
                </p>
                <p className="mb-6 text-muted-foreground">
                  From simple garden benches to elaborate outdoor kitchens, we
                  can help you create the perfect outdoor living space for
                  entertaining, relaxing, and enjoying nature.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Custom decks and patios</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Pergolas and gazebos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Outdoor furniture and seating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Planters and garden structures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Fencing, gates, and privacy screens</span>
                  </li>
                </ul>
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/quote">Request a Quote</Link>
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/image.avif?height=600&width=800"
                    alt="Custom pergola"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/image.avif?height=400&width=400"
                      alt="Outdoor furniture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/image.avif?height=400&width=400"
                      alt="Garden structure"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="commercial" className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="mb-4 font-serif text-3xl font-bold">
                  Commercial Projects
                </h2>
                <p className="mb-4 text-muted-foreground">
                  We work with businesses, restaurants, hotels, and offices to
                  create custom woodwork that enhances their brand and customer
                  experience. Our commercial projects are designed to withstand
                  heavy use while maintaining their beauty.
                </p>
                <p className="mb-6 text-muted-foreground">
                  From reception desks and conference tables to restaurant
                  furnishings and retail displays, we can help you create a
                  distinctive environment that reflects your business identity.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Restaurant tables, bars, and seating</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Office furniture and conference rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Reception areas and waiting rooms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Retail displays and fixtures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-amber-600" />
                    <span>Custom architectural elements</span>
                  </li>
                </ul>
                <Button asChild className="bg-amber-700 hover:bg-amber-800">
                  <Link href="/quote">Request a Quote</Link>
                </Button>
              </div>
              <div className="grid gap-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src="/images/image.avif?height=600&width=800"
                    alt="Commercial project"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/image.avif?height=400&width=400"
                      alt="Restaurant furniture"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src="/images/image.avif?height=400&width=400"
                      alt="Office furniture"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Our Process */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold">Our Process</h2>
          <p className="mt-2 text-muted-foreground">
            From initial concept to final installation, we guide you through
            every step
          </p>
        </div>
        <ServiceProcessSteps />
      </section>

      {/* Materials */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold">
            Materials We Work With
          </h2>
          <p className="mt-2 text-muted-foreground">
            We source the finest materials to ensure quality, durability, and
            beauty
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Hardwoods</CardTitle>
              <CardDescription>Domestic and exotic varieties</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-amber-800"></div>
                  <span>Walnut</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-amber-600"></div>
                  <span>Cherry</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-amber-300"></div>
                  <span>Maple</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-amber-950"></div>
                  <span>Mahogany</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-amber-500"></div>
                  <span>Oak</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Complementary Materials</CardTitle>
              <CardDescription>For mixed-media designs</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-gray-500"></div>
                  <span>Steel & Iron</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                  <span>Brass & Bronze</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-blue-200"></div>
                  <span>Glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-gray-300"></div>
                  <span>Stone & Concrete</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-gray-800"></div>
                  <span>Leather</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Sustainable Options</CardTitle>
              <CardDescription>Eco-friendly alternatives</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-700"></div>
                  <span>Reclaimed Wood</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                  <span>FSC Certified Lumber</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-300"></div>
                  <span>Bamboo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-800"></div>
                  <span>Cork</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-4 w-4 rounded-full bg-green-600"></div>
                  <span>Low-VOC Finishes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Service Area */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold">Service Area</h2>
          <p className="mt-2 text-muted-foreground">
            We proudly serve the following areas with our custom woodworking
            services
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg bg-amber-100">
            {/* This would be replaced with an actual map component */}
            <div className="flex h-full items-center justify-center p-4 text-center">
              <p>Interactive Service Area Map Would Be Displayed Here</p>
            </div>
          </div>
          <div>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 font-serif text-xl font-semibold">
                  Primary Service Areas
                </h3>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span>
                      Craftsville and surrounding areas (30-mile radius)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span>Downtown Metropolitan Area</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span>North County Region</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-amber-600" />
                    <span>Coastal Communities</span>
                  </li>
                </ul>
                <p className="mb-4 text-muted-foreground">
                  For projects outside our primary service area, additional
                  travel fees may apply. For larger projects, we&apos;re willing
                  to travel nationwide.
                </p>
                <p className="text-muted-foreground">
                  Not sure if you&apos;re within our service area? Contact us to
                  discuss your project and location.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="font-serif text-3xl font-bold">Pricing & Estimates</h2>
          <p className="mt-2 text-muted-foreground">
            We provide transparent pricing based on your specific project
            requirements
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Custom Furniture</CardTitle>
              <CardDescription>
                Starting prices for custom pieces
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span>Dining Tables</span>
                  <span className="font-semibold">From $2,500</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Coffee Tables</span>
                  <span className="font-semibold">From $1,200</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Bookcases</span>
                  <span className="font-semibold">From $1,800</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Chairs</span>
                  <span className="font-semibold">From $800</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Bed Frames</span>
                  <span className="font-semibold">From $2,200</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Home Renovations</CardTitle>
              <CardDescription>
                Estimated ranges for renovation projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span>Kitchen Cabinetry</span>
                  <span className="font-semibold">$15,000 - $50,000+</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Bathroom Vanities</span>
                  <span className="font-semibold">$2,500 - $8,000</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Built-in Shelving</span>
                  <span className="font-semibold">
                    $300 - $600 per linear ft
                  </span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Custom Trim Work</span>
                  <span className="font-semibold">$15 - $45 per linear ft</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Home Office</span>
                  <span className="font-semibold">$5,000 - $20,000</span>
                </li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Outdoor Projects</CardTitle>
              <CardDescription>
                Price ranges for outdoor structures
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span>Custom Decks</span>
                  <span className="font-semibold">$50 - $100 per sq ft</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Pergolas</span>
                  <span className="font-semibold">From $5,000</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Outdoor Furniture</span>
                  <span className="font-semibold">From $1,500</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Garden Structures</span>
                  <span className="font-semibold">From $2,000</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Custom Fencing</span>
                  <span className="font-semibold">$40 - $90 per linear ft</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <p className="mb-6 text-muted-foreground">
            These prices are estimates and may vary based on materials,
            complexity, and specific requirements. Contact us for a personalized
            quote.
          </p>
          <Button asChild size="lg" className="bg-amber-700 hover:bg-amber-800">
            <Link href="/quote">Request a Detailed Quote</Link>
          </Button>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-muted-foreground">
            Common questions about our services and process
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-serif text-lg font-semibold">
                How long does a custom furniture project take?
              </h3>
              <p className="text-muted-foreground">
                Depending on the complexity and our current workload, most
                custom furniture pieces take 6-12 weeks from design approval to
                completion. Larger projects may take longer.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-serif text-lg font-semibold">
                Do you provide design services?
              </h3>
              <p className="text-muted-foreground">
                Yes, we offer comprehensive design services for all our
                projects. We can work from your ideas, sketches, or inspiration
                photos to create detailed designs and 3D renderings.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-serif text-lg font-semibold">
                What is your payment structure?
              </h3>
              <p className="text-muted-foreground">
                We typically require a 50% deposit to begin work, with the
                remaining balance due upon completion. For larger projects, we
                may establish a payment schedule with multiple installments.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-2 font-serif text-lg font-semibold">
                Do you offer warranties on your work?
              </h3>
              <p className="text-muted-foreground">
                Yes, all our custom pieces come with a 5-year warranty against
                defects in materials and workmanship. We stand behind the
                quality of our work and are committed to your satisfaction.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button
            asChild
            variant="outline"
            className="border-amber-700 text-amber-700 hover:bg-amber-700/10"
          >
            <Link href="/faq">View All FAQs</Link>
          </Button>
        </div>
      </section>

      {/* Indian Woodworking Heritage */}
      <section className="mb-16">
        <div className="mb-12 text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Traditional Indian Woodworking Excellence
          </h2>
          <p className="max-w-3xl mx-auto text-muted-foreground">
            Ganesh Thakur combines time-honored Indian woodworking traditions
            with modern techniques, using premium local and imported wood
            species to create exceptional pieces.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">
                Premium Wood Species
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Teak (Sagwan):</strong> Premium hardwood known for
                    durability and resistance to termites
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Rosewood (Sheesham):</strong> Beautiful grain
                    patterns, perfect for traditional furniture
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Mango Wood:</strong> Sustainable option with unique
                    character and warm tones
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Bamboo:</strong> Eco-friendly, strong, and
                    increasingly popular for modern designs
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">
                Traditional Techniques
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Mortise & Tenon Joinery:</strong> Ancient technique
                    ensuring structural integrity
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Hand Carving:</strong> Intricate patterns inspired
                    by Maharashtrian art forms
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Natural Finishes:</strong> Traditional oils and
                    waxes for authentic appearance
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Dovetail Joints:</strong> Precision craftsmanship
                    for long-lasting furniture
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">
                Local Specialties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Pooja Mandirs:</strong> Traditional prayer rooms
                    with intricate carved details
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Warli Art Integration:</strong> Incorporating
                    traditional Maharashtrian motifs
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Monsoon-Ready Finishes:</strong> Special treatments
                    for Pune&apos;s climate
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <div>
                    <strong>Brass Hardware:</strong> Traditional fittings
                    sourced from local artisans
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 rounded-xl p-8 md:p-12">
          <div className="text-center">
            <h3 className="font-serif text-2xl font-semibold mb-4">
              20+ Years of Pune Craftsmanship
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Ganesh Thakur&apos;s expertise spans traditional Maharashtrian
              woodworking and contemporary design. Our team understands local
              preferences, climate considerations, and cultural significance in
              every project.
            </p>
            <div className="grid gap-6 md:grid-cols-4 text-center">
              <div>
                <div className="text-2xl font-bold text-amber-700 mb-2">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-700 mb-2">5</div>
                <div className="text-sm text-muted-foreground">
                  Expert Craftsmen
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-700 mb-2">
                  20+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-amber-700 mb-2">
                  100%
                </div>
                <div className="text-sm text-muted-foreground">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-lg bg-amber-100 p-8 md:p-12">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Transform Your Space?
          </h2>
          <p className="mt-4 max-w-[600px] text-muted-foreground">
            Let&apos;s discuss your vision and create something extraordinary
            together. From concept to completion, we&apos;ll guide you through
            every step.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-amber-700 hover:bg-amber-800"
            >
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
  );
}
