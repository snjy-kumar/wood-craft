"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "The custom dining table that Artisan Woodcraft created for our home is absolutely stunning. The attention to detail and craftsmanship is exceptional. It's become the centerpiece of our home and we receive compliments from everyone who visits.",
    image: "/images/person.jpg?height=100&width=100",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Interior Designer",
    content:
      "I've worked with many carpenters over my 15 years as an interior designer, and Artisan Woodcraft stands out for their precision, reliability, and artistic vision. They don't just execute plans – they enhance them with their expertise.",
    image: "/images/person.jpg?height=100&width=100",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Restaurant Owner",
    content:
      "When we needed custom tables and a bar for our new restaurant, Artisan Woodcraft delivered beyond our expectations. The pieces are not only beautiful but have withstood heavy daily use for years. Worth every penny.",
    image: "/images/person.jpg?height=100&width=100",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current, autoplay])

  return (
    <div className="relative" onMouseEnter={() => setAutoplay(false)} onMouseLeave={() => setAutoplay(true)}>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="w-full flex-shrink-0 border-none shadow-none">
              <CardContent className="flex flex-col items-center p-6 text-center md:p-10">
                <Quote className="mb-6 h-12 w-12 text-amber-200" />
                <p className="mb-6 text-lg italic md:text-xl">{testimonial.content}</p>
                <div className="mt-4 flex flex-col items-center">
                  <div className="mb-3 overflow-hidden rounded-full border-2 border-amber-200">
                    <Image
                      src={testimonial.image || "/images/person.jpg"}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-amber-200 bg-white/80 hover:bg-white"
        onClick={prev}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-amber-200 bg-white/80 hover:bg-white"
        onClick={next}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next testimonial</span>
      </Button>
      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-amber-700" : "bg-amber-200"}`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

