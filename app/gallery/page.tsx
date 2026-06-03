"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const artworks = [
  {
    id: 1,
    title: "Mauao Rising",
    medium: "Acrylic on canvas",
    dimensions: "48\" x 24\"",
    year: 2024,
    price: 1800,
    description: "An ethereal landscape featuring the sacred mountain Mauao rising from teal waters, with a fiery red sun casting its reflection. Expressionist brushwork captures the spiritual connection between land, sea, and sky.",
    image: "/images/artwork/mountain-red-sun.jpg",
    category: "Landscape",
  },
  {
    id: 2,
    title: "Sacred Geometry Portal",
    medium: "Acrylic and UV paint on canvas",
    dimensions: "36\" x 48\"",
    year: 2024,
    price: 2200,
    description: "An impossible cube floats within a cosmic iris, surrounded by sacred lattice patterns. Below, a lotus flower emerges from waves alongside glowing geometric forms. This piece explores the intersection of mathematics, spirituality, and consciousness.",
    image: "/images/artwork/geometric-lotus.jpg",
    category: "Visionary",
  },
  {
    id: 3,
    title: "Cosmic Dance",
    medium: "UV reactive paint on canvas",
    dimensions: "40\" x 50\"",
    year: 2024,
    price: 2500,
    description: "Silhouettes of dancers move beneath a swirling rainbow vortex, framed by delicate fern fronds. This UV-reactive piece transforms under blacklight, revealing hidden dimensions of color and energy.",
    image: "/images/artwork/cosmic-dancers.jpg",
    category: "Visionary",
  },
  {
    id: 4,
    title: "Metamorphosis",
    medium: "UV reactive paint on sculptural form",
    dimensions: "6ft wingspan",
    year: 2024,
    price: 4500,
    description: "A large-scale butterfly sculpture filled with intricate sacred geometry patterns that glow brilliantly under UV light. Each wing segment contains unique mandala designs, creating a stunning installation piece.",
    image: "/images/artwork/neon-butterfly.jpg",
    category: "Installation",
  },
  {
    id: 5,
    title: "Girl with the Pearl Earring (Reimagined)",
    medium: "Oil on canvas",
    dimensions: "36\" x 36\"",
    year: 2024,
    price: 3200,
    description: "A contemporary reinterpretation of Vermeer's masterpiece, featuring rich warm tones and vibrant cultural elements. The colorful headwrap and bold color palette celebrate beauty, identity, and artistic heritage.",
    image: "/images/artwork/pearl-earring.jpg",
    category: "Portrait",
  },
  {
    id: 6,
    title: "Flower of Life Awakening",
    medium: "Mixed media on canvas",
    dimensions: "30\" x 30\"",
    year: 2024,
    price: 2800,
    description: "A striking split-tone portrait with warm and cool lighting, overlaid with the sacred Flower of Life geometry. A tree grows from water at the base, symbolizing the connection between earth, consciousness, and cosmic patterns.",
    image: "/images/artwork/flower-of-life.jpg",
    category: "Portrait",
  },
  {
    id: 7,
    title: "Duality",
    medium: "Acrylic on canvas",
    dimensions: "24\" x 36\"",
    year: 2024,
    price: 2400,
    description: "A dreamlike portrait featuring the balance of opposing forces - warm and cool, earth and sky. Swirling clouds and a lone tree on an island create a surreal landscape that emerges from the figure.",
    image: "/images/artwork/clouds-portrait.jpg",
    category: "Portrait",
  },
  {
    id: 8,
    title: "Rose Garden",
    medium: "Oil on canvas",
    dimensions: "24\" x 30\"",
    year: 2024,
    price: 1600,
    description: "A gentle, contemplative portrait featuring soft brushwork and delicate pink roses. The subject's serene expression and flowing dark hair create an atmosphere of quiet beauty and introspection.",
    image: "/images/artwork/roses-portrait.jpg",
    category: "Portrait",
  },
]

const categories = ["All", "Portrait", "Visionary", "Landscape", "Installation"]

type Artwork = typeof artworks[number]

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null)

  const filteredArtworks = selectedCategory === "All"
    ? artworks
    : artworks.filter(art => art.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-medium uppercase text-sm tracking-wide">Original Artwork</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-2">
            Gallery
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            Each piece is an original work, created with intention and care. Click on any artwork to learn more and inquire about purchasing.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredArtworks.map((art) => (
              <button
                key={art.id}
                onClick={() => setSelectedArtwork(art)}
                className="group text-left"
              >
                <div className="aspect-square rounded-xl overflow-hidden bg-muted shadow-md group-hover:shadow-xl transition-shadow">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-3">
                  <h3 className="font-serif text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {art.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{art.medium}</p>
                  <p className="text-primary font-semibold mt-1">${art.price.toLocaleString()}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artwork Modal */}
      {selectedArtwork && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedArtwork(null)}
        >
          <div 
            className="bg-background rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="aspect-square">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                />
              </div>
              <div className="p-8 flex flex-col">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-primary text-sm font-medium">{selectedArtwork.category}</span>
                    <h2 className="font-serif text-3xl font-bold text-foreground mt-1">
                      {selectedArtwork.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedArtwork(null)}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                <div className="mt-6 space-y-4 flex-grow">
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedArtwork.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Medium</span>
                      <p className="font-medium text-foreground">{selectedArtwork.medium}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Dimensions</span>
                      <p className="font-medium text-foreground">{selectedArtwork.dimensions}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Year</span>
                      <p className="font-medium text-foreground">{selectedArtwork.year}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Price</span>
                      <p className="font-semibold text-primary text-lg">${selectedArtwork.price.toLocaleString()}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in this piece? Get in touch to discuss purchasing or to ask any questions.
                  </p>
                  <Button asChild size="lg" className="w-full">
                    <Link href={`/contact?artwork=${encodeURIComponent(selectedArtwork.title)}`}>
                      <Mail className="mr-2 h-4 w-4" />
                      Inquire About This Piece
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
