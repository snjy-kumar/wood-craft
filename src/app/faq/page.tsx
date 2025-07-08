import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MessageCircle, Phone, Mail } from "lucide-react";

const faqs = [
  {
    category: "General Information",
    questions: [
      {
        question:
          "How long has Ganesh Thakur been in the woodworking business?",
        answer:
          "Ganesh Thakur has over 20 years of experience in woodworking and carpentry. He established his workshop in Pune in 2003 and has been serving clients across Maharashtra with exceptional craftsmanship.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We primarily serve Pune and surrounding areas in Maharashtra, including Kothrud, Baner, Hinjewadi, Wakad, Deccan, and Pune Cantonment. For larger projects, we may consider work in other parts of Maharashtra.",
      },
      {
        question: "Do you work with a team?",
        answer:
          "Yes, Ganesh Thakur leads a skilled team of 5 craftsmen, each specializing in different aspects of woodworking including traditional joinery, carving, finishing, and project coordination.",
      },
    ],
  },
  {
    category: "Services & Projects",
    questions: [
      {
        question: "What types of wood do you work with?",
        answer:
          "We work with a variety of premium wood species including Teak (Sagwan), Rosewood (Sheesham), Mango wood, engineered wood, and other hardwoods. We source quality materials both locally and from certified suppliers across India.",
      },
      {
        question: "Do you provide design services?",
        answer:
          "Yes, we offer comprehensive design services for all our projects. We can work from your ideas, sketches, or inspiration photos to create detailed designs and 3D renderings that help visualize the final product.",
      },
      {
        question: "Can you handle both traditional and modern designs?",
        answer:
          "Absolutely! Ganesh Thakur&apos;s expertise spans traditional Maharashtrian woodworking techniques and contemporary design. We can create pieces that blend traditional craftsmanship with modern aesthetics.",
      },
      {
        question: "Do you work on commercial projects?",
        answer:
          "Yes, we handle both residential and commercial projects including office furniture, restaurant fittings, retail displays, and other commercial woodworking requirements.",
      },
    ],
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "What is your typical project timeline?",
        answer:
          "Project timelines vary based on complexity and scope. Simple furniture pieces may take 2-4 weeks, while complete room renovations can take 4-8 weeks. We provide detailed timelines during the initial consultation.",
      },
      {
        question: "Do you provide free estimates?",
        answer:
          "Yes, we provide free estimates for all projects. We prefer to visit your location to better understand your requirements and provide accurate pricing.",
      },
      {
        question: "What is your payment structure?",
        answer:
          "We typically require a 40% advance to begin work, 40% at the midway point, and the remaining 20% upon completion. For larger projects, we may establish a custom payment schedule.",
      },
      {
        question: "Do you handle the installation?",
        answer:
          "Yes, our team handles complete installation of all our work. We ensure proper fitting, finishing, and cleanup as part of our comprehensive service.",
      },
    ],
  },
  {
    category: "Quality & Warranty",
    questions: [
      {
        question: "Do you offer warranties on your work?",
        answer:
          "Yes, all our custom pieces come with a 5-year warranty against defects in materials and workmanship. We stand behind the quality of our work and are committed to client satisfaction.",
      },
      {
        question: "How do you ensure quality in your work?",
        answer:
          "We maintain strict quality standards through careful material selection, traditional joinery techniques, multiple quality checks during construction, and proper finishing. Each team member is experienced and takes pride in their craftsmanship.",
      },
      {
        question: "Do you provide maintenance services?",
        answer:
          "Yes, we offer maintenance and repair services for all our work. We also provide guidance on proper care and maintenance to ensure the longevity of your wooden furniture and fixtures.",
      },
    ],
  },
  {
    category: "Pricing & Materials",
    questions: [
      {
        question: "How do you determine pricing?",
        answer:
          "Our pricing is based on design complexity, materials used, size of the project, and time required. We provide transparent pricing with detailed breakdowns of materials and labor costs.",
      },
      {
        question: "Do you source materials locally?",
        answer:
          "We source materials from both local suppliers in Maharashtra and certified suppliers across India. We prioritize quality and sustainability in our material selection.",
      },
      {
        question: "Can I supply my own materials?",
        answer:
          "Yes, you can provide your own materials. However, we need to inspect them for quality and suitability. Please note that we cannot warranty work done with client-supplied materials.",
      },
      {
        question: "Do you work with eco-friendly materials?",
        answer:
          "Yes, we prioritize sustainable and eco-friendly materials. We work with certified wood suppliers and use environmentally conscious finishes whenever possible.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl mb-6">
          Frequently Asked Questions
        </h1>
        <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
          Find answers to common questions about our woodworking services,
          processes, and policies. If you don&apos;t find what you&apos;re
          looking for, please don&apos;t hesitate to contact us directly.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="lg:col-span-3">
          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-8">
              <h2 className="font-serif text-2xl font-semibold mb-4 text-amber-800 dark:text-amber-400">
                {category.category}
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${categoryIndex}-${index}`}
                    className="border border-amber-200 rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left hover:text-amber-700">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-8 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-amber-800">
                  Still Have Questions?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Can&apos;t find the answer you&apos;re looking for? Our team
                  is here to help!
                </p>
                <div className="space-y-3">
                  <Button
                    asChild
                    className="w-full bg-amber-700 hover:bg-amber-800"
                  >
                    <Link href="/contact">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Contact Us
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-amber-700 text-amber-700"
                  >
                    <Link href="tel:+918969892003">
                      <Phone className="mr-2 h-4 w-4" />
                      Call Now
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-amber-700 text-amber-700"
                  >
                    <Link href="mailto:ganeshthakur@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Us
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-amber-800">Quick Facts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium">Experience:</span>
                  <span>20+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Team Size:</span>
                  <span>5 Craftsmen</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Location:</span>
                  <span>Pune, Maharashtra</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Warranty:</span>
                  <span>5 Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Free Estimate:</span>
                  <span>Yes</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title:
    "Frequently Asked Questions - Ganesh Thakur Woodcraft | Expert Answers",
  description:
    "Get answers to common questions about our woodworking services, processes, timelines, and quality standards. Expert guidance from Ganesh Thakur's team in Pune.",
  keywords:
    "woodworking FAQ Pune, carpenter questions Maharashtra, furniture making process, woodwork warranty, Ganesh Thakur services",
};
