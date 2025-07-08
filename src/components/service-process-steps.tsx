import { Card, CardContent } from "@/components/ui/card"

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We meet to discuss your vision, needs, and budget. This can be in person, via video call, or at our workshop.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "We create detailed designs, select materials, and provide a comprehensive quote for your approval.",
  },
  {
    number: "03",
    title: "Material Selection",
    description:
      "Choose from our selection of premium woods and materials, or we can source specific items for your project.",
  },
  {
    number: "04",
    title: "Fabrication",
    description:
      "Our skilled craftsmen build your project with meticulous attention to detail in our professional workshop.",
  },
  {
    number: "05",
    title: "Finishing",
    description: "We apply high-quality finishes to protect and enhance the natural beauty of the wood.",
  },
  {
    number: "06",
    title: "Delivery & Installation",
    description: "We carefully deliver and install your finished project, ensuring everything is perfect.",
  },
]

export function ServiceProcessSteps() {
  return (
    <div className="px-6 md:px-6 pb-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {processSteps.map((step, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="bg-amber-700 p-4 text-amber-50">
              <span className="font-serif text-3xl font-bold">{step.number}</span>
            </div>
            <div className="p-6">
              <h3 className="mb-2 font-serif text-xl font-semibold">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

