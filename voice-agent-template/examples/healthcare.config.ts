/**
 * Healthcare Industry Configuration Example
 * Copy this to src/config/site.config.ts and customize
 */

import { SiteConfig } from '../src/types';

const healthcareConfig: SiteConfig = {
  business: {
    name: "MediVoice AI",
    tagline: "AI-Powered Healthcare Communication",
    description: "Transform patient communication with intelligent voice AI that handles appointment scheduling, answers medical inquiries, and delivers compassionate care 24/7.",
    email: "hello@medivoice.ai",
    phone: "+1 (800) MED-VOICE",
    address: "100 Healthcare Blvd, Boston, MA 02115",
    socials: {
      twitter: "https://twitter.com/medivoiceai",
      linkedin: "https://linkedin.com/company/medivoiceai",
      facebook: "",
      instagram: "",
      youtube: "",
    },
    privacyPolicyUrl: "/privacy",
    termsOfServiceUrl: "/terms",
  },

  branding: {
    logo: "/logo-healthcare.svg",
    logoAlt: "MediVoice AI",
    favicon: "/favicon.ico",
    primaryColor: "blue",
    secondaryColor: "teal",
    defaultDarkMode: true,
    customClass: "",
  },

  voiceAgent: {
    provider: "elevenlabs",
    agentId: "YOUR_AGENT_ID",
    agentName: "Dr. Maya",
    agentRole: "Medical Assistant",
    agentAvatar: "",
    welcomeMessage: "Hello! I'm Dr. Maya, your virtual medical assistant. I can help you schedule appointments, answer questions about our services, or connect you with our care team. How may I assist you today?",
    connectionType: "webrtc",
    capabilities: [
      {
        icon: "Calendar",
        title: "Schedule Appointments",
        description: "Book, reschedule, or cancel medical appointments instantly"
      },
      {
        icon: "Stethoscope",
        title: "Service Information",
        description: "Learn about treatments, procedures, and medical services"
      },
      {
        icon: "Clock",
        title: "24/7 Patient Support",
        description: "Always available for patient inquiries and concerns"
      },
      {
        icon: "FileText",
        title: "Insurance Verification",
        description: "Check insurance coverage and pre-authorization status"
      },
      {
        icon: "Bell",
        title: "Appointment Reminders",
        description: "Automated reminders and follow-up calls"
      },
      {
        icon: "UserCheck",
        title: "Patient Intake",
        description: "Collect patient information before visits"
      }
    ],
  },

  industry: {
    type: "healthcare",
    customName: "Healthcare",
    customerTerm: "patients",
    appointmentTerm: "appointments",
  },

  landingPage: {
    hero: {
      badge: "HIPAA Compliant Voice AI",
      title: "Transform Patient Care",
      titleHighlight: "With AI",
      subtitle: "Reduce wait times, improve patient satisfaction, and let your staff focus on care while our AI handles calls.",
      primaryCTA: { text: "Try Live Demo", link: "#demo" },
      secondaryCTA: { text: "See Analytics", link: "/dashboard" },
    },
    stats: [
      { value: "500K+", label: "Patients Served" },
      { value: "99.9%", label: "HIPAA Compliant" },
      { value: "4.9/5", label: "Patient Rating" },
      { value: "24/7", label: "Availability" },
    ],
    features: {
      title: "Built for Healthcare",
      subtitle: "Purpose-built features for medical practices",
      items: [
        {
          icon: "Shield",
          title: "HIPAA Compliant",
          description: "End-to-end encryption and full HIPAA compliance for patient data"
        },
        {
          icon: "Calendar",
          title: "EHR Integration",
          description: "Seamlessly connects with Epic, Cerner, and other EHR systems"
        },
        {
          icon: "Brain",
          title: "Medical Knowledge",
          description: "Trained on medical terminology and healthcare protocols"
        },
        {
          icon: "Heart",
          title: "Empathetic Communication",
          description: "Compassionate, patient-centered conversation design"
        },
        {
          icon: "Zap",
          title: "Triage Support",
          description: "Basic symptom assessment and care routing"
        },
        {
          icon: "BarChart3",
          title: "Patient Analytics",
          description: "Track satisfaction, call outcomes, and appointment metrics"
        }
      ]
    },
    benefits: {
      title: "Proven Healthcare Results",
      items: [
        { value: "67%", label: "Reduced Wait Time", description: "for appointment scheduling" },
        { value: "3x", label: "More Appointments", description: "booked after hours" },
        { value: "92%", label: "Patient Satisfaction", description: "rating improvement" },
      ]
    },
    useCases: {
      title: "Serving All Healthcare Settings",
      subtitle: "Trusted by medical practices of all sizes",
      items: [
        {
          icon: "Stethoscope",
          industry: "Primary Care",
          title: "Family Practices",
          description: "Handle routine appointments, prescription refills, and patient inquiries"
        },
        {
          icon: "Heart",
          industry: "Specialty Care",
          title: "Specialist Offices",
          description: "Manage referrals, procedure scheduling, and complex inquiries"
        },
        {
          icon: "Building",
          industry: "Hospitals",
          title: "Hospital Systems",
          description: "Scale communication across departments and locations"
        },
        {
          icon: "Users",
          industry: "Urgent Care",
          title: "Urgent Care Centers",
          description: "Triage calls and direct patients to appropriate care levels"
        }
      ]
    },
    testimonials: [
      {
        quote: "Our patients love the instant response. No more waiting on hold, and our front desk can focus on in-person care.",
        author: "Dr. Sarah Chen",
        role: "Medical Director",
        company: "Bay Area Family Medicine",
        avatar: ""
      },
      {
        quote: "We've seen a 40% reduction in no-shows since implementing the AI reminder system. It's been transformative.",
        author: "Michael Torres",
        role: "Practice Manager",
        company: "Coastal Orthopedics",
        avatar: ""
      }
    ],
  },

  pricing: {
    enabled: true,
    title: "Healthcare Pricing",
    subtitle: "Plans designed for medical practices",
    currency: "$",
    billingPeriod: "month",
    plans: [
      {
        name: "Solo Practice",
        price: 399,
        description: "For individual practitioners",
        isPopular: false,
        features: [
          { text: "1 AI Voice Agent", included: true },
          { text: "1,000 minutes/month", included: true },
          { text: "HIPAA Compliance", included: true },
          { text: "Basic EHR Integration", included: true },
          { text: "Multi-location", included: false },
          { text: "Custom Voice", included: false },
        ],
        cta: { text: "Start Trial", link: "/signup?plan=solo" }
      },
      {
        name: "Group Practice",
        price: 899,
        description: "For multi-provider practices",
        isPopular: true,
        features: [
          { text: "5 AI Voice Agents", included: true },
          { text: "5,000 minutes/month", included: true },
          { text: "HIPAA Compliance", included: true },
          { text: "Full EHR Integration", included: true },
          { text: "Multi-location", included: true },
          { text: "Custom Voice", included: true },
        ],
        cta: { text: "Start Trial", link: "/signup?plan=group" }
      },
      {
        name: "Enterprise",
        price: null,
        description: "For hospitals & health systems",
        isPopular: false,
        features: [
          { text: "Unlimited Agents", included: true },
          { text: "Unlimited Minutes", included: true },
          { text: "HIPAA BAA", included: true },
          { text: "Custom EHR Integration", included: true },
          { text: "Dedicated Support", included: true },
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
      { name: "Additional 1,000 minutes", price: 99 },
      { name: "Custom EHR Integration", price: 299 },
      { name: "Additional Location", price: 199 },
    ]
  },

  dashboard: {
    title: "Patient Communication Dashboard",
    showDemoBanner: true,
    demoBannerText: "Demo Dashboard - Healthcare",
    tabs: [
      { id: "overview", label: "Overview", icon: "LayoutDashboard" },
      { id: "analytics", label: "Analytics", icon: "BarChart3" },
      { id: "calls", label: "Patient Calls", icon: "Phone" },
    ],
    metrics: {
      totalCalls: { label: "Patient Calls", icon: "Phone" },
      totalCustomers: { label: "Total Patients", icon: "Users" },
      avgDuration: { label: "Avg. Call Time", icon: "Clock" },
      satisfaction: { label: "Patient Rating", icon: "Heart" },
      bookingRate: { label: "Booking Rate", icon: "Calendar" },
      responseTime: { label: "Response Time", icon: "Zap" },
    },
    chartColors: {
      primary: "#3b82f6",
      secondary: "#14b8a6",
      success: "#22c55e",
      warning: "#f97316",
      info: "#6366f1",
    }
  },

  roadmap: {
    enabled: true,
    title: "Healthcare Roadmap",
    subtitle: "Upcoming features for medical practices",
    items: [
      {
        icon: "FileText",
        title: "Automated Insurance Verification",
        description: "Real-time insurance eligibility checks during calls",
        quarter: "Q2 2025",
        color: "blue"
      },
      {
        icon: "Languages",
        title: "Medical Translation",
        description: "Support for 20+ languages with medical terminology",
        quarter: "Q3 2025",
        color: "teal"
      },
      {
        icon: "Video",
        title: "Telehealth Integration",
        description: "Schedule and launch video visits directly",
        quarter: "Q3 2025",
        color: "purple"
      },
      {
        icon: "Brain",
        title: "Clinical Decision Support",
        description: "AI-assisted triage and care recommendations",
        quarter: "Q4 2025",
        color: "green"
      }
    ]
  },

  integrations: {
    enabled: true,
    title: "EHR Integrations",
    subtitle: "Connect with your existing systems",
    items: [
      { name: "Epic", logo: "/integrations/epic.svg" },
      { name: "Cerner", logo: "/integrations/cerner.svg" },
      { name: "Athenahealth", logo: "/integrations/athena.svg" },
      { name: "eClinicalWorks", logo: "/integrations/ecw.svg" },
      { name: "NextGen", logo: "/integrations/nextgen.svg" },
      { name: "DrChrono", logo: "/integrations/drchrono.svg" },
    ]
  },

  seo: {
    title: "MediVoice AI - HIPAA Compliant Voice AI for Healthcare",
    description: "Transform patient communication with AI. Schedule appointments, answer inquiries, and deliver compassionate care 24/7. HIPAA compliant.",
    keywords: ["healthcare AI", "medical voice assistant", "HIPAA compliant AI", "patient scheduling"],
    ogImage: "/og-healthcare.png",
  },

  footer: {
    copyright: "2025 MediVoice AI. All rights reserved. HIPAA Compliant.",
    links: [
      { text: "Privacy Policy", url: "/privacy" },
      { text: "HIPAA Compliance", url: "/hipaa" },
      { text: "BAA Request", url: "/baa" },
      { text: "Contact", url: "/contact" },
    ]
  }
};

export default healthcareConfig;
