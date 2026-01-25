/**
 * Use Cases Section Component
 * Shows industry-specific applications
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { DynamicIcon } from '../../utils/icons';
import siteConfig from '../../config/site.config';

interface UseCasesSectionProps {
  className?: string;
}

export const UseCasesSection: React.FC<UseCasesSectionProps> = ({ className }) => {
  const { useCases } = siteConfig.landingPage;
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
  ];

  return (
    <section className={cn('py-20 bg-white dark:bg-slate-950', className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-4">
              {useCases.title}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {useCases.subtitle}
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.items.map((useCase, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-6">
                  <div
                    className={cn(
                      'w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br',
                      colors[index % colors.length],
                      'group-hover:scale-110 transition-transform duration-300'
                    )}
                  >
                    <DynamicIcon name={useCase.icon} className="text-white" size={32} />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider">
                      {useCase.industry}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1 mb-3">
                      {useCase.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {useCase.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
