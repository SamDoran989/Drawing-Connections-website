"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { cn } from "@/lib/utils"

const inquiryTypes = [
  { value: "artwork", label: "Artwork Purchase" },
  { value: "workshop", label: "Creative Workshop" },
  { value: "team", label: "Team Facilitation" },
  { value: "coaching", label: "One-on-One Coaching" },
  { value: "commission", label: "Custom Commission" },
  { value: "other", label: "General Inquiry" },
]

export default function ContactPage() {
  const searchParams = useSearchParams()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    subject: "",
    message: "",
  })

  useEffect(() => {
    const artwork = searchParams.get("artwork")
    const service = searchParams.get("service")
    
    if (artwork) {
      setFormData(prev => ({
        ...prev,
        inquiryType: "artwork",
        subject: `Inquiry about "${artwork}"`,
        message: `Hi, I'm interested in the artwork "${artwork}". `,
      }))
    } else if (service) {
      const serviceType = service.toLowerCase().includes("workshop") 
        ? "workshop" 
        : service.toLowerCase().includes("team") 
        ? "team" 
        : "coaching"
      setFormData(prev => ({
        ...prev,
        inquiryType: serviceType,
        subject: `Inquiry about ${service}`,
        message: `Hi, I'm interested in learning more about your ${service} offering. `,
      }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-primary font-medium uppercase text-sm tracking-wide">Get in Touch</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mt-2">
            Contact
          </h1>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl">
            {"I'd love to hear from you. Whether you're interested in purchasing artwork, booking a creative session, or just want to connect—reach out and let's start a conversation."}
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground mt-1">hello@studio.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground mt-1">Based in Portland, OR</p>
                    <p className="text-muted-foreground text-sm">Available for travel</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Response Time</h3>
                    <p className="text-muted-foreground mt-1">Usually within 24-48 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-muted/50 p-6 rounded-2xl">
                <h3 className="font-semibold text-foreground mb-2">A note on commissions</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {"I occasionally take on custom commissions. If you have a specific vision in mind, I'd love to hear about it. Please include details about size, colors, and any inspiration in your message."}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <div className="bg-card p-12 rounded-2xl border border-border text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-foreground">
                    Message Sent!
                  </h2>
                  <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                    {"Thank you for reaching out. I'll get back to you within 24-48 hours. In the meantime, feel free to explore more of my work."}
                  </p>
                  <Button 
                    variant="outline" 
                    className="mt-8"
                    onClick={() => {
                      setIsSubmitted(false)
                      setFormData({
                        name: "",
                        email: "",
                        inquiryType: "",
                        subject: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-2xl border border-border">
                  <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                    Send a Message
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="inquiryType">{"What's this about?"}</Label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className={cn(
                          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                          "disabled:cursor-not-allowed disabled:opacity-50"
                        )}
                        required
                      >
                        <option value="">Select an option</option>
                        {inquiryTypes.map((type) => (
                          <option key={type.value} value={type.value}>
                            {type.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Brief subject line"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about what you're looking for..."
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
