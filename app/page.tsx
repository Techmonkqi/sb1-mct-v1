"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { FeaturedBlogs } from "@/components/featured-blogs"

const featuredTours = [
  {
    id: 1,
    title: "Rupununi Brazil Experience Tour",
    description: "Experience the unique culture and landscapes of the Rupununi region.",
    image: "https://images.unsplash.com/photo-1565214975484-3cfa9e56f914?q=80&w=1000",
    price: 299,
    duration: "3 days",
  },
  {
    id: 2,
    title: "Iwokrama Jungle Canopy Experience",
    description: "Explore the rainforest canopy and spot rare wildlife species.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=1000",
    price: 399,
    duration: "2 days",
  },
  {
    id: 3,
    title: "Kaieteur Falls Adventure",
    description: "Visit the world's highest single-drop waterfall.",
    image: "https://images.unsplash.com/photo-1467377791767-c929b5dc9a23?q=80&w=1000",
    price: 199,
    duration: "1 day",
  },
]

function HeroSection({ searchQuery, setSearchQuery }: { searchQuery: string; setSearchQuery: (query: string) => void }) {
  return (
    <section className="relative h-[80vh] flex items-center justify-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074"
          alt="Guyana Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover the Magic of Guyana
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Experience authentic adventures with local guides and create unforgettable memories
        </p>
        <div className="flex max-w-md mx-auto gap-4">
          <Input
            type="search"
            placeholder="Search tours, destinations..."
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/70"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

function TourCard({ tour }: { tour: typeof featuredTours[0] }) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle>{tour.title}</CardTitle>
        <CardDescription>{tour.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-2xl font-bold">${tour.price}</p>
            <p className="text-sm text-muted-foreground">{tour.duration}</p>
          </div>
          <Button asChild>
            <Link href={`/tours/${tour.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function FeaturedTours() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredTours.map((tour) => (
          <TourCard key={tour.id} tour={tour} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Button asChild size="lg">
          <Link href="/tours">View All Tours</Link>
        </Button>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Why Choose Magic City Tours?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Verified Local Guides</CardTitle>
              <CardDescription>
                All our guides are verified by Guyana's Tourism Authority
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Authentic Experiences</CardTitle>
              <CardDescription>
                Immerse yourself in local culture and traditions
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Secure Booking</CardTitle>
              <CardDescription>
                Safe and easy booking process with instant confirmation
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FeaturedTours />
      <WhyChooseUs />
      <FeaturedBlogs />
    </div>
  )
}