export type DirectoryCategory =
  | "Accommodations"
  | "Dining & Restaurants"
  | "Tour Operators"
  | "Transportation"
  | "Shopping"
  | "Entertainment"
  | "Health & Beauty"
  | "Activities & Experiences"
  | "Outdoor Recreation"
  | "Travel Services"
  | "Community-Based Tourism"
  | "Sustainable Tourism"
  | "Family-Friendly Resources"
  | "Cultural Resources"
  | "Photography & Art"
  | "Nightlife & Social Scene"

export type DirectorySubCategory =
  // Accommodations
  | "Hotels"
  | "Guest Houses"
  | "Lodges and Resorts"
  | "Eco-Lodges"
  | "Bed and Breakfasts"
  | "Vacation Rentals"
  // Dining & Restaurants
  | "Local Cuisine Restaurants"
  | "International Cuisine Restaurants"
  | "Cafés and Coffee Shops"
  | "Fast Food Chains"
  | "Food Trucks and Street Vendors"
  | "Bars and Nightclubs"
  // Tour Operators
  | "Adventure Tour Operators"
  | "Eco-Tour Operators"
  | "Cultural and Historical Tours"
  | "Wildlife and Birdwatching Tours"
  | "Customizable Tour Packages"
  // Transportation
  | "Car Rental Services"
  | "Public Transportation"
  | "Domestic Flights"
  | "Boat Services"
  // Shopping
  | "Local Markets"
  | "Artisan Shops"
  | "Supermarkets and Grocery Stores"
  | "Specialty Stores"
  // Entertainment
  | "Theaters and Cinemas"
  | "Live Music Venues"
  | "Nightclubs and Dance Halls"
  | "Cultural Festivals and Events"
  // Health & Beauty
  | "Spas and Wellness Centers"
  | "Hair Salons and Barbershops"
  | "Fitness Centers and Gyms"
  | "Yoga Studios"
  // Activities & Experiences
  | "Adventure Activities"
  | "Guided Tours"
  | "Wildlife Safaris"
  | "Water Sports"
  // Outdoor Recreation
  | "National Parks"
  | "Beaches and Waterfronts"
  | "Hiking Trails"
  // Travel Services
  | "Travel Agencies"
  | "Licensed Tour Guides"
  | "Travel Insurance"
  // Community-Based Tourism
  | "Indigenous Experiences"
  | "Local Homestays"
  // Sustainable Tourism
  | "Eco-Friendly Accommodations"
  | "Conservation Projects"
  // Family-Friendly
  | "Kid-Friendly Attractions"
  | "Family Restaurants"
  | "Educational Experiences"
  // Cultural Resources
  | "Museums and Galleries"
  | "Historical Sites"
  | "Cultural Centers"
  // Photography & Art
  | "Photography Tours"
  | "Art Galleries"
  | "Local Artists"
  // Nightlife
  | "Live Music Bars"
  | "Social Clubs"
  | "Wine Tasting"

export type Region =
  | "Demerara-Mahaica"
  | "Essequibo Islands-West Demerara"
  | "Pomeroon-Supenaam"
  | "Upper Demerara-Berbice"
  | "Upper Takutu-Upper Essequibo"
  | "Potaro-Siparuni"

export interface DirectoryListing {
  id: string
  name: string
  category: DirectoryCategory
  subCategory: DirectorySubCategory
  description: string
  region: Region
  city: string
  address: string
  phone?: string
  email?: string
  website?: string
  socialMedia?: {
    facebook?: string
    twitter?: string
    instagram?: string
  }
  rating: number
  reviewCount: number
  priceRange: "₭" | "₭₭" | "₭₭₭" | "₭₭₭₭" // ₭ represents GYD
  image: string
  features: string[]
  openingHours?: {
    days: string
    hours: string
  }
}

export const directoryListings: DirectoryListing[] = [
  {
    id: "1",
    name: "Cara Lodge",
    category: "Accommodations",
    subCategory: "Hotels",
    description: "Historic colonial-style hotel in Georgetown offering luxury accommodations with traditional Guyanese hospitality. Features elegant rooms, fine dining, and modern amenities in a heritage setting.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "294 Quamina Street, Georgetown",
    phone: "+592-225-5301",
    email: "caralodge@guyana.net",
    website: "https://caralodge.com",
    socialMedia: {
      facebook: "https://facebook.com/caralodge",
      instagram: "https://instagram.com/caralodgegy"
    },
    rating: 4.8,
    reviewCount: 246,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1000",
    features: ["Restaurant", "Bar", "Free WiFi", "Airport Shuttle", "Business Center", "Heritage Building"],
    openingHours: {
      days: "Monday-Sunday",
      hours: "24 hours"
    }
  },
  {
    id: "2",
    name: "Rupununi Eco Lodge",
    category: "Accommodations",
    subCategory: "Eco-Lodges",
    description: "Sustainable eco-lodge in the heart of the Rupununi savannah, offering authentic experiences with minimal environmental impact.",
    region: "Upper Takutu-Upper Essequibo",
    city: "Lethem",
    address: "Rupununi Savannah, Near Lethem",
    phone: "+592-227-8934",
    email: "info@rupununilodge.gy",
    website: "https://rupununilodge.gy",
    rating: 4.9,
    reviewCount: 178,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?q=80&w=1000",
    features: ["Solar Power", "Local Guides", "Wildlife Tours", "Indigenous Culture", "Organic Garden"],
    openingHours: {
      days: "Monday-Sunday",
      hours: "24 hours"
    }
  },
  {
    id: "3",
    name: "Oasis Café",
    category: "Dining & Restaurants",
    subCategory: "Cafés and Coffee Shops",
    description: "Modern café serving international coffee selections and fusion cuisine using local ingredients.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "125 Middle Street, Georgetown",
    phone: "+592-227-1234",
    rating: 4.5,
    reviewCount: 182,
    priceRange: "₭₭",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1000",
    features: ["Outdoor Seating", "Vegetarian Options", "WiFi", "Breakfast", "Lunch"],
    openingHours: {
      days: "Monday-Saturday",
      hours: "7:00 AM - 6:00 PM"
    }
  },
  {
    id: "4",
    name: "Rainforest Adventures",
    category: "Tour Operators",
    subCategory: "Adventure Tour Operators",
    description: "Premier adventure tour operator specializing in rainforest expeditions and wildlife encounters.",
    region: "Potaro-Siparuni",
    city: "Mahdia",
    address: "Main Street, Mahdia",
    phone: "+592-444-5678",
    email: "tours@rainforestadventures.gy",
    website: "https://rainforestadventures.gy",
    rating: 4.9,
    reviewCount: 156,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=1000",
    features: ["Guided Tours", "Equipment Provided", "Transportation", "Expert Guides"],
    openingHours: {
      days: "Monday-Saturday",
      hours: "8:00 AM - 5:00 PM"
    }
  },
  {
    id: "5",
    name: "Georgetown Market",
    category: "Shopping",
    subCategory: "Local Markets",
    description: "Historic market featuring local crafts, fresh produce, and traditional goods.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "Water Street, Georgetown",
    rating: 4.4,
    reviewCount: 312,
    priceRange: "₭",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1000",
    features: ["Fresh Produce", "Local Crafts", "Food Vendors", "Souvenirs"],
    openingHours: {
      days: "Monday-Saturday",
      hours: "6:00 AM - 5:00 PM"
    }
  },
  {
    id: "6",
    name: "Kaieteur Wellness Center",
    category: "Health & Beauty",
    subCategory: "Spas and Wellness Centers",
    description: "Luxury spa offering traditional and modern treatments using local ingredients.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "45 New Garden Street",
    phone: "+592-225-7890",
    website: "https://kaieteurspa.gy",
    rating: 4.7,
    reviewCount: 98,
    priceRange: "₭₭₭",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1000",
    features: ["Massage", "Facials", "Local Treatments", "Couples Spa", "Steam Room"],
    openingHours: {
      days: "Tuesday-Sunday",
      hours: "10:00 AM - 8:00 PM"
    }
  },
  {
    id: "7",
    name: "Indigenous Heritage Museum",
    category: "Cultural Resources",
    subCategory: "Museums and Galleries",
    description: "Museum showcasing Guyana's indigenous cultures and traditions.",
    region: "Demerara-Mahaica",
    city: "Georgetown",
    address: "234 Main Street",
    phone: "+592-226-5634",
    email: "info@heritagemuseum.gy",
    rating: 4.6,
    reviewCount: 145,
    priceRange: "₭",
    image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?q=80&w=1000",
    features: ["Guided Tours", "Cultural Exhibits", "Gift Shop", "Educational Programs"],
    openingHours: {
      days: "Tuesday-Sunday",
      hours: "9:00 AM - 4:30 PM"
    }
  },
  {
    id: "8",
    name: "Guyana Wildlife Photography Tours",
    category: "Photography & Art",
    subCategory: "Photography Tours",
    description: "Expert-led photography tours focusing on Guyana's diverse wildlife and landscapes.",
    region: "Upper Takutu-Upper Essequibo",
    city: "Lethem",
    address: "Wildlife Drive, Lethem",
    phone: "+592-444-9876",
    website: "https://wildlifephoto.gy",
    rating: 4.9,
    reviewCount: 67,
    priceRange: "₭₭₭₭",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000",
    features: ["Equipment Rental", "Professional Guides", "Transport", "Photo Workshops"],
    openingHours: {
      days: "Monday-Saturday",
      hours: "5:00 AM - 7:00 PM"
    }
  }
]

export const categories: DirectoryCategory[] = [
  "Accommodations",
  "Dining & Restaurants",
  "Tour Operators",
  "Transportation",
  "Shopping",
  "Entertainment",
  "Health & Beauty",
  "Activities & Experiences",
  "Outdoor Recreation",
  "Travel Services",
  "Community-Based Tourism",
  "Sustainable Tourism",
  "Family-Friendly Resources",
  "Cultural Resources",
  "Photography & Art",
  "Nightlife & Social Scene"
]

export const subCategories: Record<DirectoryCategory, DirectorySubCategory[]> = {
  "Accommodations": [
    "Hotels",
    "Guest Houses",
    "Lodges and Resorts",
    "Eco-Lodges",
    "Bed and Breakfasts",
    "Vacation Rentals"
  ],
  "Dining & Restaurants": [
    "Local Cuisine Restaurants",
    "International Cuisine Restaurants",
    "Cafés and Coffee Shops",
    "Fast Food Chains",
    "Food Trucks and Street Vendors",
    "Bars and Nightclubs"
  ],
  "Tour Operators": [
    "Adventure Tour Operators",
    "Eco-Tour Operators",
    "Cultural and Historical Tours",
    "Wildlife and Birdwatching Tours",
    "Customizable Tour Packages"
  ],
  "Transportation": [
    "Car Rental Services",
    "Public Transportation",
    "Domestic Flights",
    "Boat Services"
  ],
  "Shopping": [
    "Local Markets",
    "Artisan Shops",
    "Supermarkets and Grocery Stores",
    "Specialty Stores"
  ],
  "Entertainment": [
    "Theaters and Cinemas",
    "Live Music Venues",
    "Nightclubs and Dance Halls",
    "Cultural Festivals and Events"
  ],
  "Health & Beauty": [
    "Spas and Wellness Centers",
    "Hair Salons and Barbershops",
    "Fitness Centers and Gyms",
    "Yoga Studios"
  ],
  "Activities & Experiences": [
    "Adventure Activities",
    "Guided Tours",
    "Wildlife Safaris",
    "Water Sports"
  ],
  "Outdoor Recreation": [
    "National Parks",
    "Beaches and Waterfronts",
    "Hiking Trails"
  ],
  "Travel Services": [
    "Travel Agencies",
    "Licensed Tour Guides",
    "Travel Insurance"
  ],
  "Community-Based Tourism": [
    "Indigenous Experiences",
    "Local Homestays"
  ],
  "Sustainable Tourism": [
    "Eco-Friendly Accommodations",
    "Conservation Projects"
  ],
  "Family-Friendly Resources": [
    "Kid-Friendly Attractions",
    "Family Restaurants",
    "Educational Experiences"
  ],
  "Cultural Resources": [
    "Museums and Galleries",
    "Historical Sites",
    "Cultural Centers"
  ],
  "Photography & Art": [
    "Photography Tours",
    "Art Galleries",
    "Local Artists"
  ],
  "Nightlife & Social Scene": [
    "Live Music Bars",
    "Social Clubs",
    "Wine Tasting"
  ]
}

export const regions: Region[] = [
  "Demerara-Mahaica",
  "Essequibo Islands-West Demerara",
  "Pomeroon-Supenaam",
  "Upper Demerara-Berbice",
  "Upper Takutu-Upper Essequibo",
  "Potaro-Siparuni"
]

export const cities = [
  "Georgetown",
  "Linden",
  "New Amsterdam",
  "Anna Regina",
  "Bartica",
  "Lethem",
  "Mabaruma",
  "Mahdia"
]