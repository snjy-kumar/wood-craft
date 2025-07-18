import Image from "next/image";
import Link from "next/link";
import { Award, CheckCircle, PenToolIcon as Tool } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          About Us
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
          With over 20 years of experience, we&apos;ve built a reputation for
          exceptional craftsmanship, attention to detail, and customer
          satisfaction. Every piece tells a story of dedication and artistry.
        </p>
      </div>

      {/* Master Craftsman Story */}
      <section className="mb-20 grid gap-12 md:grid-cols-2 items-center">
        <div className="order-2 md:order-1">
          <h2 className="mb-6 font-serif text-3xl font-bold text-amber-800 dark:text-amber-400">
            The Master Craftsman
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Ganesh Thakur&apos;s journey began over two decades ago with a
              simple passion for working with wood. What started as a hobby in
              his family workshop has evolved into a renowned woodworking studio
              creating custom pieces for clients across Pune and Maharashtra.
            </p>
            <p>
              After completing his formal training in traditional Indian
              woodworking techniques and modern carpentry methods, Ganesh spent
              years perfecting his craft under master artisans before
              establishing his own workshop in Pune in 2003. Today, he leads a
              dedicated team of 5 skilled craftsmen who share his commitment to
              excellence.
            </p>
            <p>
              His philosophy is simple: create pieces that combine timeless
              design with uncompromising quality. Each project is approached
              with meticulous attention to detail, from selecting the perfect
              wood to applying the final finish. The team&apos;s collective 20+
              years of experience ensures every piece meets the highest
              standards.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                icon: CheckCircle,
                text: "Master Craftsman - Traditional & Modern",
              },
              { icon: CheckCircle, text: "20+ Years Experience in Pune" },
              { icon: Award, text: "Excellence in Indian Woodworking" },
              { icon: Tool, text: "Team of 5 Skilled Artisans" },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <item.icon className="h-5 w-5 text-amber-600 dark:text-amber-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative order-1 aspect-square overflow-hidden rounded-xl md:order-2 shadow-2xl">
          <Image
            src="/images/image.avif"
            alt="Ganesh Thakur, Master Woodworker from Pune"
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-950/50 p-8 md:p-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Let&apos;s discuss your vision and create something extraordinary
            together. From concept to completion, we&apos;ll guide you through
            every step of bringing your dream to life.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Link href="/qoute">Request a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700/10 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
