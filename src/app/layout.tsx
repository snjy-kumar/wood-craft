import type React from "react";
import { Inter, Playfair_Display } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { StructuredData } from "@/components/structured-data";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata = {
  metadataBase: new URL("https://ganeshthakur-woodcraft.com"), // Replace with actual URL
  title:
    "Ganesh Thakur - Master Carpenter | 20+ Years of Woodworking Excellence in Pune",
  description:
    "Discover the artistry of Ganesh Thakur, a master carpenter with over two decades of experience in custom furniture, renovations, and fine woodworking in Pune, Maharashtra.",
  keywords: [
    "Ganesh Thakur carpenter",
    "master carpenter Pune",
    "custom furniture Pune",
    "fine woodworking Maharashtra",
    "renovations Pune",
    "woodworking portfolio Pune",
    "ganesh thakur woodcraft India",
    "handcrafted furniture Pune",
    "sustainable woodworking",
    "woodworking techniques",
    "woodworking projects",
    "woodworking craftsmanship",
    "woodworking design",
    "carpenter Pune Maharashtra",
    "furniture maker Pune",
    "wood craftsman India",
    "custom cabinetry Pune",
    "interior woodwork",
    "wooden furniture Pune",
    "carpentry services Maharashtra",
    "wood artist Pune",
    "traditional woodworking",
    "modern furniture design",
    "kitchen cabinets Pune",
    "bedroom furniture Pune",
    "living room furniture",
    "office furniture Pune",
    "wooden doors Pune",
    "custom wardrobes",
    "wooden flooring Pune",
    "furniture restoration",
    "antique furniture repair",
    "wood polishing services",
    "carpenter team Pune",
    "woodworking workshops Pune",
    "furniture design consultation",
    "wood selection expertise",
    "joinery work Pune",
    "carpentry training",
    "wood finishing techniques",
    "furniture installation",
    "carpenter contact Pune",
    "woodworking estimate",
    "furniture quote Pune",
    "carpenter near me",
    "best carpenter Pune",
    "experienced carpenter Maharashtra",
    "furniture maker contact",
    "woodworking services Pune",
    "custom wood furniture",
    "carpenter phone number",
    "furniture repair Pune",
    "wood carving Pune",
    "decorative woodwork",
    "architectural woodwork",
    "commercial furniture Pune",
    "residential carpentry",
    "furniture manufacturer Pune",
  ],
  openGraph: {
    title:
      "Ganesh Thakur - Master Carpenter | 20+ Years of Woodworking Excellence in Pune",
    description:
      "Discover the artistry of Ganesh Thakur, a master carpenter with over two decades of experience in custom furniture, renovations, and fine woodworking in Pune, Maharashtra.",
    url: "https://ganeshthakur-woodcraft.com", // Replace with actual URL
    siteName: "Ganesh Thakur Woodcraft",
    images: [
      {
        url: "/placeholder.svg?height=1200&width=1200",
        width: 1200,
        height: 1200,
        alt: "Ganesh Thakur Master Carpenter Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ganesh Thakur - Master Carpenter | 20+ Years of Woodworking Excellence in Pune",
    description:
      "Discover the artistry of Ganesh Thakur, a master carpenter with over two decades of experience in custom furniture, renovations, and fine woodworking in Pune, Maharashtra.",
    images: ["/placeholder.svg?height=1200&width=1200"],
    creator: "@ganeshthakur_woodcraft", // Replace with actual Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
