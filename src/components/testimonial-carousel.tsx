"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Homeowner, Koregaon Park",
    content:
      "The custom dining table that Ganesh Thakur created for our home in Koregaon Park is absolutely stunning. The attention to detail and craftsmanship is exceptional. It's become the centerpiece of our home and we receive compliments from everyone who visits. His team's dedication and skill is unmatched in Pune.",
    image: "/images/person.jpg",
  },
  {
    id: 2,
    name: "Rajesh Patil",
    role: "Interior Designer, Pune",
    content:
      "I've worked with many carpenters across Maharashtra over my 15 years as an interior designer, and Ganesh Thakur stands out for his precision, reliability, and artistic vision. His team doesn't just execute plans – they enhance them with their expertise and traditional Indian woodworking knowledge.",
    image: "/images/person.jpg",
  },
  {
    id: 3,
    name: "Sunita Kulkarni",
    role: "Restaurant Owner, FC Road",
    content:
      "When we needed custom tables and a traditional wooden bar for our new restaurant on FC Road, Ganesh Thakur's team delivered beyond our expectations. The pieces are not only beautiful but have withstood heavy daily use for years. Their work reflects both modern functionality and traditional Indian craftsmanship. Worth every rupee!",
    image: "/images/person.jpg",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setCurrent((current + 1) % testimonials.length);
  }, [current]);

  const prev = useCallback(() => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  }, [current]);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current, autoplay, next]);

  return (
    <div
      className="relative max-w-4xl mx-auto"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="overflow-hidden rounded-xl bg-gradient-to-br from-card to-amber-50/30 dark:to-amber-950/30 shadow-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="w-full flex-shrink-0 border-none shadow-none bg-transparent"
            >
              <CardContent className="flex flex-col items-center p-8 text-center md:p-12">
                <Quote className="mb-6 h-12 w-12 text-amber-400 dark:text-amber-300" />
                <p className="mb-8 text-lg italic leading-relaxed md:text-xl max-w-2xl">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex flex-col items-center">
                  <div className="mb-4 overflow-hidden rounded-full border-3 border-amber-200 dark:border-amber-700 shadow-lg">
                    <Image
                      src={testimonial.image || "/images/person.jpg"}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="h-20 w-20 object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-amber-900 dark:text-amber-100">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground font-medium">
                      {testimonial.role}
                    </p>
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
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-amber-200 dark:border-amber-700 bg-white/90 dark:bg-amber-950/90 hover:bg-white dark:hover:bg-amber-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        onClick={prev}
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous testimonial</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border-2 border-amber-200 dark:border-amber-700 bg-white/90 dark:bg-amber-950/90 hover:bg-white dark:hover:bg-amber-900 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-110"
        onClick={next}
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next testimonial</span>
      </Button>
      <div className="mt-8 flex justify-center gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              current === index
                ? "bg-amber-700 dark:bg-amber-400 scale-125"
                : "bg-amber-200 dark:bg-amber-700 hover:bg-amber-300 dark:hover:bg-amber-600"
            }`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Go to testimonial {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
