import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right Wood for Your Custom Furniture",
    excerpt:
      "Learn about different wood types and their characteristics to make the best choice for your custom furniture project.",
    image: "/images/image.avif?height=400&width=600",
    date: "March 15, 2023",
    readTime: "8 min read",
    author: "John Carpenter",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Materials",
    tags: ["Hardwood", "Furniture", "Materials"],
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Joinery: Traditional Woodworking Techniques",
    excerpt:
      "Explore the traditional joinery methods that have stood the test of time and why they're still relevant today.",
    image: "/images/image.avif?height=400&width=600",
    date: "February 22, 2023",
    readTime: "10 min read",
    author: "Sarah Johnson",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Techniques",
    tags: ["Joinery", "Traditional", "Craftsmanship"],
    featured: true,
  },
  {
    id: 3,
    title: "Designing a Custom Kitchen: From Concept to Completion",
    excerpt: "Follow the journey of a complete kitchen renovation, showcasing our design and installation process.",
    image: "/images/image.avif?height=400&width=600",
    date: "January 10, 2023",
    readTime: "12 min read",
    author: "Michael Chen",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Projects",
    tags: ["Kitchen", "Cabinetry", "Design"],
    featured: false,
  },
  {
    id: 4,
    title: "Sustainable Woodworking: Eco-Friendly Practices in Our Workshop",
    excerpt: "Discover how we implement sustainable practices in our workshop to minimize environmental impact.",
    image: "/images/image.avif?height=400&width=600",
    date: "December 5, 2022",
    readTime: "7 min read",
    author: "John Carpenter",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Sustainability",
    tags: ["Eco-Friendly", "Sustainable", "Workshop"],
    featured: false,
  },
  {
    id: 5,
    title: "Caring for Your Wood Furniture: Maintenance Tips",
    excerpt: "Learn how to properly care for and maintain your wood furniture to ensure it lasts for generations.",
    image: "/images/image.avif?height=400&width=600",
    date: "November 18, 2022",
    readTime: "6 min read",
    author: "Emily Rodriguez",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Maintenance",
    tags: ["Care", "Maintenance", "Furniture"],
    featured: false,
  },
  {
    id: 6,
    title: "The Revival of Mid-Century Modern Furniture",
    excerpt:
      "Explore the enduring appeal of mid-century modern design and how we incorporate these elements in our custom pieces.",
    image: "/images/image.avif?height=400&width=600",
    date: "October 30, 2022",
    readTime: "9 min read",
    author: "Sarah Johnson",
    authorImage: "/images/image.avif?height=100&width=100",
    category: "Design",
    tags: ["Mid-Century", "Design", "Furniture"],
    featured: false,
  },
]

const categories = ["All", "Materials", "Techniques", "Projects", "Design", "Sustainability", "Maintenance"]

const popularTags = [
  "Furniture",
  "Hardwood",
  "Design",
  "Craftsmanship",
  "Kitchen",
  "Sustainable",
  "Joinery",
  "Maintenance",
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">Blog & Articles</h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Insights, tips, and stories from our workshop. Explore our articles to learn more about woodworking, design, and craftsmanship.
        </p>
      </div>

      {/* Featured Posts */}
      <section className="mb-16">
        <h2 className="mb-8 font-serif text-3xl font-bold">Featured Articles</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {featuredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
              <div className="relative aspect-[16/9] w-full">
                <Image
                  src={post.image || "/images/image.avif"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <Badge className="mb-2 bg-amber-600 hover:bg-amber-700">{post.category}</Badge>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-white">
                    <Link href={`/blog/${post.id}`} className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/50 rounded">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-white/80">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid gap-10 lg:grid-cols-3 lg:gap-16">
        <div className="lg:col-span-2">
          {/* Blog Posts */}
          <section>
            <Tabs defaultValue="All" className="w-full">
              <div className="mb-8 overflow-x-auto pb-2"> {/* Ensure horizontal scrolling on small screens */}
                <TabsList className="w-max justify-start border-b pb-px sm:w-full"> {/* Allow list to exceed width on small screens */}
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="whitespace-nowrap rounded-none border-b-2 border-transparent px-4 py-2 text-sm font-medium data-[state=active]:border-amber-700 data-[state=active]:text-amber-700 data-[state=active]:shadow-none focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
                    >
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="space-y-8 focus:outline-none">
                  {(category === "All"
                    ? blogPosts
                    : blogPosts.filter((post) => post.category === category)
                  ).map((post) => (
                    <Card key={post.id} className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                      <CardContent className="flex flex-col gap-0 p-0 sm:flex-row sm:gap-6"> {/* Removed gap for direct edge */}
                        <div className="relative aspect-[16/9] w-full sm:w-1/3 flex-shrink-0"> {/* Ensure image keeps width */}
                          <Image
                            src={post.image || "/images/image.avif"}
                            alt={post.title}
                            fill
                            className="object-cover sm:rounded-l-lg" // Rounded corners on left for larger screens
                            sizes="(max-width: 640px) 100vw, 33vw"
                          />
                        </div>
                        <div className="flex flex-1 flex-col justify-between p-6 sm:py-6 sm:pl-0 sm:pr-6"> {/* Adjusted padding */}
                          <div> {/* Top section: Category, Title, Excerpt */}
                            <Badge variant="outline" className="mb-2">{post.category}</Badge>
                            <h3 className="mb-2 font-serif text-xl font-semibold leading-tight">
                              <Link href={`/blog/${post.id}`} className="hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 rounded">
                                {post.title}
                              </Link>
                            </h3>
                            <p className="mb-4 text-sm text-muted-foreground">{post.excerpt}</p>
                          </div>
                          <div className="mt-auto"> {/* Bottom section: Meta, Author */}
                            <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground"> {/* Smaller text, wrapping */}
                              <div className="flex items-center gap-1">
                                <Calendar className="h-3.5 w-3.5" />
                                <span>{post.date}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <Image
                                src={post.authorImage || "/images/image.avif"}
                                alt={post.author}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              <span className="text-sm font-medium">{post.author}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                   {/* Handle case where a category has no posts */}
                   {category !== "All" && blogPosts.filter((post) => post.category === category).length === 0 && (
                    <p className="text-center text-muted-foreground py-8">No articles found in this category.</p>
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="sticky top-20 space-y-8">
            {/* Search Bar (Optional) */}
            {/* <div>
              <h3 className="mb-4 font-serif text-xl font-semibold">Search</h3>
              <Input placeholder="Search articles..." />
            </div> */}

            {/* Popular Tags */}
            <div>
              <h3 className="mb-4 font-serif text-xl font-semibold">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="cursor-pointer transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    tabIndex={0} // Make badges focusable
                    // Add onClick or Link wrapper if tags should filter posts
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Newsletter Signup (Optional) */}
            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="font-serif text-xl">Stay Updated</CardTitle>
                <CardDescription>Subscribe to our newsletter for the latest articles and offers.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Input type="email" placeholder="Enter your email" aria-label="Email for newsletter" />
                <Button className="w-full bg-amber-600 hover:bg-amber-700">Subscribe</Button>
              </CardContent>
            </Card>
          </div>
        </aside>
      </div>
    </div>
  )
}