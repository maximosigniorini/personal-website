"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
            : "bg-background/80 backdrop-blur-md border-b border-border/50",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-bold font-mono hover:text-primary transition-colors"
            >
              MS.
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("work")}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button
                variant="outline"
                size="sm"
                onClick={() => scrollToSection("contact")}
                className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        <div className="absolute inset-0 bg-background/95 backdrop-blur-md" />
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => scrollToSection("work")}
            className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            Work
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-2xl font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            Contact
          </button>
          <Button size="lg" onClick={() => scrollToSection("contact")} className="mt-8">
            <Mail className="w-5 h-5 mr-2" />
            Get in touch
          </Button>
        </div>
      </div>
    </>
  )
}
