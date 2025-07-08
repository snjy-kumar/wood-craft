import type React from "react"
import { Inter, Playfair_Display } from "next/font/google"
import { Toaster } from "@/components/ui/sonner"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata = {
  title: "Master Carpenter Portfolio | 20+ Years of Craftsmanship",
  description:
    "Discover the artistry of a master carpenter with over two decades of experience in custom furniture, renovations, and fine woodworking.",
  keywords: [
    "master carpenter",
    "custom furniture",
    "fine woodworking",
    "renovations",
    "woodworking portfolio",
    "artisan woodcraft",
    "handcrafted furniture",
    "sustainable woodworking",
    "woodworking techniques",
    "woodworking projects",
    "woodworking craftsmanship",
    "woodworking design",
    "woodworking history",
    "woodworking materials",  
    "woodworking tools",  
    "woodworking techniques",
    "woodworking safety",
    "woodworking tips",
    "woodworking resources",
    "woodworking community",
    "woodworking inspiration",
    "woodworking education",
    "woodworking events",
    "woodworking workshops",
    "woodworking classes",
    "woodworking tutorials",
    "woodworking guides",
    "woodworking blogs",
    "woodworking podcasts",
    "woodworking videos",
    "woodworking forums",
    "woodworking social media",
    "woodworking networking",
    "woodworking collaborations",
    "woodworking partnerships",
    "woodworking exhibitions",    
    "woodworking showcases",  
    "woodworking competitions",
    "woodworking awards",
    "woodworking history",
    "woodworking traditions",
    "woodworking culture",
    "woodworking heritage",
    "woodworking craftsmanship",
    "woodworking artistry",
    "woodworking creativity",
    "woodworking innovation",
    "woodworking sustainability",   
    "woodworking ethics",
    "woodworking responsibility",
    "woodworking community",
    "woodworking collaboration",
    "woodworking support",
    "woodworking mentorship",
    "woodworking education",
    "woodworking training",
    "woodworking apprenticeships",
    "woodworking resources",
    "woodworking tools",
    "woodworking equipment",
    "woodworking materials",    
  ],
  openGraph: {
    title: "Master Carpenter Portfolio | 20+ Years of Craftsmanship",
    description:
      "Discover the artistry of a master carpenter with over two decades of experience in custom furniture, renovations, and fine woodworking.",
    url: "https://example.com", // Replace with your actual URL
    siteName: "Master Carpenter Portfolio",
    images: [
      {
        url: "/placeholder.svg?height=1200&width=1200",
        width: 1200,
        height: 1200,
        alt: "Master Carpenter Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Carpenter Portfolio | 20+ Years of Craftsmanship",
    description:
      "Discover the artistry of a master carpenter with over two decades of experience in custom furniture, renovations, and fine woodworking.",
    images: ["/placeholder.svg?height=1200&width=1200"],
    creator: "@your_twitter_handle", // Replace with your actual Twitter handle
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  themeColor: "#ffffff",  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
} 