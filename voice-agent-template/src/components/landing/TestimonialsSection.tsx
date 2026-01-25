/**
 * Testimonials Section Component
 * Displays customer reviews and quotes
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { TestimonialCard } from '../ui/Card';
import siteConfig from '../../config/site.config';

interface TestimonialsSectionProps {
  className?: string;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ className }) => {
  const { testimonials } = siteConfig.landingPage;

  if (testimonials.length === 0) return null;

  return (
    <section className={cn('py-20 bg-white dark:bg-slate-950', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              Loved by Businesses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              See what our customers have to say
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
                company={testimonial.company}
                avatar={testimonial.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
