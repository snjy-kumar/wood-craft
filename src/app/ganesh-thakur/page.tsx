import Image from "next/image";
import Link from "next/link";
import {
  Award,
  CheckCircle,
  PenToolIcon as Tool,
  Users,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Separator } from "@/components/ui/separator";

export default function GaneshThakurPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      {/* Hero Section */}
      <div className="mb-16 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-gradient-to-r from-amber-700 to-amber-900 bg-clip-text text-transparent">
          Ganesh Thakur
        </h1>
        <p className="text-2xl font-medium text-amber-700 dark:text-amber-400 mb-4">
          Master Carpenter & Wood Artisan
        </p>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg leading-relaxed">
          A passionate craftsman with over 20 years of experience in traditional
          and modern woodworking, leading a team of skilled artisans in Pune,
          Maharashtra.
        </p>
      </div>

      {/* Main Profile Section */}
      <section className="mb-20 grid gap-12 lg:grid-cols-2 items-center">
        <div className="order-2 lg:order-1">
          <h2 className="mb-6 font-serif text-3xl font-bold text-amber-800 dark:text-amber-400">
            The Journey of Excellence
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Born and raised in Pune, Ganesh Thakur discovered his passion for
              woodworking at an early age, learning traditional techniques from
              local master craftsmen. His journey from a curious apprentice to a
              renowned master carpenter spans over two decades of dedication,
              innovation, and artistic excellence.
            </p>
            <p>
              What started as a small workshop in Pune has now grown into one of
              Maharashtra&apos;s most trusted names in custom furniture and fine
              woodworking. Ganesh&apos;s expertise combines time-honored Indian
              woodworking traditions with contemporary design sensibilities,
              creating pieces that are both functional and artistic.
            </p>
            <p>
              Leading a team of 5 highly skilled craftsmen, Ganesh has
              successfully completed over 500 projects across Pune and
              surrounding areas. His commitment to quality, customer
              satisfaction, and preserving traditional craftsmanship has earned
              him recognition throughout Maharashtra.
            </p>
          </div>

          {/* Contact Information */}
          <div className="mt-8 p-6 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/50 dark:to-amber-900/30 rounded-xl">
            <h3 className="font-serif text-xl font-semibold mb-4 text-amber-800 dark:text-amber-300">
              Get in Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span className="font-medium">+91 8969892003</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span className="font-medium">ganeshthakur@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span className="font-medium">Pune, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/images/image.avif"
              alt="Ganesh Thakur - Master Carpenter from Pune"
              fill
              className="object-cover transition-transform hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm font-medium bg-black/50 backdrop-blur-sm px-3 py-1 rounded">
                Master Craftsman since 2003
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise & Skills */}
      <section className="mb-20">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold">
          Expertise & Specializations
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Traditional Indian Woodworking",
              description:
                "Master of classical Indian joinery techniques, traditional carving, and time-honored methods passed down through generations.",
              icon: "🏛️",
            },
            {
              title: "Modern Furniture Design",
              description:
                "Contemporary furniture design with clean lines, functional aesthetics, and modern living requirements.",
              icon: "🛋️",
            },
            {
              title: "Custom Kitchen Cabinetry",
              description:
                "Modular kitchen solutions with optimal storage, ergonomic design, and premium wood finishes.",
              icon: "🏠",
            },
            {
              title: "Restoration & Refinishing",
              description:
                "Expert restoration of antique furniture and refinishing services to bring old pieces back to life.",
              icon: "🔄",
            },
            {
              title: "Outdoor Wooden Structures",
              description:
                "Weather-resistant outdoor furniture, pergolas, and garden structures suitable for Indian climate.",
              icon: "🌳",
            },
            {
              title: "Team Leadership",
              description:
                "Leading and mentoring a team of 5 skilled craftsmen, ensuring quality and knowledge transfer.",
              icon: "👥",
            },
          ].map((skill, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader className="pb-3">
                <div className="text-3xl mb-2">{skill.icon}</div>
                <CardTitle className="text-lg font-serif">
                  {skill.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="mb-20 bg-gradient-to-br from-amber-50/50 to-amber-100/30 dark:from-amber-950/20 dark:to-amber-900/10 -mx-4 px-4 py-16 md:-mx-6 md:px-6 rounded-xl">
        <h2 className="mb-12 text-center font-serif text-3xl font-bold">
          Achievements & Recognition
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Award,
              title: "500+ Projects",
              description: "Successfully completed across Pune and Maharashtra",
            },
            {
              icon: Users,
              title: "Team of 5",
              description: "Skilled craftsmen working together for excellence",
            },
            {
              icon: CheckCircle,
              title: "20+ Years",
              description: "Of dedicated service and continuous learning",
            },
            {
              icon: Tool,
              title: "Traditional & Modern",
              description:
                "Expertise in both classical and contemporary techniques",
            },
          ].map((achievement, index) => (
            <Card
              key={index}
              className="text-center border-none bg-white/80 dark:bg-amber-950/30 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <achievement.icon className="h-12 w-12 text-amber-600 dark:text-amber-400 mx-auto mb-4" />
                <h3 className="font-serif text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {achievement.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="mb-20">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold">
          Philosophy & Approach
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-amber-200 dark:border-amber-800">
            <CardContent className="p-8">
              <blockquote className="text-lg italic text-center leading-relaxed mb-6">
                &ldquo;Every piece of wood has a story to tell. My job is to
                listen to that story and help it become something beautiful,
                functional, and meaningful. Whether it&apos;s a simple stool or
                an elaborate dining set, each project receives the same
                attention, care, and craftsmanship that I would give to
                furniture for my own family.&rdquo;
              </blockquote>
              <div className="text-center">
                <cite className="font-semibold text-amber-700 dark:text-amber-400">
                  - Ganesh Thakur
                </cite>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="mb-8 text-center font-serif text-3xl font-bold">
          Our Skilled Team
        </h2>
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Ganesh leads a dedicated team of 5 skilled craftsmen, each bringing
            their unique expertise and passion for woodworking. Together, they
            ensure every project meets the highest standards of quality and
            craftsmanship.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              name: "Ganesh Thakur",
              role: "Master Carpenter & Team Lead",
              experience: "20+ years",
            },
            {
              name: "Craftsman 2",
              role: "Traditional Joinery Specialist",
              experience: "15+ years",
            },
            {
              name: "Craftsman 3",
              role: "Modern Furniture Expert",
              experience: "12+ years",
            },
            {
              name: "Craftsman 4",
              role: "Finishing & Polishing Specialist",
              experience: "10+ years",
            },
            {
              name: "Craftsman 5",
              role: "Cabinetry & Storage Solutions",
              experience: "8+ years",
            },
          ].map((member, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-800 dark:to-amber-700 mx-auto mb-4 flex items-center justify-center">
                  <Tool className="h-8 w-8 text-amber-700 dark:text-amber-300" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-1">
                  {member.name}
                </h3>
                <p className="text-amber-600 dark:text-amber-400 text-sm font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-xs">
                  {member.experience}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="rounded-xl bg-gradient-to-br from-amber-100 via-amber-50 to-amber-100 dark:from-amber-950/50 dark:via-amber-900/30 dark:to-amber-950/50 p-8 md:p-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Work with Ganesh Thakur
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Ready to bring your woodworking vision to life? Contact Ganesh and
            his team to discuss your project. From traditional Indian furniture
            to modern contemporary pieces, we&apos;re here to create something
            exceptional for you.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-700 to-amber-800 hover:from-amber-800 hover:to-amber-900 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Link href="/contact">Contact Ganesh</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-amber-700 text-amber-700 hover:bg-amber-700/10 dark:border-amber-400 dark:text-amber-400 dark:hover:bg-amber-400/10 transition-all duration-300 hover:-translate-y-0.5"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              <span>+91 8969892003</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>ganeshthakur@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
