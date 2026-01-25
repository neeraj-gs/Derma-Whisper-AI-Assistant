/**
 * Benefits/ROI Section Component
 * Displays key metrics and results
 */

import React from 'react';
import { cn } from '../../utils/cn';
import siteConfig from '../../config/site.config';

interface BenefitsSectionProps {
  className?: string;
}

export const BenefitsSection: React.FC<BenefitsSectionProps> = ({ className }) => {
  const { benefits } = siteConfig.landingPage;

  return (
    <section
      className={cn(
        'py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              {benefits.title}
            </h2>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.items.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl md:text-6xl font-black text-white mb-2">
                  {item.value}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {item.label}
                </div>
                <div className="text-purple-100">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
