import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function SiteFooter() {
  return (
    <footer className="bg-amber-900 text-amber-50">
      <div className="px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-amber-400"
              >
                <path d="M12 22v-5" />
                <path d="M9 8V2" />
                <path d="M15 8V2" />
                <path d="M18 8v4" />
                <path d="M6 8v4" />
                <path d="M12 17v-5" />
                <path d="M6 12v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5" />
                <path d="M6 8h12" />
              </svg>
              <span className="font-serif text-xl font-bold text-amber-50">Artisan Woodcraft</span>
            </Link>
            <p className="text-amber-200">
              Transforming raw wood into timeless masterpieces for over 20 years. Custom furniture, renovations, and
              fine woodworking.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-amber-200 hover:text-amber-50">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-amber-50">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-amber-200 hover:text-amber-50">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-200 hover:text-amber-50">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-amber-200 hover:text-amber-50">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-amber-200 hover:text-amber-50">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-amber-200 hover:text-amber-50">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-amber-200 hover:text-amber-50">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-200 hover:text-amber-50">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-5 w-5 text-amber-400" />
                <span>
                  123 Woodworking Lane
                  <br />
                  Craftsville, CA 90210
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-amber-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-amber-400" />
                <span>info@artisanwoodcraft.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
            <p className="mb-4 text-amber-200">
              Subscribe to our newsletter for woodworking tips, project updates, and exclusive offers.
            </p>
            <form className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-amber-700 bg-amber-800 text-amber-50 placeholder:text-amber-300"
              />
              <Button className="w-full bg-amber-600 hover:bg-amber-700">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-amber-800 pt-6 text-center text-sm text-amber-300">
          <p>&copy; {new Date().getFullYear()} Artisan Woodcraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

