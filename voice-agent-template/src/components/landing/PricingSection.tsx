/**
 * Pricing Section Component
 * Displays pricing plans and options
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { PricingCard } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { DynamicIcon } from '../../utils/icons';
import siteConfig from '../../config/site.config';

interface PricingSectionProps {
  className?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ className }) => {
  const { pricing } = siteConfig;

  if (!pricing.enabled) return null;

  return (
    <section className={cn('py-20 bg-gray-50 dark:bg-slate-900', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {pricing.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {pricing.subtitle}
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pricing.plans.map((plan, index) => (
              <PricingCard
                key={index}
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                isPopular={plan.isPopular}
                currency={pricing.currency}
                billingPeriod={pricing.billingPeriod}
                ctaText={plan.cta.text}
                onCtaClick={() => window.location.href = plan.cta.link}
              />
            ))}
          </div>

          {/* Lifetime Deal */}
          {pricing.lifetimeDeal.enabled && (
            <div className="bg-gradient-to-br from-indigo-900/50 to-purple-900/50 backdrop-blur-md rounded-3xl p-10 border-2 border-indigo-400/50 mb-16">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <Badge color="orange" className="mb-4">
                    <DynamicIcon name="Star" size={14} className="mr-1" />
                    ONE-TIME PURCHASE
                  </Badge>
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {pricing.lifetimeDeal.name}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {pricing.lifetimeDeal.description}
                  </p>
                  <ul className="flex flex-wrap gap-4 justify-center lg:justify-start">
                    {pricing.lifetimeDeal.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-300">
                        <DynamicIcon name="Check" className="text-green-400" size={16} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <span className="text-6xl font-black text-white">
                      {pricing.currency}{pricing.lifetimeDeal.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 ml-2">one-time</span>
                  </div>
                  <Button size="xl" rounded="full" className="shadow-2xl">
                    Get Lifetime Access
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Add-ons */}
          {pricing.addons.length > 0 && (
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Optional Add-ons
              </h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {pricing.addons.map((addon, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl px-6 py-4 border border-gray-200 dark:border-gray-700"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      {addon.name}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 font-bold ml-2">
                      +{pricing.currency}{addon.price}/{pricing.billingPeriod}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
