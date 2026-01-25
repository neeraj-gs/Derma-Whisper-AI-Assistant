/**
 * Hero Section Component
 * Main hero/banner area with CTA buttons
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { DynamicIcon } from '../../utils/icons';
import siteConfig from '../../config/site.config';

interface HeroSectionProps {
  className?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const { hero, stats } = siteConfig.landingPage;
  const { primaryColor, secondaryColor } = siteConfig.branding;

  return (
    <section
      className={cn(
        'relative min-h-screen flex items-center justify-center overflow-hidden',
        'bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950',
        className
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <Badge color={primaryColor} className="mb-8 animate-fade-in">
            <DynamicIcon name="Sparkles" size={14} className="mr-1" />
            {hero.badge}
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            {hero.title}{' '}
            <span className={`bg-gradient-to-r from-${primaryColor}-400 to-${secondaryColor}-400 bg-clip-text text-transparent`}>
              {hero.titleHighlight}
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            {hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="xl"
              rounded="full"
              className="shadow-2xl shadow-purple-500/25"
              onClick={() => {
                const element = document.querySelector(hero.primaryCTA.link);
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <DynamicIcon name="Zap" className="mr-2" size={24} />
              {hero.primaryCTA.text}
            </Button>
            <Button
              variant="outline"
              size="xl"
              rounded="full"
              className="border-white/30 text-white hover:bg-white/10"
              onClick={() => window.location.href = hero.secondaryCTA.link}
            >
              <DynamicIcon name="BarChart3" className="mr-2" size={24} />
              {hero.secondaryCTA.text}
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <DynamicIcon name="ChevronDown" className="text-white/50" size={32} />
      </div>
    </section>
  );
};
