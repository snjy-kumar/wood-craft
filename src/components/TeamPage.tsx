import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Ganesh Thakur",
    role: "Master Craftsman & Founder",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Ganesh is the founder and master craftsman with over 20 years of experience in traditional and modern woodworking techniques, leading a team of 5 skilled artisans in Pune.",
  },
  {
    name: "Rajesh Patil",
    role: "Senior Craftsman",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Rajesh specializes in traditional joinery and has been working with Ganesh for 8 years, bringing expertise in classical Indian woodworking methods.",
  },
  {
    name: "Suresh Jadhav",
    role: "Design & Carving Specialist",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Suresh is our design specialist, known for his intricate carving work and ability to bring client visions to life with artistic precision.",
  },
  {
    name: "Prakash Desai",
    role: "Finishing Expert",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Prakash is our finishing expert, applying the perfect touch to every piece with his deep knowledge of wood stains, polishes, and protective finishes.",
  },
  {
    name: "Manish Kulkarni",
    role: "Project Coordinator",
    image: "/images/person.jpg?height=200&width=200",
    bio: "Manish coordinates all projects, ensuring timely delivery and quality standards while maintaining clear communication with clients throughout Pune.",
  },
];

export default function TeamPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Meet Our Team
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Meet the skilled craftspeople behind our exceptional woodworking
          projects. Led by Ganesh Thakur, our team of 5 dedicated artisans
          brings decades of combined experience in traditional and modern
          woodworking.
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
              <h3 className="mb-2 font-serif text-xl font-semibold">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="mt-4 text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
