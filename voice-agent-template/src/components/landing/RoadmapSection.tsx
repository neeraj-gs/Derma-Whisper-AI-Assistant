/**
 * Roadmap Section Component
 * Displays upcoming features and timeline
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { RoadmapCard } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { DynamicIcon } from '../../utils/icons';
import siteConfig from '../../config/site.config';

interface RoadmapSectionProps {
  className?: string;
}

export const RoadmapSection: React.FC<RoadmapSectionProps> = ({ className }) => {
  const { roadmap } = siteConfig;

  if (!roadmap.enabled) return null;

  return (
    <section
      className={cn(
        'py-20 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 relative overflow-hidden',
        className
      )}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: '1s' }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge color="purple" className="mb-6">
              <DynamicIcon name="Rocket" size={14} className="mr-1" />
              COMING SOON
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {roadmap.title}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {roadmap.subtitle}
            </p>
          </div>

          {/* Roadmap Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {roadmap.items.map((item, index) => (
              <RoadmapCard
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
                quarter={item.quarter}
                color={item.color}
              />
            ))}
          </div>

          {/* Early Access CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-10 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want Early Access?
            </h3>
            <p className="text-purple-100 text-lg mb-6 max-w-2xl mx-auto">
              Join our beta program and be the first to test new features before they're released.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                variant="secondary"
                size="xl"
                rounded="full"
                className="bg-white text-purple-900 hover:bg-gray-100"
              >
                <DynamicIcon name="Sparkles" className="mr-2" size={20} />
                Join Beta Program
              </Button>
              <Button
                variant="outline"
                size="xl"
                rounded="full"
                className="border-white text-white hover:bg-white/10"
              >
                <DynamicIcon name="Mail" className="mr-2" size={20} />
                Request Feature
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
