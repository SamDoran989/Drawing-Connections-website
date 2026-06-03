import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import aboutPhoto from "../../public/images/about.jpg"

const milestones = [
  {
    year: "2010",
    title: "Began My Art Journey",
    description: "Started exploring painting and mixed media, discovering my love for bold colors and expressive mark-making.",
  },
  {
    year: "2015",
    title: "First Solo Exhibition",
    description: "Held my first solo show at a local gallery, connecting directly with collectors and art lovers.",
  },
  {
    year: "2018",
    title: "Creative Facilitation Training",
    description: "Completed certification in creative facilitation, combining my art practice with my passion for helping others unlock their creativity.",
  },
  {
    year: "2020",
    title: "Launched Workshop Program",
    description: "Began offering regular workshops and team facilitation sessions, bringing creativity to individuals and organizations.",
  },
  {
    year: "Present",
    title: "Full-Time Artist & Facilitator",
    description: "Now working full-time creating art and facilitating creative experiences for clients around the world.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium uppercase text-sm tracking-wide">My Story</span>
              <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-2">
                About Me
              </h1>
              <div className="mt-6 space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  {"I'm an artist and creative facilitator based in the vibrant intersection of visual art and human connection. My work—both on canvas and with clients—is driven by a deep belief that creativity is not a talent reserved for a few, but a fundamental human capacity waiting to be awakened in everyone."}
                </p>
                <p>
                  {"My art practice spans painting, mixed media, and fiber work. I'm drawn to bold colors, organic textures, and the emotional stories that emerge when we allow ourselves to create without judgment."}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-64 h-64 bg-accent rounded-full blur-3xl opacity-50" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl bg-muted/20">
                <Image
                  src={aboutPhoto}
                  alt="Artist seated in the studio between two large colorful portrait paintings"
                  width={aboutPhoto.width}
                  height={aboutPhoto.height}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            My Philosophy
          </h2>
          <div className="mt-8 space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              {"I believe that creativity is a practice, not a destination. It's about showing up, being curious, and allowing yourself to experiment without the pressure of perfection."}
            </p>
            <p>
              {"In my facilitation work, I create spaces where people feel safe to take creative risks, make mistakes, and discover new ways of thinking and expressing themselves. Whether it's a corporate team looking to innovate or an individual seeking to develop their artistic voice, I meet each person where they are."}
            </p>
            <p>
              {"My art is a reflection of this same spirit—each piece is an exploration, a conversation between intention and intuition, structure and spontaneity."}
            </p>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-16">
            My Journey
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" />
                  
                  {/* Content */}
                  <div className={`md:w-1/2 pl-8 md:pl-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <span className="text-primary font-bold text-lg">{milestone.year}</span>
                    <h3 className="font-serif text-2xl font-semibold text-foreground mt-1">
                      {milestone.title}
                    </h3>
                    <p className="text-muted-foreground mt-2 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                  
                  {/* Spacer */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Studio Images */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl font-bold text-foreground text-center mb-12">
            In the Studio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=400&fit=crop"
                alt="Art supplies in the studio"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop"
                alt="Colorful abstract painting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&h=400&fit=crop"
                alt="Creative workshop session"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-square rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop"
                alt="Textile and fiber art materials"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground">
            {"Let's Connect"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {"Whether you're interested in my artwork, want to book a facilitation session, or just want to say hello—I'd love to hear from you."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
