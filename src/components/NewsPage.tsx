"use client"; // Needed because we'll use useState for "Load More"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react"; // Import useState
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"; // Added Tag, User, ArrowRight

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"; // Added more Card parts
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator"; // For visual separation

const allNewsItems = [
  // Renamed to reflect it's the full list
  {
    id: 1,
    title: "Ganesh Thakur Woodcraft Wins Sustainable Craftsmanship Award",
    excerpt:
      "We're honored and proud to announce that our workshop has been recognized for its deep commitment to eco-friendly practices and sustainable sourcing in the annual Woodworkers Guild awards.",
    image: "/images/image.avif?height=400&width=600",
    date: "March 10, 2023",
    readTime: "5 min read",
    author: "Ganesh Thakur",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Awards",
    tags: ["Sustainability", "Awards", "Craftsmanship", "Eco-Friendly"],
  },
  {
    id: 2,
    title: "New Partnership with Local Lumber Supplier 'Forest First'",
    excerpt:
      "Exciting news! We've partnered with Forest First, a local lumber supplier known for their responsibly harvested timber, ensuring high-quality, sustainable wood for all our future projects.",
    image: "/images/image.avif?height=400&width=600",
    date: "February 15, 2023",
    readTime: "4 min read",
    author: "Sarah Johnson",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Partnerships",
    tags: ["Partnerships", "Sustainability", "Materials", "Local"],
  },
  {
    id: 3,
    title: "Upcoming Workshop: Introduction to Hand-Cut Dovetails",
    excerpt:
      "Join us next month for a hands-on workshop where you'll learn the fundamentals of creating beautiful and strong hand-cut dovetail joints. Limited spots available!",
    image: "/images/image.avif?height=400&width=600",
    date: "January 25, 2023",
    readTime: "3 min read",
    author: "Workshop Team",
    authorImage: "/images/image.avif?height=100&width=100", // Maybe a generic workshop logo
    category: "Events",
    tags: ["Workshop", "Events", "Techniques", "Joinery", "Education"],
  },
  {
    id: 4,
    title: "Showcase: The Elmwood Dining Table Project",
    excerpt:
      "Take a closer look at one of our recent bespoke commissions – a stunning dining table crafted from locally sourced elm, featuring intricate inlay work and a hand-rubbed oil finish.",
    image: "/images/image.avif?height=400&width=600",
    date: "December 5, 2022",
    readTime: "6 min read",
    author: "Michael Chen",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Projects",
    tags: ["Custom Furniture", "Projects", "Showcase", "Dining Table", "Elm"],
  },
  {
    id: 5,
    title: "Our Commitment to Reducing Workshop Waste",
    excerpt:
      "Learn about the steps we're taking to minimize waste in our workshop, from recycling offcuts to using sawdust for composting. Every little bit helps protect our environment.",
    image: "/images/image.avif?height=400&width=600",
    date: "November 18, 2022",
    readTime: "4 min read",
    author: "Ganesh Thakur",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Sustainability",
    tags: ["Sustainability", "Workshop", "Waste Reduction", "Eco-Friendly"],
  },
];

const ITEMS_PER_PAGE = 4; // How many items to show initially / load per click

export default function NewsPage() {
  const [visibleItems, setVisibleItems] = useState(ITEMS_PER_PAGE);

  const newsItemsToShow = allNewsItems.slice(0, visibleItems);

  const loadMoreItems = () => {
    setVisibleItems((prev) =>
      Math.min(prev + ITEMS_PER_PAGE, allNewsItems.length)
    );
  };

  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-12 text-center">
        {" "}
        {/* Centered heading */}
        <Badge
          variant="outline"
          className="mb-4 text-sm font-semibold text-amber-700 border-amber-700"
        >
          Latest Updates
        </Badge>
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          News & Happenings
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Stay connected with the latest news, upcoming events, project
          showcases, and insights from the Ganesh Thakur Woodcraft workshop.
        </p>
      </div>

      <Separator className="mb-12" />

      {newsItemsToShow.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {newsItemsToShow.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={item.image || "/images/image.avif"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6 flex flex-col flex-grow">
                {" "}
                {/* Added flex-grow */}
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <Badge variant="secondary" className="py-1 px-2">
                    {item.category}
                  </Badge>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>
                </div>
                <CardTitle className="mb-2 font-serif text-xl lg:text-2xl font-semibold leading-tight">
                  <Link
                    href={`/news/${item.id}`}
                    className="hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
                  >
                    {item.title}
                  </Link>
                </CardTitle>
                <CardDescription className="mb-4 text-sm flex-grow">
                  {" "}
                  {/* Added flex-grow */}
                  {item.excerpt}
                </CardDescription>
                {/* Author Info */}
                <div className="flex items-center gap-2 mb-4 text-sm">
                  <Image
                    src={item.authorImage || "/images/image.avif"}
                    alt={item.author}
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  <span className="font-medium text-muted-foreground">
                    By {item.author}
                  </span>
                </div>
                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="mb-5 flex flex-wrap items-center gap-2">
                    <Tag className="h-4 w-4 text-muted-foreground" />
                    {item.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                {" "}
                {/* mt-auto pushes footer down */}
                <Link
                  href={`/news/${item.id}`}
                  className="inline-flex items-center text-amber-700 hover:text-amber-800 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-center text-muted-foreground py-8">
          No news items found.
        </p> // Message if no news
      )}

      {/* Load More Button */}
      {visibleItems < allNewsItems.length && (
        <div className="mt-12 text-center">
          <Button
            onClick={loadMoreItems}
            variant="outline"
            className="border-amber-700 text-amber-700 hover:bg-amber-50 hover:text-amber-800"
            aria-label="Load more news articles"
          >
            Load More News
          </Button>
        </div>
      )}
    </div>
  );
}
