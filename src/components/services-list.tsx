import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Custom Furniture",
    description:
      "Handcrafted pieces designed specifically for your space and needs",
    features: [
      "Tables & Desks",
      "Chairs & Seating",
      "Cabinets & Storage",
      "Beds & Bedroom Furniture",
    ],
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
        className="h-10 w-10 text-primary-foreground"
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
  },
  {
    title: "Home Renovations",
    description:
      "Transform your living spaces with custom woodwork and cabinetry",
    features: [
      "Kitchen Remodels",
      "Bathroom Vanities",
      "Built-in Shelving",
      "Custom Trim & Molding",
    ],
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
        className="h-10 w-10 text-primary-foreground"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "Outdoor Structures",
    description: "Extend your living space with beautiful outdoor woodwork",
    features: [
      "Decks & Patios",
      "Pergolas",
      "Garden Furniture",
      "Fencing & Gates",
    ],
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
        className="h-10 w-10 text-primary-foreground"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

export function ServicesList() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card
          key={index}
          className="group border-primary bg-gradient-to-br from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 card-shadow-lg"
        >
          <CardHeader className="pb-4">
            <div className="mb-4 p-3 rounded-full bg-primary-foreground/20 w-fit transition-all duration-300 group-hover:bg-primary-foreground/30 group-hover:scale-110">
              {service.icon}
            </div>
            <CardTitle className="font-serif text-xl text-primary-foreground group-hover:text-primary-foreground/90 transition-colors">
              {service.title}
            </CardTitle>
            <CardDescription className="text-primary-foreground/80 leading-relaxed text-pretty">
              {service.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 group/item">
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
                    className="h-4 w-4 text-primary-foreground/90 flex-shrink-0 transition-all duration-300 group-hover/item:text-primary-foreground group-hover/item:scale-110"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-primary-foreground/90 transition-colors group-hover/item:text-primary-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
