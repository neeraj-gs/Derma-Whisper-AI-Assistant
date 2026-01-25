/**
 * Restaurant Industry Configuration Example
 * Copy this to src/config/site.config.ts and customize
 */

import { SiteConfig } from '../src/types';

const restaurantConfig: SiteConfig = {
  business: {
    name: "TableVoice AI",
    tagline: "AI Host That Never Takes a Break",
    description: "Handle reservations, answer menu questions, and take orders while your team focuses on creating amazing dining experiences.",
    email: "hello@tablevoice.ai",
    phone: "+1 (888) EAT-AI-NOW",
    address: "200 Restaurant Row, New York, NY 10001",
    socials: {
      twitter: "https://twitter.com/tablevoiceai",
      linkedin: "https://linkedin.com/company/tablevoiceai",
      facebook: "https://facebook.com/tablevoiceai",
      instagram: "https://instagram.com/tablevoiceai",
      youtube: "",
    },
    privacyPolicyUrl: "/privacy",
    termsOfServiceUrl: "/terms",
  },

  branding: {
    logo: "/logo-restaurant.svg",
    logoAlt: "TableVoice AI",
    favicon: "/favicon.ico",
    primaryColor: "red",
    secondaryColor: "orange",
    defaultDarkMode: true,
    customClass: "",
  },

  voiceAgent: {
    provider: "elevenlabs",
    agentId: "YOUR_AGENT_ID",
    agentName: "Sofia",
    agentRole: "Virtual Host",
    agentAvatar: "",
    welcomeMessage: "Welcome! I'm Sofia, your AI host. I can help you make a reservation, answer questions about our menu, or assist with special requests. How may I help you today?",
    connectionType: "webrtc",
    capabilities: [
      {
        icon: "Calendar",
        title: "Reservations",
        description: "Book tables, modify bookings, or check availability"
      },
      {
        icon: "UtensilsCrossed",
        title: "Menu Information",
        description: "Detailed menu info including allergens and dietary options"
      },
      {
        icon: "Clock",
        title: "Hours & Location",
        description: "Operating hours, directions, and parking info"
      },
      {
        icon: "Gift",
        title: "Special Events",
        description: "Private dining, catering, and event inquiries"
      },
      {
        icon: "ShoppingBag",
        title: "Takeout Orders",
        description: "Place and track takeout and delivery orders"
      },
      {
        icon: "Star",
        title: "Special Requests",
        description: "Handle dietary needs, celebrations, and preferences"
      }
    ],
  },

  industry: {
    type: "restaurant",
    customName: "Restaurant",
    customerTerm: "guests",
    appointmentTerm: "reservations",
  },

  landingPage: {
    hero: {
      badge: "AI for Hospitality",
      title: "Fill Every Table,",
      titleHighlight: "Automatically",
      subtitle: "Let AI handle phone calls while your team creates unforgettable dining experiences. Never miss a reservation again.",
      primaryCTA: { text: "Try Live Demo", link: "#demo" },
      secondaryCTA: { text: "View Analytics", link: "/dashboard" },
    },
    stats: [
      { value: "100K+", label: "Reservations Made" },
      { value: "98%", label: "Booking Accuracy" },
      { value: "4.8/5", label: "Guest Satisfaction" },
      { value: "24/7", label: "Availability" },
    ],
    features: {
      title: "Purpose-Built for Restaurants",
      subtitle: "Features that understand hospitality",
      items: [
        {
          icon: "Calendar",
          title: "Smart Reservations",
          description: "Handle bookings, waitlists, and table management"
        },
        {
          icon: "UtensilsCrossed",
          title: "Menu Knowledge",
          description: "Answer questions about dishes, ingredients, and allergens"
        },
        {
          icon: "ShoppingBag",
          title: "Order Taking",
          description: "Take takeout and delivery orders with accuracy"
        },
        {
          icon: "Gift",
          title: "Special Occasions",
          description: "Handle birthday, anniversary, and event requests"
        },
        {
          icon: "Globe",
          title: "Multilingual",
          description: "Serve guests in multiple languages"
        },
        {
          icon: "BarChart3",
          title: "Guest Analytics",
          description: "Track preferences, no-shows, and peak times"
        }
      ]
    },
    benefits: {
      title: "Results You Can Taste",
      items: [
        { value: "35%", label: "Fewer No-Shows", description: "with automated confirmations" },
        { value: "2x", label: "More Reservations", description: "captured after hours" },
        { value: "$50K+", label: "Annual Savings", description: "on front desk staffing" },
      ]
    },
    useCases: {
      title: "Perfect for Every Restaurant Type",
      subtitle: "From fine dining to fast casual",
      items: [
        {
          icon: "Star",
          industry: "Fine Dining",
          title: "Fine Dining",
          description: "White-glove reservation service for upscale establishments"
        },
        {
          icon: "Coffee",
          industry: "Casual Dining",
          title: "Casual Restaurants",
          description: "Handle high call volumes and walk-in inquiries"
        },
        {
          icon: "Pizza",
          industry: "Quick Service",
          title: "Fast Casual",
          description: "Take orders and answer frequent questions"
        },
        {
          icon: "Building",
          industry: "Restaurant Groups",
          title: "Multi-Location",
          description: "Centralized AI for all your restaurants"
        }
      ]
    },
    testimonials: [
      {
        quote: "We were losing reservations every night after closing. Now our AI books tables 24/7. It's like having a host who never sleeps.",
        author: "Chef Marco Rivera",
        role: "Owner",
        company: "Bistro Moderne",
        avatar: ""
      },
      {
        quote: "Our host staff can focus on guests instead of the phone. Guest satisfaction is up 30% since we deployed the AI.",
        author: "Amanda Chen",
        role: "GM",
        company: "The Golden Dragon",
        avatar: ""
      }
    ],
  },

  pricing: {
    enabled: true,
    title: "Pricing That Makes Sense",
    subtitle: "Plans for every restaurant size",
    currency: "$",
    billingPeriod: "month",
    plans: [
      {
        name: "Single Location",
        price: 149,
        description: "For individual restaurants",
        isPopular: false,
        features: [
          { text: "1 AI Host", included: true },
          { text: "Unlimited Reservations", included: true },
          { text: "Menu Integration", included: true },
          { text: "Basic Analytics", included: true },
          { text: "POS Integration", included: false },
          { text: "Custom Voice", included: false },
        ],
        cta: { text: "Start Free Trial", link: "/signup?plan=single" }
      },
      {
        name: "Multi-Location",
        price: 349,
        description: "For restaurant groups",
        isPopular: true,
        features: [
          { text: "Up to 5 Locations", included: true },
          { text: "Unlimited Reservations", included: true },
          { text: "Full Menu Integration", included: true },
          { text: "Advanced Analytics", included: true },
          { text: "POS Integration", included: true },
          { text: "Custom Voice", included: true },
        ],
        cta: { text: "Start Free Trial", link: "/signup?plan=multi" }
      },
      {
        name: "Enterprise",
        price: null,
        description: "For franchises & chains",
        isPopular: false,
        features: [
          { text: "Unlimited Locations", included: true },
          { text: "Centralized Dashboard", included: true },
          { text: "Custom Integrations", included: true },
          { text: "Dedicated Support", included: true },
          { text: "White Label", included: true },
          { text: "SLA Guarantee", included: true },
        ],
        cta: { text: "Contact Sales", link: "/contact" }
      }
    ],
    lifetimeDeal: {
      enabled: false,
      name: "",
      price: 0,
      description: "",
      features: []
    },
    addons: [
      { name: "Additional Location", price: 79 },
      { name: "POS Integration", price: 49 },
      { name: "Custom Voice Training", price: 199 },
    ]
  },

  dashboard: {
    title: "Restaurant Dashboard",
    showDemoBanner: true,
    demoBannerText: "Demo Dashboard - Restaurant",
    tabs: [
      { id: "overview", label: "Overview", icon: "LayoutDashboard" },
      { id: "analytics", label: "Analytics", icon: "BarChart3" },
      { id: "calls", label: "Guest Calls", icon: "Phone" },
    ],
    metrics: {
      totalCalls: { label: "Total Calls", icon: "Phone" },
      totalCustomers: { label: "Reservations", icon: "Calendar" },
      avgDuration: { label: "Avg. Call Time", icon: "Clock" },
      satisfaction: { label: "Guest Rating", icon: "Star" },
      bookingRate: { label: "Booking Rate", icon: "UtensilsCrossed" },
      responseTime: { label: "Response Time", icon: "Zap" },
    },
    chartColors: {
      primary: "#ef4444",
      secondary: "#f97316",
      success: "#22c55e",
      warning: "#eab308",
      info: "#3b82f6",
    }
  },

  roadmap: {
    enabled: true,
    title: "Coming to Your Kitchen",
    subtitle: "Exciting features on the menu",
    items: [
      {
        icon: "ShoppingBag",
        title: "Online Ordering Integration",
        description: "Direct integration with DoorDash, UberEats, and more",
        quarter: "Q2 2025",
        color: "red"
      },
      {
        icon: "Languages",
        title: "Multilingual Support",
        description: "Serve guests in 15+ languages automatically",
        quarter: "Q2 2025",
        color: "orange"
      },
      {
        icon: "Star",
        title: "VIP Recognition",
        description: "Recognize returning guests and their preferences",
        quarter: "Q3 2025",
        color: "purple"
      },
      {
        icon: "Bell",
        title: "Smart Waitlist",
        description: "AI-managed waitlist with accurate wait times",
        quarter: "Q3 2025",
        color: "green"
      }
    ]
  },

  integrations: {
    enabled: true,
    title: "Works With Your Systems",
    subtitle: "Integrate with your existing tools",
    items: [
      { name: "OpenTable", logo: "/integrations/opentable.svg" },
      { name: "Resy", logo: "/integrations/resy.svg" },
      { name: "Toast POS", logo: "/integrations/toast.svg" },
      { name: "Square", logo: "/integrations/square.svg" },
      { name: "Yelp", logo: "/integrations/yelp.svg" },
      { name: "Google Reserve", logo: "/integrations/google.svg" },
    ]
  },

  seo: {
    title: "TableVoice AI - AI Host for Restaurants",
    description: "AI-powered phone host for restaurants. Handle reservations, menu questions, and orders 24/7. Never miss a booking.",
    keywords: ["restaurant AI", "reservation AI", "restaurant phone system", "hospitality AI"],
    ogImage: "/og-restaurant.png",
  },

  footer: {
    copyright: "2025 TableVoice AI. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Contact", url: "/contact" },
    ]
  }
};

export default restaurantConfig;
