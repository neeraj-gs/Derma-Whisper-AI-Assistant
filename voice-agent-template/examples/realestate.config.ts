/**
 * Real Estate Industry Configuration Example
 * Copy this to src/config/site.config.ts and customize
 */

import { SiteConfig } from '../src/types';

const realestateConfig: SiteConfig = {
  business: {
    name: "PropertyVoice AI",
    tagline: "AI That Never Sleeps on Your Leads",
    description: "Capture every lead, answer property questions instantly, and schedule viewings 24/7 with AI that speaks real estate.",
    email: "hello@propertyvoice.ai",
    phone: "+1 (888) 555-HOME",
    address: "500 Realtor Drive, Miami, FL 33101",
    socials: {
      twitter: "https://twitter.com/propertyvoiceai",
      linkedin: "https://linkedin.com/company/propertyvoiceai",
      facebook: "https://facebook.com/propertyvoiceai",
      instagram: "https://instagram.com/propertyvoiceai",
      youtube: "",
    },
    privacyPolicyUrl: "/privacy",
    termsOfServiceUrl: "/terms",
  },

  branding: {
    logo: "/logo-realestate.svg",
    logoAlt: "PropertyVoice AI",
    favicon: "/favicon.ico",
    primaryColor: "orange",
    secondaryColor: "red",
    defaultDarkMode: true,
    customClass: "",
  },

  voiceAgent: {
    provider: "elevenlabs",
    agentId: "YOUR_AGENT_ID",
    agentName: "Sarah",
    agentRole: "Property Concierge",
    agentAvatar: "",
    welcomeMessage: "Hi there! I'm Sarah, your AI property assistant. I can tell you about listings, schedule viewings, and answer your real estate questions. What can I help you with today?",
    connectionType: "webrtc",
    capabilities: [
      {
        icon: "Home",
        title: "Property Information",
        description: "Get instant details about any listing in our portfolio"
      },
      {
        icon: "Calendar",
        title: "Schedule Viewings",
        description: "Book property tours at times that work for you"
      },
      {
        icon: "DollarSign",
        title: "Pricing & Financing",
        description: "Discuss pricing, mortgage options, and affordability"
      },
      {
        icon: "MapPin",
        title: "Neighborhood Insights",
        description: "Learn about schools, amenities, and local market trends"
      },
      {
        icon: "UserCheck",
        title: "Lead Qualification",
        description: "Share your needs so agents can better serve you"
      },
      {
        icon: "Clock",
        title: "24/7 Availability",
        description: "Never miss a buyer inquiry, day or night"
      }
    ],
  },

  industry: {
    type: "realestate",
    customName: "Real Estate",
    customerTerm: "clients",
    appointmentTerm: "viewings",
  },

  landingPage: {
    hero: {
      badge: "Real Estate AI Revolution",
      title: "Never Lose a Lead",
      titleHighlight: "Again",
      subtitle: "While you're showing properties or sleeping, our AI is capturing leads, answering questions, and scheduling viewings. Every inquiry gets instant attention.",
      primaryCTA: { text: "Talk to Our AI", link: "#demo" },
      secondaryCTA: { text: "See Performance", link: "/dashboard" },
    },
    stats: [
      { value: "50K+", label: "Leads Captured" },
      { value: "89%", label: "Response Rate" },
      { value: "2.5x", label: "More Viewings" },
      { value: "24/7", label: "Lead Response" },
    ],
    features: {
      title: "Built for Real Estate",
      subtitle: "Features that help you close more deals",
      items: [
        {
          icon: "Home",
          title: "MLS Integration",
          description: "Access your entire listing database in real-time"
        },
        {
          icon: "MessageSquare",
          title: "Lead Qualification",
          description: "Pre-qualify buyers before they reach your desk"
        },
        {
          icon: "Calendar",
          title: "Smart Scheduling",
          description: "Coordinate viewings across multiple agents"
        },
        {
          icon: "MapPin",
          title: "Market Knowledge",
          description: "Answer neighborhood and market trend questions"
        },
        {
          icon: "Phone",
          title: "Call Routing",
          description: "Direct hot leads to available agents instantly"
        },
        {
          icon: "BarChart3",
          title: "Lead Analytics",
          description: "Track conversion rates and agent performance"
        }
      ]
    },
    benefits: {
      title: "Results That Sell",
      items: [
        { value: "47%", label: "More Leads Captured", description: "from after-hours calls" },
        { value: "2.5x", label: "More Viewings", description: "scheduled per listing" },
        { value: "$2.3M", label: "Avg. Additional Sales", description: "per brokerage annually" },
      ]
    },
    useCases: {
      title: "Perfect for Every Real Estate Professional",
      subtitle: "From solo agents to enterprise brokerages",
      items: [
        {
          icon: "User",
          industry: "Individual Agents",
          title: "Solo Agents",
          description: "Never miss a lead while showing properties or after hours"
        },
        {
          icon: "Users",
          industry: "Teams",
          title: "Real Estate Teams",
          description: "Distribute leads fairly and track team performance"
        },
        {
          icon: "Building",
          industry: "Brokerages",
          title: "Brokerages",
          description: "Scale lead response across all agents and offices"
        },
        {
          icon: "Home",
          industry: "Property Management",
          title: "Property Managers",
          description: "Handle tenant inquiries and maintenance requests"
        }
      ]
    },
    testimonials: [
      {
        quote: "I was losing leads every weekend. Now my AI handles calls while I show homes, and I've doubled my listings.",
        author: "Jennifer Martinez",
        role: "Top Producer",
        company: "Coldwell Banker",
        avatar: ""
      },
      {
        quote: "Our brokerage deployed this across 50 agents. Lead response time went from hours to seconds.",
        author: "David Kim",
        role: "Managing Broker",
        company: "RE/MAX Elite",
        avatar: ""
      }
    ],
  },

  pricing: {
    enabled: true,
    title: "Plans That Scale With You",
    subtitle: "From solo agents to enterprise brokerages",
    currency: "$",
    billingPeriod: "month",
    plans: [
      {
        name: "Solo Agent",
        price: 199,
        description: "For individual agents",
        isPopular: false,
        features: [
          { text: "1 AI Voice Agent", included: true },
          { text: "500 minutes/month", included: true },
          { text: "Lead Capture", included: true },
          { text: "Viewing Scheduling", included: true },
          { text: "MLS Integration", included: false },
          { text: "CRM Integration", included: false },
        ],
        cta: { text: "Start Free Trial", link: "/signup?plan=solo" }
      },
      {
        name: "Team",
        price: 499,
        description: "For real estate teams",
        isPopular: true,
        features: [
          { text: "5 AI Voice Agents", included: true },
          { text: "2,500 minutes/month", included: true },
          { text: "Lead Capture + Routing", included: true },
          { text: "Smart Scheduling", included: true },
          { text: "MLS Integration", included: true },
          { text: "CRM Integration", included: true },
        ],
        cta: { text: "Start Free Trial", link: "/signup?plan=team" }
      },
      {
        name: "Brokerage",
        price: null,
        description: "For brokerages & franchises",
        isPopular: false,
        features: [
          { text: "Unlimited Agents", included: true },
          { text: "Unlimited Minutes", included: true },
          { text: "Multi-office Support", included: true },
          { text: "Custom Lead Rules", included: true },
          { text: "Full Integration Suite", included: true },
          { text: "White Label Option", included: true },
        ],
        cta: { text: "Contact Sales", link: "/contact" }
      }
    ],
    lifetimeDeal: {
      enabled: true,
      name: "Lifetime Agent License",
      price: 2999,
      description: "One-time payment, own it forever",
      features: [
        "All Team features",
        "Lifetime updates",
        "Priority support",
        "Personal branding",
        "Unlimited minutes"
      ]
    },
    addons: [
      { name: "Extra 500 minutes", price: 49 },
      { name: "Additional MLS Feed", price: 99 },
      { name: "Custom CRM Integration", price: 299 },
    ]
  },

  dashboard: {
    title: "Lead Performance Dashboard",
    showDemoBanner: true,
    demoBannerText: "Demo Dashboard - Real Estate",
    tabs: [
      { id: "overview", label: "Overview", icon: "LayoutDashboard" },
      { id: "analytics", label: "Lead Analytics", icon: "BarChart3" },
      { id: "calls", label: "Lead Calls", icon: "Phone" },
    ],
    metrics: {
      totalCalls: { label: "Total Inquiries", icon: "Phone" },
      totalCustomers: { label: "Leads Captured", icon: "Users" },
      avgDuration: { label: "Avg. Call Time", icon: "Clock" },
      satisfaction: { label: "Lead Quality", icon: "Star" },
      bookingRate: { label: "Viewing Rate", icon: "Home" },
      responseTime: { label: "Response Time", icon: "Zap" },
    },
    chartColors: {
      primary: "#f97316",
      secondary: "#ef4444",
      success: "#22c55e",
      warning: "#eab308",
      info: "#3b82f6",
    }
  },

  roadmap: {
    enabled: true,
    title: "Coming Soon",
    subtitle: "Features to help you sell more properties",
    items: [
      {
        icon: "Video",
        title: "Virtual Tour Booking",
        description: "AI schedules and sends virtual tour links automatically",
        quarter: "Q2 2025",
        color: "orange"
      },
      {
        icon: "Brain",
        title: "AI Property Matching",
        description: "Recommend properties based on buyer conversations",
        quarter: "Q2 2025",
        color: "red"
      },
      {
        icon: "Languages",
        title: "Multilingual Support",
        description: "Capture leads in Spanish, Mandarin, and more",
        quarter: "Q3 2025",
        color: "blue"
      },
      {
        icon: "MessageSquare",
        title: "Text Follow-up",
        description: "Automated SMS sequences after calls",
        quarter: "Q3 2025",
        color: "green"
      }
    ]
  },

  integrations: {
    enabled: true,
    title: "Connects With Your Stack",
    subtitle: "Seamless integration with real estate tools",
    items: [
      { name: "Zillow", logo: "/integrations/zillow.svg" },
      { name: "Realtor.com", logo: "/integrations/realtor.svg" },
      { name: "Follow Up Boss", logo: "/integrations/fub.svg" },
      { name: "KvCORE", logo: "/integrations/kvcore.svg" },
      { name: "BoomTown", logo: "/integrations/boomtown.svg" },
      { name: "Calendly", logo: "/integrations/calendly.svg" },
    ]
  },

  seo: {
    title: "PropertyVoice AI - Never Miss a Real Estate Lead",
    description: "AI voice agent for real estate. Capture leads 24/7, answer property questions, and schedule viewings automatically.",
    keywords: ["real estate AI", "lead capture", "property AI", "realtor assistant"],
    ogImage: "/og-realestate.png",
  },

  footer: {
    copyright: "2025 PropertyVoice AI. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "Terms of Service", url: "/terms" },
      { text: "Contact", url: "/contact" },
    ]
  }
};

export default realestateConfig;
