import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "How long does a custom furniture project take?",
      answer:
        "Depending on the complexity and our current workload, most custom furniture pieces take 6-12 weeks from design approval to completion. Larger projects may take longer.",
    },
    {
      question: "Do you provide design services?",
      answer:
        "Yes, we offer comprehensive design services for all our projects. We can work from your ideas, sketches, or inspiration photos to create detailed designs and 3D renderings.",
    },
    {
      question: "What is your payment structure?",
      answer:
        "We typically require a 50% deposit to begin work, with the remaining balance due upon completion. For larger projects, we may establish a payment schedule with multiple installments.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer:
        "Yes, all our custom pieces come with a 5-year warranty against defects in materials and workmanship. We stand behind the quality of our work and are committed to your satisfaction.",
    },
    {
      question: "What types of wood do you work with?",
      answer:
        "We work with a wide range of domestic and exotic hardwoods, including walnut, cherry, maple, oak, and mahogany. We can also source specific woods upon request.",
    },
    {
      question: "Do you offer delivery and installation services?",
      answer:
        "Yes, we provide professional delivery and installation services for all our projects. We take great care to ensure your pieces are delivered safely and installed correctly.",
    },
  ]
  
  export default function FAQPage() {
    return (
      <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="mb-10">
          <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 max-w-3xl text-muted-foreground">
            Find answers to common questions about our services, process, and
            materials.
          </p>
        </div>
  
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-serif text-lg">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    )
  }