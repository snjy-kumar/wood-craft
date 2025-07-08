import { Card, CardContent } from "@/components/ui/card";

const timelineEvents = [
  {
    year: "2003",
    title: "Founding of Ganesh Thakur Woodcraft",
    description:
      "Ganesh Thakur established his woodcraft workshop in Pune with traditional Indian woodworking techniques.",
  },
  {
    year: "2007",
    title: "First Major Commission",
    description:
      "Completed a full teak dining set for a prominent Pune family, gaining local recognition in Maharashtra.",
  },
  {
    year: "2010",
    title: "Master Craftsman Recognition",
    description:
      "Ganesh gained recognition as a master craftsman combining traditional Indian techniques with modern methods.",
  },
  {
    year: "2013",
    title: "Team Expansion",
    description:
      "Expanded to current workshop and built a team of 5 skilled craftsmen, all specializing in different aspects of woodworking.",
  },
  {
    year: "2016",
    title: "Featured in Indian Woodcraft Magazine",
    description:
      "Our custom rosewood conference table was featured in a leading Indian woodworking publication.",
  },
  {
    year: "2018",
    title: "Best Custom Furniture Award",
    description:
      "Won Best Custom Furniture Design at the National Woodworking Exhibition.",
  },
  {
    year: "2021",
    title: "Sustainable Craftsmanship Award",
    description:
      "Recognized for our commitment to sustainable practices and materials.",
  },
  {
    year: "2023",
    title: "20th Anniversary",
    description:
      "Celebrated 20 years of craftsmanship with an open house event and workshop tour.",
  },
];

export function Timeline() {
  return (
    // Main container with the vertical line
    <div className="relative mx-auto max-w-5xl space-y-8 before:absolute before:inset-0 before:left-[15px] before:z-0 before:h-full before:w-0.5 before:bg-amber-200 md:before:left-1/2 md:before:-ml-[1px]">
      {timelineEvents.map((event, index) => (
        // Each timeline row container
        // Using md:items-center might help align the cards vertically if heights differ,
        // though the absolute circle positions itself relative to the row bounds.
        // md:items-start is also common if you prefer top-alignment.
        <div
          key={index}
          className={`relative flex flex-col md:flex-row md:items-start md:gap-12 ${
            // Keeping md:items-start for card alignment
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Circle Marker Container */}
          {/* Positioned absolutely relative to the row container */}
          {/* top-1/2 positions the TOP of the circle div at the vertical middle */}
          {/* -translate-y-1/2 shifts the circle div UP by half its own height, centering it */}
          {/* left-[15px] / md:left-1/2 aligns left edge with the line */}
          {/* -translate-x-1/2 centers the circle horizontally on the line */}
          {/* z-10 ensures the circle is above the line */}
          <div className="absolute left-[15px] top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform md:left-1/2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full border-4 border-amber-200 bg-white">
              <span className="h-2 w-2 rounded-full bg-amber-600"></span>
            </span>
          </div>

          {/* Content Side */}
          {/* Increased padding on relevant side (pl-12 mobile, md:pl/pr-8 desktop) */}
          <div
            className={`flex-1 pl-12 md:w-1/2 md:pl-0 ${
              index % 2 === 0 ? "md:pl-8" : "md:pr-8"
            }`}
          >
            <Card className="overflow-hidden rounded-lg shadow-md">
              <CardContent className="p-4 md:p-6">
                <span className="inline-block rounded bg-amber-100 px-2 py-1 text-sm font-semibold text-amber-800">
                  {event.year}
                </span>
                <h3 className="mt-2 font-serif text-lg font-semibold">
                  {event.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {event.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Spacer Side (for desktop layout) */}
          <div className="hidden md:block md:w-1/2"></div>
        </div>
      ))}
    </div>
  );
}
