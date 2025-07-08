import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const events = [
  {
    id: 1,
    title: "Woodworking Workshop: Basic Joinery Techniques",
    date: "April 22, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Ganesh Thakur Woodcraft Workshop",
    image: "/images/image.avif?height=400&width=600",
    description:
      "Learn the basics of joinery techniques in this hands-on workshop. All materials provided.",
  },
  {
    id: 2,
    title: "Open House & Studio Tour",
    date: "May 5, 2023",
    time: "1:00 PM - 5:00 PM",
    location: "Ganesh Thakur Woodcraft Workshop",
    image: "/images/image.avif?height=400&width=600",
    description:
      "Join us for an open house and tour of our woodworking studio. Meet our team and see our latest projects.",
  },
];

export default function EventsPage() {
  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Upcoming Events
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Join us for workshops, tours, and other events at Ganesh Thakur
          Woodcraft.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {events.map((event) => (
          <Card key={event.id} className="overflow-hidden">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 font-serif text-xl font-semibold">
                <Link href={`/events/${event.id}`} className="hover:underline">
                  {event.title}
                </Link>
              </h3>
              <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{event.time}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                {event.description}
              </p>
              <Button asChild className="mt-6 bg-amber-700 hover:bg-amber-800">
                <Link href={`/events/${event.id}`}>Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
