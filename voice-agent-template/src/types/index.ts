/**
 * =============================================================================
 * VOICE AGENT TEMPLATE - TYPE DEFINITIONS
 * =============================================================================
 */

// Icon names from lucide-react
export type IconName =
  | "Phone" | "Calendar" | "Clock" | "Users" | "MessageSquare" | "FileText"
  | "UserCheck" | "Bell" | "Brain" | "Shield" | "Zap" | "BarChart3"
  | "Stethoscope" | "Scale" | "Home" | "UtensilsCrossed" | "Car" | "Scissors"
  | "Dumbbell" | "Hotel" | "ShoppingBag" | "Smartphone" | "Languages" | "Video"
  | "Mail" | "Globe" | "Mic" | "Headphones" | "Settings" | "Star"
  | "Check" | "X" | "ChevronRight" | "ArrowRight" | "ExternalLink"
  | "LayoutDashboard" | "ThumbsUp" | "TrendingUp" | "TrendingDown"
  | "Rocket" | "Sparkles" | "Heart" | "Building" | "Briefcase" | "GraduationCap"
  | "Plane" | "Code" | "Database" | "Cloud" | "Lock" | "Key";

// Color theme options
export type ColorTheme =
  | "purple" | "blue" | "green" | "orange" | "red" | "pink" | "indigo" | "teal";

// Voice provider options
export type VoiceProvider =
  | "elevenlabs" | "vapi" | "retell" | "bland" | "custom";

// Industry types
export type IndustryType =
  | "healthcare" | "dental" | "legal" | "realestate" | "restaurant"
  | "automotive" | "salon" | "fitness" | "hotel" | "retail" | "generic";

// ===========================================================================
// CONFIG TYPES
// ===========================================================================

export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  facebook?: string;
  instagram?: string;
  youtube?: string;
}

export interface BusinessConfig {
  name: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
  address: string;
  socials: SocialLinks;
  privacyPolicyUrl: string;
  termsOfServiceUrl: string;
}

export interface BrandingConfig {
  logo: string;
  logoAlt: string;
  favicon: string;
  primaryColor: ColorTheme;
  secondaryColor: ColorTheme;
  defaultDarkMode: boolean;
  customClass?: string;
}

export interface Capability {
  icon: IconName;
  title: string;
  description: string;
}

export interface VoiceAgentConfig {
  provider: VoiceProvider;
  agentId: string;
  agentName: string;
  agentRole: string;
  agentAvatar?: string;
  welcomeMessage: string;
  connectionType: "webrtc" | "websocket";
  capabilities: Capability[];
}

export interface IndustryConfig {
  type: IndustryType;
  customName?: string;
  customerTerm: string;
  appointmentTerm: string;
}

export interface CTAButton {
  text: string;
  link: string;
}

export interface HeroConfig {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  primaryCTA: CTAButton;
  secondaryCTA: CTAButton;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface FeatureItem {
  icon: IconName;
  title: string;
  description: string;
}

export interface FeaturesConfig {
  title: string;
  subtitle: string;
  items: FeatureItem[];
}

export interface BenefitItem {
  value: string;
  label: string;
  description: string;
}

export interface BenefitsConfig {
  title: string;
  items: BenefitItem[];
}

export interface UseCaseItem {
  icon: IconName;
  industry: string;
  title: string;
  description: string;
}

export interface UseCasesConfig {
  title: string;
  subtitle: string;
  items: UseCaseItem[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface LandingPageConfig {
  hero: HeroConfig;
  stats: StatItem[];
  features: FeaturesConfig;
  benefits: BenefitsConfig;
  useCases: UseCasesConfig;
  testimonials: Testimonial[];
}

export interface PlanFeature {
  text: string;
  included: boolean;
}

export interface PricingPlan {
  name: string;
  price: number | null;
  description: string;
  isPopular: boolean;
  features: PlanFeature[];
  cta: CTAButton;
}

export interface LifetimeDeal {
  enabled: boolean;
  name: string;
  price: number;
  description: string;
  features: string[];
}

export interface Addon {
  name: string;
  price: number;
}

export interface PricingConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  currency: string;
  billingPeriod: string;
  plans: PricingPlan[];
  lifetimeDeal: LifetimeDeal;
  addons: Addon[];
}

export interface DashboardTab {
  id: string;
  label: string;
  icon: IconName;
}

export interface MetricConfig {
  label: string;
  icon: IconName;
}

export interface DashboardMetrics {
  totalCalls: MetricConfig;
  totalCustomers: MetricConfig;
  avgDuration: MetricConfig;
  satisfaction: MetricConfig;
  bookingRate: MetricConfig;
  responseTime: MetricConfig;
}

export interface ChartColors {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  info: string;
}

export interface DashboardConfig {
  title: string;
  showDemoBanner: boolean;
  demoBannerText: string;
  tabs: DashboardTab[];
  metrics: DashboardMetrics;
  chartColors: ChartColors;
}

export interface RoadmapItem {
  icon: IconName;
  title: string;
  description: string;
  quarter: string;
  color: ColorTheme;
}

export interface RoadmapConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: RoadmapItem[];
}

export interface IntegrationItem {
  name: string;
  logo: string;
}

export interface IntegrationsConfig {
  enabled: boolean;
  title: string;
  subtitle: string;
  items: IntegrationItem[];
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface FooterLink {
  text: string;
  url: string;
}

export interface FooterConfig {
  copyright: string;
  links: FooterLink[];
}

// ===========================================================================
// MAIN CONFIG TYPE
// ===========================================================================

export interface SiteConfig {
  business: BusinessConfig;
  branding: BrandingConfig;
  voiceAgent: VoiceAgentConfig;
  industry: IndustryConfig;
  landingPage: LandingPageConfig;
  pricing: PricingConfig;
  dashboard: DashboardConfig;
  roadmap: RoadmapConfig;
  integrations: IntegrationsConfig;
  seo: SEOConfig;
  footer: FooterConfig;
}

// ===========================================================================
// DASHBOARD DATA TYPES
// ===========================================================================

export interface CallLog {
  id: string;
  timestamp: string;
  callerName: string;
  phoneNumber: string;
  duration: number;
  outcome: "completed" | "missed" | "voicemail" | "transferred";
  summary: string;
  sentiment: "positive" | "neutral" | "negative";
}

export interface DashboardStats {
  totalCalls: number;
  totalCustomers: number;
  avgDuration: number;
  satisfaction: number;
  bookingRate: number;
  responseTime: number;
  callsTrend: number;
  customersTrend: number;
  satisfactionTrend: number;
}

export interface ChartDataPoint {
  name: string;
  value: number;
  [key: string]: string | number;
}

export interface TimeSeriesData {
  date: string;
  calls: number;
  bookings: number;
  missed: number;
}

// ===========================================================================
// COMPONENT PROPS TYPES
// ===========================================================================

export interface StatCardProps {
  title: string;
  value: string | number;
  icon: IconName;
  trend?: number;
  trendLabel?: string;
  color?: ColorTheme;
}

export interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  color?: ColorTheme;
}

export interface PricingCardProps {
  plan: PricingPlan;
  currency: string;
  billingPeriod: string;
}

export interface VoiceAgentProps {
  config: VoiceAgentConfig;
  onConnect?: () => void;
  onDisconnect?: () => void;
  onError?: (error: Error) => void;
}
