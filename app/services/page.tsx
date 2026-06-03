import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Palette, Users, Sparkles, Clock, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const services = [
  {
    icon: Palette,
    title: "Community Workshops",
    subtitle: "Art for Everyone",
    description: "Vibrant outdoor art sessions that bring creativity to parks, festivals, and community spaces. All ages welcome to explore painting, drawing, and mixed media in a supportive, joyful environment.",
    duration: "2-4 hours",
    format: "Outdoor & Community Events",
    ideal: "Families, children, community groups",
    includes: [
      "All art materials provided",
      "Guidance for all skill levels",
      "Inclusive, welcoming atmosphere",
      "Take-home artwork",
    ],
    price: "Contact for event pricing",
    images: ["/images/services/kids-rainbows.jpg", "/images/services/park-workshop.jpg"],
  },
  {
    icon: Users,
    title: "Children's Art Programs",
    subtitle: "Nurturing Young Creatives",
    description: "Engaging art experiences designed especially for children. From waterfront painting sessions to park workshops, kids explore color, texture, and self-expression in nature-inspired settings.",
    duration: "1-3 hours",
    format: "Schools, camps, private events",
    ideal: "Children ages 4-14",
    includes: [
      "Age-appropriate materials and techniques",
      "Small group attention",
      "Nature and outdoor exploration",
      "Creative confidence building",
    ],
    price: "Starting at $200/session",
    images: ["/images/services/waterfront-painting.jpg", "/images/services/beach-workshop.jpg"],
  },
  {
    icon: Sparkles,
    title: "Festival & Event Facilitation",
    subtitle: "Creative Activations",
    description: "Bring an interactive art experience to your festival, market, or special event. A colorful, inviting space where attendees can pause, create, and connect through art.",
    duration: "Half-day or Full-day",
    format: "Markets, festivals, corporate events",
    ideal: "Event organizers, councils, businesses",
    includes: [
      "Complete setup and materials",
      "Engaging facilitation throughout",
      "Customizable themes and activities",
      "Eye-catching presentation",
    ],
    price: "Custom pricing based on event",
    images: ["/images/services/festival-booth.jpg", "/images/services/workshop-table.jpg"],
  },
]

const galleryImages = [
  { src: "/images/services/ground-session.jpg", alt: "Children creating art together on blankets" },
  { src: "/images/services/outdoor-table.jpg", alt: "Outdoor painting workshop with colorful supplies" },
  { src: "/images/services/kids-rainbows.jpg", alt: "Kids painting vibrant rainbow artwork" },
  { src: "/images/services/beach-workshop.jpg", alt: "Waterfront creative workshop" },
]

const testimonials = [
  {
    quote: "The workshop was magical for our kids. They came home buzzing with creativity and have been painting ever since!",
    author: "Sarah M.",
    role: "Parent",
  },
  {
    quote: "Having this creative space at our community festival was such a hit. Families loved having somewhere to slow down and create together.",
    author: "James K.",
    role: "Event Organizer",
  },
  {
    quote: "The energy and joy brought to our school art day was incredible. Every child felt included and proud of what they created.",
    author: "Maya R.",
    role: "Primary School Teacher",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header with Hero Image */}
      <section className="relative pt-24 pb-16">
        <div className="absolute inset-0 h-96">
          <Image
            src="/images/services/festival-booth.jpg"
            alt="Creative facilitation at a community event"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16">
          <div className="max-w-3xl">
            <span className="text-accent font-medium uppercase text-sm tracking-wide">Creative Facilitation</span>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mt-2">
              Bringing Art to Life
            </h1>
            <p className="mt-6 text-white/90 text-lg leading-relaxed">
              {"I believe creativity belongs everywhere and to everyone. Through community workshops, children's programs, and event facilitation, I create joyful spaces where people of all ages can explore, express, and connect through art."}
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto space-y-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                  {service.title}
                </h2>
                <p className="text-primary font-medium mt-2">{service.subtitle}</p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium text-foreground">{service.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Ideal for</p>
                      <p className="font-medium text-foreground">{service.ideal}</p>
                    </div>
                  </div>
                </div>

                <ul className="mt-6 space-y-2">
                  {service.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex items-center gap-6">
                  <Button asChild>
                    <Link href={`/contact?service=${encodeURIComponent(service.title)}`}>
                      Inquire Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">{service.price}</p>
                </div>
              </div>
              
              <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                {service.images.map((img, i) => (
                  <div key={i} className={`relative rounded-2xl overflow-hidden ${i === 0 ? 'aspect-[4/5]' : 'aspect-[4/5] mt-8'}`}>
                    <Image
                      src={img}
                      alt={`${service.title} - image ${i + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground">
              Moments of Creativity
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Every session brings new discoveries, connections, and joy. Here are some glimpses into the creative magic that happens.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-2xl overflow-hidden group"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-foreground">
              {"What People Are Saying"}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <blockquote className="text-foreground leading-relaxed mb-6">
                  {`"${testimonial.quote}"`}
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-foreground">
            {"Let's Create Something Together"}
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            {"Whether it's a community event, school program, or festival activation, I'd love to bring creativity and joy to your space."}
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <Link href="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
