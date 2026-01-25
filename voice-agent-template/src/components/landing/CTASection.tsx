/**
 * CTA Section Component
 * Final call-to-action before footer
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { DynamicIcon } from '../../utils/icons';
import siteConfig from '../../config/site.config';

interface CTASectionProps {
  className?: string;
}

export const CTASection: React.FC<CTASectionProps> = ({ className }) => {
  const { business } = siteConfig;

  return (
    <section
      className={cn(
        'py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500',
        className
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of businesses already using AI voice agents to deliver exceptional customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              rounded="full"
              className="bg-white text-purple-900 hover:bg-gray-100 shadow-2xl"
            >
              <DynamicIcon name="Zap" className="mr-2" size={24} />
              Start Free Trial
            </Button>
            <Button
              variant="outline"
              size="xl"
              rounded="full"
              className="border-2 border-white text-white hover:bg-white/10"
            >
              <DynamicIcon name="Calendar" className="mr-2" size={24} />
              Schedule Demo
            </Button>
          </div>
          <p className="text-white/70 mt-6 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
