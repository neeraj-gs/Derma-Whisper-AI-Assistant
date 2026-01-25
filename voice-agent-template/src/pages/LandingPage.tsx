/**
 * Landing Page
 * Main marketing/product page
 */

import React from 'react';
import {
  HeroSection,
  FeaturesSection,
  BenefitsSection,
  UseCasesSection,
  DemoSection,
  PricingSection,
  TestimonialsSection,
  RoadmapSection,
  CTASection,
} from '../components/landing';
import { Footer } from '../components/layout/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <BenefitsSection />
      <UseCasesSection />
      <TestimonialsSection />
      <PricingSection />
      <RoadmapSection />
      <CTASection />
      <Footer />
    </div>
  );
};
