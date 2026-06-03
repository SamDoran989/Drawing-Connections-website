import Link from "next/link"
import { Palette, Sparkles } from "lucide-react"
import { Navigation } from "@/components/navigation"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Full-screen Hero with Two Options */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-backdrop.jpg"
            alt="Artist painting en plein air on rocky jetty with mountain view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance">
            Drawing Connections
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            A sanctuary for creative expression
          </p>
          
          {/* Two Main Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
            <Link
              href="/gallery"
              className="group flex flex-col items-center gap-4 transition-all hover:scale-105"
            >
              <div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                <Palette className="h-8 w-8 text-white" />
              </div>
              <span className="text-white font-serif text-2xl font-semibold">Artwork</span>
              <span className="text-white/70 text-sm">Browse & purchase original pieces</span>
            </Link>
            
            <Link
              href="/services"
              className="group flex flex-col items-center gap-4 transition-all hover:scale-105"
            >
              <div className="w-16 h-16 border-2 border-white/50 rounded-full flex items-center justify-center group-hover:border-white transition-colors">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <span className="text-white font-serif text-2xl font-semibold">Creative Facilitation</span>
              <span className="text-white/70 text-sm">Workshops, coaching & team sessions</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
