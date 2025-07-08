import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-900 text-amber-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 8.837-7.163 16-16 16s-16-7.163-16-16 7.163-16 16-16 16 7.163 16 16zm-8 0c0-4.418-3.582-8-8-8s-8 3.582-8 8 3.582 8 8 8 8-3.582 8-8z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>
      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20 relative z-10">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:gap-12">
          <div className="flex flex-col gap-4">
            <Link href="/" className="group flex items-center gap-2">
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
                className="h-6 w-6 text-amber-400 transition-transform group-hover:scale-110"
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
              <span className="font-serif text-xl font-bold text-amber-50 group-hover:text-amber-100 transition-colors">
                Ganesh Thakur Woodcraft
              </span>
            </Link>
            <p className="text-amber-200 leading-relaxed">
              Transforming raw wood into timeless masterpieces for over 20 years
              in Pune, Maharashtra. Custom furniture, renovations, and fine
              woodworking with passion and precision by Ganesh Thakur and his
              skilled team.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-amber-200 hover:text-amber-50 transition-all duration-300 hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-amber-200 hover:text-amber-50 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-amber-200 hover:text-amber-50 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-amber-100">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-amber-200 hover:text-amber-50 transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-amber-100">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <MapPin className="mt-1 h-5 w-5 text-amber-400 transition-transform group-hover:scale-110" />
                <span className="text-amber-200 leading-relaxed">
                  Ganesh Thakur Woodcraft Workshop
                  <br />
                  Pune, Maharashtra 411001, India
                </span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone className="h-5 w-5 text-amber-400 transition-transform group-hover:scale-110" />
                <span className="text-amber-200">+91 8969892003</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail className="h-5 w-5 text-amber-400 transition-transform group-hover:scale-110" />
                <span className="text-amber-200">ganeshthakur@gmail.com</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-amber-100">
              Newsletter
            </h3>
            <p className="mb-4 text-amber-200 leading-relaxed">
              Subscribe to our newsletter for woodworking tips, project updates,
              and exclusive offers.
            </p>
            <form className="space-y-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="border-amber-700 bg-amber-800/50 text-amber-50 placeholder:text-amber-300 focus:border-amber-400 transition-colors"
              />
              <Button className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-300 hover:shadow-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-12 border-t border-amber-800/50 pt-8 text-center">
          <p className="text-amber-300">
            &copy; {new Date().getFullYear()} Ganesh Thakur Woodcraft. All
            rights reserved. | Crafted with passion and precision in Pune,
            Maharashtra.
          </p>
        </div>
      </div>
    </footer>
  );
}
