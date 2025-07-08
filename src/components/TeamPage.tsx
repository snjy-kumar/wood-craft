import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "John Carpenter",
    role: "Master Craftsman",
    image: "/images/person.jpg?height=200&width=200",
    bio: "John is the founder of Artisan Woodcraft and a master woodworker with over 20 years of experience.",
  },
  {
    name: "Sarah Johnson",
    role: "Design Consultant",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Sarah is our design consultant, helping clients bring their vision to life with her expertise in interior design.",
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Michael is our project manager, ensuring every project is completed on time and to the highest standards.",
  },
  {
    name: "Emily Rodriguez",
    role: "Finishing Specialist",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Emily is our finishing specialist, applying the perfect touch to every piece with her expertise in wood finishes.",
  },
]

export default function TeamPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Meet Our Team
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          The skilled craftspeople behind our exceptional woodworking projects.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <Card key={index} className="flex flex-col items-center text-center">
            <div className="relative aspect-square h-32 w-32 overflow-hidden rounded-full">
              <Image
                src={member.image || "/images/person.jpg"}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 font-serif text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}