import Image from "next/image"

export default function GalleryPage() {
  const images = [
    "/images/image.avif?height=400&width=600",
    "/images/image.avif?height=400&width=600",
    "/images/image.avif?height=400&width=600",
    "/images/image.avif?height=400&width=600",
    "/images/image.avif?height=400&width=600",
    "/images/image.avif?height=400&width=600",
  ]

  return (
    <div className=" px-4 py-12 md:px-6 md:py-16 lg:py-20">
      <div className="mb-10">
        <h1 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Project Gallery
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          A showcase of our finest woodworking projects, from custom furniture to
          complete home renovations.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image src={src || "/images/image.avif"} alt={`Project ${index + 1}`} fill className="object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}