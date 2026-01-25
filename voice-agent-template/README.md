# 🎙️ Voice Agent Template

A professional, fully customizable template for building AI-powered voice agent websites. Perfect for selling voice AI solutions to businesses across any industry.

![Voice Agent Template](https://via.placeholder.com/800x400?text=Voice+Agent+Template+Preview)

## ✨ Features

- **🎨 Fully Customizable** - Single config file controls everything
- **📱 Responsive Design** - Works beautifully on all devices
- **🔊 Voice AI Integration** - Pre-built ElevenLabs support (extendable to other providers)
- **📊 Analytics Dashboard** - Professional dashboard with charts and metrics
- **💰 Pricing Section** - Ready-to-use pricing tiers and lifetime deals
- **🚀 Future Roadmap** - Showcase upcoming features
- **🏢 Multi-Industry** - Easily adapt for any business type
- **🌙 Dark Mode** - Beautiful dark theme by default

## 🚀 Quick Start

### 1. Install Dependencies

```bash
cd voice-agent-template
npm install
```

### 2. Configure Your Voice Agent

Open `src/config/site.config.ts` and update:

```typescript
voiceAgent: {
  provider: "elevenlabs",
  agentId: "YOUR_AGENT_ID_HERE", // Get this from ElevenLabs
  agentName: "Alex",
  agentRole: "Virtual Receptionist",
  // ... other settings
}
```

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to see your site!

### 4. Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
voice-agent-template/
├── src/
│   ├── components/
│   │   ├── ui/           # Reusable UI components
│   │   ├── landing/      # Landing page sections
│   │   ├── dashboard/    # Dashboard components
│   │   ├── voice/        # Voice agent components
│   │   └── layout/       # Layout components
│   ├── config/
│   │   └── site.config.ts    # ⭐ MAIN CONFIG FILE
│   ├── pages/
│   │   ├── LandingPage.tsx
│   │   └── DashboardPage.tsx
│   ├── utils/
│   │   ├── dummyData.ts  # Demo data generators
│   │   ├── colors.ts     # Color utilities
│   │   └── icons.tsx     # Icon utilities
│   ├── types/
│   │   └── index.ts      # TypeScript types
│   ├── App.tsx
│   └── main.tsx
├── examples/             # Example configurations
├── public/
└── package.json
```

## ⚙️ Configuration Guide

All customization happens in `src/config/site.config.ts`. Here's what you can configure:

### Business Information

```typescript
business: {
  name: "Your Company",
  tagline: "Your Tagline",
  email: "hello@example.com",
  phone: "+1 (555) 123-4567",
  // Social links, legal pages, etc.
}
```

### Branding & Colors

```typescript
branding: {
  logo: "/your-logo.svg",
  primaryColor: "purple",    // purple, blue, green, orange, red, pink, indigo, teal
  secondaryColor: "pink",
  defaultDarkMode: true,
}
```

### Voice Agent

```typescript
voiceAgent: {
  provider: "elevenlabs",    // elevenlabs, vapi, retell, bland, custom
  agentId: "YOUR_ID",
  agentName: "Alex",
  agentRole: "Virtual Receptionist",
  welcomeMessage: "Hi! I'm here to help...",
  capabilities: [
    { icon: "Calendar", title: "Book Appointments", description: "..." },
    // Add more capabilities
  ]
}
```

### Industry Type

```typescript
industry: {
  type: "healthcare",        // healthcare, dental, legal, realestate, restaurant, etc.
  customerTerm: "patients",  // How you call your customers
  appointmentTerm: "visits", // What you call appointments
}
```

### Landing Page Content

```typescript
landingPage: {
  hero: {
    badge: "AI-Powered",
    title: "Never Miss Another Call",
    titleHighlight: "With AI",
    subtitle: "Your description...",
    primaryCTA: { text: "Try Demo", link: "#demo" },
    secondaryCTA: { text: "View Dashboard", link: "/dashboard" },
  },
  stats: [
    { value: "10K+", label: "Calls Handled" },
    // More stats
  ],
  features: { /* ... */ },
  benefits: { /* ... */ },
  useCases: { /* ... */ },
  testimonials: [ /* ... */ ],
}
```

### Pricing

```typescript
pricing: {
  enabled: true,
  currency: "$",
  billingPeriod: "month",
  plans: [
    {
      name: "Starter",
      price: 299,
      isPopular: false,
      features: [
        { text: "1 AI Agent", included: true },
        { text: "API Access", included: false },
      ],
    },
    // More plans
  ],
  lifetimeDeal: {
    enabled: true,
    price: 4999,
    // ...
  }
}
```

### Dashboard

```typescript
dashboard: {
  title: "Analytics Dashboard",
  showDemoBanner: true,
  tabs: [
    { id: "overview", label: "Overview", icon: "LayoutDashboard" },
    { id: "analytics", label: "Analytics", icon: "BarChart3" },
    { id: "calls", label: "Call Logs", icon: "Phone" },
  ],
  metrics: {
    totalCalls: { label: "Total Calls", icon: "Phone" },
    // Customize metric labels
  }
}
```

## 🎯 Use Cases

This template is perfect for:

- **Voice AI Agencies** - Sell AI receptionist services
- **SaaS Companies** - Showcase voice AI products
- **Call Centers** - Demonstrate AI capabilities
- **Healthcare** - Medical appointment booking
- **Legal** - Law firm intake automation
- **Real Estate** - Property inquiry handling
- **Restaurants** - Reservation management
- **Any Service Business** - Customer call handling

## 🔌 Voice Provider Integration

### ElevenLabs (Default)

1. Create an account at [ElevenLabs](https://elevenlabs.io)
2. Create a Conversational AI agent
3. Copy your Agent ID
4. Add to config: `agentId: "YOUR_AGENT_ID"`

### Other Providers (Coming Soon)

The template is designed to support multiple providers:
- Vapi
- Retell
- Bland.ai
- Custom WebRTC

## 🎨 Customizing Sections

### Adding/Removing Sections

Edit `src/pages/LandingPage.tsx`:

```tsx
export const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      {/* Add or remove sections as needed */}
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};
```

### Custom Styling

All components use Tailwind CSS. Modify styles in:
- `src/index.css` - Global styles
- Individual component files
- `tailwind.config.js` - Theme customization

## 📊 Dashboard Features

- **Overview Tab** - Key metrics and recent calls
- **Analytics Tab** - Detailed charts and trends
- **Call Logs Tab** - Searchable call history
- **Export** - Download data (extendable)

### Connecting Real Data

Replace dummy data generators in components with your API calls:

```typescript
// Instead of:
const [stats] = useState(generateDummyStats());

// Use:
const [stats, setStats] = useState(null);
useEffect(() => {
  fetch('/api/stats').then(res => res.json()).then(setStats);
}, []);
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Upload dist/ folder to Netlify
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "run", "preview"]
```

## 📝 Environment Variables

Create `.env` file:

```env
VITE_ELEVENLABS_AGENT_ID=your_agent_id
VITE_API_URL=https://your-api.com
```

## 🔧 Tech Stack

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling
- **Vite** - Build Tool
- **React Router** - Routing
- **Recharts** - Charts
- **Lucide React** - Icons
- **ElevenLabs React** - Voice AI

## 📄 License

MIT License - Feel free to use for personal and commercial projects.

## 🆘 Support

- Documentation: [docs.example.com](https://docs.example.com)
- Email: support@example.com
- Discord: [Join Community](https://discord.gg/example)

## 🙏 Credits

Built with ❤️ for the Voice AI community.

---

**Ready to sell your Voice AI product? Start customizing now!** 🚀
