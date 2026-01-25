/**
 * Features Section Component
 * Displays product features in a grid layout
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { FeatureCard } from '../ui/Card';
import siteConfig from '../../config/site.config';

interface FeaturesSectionProps {
  className?: string;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ className }) => {
  const { features } = siteConfig.landingPage;
  const colors = ['purple', 'blue', 'green', 'orange', 'pink', 'indigo'] as const;

  return (
    <section className={cn('py-20 bg-gray-50 dark:bg-slate-900', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {features.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {features.subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.items.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                color={colors[index % colors.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
