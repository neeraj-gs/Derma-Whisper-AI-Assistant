/**
 * =============================================================================
 * VOICE AGENT TEMPLATE - MAIN CONFIGURATION
 * =============================================================================
 *
 * This is the ONLY file you need to edit to customize your voice agent website.
 * Change the values below to match your business, branding, and voice agent setup.
 *
 * After editing this file, your entire website will update automatically!
 */

import { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
  // ===========================================================================
  // BUSINESS INFORMATION
  // ===========================================================================
  business: {
    name: "VoiceAI Pro",
    tagline: "Your 24/7 AI-Powered Virtual Assistant",
    description: "Transform your customer service with intelligent voice AI that handles calls, books appointments, and answers questions - just like a real person.",

    // Contact Information
    email: "hello@voiceaipro.com",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, San Francisco, CA 94105",

    // Social Links (leave empty string "" to hide)
    socials: {
      twitter: "https://twitter.com/voiceaipro",
      linkedin: "https://linkedin.com/company/voiceaipro",
      facebook: "",
      instagram: "",
      youtube: "",
    },

    // Legal
    privacyPolicyUrl: "/privacy",
    termsOfServiceUrl: "/terms",
  },

  // ===========================================================================
  // BRANDING & COLORS
  // ===========================================================================
  branding: {
    // Logo (can be URL or local path in /public folder)
    logo: "/logo.svg",
    logoAlt: "VoiceAI Pro Logo",
    favicon: "/favicon.ico",

    // Primary Color Theme
    // Options: "purple", "blue", "green", "orange", "red", "pink", "indigo", "teal"
    primaryColor: "purple",

    // Secondary Color (for gradients)
    secondaryColor: "pink",

    // Dark mode by default?
    defaultDarkMode: true,

    // Custom CSS class for additional styling (optional)
    customClass: "",
  },

  // ===========================================================================
  // VOICE AGENT CONFIGURATION
  // ===========================================================================
  voiceAgent: {
    // Voice Provider
    // Options: "elevenlabs", "vapi", "retell", "bland", "custom"
    provider: "elevenlabs",

    // Agent ID (from your voice provider dashboard)
    agentId: "YOUR_AGENT_ID_HERE",

    // Agent Name (displayed to users)
    agentName: "Alex",

    // Agent Role/Title
    agentRole: "Virtual Receptionist",

    // Agent Avatar (optional - URL or local path)
    agentAvatar: "",

    // Welcome Message (shown before connecting)
    welcomeMessage: "Hi! I'm Alex, your AI assistant. Click the button below to start a conversation. I can help you with appointments, answer questions, and more!",

    // Connection Settings
    connectionType: "webrtc", // "webrtc" or "websocket"

    // Features the agent can do (shown as capability cards)
    capabilities: [
      {
        icon: "Calendar",
        title: "Book Appointments",
        description: "Schedule, reschedule, or cancel appointments instantly"
      },
      {
        icon: "MessageSquare",
        title: "Answer Questions",
        description: "Get instant answers about services, pricing, and availability"
      },
      {
        icon: "Clock",
        title: "24/7 Availability",
        description: "Always available, no waiting, no hold times"
      },
      {
        icon: "FileText",
        title: "Take Messages",
        description: "Leave detailed messages that get delivered instantly"
      },
      {
        icon: "UserCheck",
        title: "Qualify Leads",
        description: "Gather important information before connecting to staff"
      },
      {
        icon: "Bell",
        title: "Send Reminders",
        description: "Automated appointment reminders and follow-ups"
      }
    ],
  },

  // ===========================================================================
  // INDUSTRY CONFIGURATION
  // ===========================================================================
  industry: {
    // Your Industry Type
    // This customizes terminology and examples throughout the site
    // Options: "healthcare", "dental", "legal", "realestate", "restaurant",
    //          "automotive", "salon", "fitness", "hotel", "retail", "generic"
    type: "generic",

    // Custom Industry Name (if "generic" or custom industry)
    customName: "Business",

    // What do you call your customers?
    customerTerm: "customers", // e.g., "patients", "clients", "guests"

    // What do you call appointments?
    appointmentTerm: "appointments", // e.g., "visits", "consultations", "reservations"
  },

  // ===========================================================================
  // LANDING PAGE CONTENT
  // ===========================================================================
  landingPage: {
    // Hero Section
    hero: {
      badge: "AI-Powered Voice Technology",
      title: "Never Miss Another Call",
      titleHighlight: "With AI", // This part gets the gradient color
      subtitle: "Our intelligent voice agent handles customer calls 24/7, books appointments, answers questions, and delivers a human-like experience that delights your customers.",

      // Call-to-action buttons
      primaryCTA: {
        text: "Try Live Demo",
        link: "#demo"
      },
      secondaryCTA: {
        text: "View Dashboard",
        link: "/demo-dashboard"
      },
    },

    // Stats Bar (shown below hero)
    stats: [
      { value: "10K+", label: "Calls Handled" },
      { value: "99.9%", label: "Uptime" },
      { value: "4.9/5", label: "Satisfaction" },
      { value: "24/7", label: "Availability" },
    ],

    // Features Section
    features: {
      title: "Everything You Need",
      subtitle: "Powerful features that transform how you handle customer communication",
      items: [
        {
          icon: "Phone",
          title: "Natural Conversations",
          description: "Advanced AI that understands context, handles interruptions, and speaks naturally"
        },
        {
          icon: "Calendar",
          title: "Smart Scheduling",
          description: "Automatically checks availability and books appointments in real-time"
        },
        {
          icon: "Brain",
          title: "Learns & Improves",
          description: "Gets smarter over time by learning from every interaction"
        },
        {
          icon: "Shield",
          title: "Enterprise Security",
          description: "SOC 2 compliant with end-to-end encryption for all calls"
        },
        {
          icon: "Zap",
          title: "Instant Setup",
          description: "Go live in minutes with our simple integration process"
        },
        {
          icon: "BarChart3",
          title: "Detailed Analytics",
          description: "Track performance, call outcomes, and customer satisfaction"
        }
      ]
    },

    // ROI/Benefits Section
    benefits: {
      title: "The Results Speak for Themselves",
      items: [
        { value: "89%", label: "Cost Reduction", description: "vs. traditional call centers" },
        { value: "3x", label: "More Bookings", description: "from after-hours calls" },
        { value: "< 1s", label: "Response Time", description: "average time to answer" },
      ]
    },

    // Use Cases Section
    useCases: {
      title: "Built for Your Industry",
      subtitle: "See how businesses like yours use AI voice agents",
      items: [
        {
          icon: "Stethoscope",
          industry: "Healthcare",
          title: "Medical Clinics",
          description: "Handle patient inquiries, schedule appointments, and send reminders"
        },
        {
          icon: "Scale",
          industry: "Legal",
          title: "Law Firms",
          description: "Qualify leads, schedule consultations, and take detailed messages"
        },
        {
          icon: "Home",
          industry: "Real Estate",
          title: "Real Estate Agencies",
          description: "Answer property questions, schedule viewings, and capture leads"
        },
        {
          icon: "UtensilsCrossed",
          industry: "Restaurants",
          title: "Restaurants",
          description: "Take reservations, answer menu questions, and handle takeout orders"
        }
      ]
    },

    // Testimonials (optional - leave empty array [] to hide)
    testimonials: [
      {
        quote: "This AI agent has transformed our practice. We never miss a call anymore, and our patients love the instant response.",
        author: "Dr. Sarah Johnson",
        role: "Medical Director",
        company: "Johnson Family Clinic",
        avatar: ""
      },
      {
        quote: "The ROI was immediate. We're handling 3x more inquiries with zero additional staff.",
        author: "Michael Chen",
        role: "Operations Manager",
        company: "Premier Dental Group",
        avatar: ""
      }
    ],
  },

  // ===========================================================================
  // PRICING CONFIGURATION
  // ===========================================================================
  pricing: {
    // Show pricing section?
    enabled: true,

    title: "Simple, Transparent Pricing",
    subtitle: "Choose the plan that fits your business",

    // Currency
    currency: "$",

    // Billing period shown
    billingPeriod: "month",

    // Pricing Plans
    plans: [
      {
        name: "Starter",
        price: 299,
        description: "Perfect for small businesses",
        isPopular: false,
        features: [
          { text: "1 AI Voice Agent", included: true },
          { text: "500 minutes/month", included: true },
          { text: "Basic Analytics", included: true },
          { text: "Email Support", included: true },
          { text: "Custom Voice", included: false },
          { text: "API Access", included: false },
        ],
        cta: {
          text: "Get Started",
          link: "/signup?plan=starter"
        }
      },
      {
        name: "Professional",
        price: 699,
        description: "For growing businesses",
        isPopular: true,
        features: [
          { text: "3 AI Voice Agents", included: true },
          { text: "2,000 minutes/month", included: true },
          { text: "Advanced Analytics", included: true },
          { text: "Priority Support", included: true },
          { text: "Custom Voice", included: true },
          { text: "API Access", included: true },
        ],
        cta: {
          text: "Get Started",
          link: "/signup?plan=professional"
        }
      },
      {
        name: "Enterprise",
        price: null, // null = "Custom" pricing
        description: "For large organizations",
        isPopular: false,
        features: [
          { text: "Unlimited Agents", included: true },
          { text: "Unlimited Minutes", included: true },
          { text: "Custom Analytics", included: true },
          { text: "Dedicated Support", included: true },
          { text: "Custom Voice", included: true },
          { text: "Full API Access", included: true },
        ],
        cta: {
          text: "Contact Sales",
          link: "/contact"
        }
      }
    ],

    // One-time purchase option (optional - set enabled: false to hide)
    lifetimeDeal: {
      enabled: true,
      name: "Lifetime License",
      price: 4999,
      description: "One-time payment, own it forever",
      features: [
        "All Professional features",
        "Lifetime updates",
        "1 year priority support",
        "Source code access",
        "White-label rights"
      ]
    },

    // Add-ons (optional)
    addons: [
      { name: "Extra 500 minutes", price: 99 },
      { name: "Additional Agent", price: 149 },
      { name: "Custom Integration", price: 499 },
    ]
  },

  // ===========================================================================
  // DASHBOARD CONFIGURATION
  // ===========================================================================
  dashboard: {
    // Dashboard title
    title: "Analytics Dashboard",

    // Show demo banner?
    showDemoBanner: true,
    demoBannerText: "Live Demo Dashboard",

    // Tabs to show
    tabs: [
      { id: "overview", label: "Overview", icon: "LayoutDashboard" },
      { id: "analytics", label: "Analytics", icon: "BarChart3" },
      { id: "calls", label: "Call Logs", icon: "Phone" },
    ],

    // Metrics to display (customize labels for your industry)
    metrics: {
      totalCalls: { label: "Total Calls", icon: "Phone" },
      totalCustomers: { label: "Total Customers", icon: "Users" },
      avgDuration: { label: "Avg. Duration", icon: "Clock" },
      satisfaction: { label: "Satisfaction", icon: "ThumbsUp" },
      bookingRate: { label: "Booking Rate", icon: "Calendar" },
      responseTime: { label: "Response Time", icon: "Zap" },
    },

    // Chart colors
    chartColors: {
      primary: "#9333ea",
      secondary: "#ec4899",
      success: "#22c55e",
      warning: "#f97316",
      info: "#3b82f6",
    }
  },

  // ===========================================================================
  // FUTURE ROADMAP (Optional - for product pages)
  // ===========================================================================
  roadmap: {
    enabled: true,
    title: "What's Coming Next",
    subtitle: "Exciting features on our development roadmap",
    items: [
      {
        icon: "Smartphone",
        title: "Real Phone Integration",
        description: "Connect your existing business phone numbers directly to the AI",
        quarter: "Q2 2025",
        color: "blue"
      },
      {
        icon: "Bell",
        title: "Outbound Calling",
        description: "AI-powered reminder calls and follow-ups",
        quarter: "Q2 2025",
        color: "green"
      },
      {
        icon: "Languages",
        title: "Multi-Language Support",
        description: "Support for 50+ languages with accent detection",
        quarter: "Q3 2025",
        color: "purple"
      },
      {
        icon: "Video",
        title: "Video AI Agent",
        description: "Visual AI receptionist with video capabilities",
        quarter: "Q4 2025",
        color: "orange"
      }
    ]
  },

  // ===========================================================================
  // INTEGRATIONS SECTION
  // ===========================================================================
  integrations: {
    enabled: true,
    title: "Connects With Your Tools",
    subtitle: "Seamlessly integrate with your existing workflow",
    items: [
      { name: "Google Calendar", logo: "/integrations/google-calendar.svg" },
      { name: "Salesforce", logo: "/integrations/salesforce.svg" },
      { name: "HubSpot", logo: "/integrations/hubspot.svg" },
      { name: "Calendly", logo: "/integrations/calendly.svg" },
      { name: "Slack", logo: "/integrations/slack.svg" },
      { name: "Zapier", logo: "/integrations/zapier.svg" },
    ]
  },

  // ===========================================================================
  // SEO & META
  // ===========================================================================
  seo: {
    title: "VoiceAI Pro - AI-Powered Virtual Receptionist",
    description: "Transform your customer service with intelligent voice AI that handles calls, books appointments, and answers questions 24/7.",
    keywords: ["AI voice agent", "virtual receptionist", "automated calls", "appointment booking"],
    ogImage: "/og-image.png",
  },

  // ===========================================================================
  // FOOTER
  // ===========================================================================
  footer: {
    copyright: "2025 VoiceAI Pro. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Contact", url: "/contact" },
    ]
  }
};

export default siteConfig;
