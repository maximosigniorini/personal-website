"use client"

import { Navigation } from "@/components/navigation"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { SiLinkedin, SiInstagram, SiYoutube } from "react-icons/si"

const services = [
  {
    title: "Original Music Composition",
    description: "Bespoke score creation tailored to visual content. Includes full rights and high-quality master files.",
    rates: [
      { duration: "Up to 15 seconds", price: "$200" },
      { duration: "15 - 30 seconds", price: "$300" },
      { duration: "30s - 1 minute", price: "$500" },
    ],
  },
  {
    title: "Sound Design & SFX",
    description: "Creation and implementation of custom sound effects, ambiance, and foley.",
    rates: [
      { duration: "Up to 15 seconds", price: "$200" },
      { duration: "15 - 30 seconds", price: "$300" },
      { duration: "30s - 1 minute", price: "$500" },
    ],
  },
  {
    title: "Full Audio Post-Production",
    description: "Comprehensive service combining custom music, sound design, dialogue editing, and final mix.",
    rates: [
      { duration: "Up to 15 seconds", price: "$400" },
      { duration: "15 - 30 seconds", price: "$500" },
      { duration: "30s - 1 minute", price: "$800" },
    ],
  }
]

export default function PriceListPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-grow pt-32 pb-16 md:pt-40 md:pb-24 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <div className="text-center space-y-6 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold leading-tight text-balance">
              Project <span className="text-primary block sm:inline">Rates</span>
            </h1>
          </div>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 md:p-10 hover:shadow-lg transition-all duration-300 bg-muted/10 border-border">
                <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                  <div className="md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed text-pretty">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:w-1/2 flex flex-col justify-center">
                    <div className="bg-background/50 rounded-lg border border-border overflow-hidden">
                      <div className="grid grid-cols-2 bg-muted/50 p-4 border-b border-border text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                        <div>Duration</div>
                        <div className="text-right">Rate</div>
                      </div>
                      <div className="divide-y divide-border">
                        {service.rates.map((rate, rIndex) => (
                          <div key={rIndex} className="grid grid-cols-2 p-4 hover:bg-muted/20 transition-colors items-center">
                            <div className="font-medium text-sm sm:text-base">{rate.duration}</div>
                            <div className="text-right text-lg font-bold text-primary">{rate.price}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 pt-8">
            <Card className="p-8 bg-primary/5 border-primary/20 space-y-4 hover:border-primary/40 transition-colors">
              <h3 className="text-xl font-bold">Flexible Rates</h3>
              <p className="text-muted-foreground text-pretty">
                For projects with an extended timeline or complex scope, a day or half-day rate may be more suitable.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex justify-between items-center bg-background p-4 rounded-lg border border-border">
                  <span className="font-medium">Day Rate (8 hours)</span>
                  <span className="font-bold text-primary text-lg">$520</span>
                </div>
                <div className="flex justify-between items-center bg-background p-4 rounded-lg border border-border">
                  <span className="font-medium">Hourly Rate</span>
                  <span className="font-bold text-primary text-lg">$65</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-muted/30 space-y-4">
              <h3 className="text-xl font-bold">Please Note</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                All project quotes are based on a detailed scope of work. Please share your video, script, or creative brief for a precise, tailored estimate.
              </p>
              <div className="pt-4">
                <p className="text-sm font-medium text-foreground/80 p-4 bg-background rounded-lg border border-border">
                  Prices listed are an estimate in USD. Final costs are confirmed upon project agreement.
                </p>
              </div>
            </Card>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <div className="font-bold text-xl mb-2">Maximo Signiorini</div>
              <p className="text-muted-foreground">Sound Designer & Music Composer</p>
            </div>

            <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/maximo-signiorini/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/maxsig.lab/" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="https://www.youtube.com/@maximosigniorini" className="text-muted-foreground hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                <SiYoutube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Maximo Signiorini. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}