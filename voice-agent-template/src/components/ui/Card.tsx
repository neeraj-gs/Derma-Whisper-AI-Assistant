/**
 * Card Components
 * Reusable card layouts for features, stats, and content
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { DynamicIcon } from '../../utils/icons';
import { IconName, ColorTheme } from '../../types';
import { colorMap } from '../../utils/colors';

// ===========================================================================
// BASE CARD
// ===========================================================================

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'gradient' | 'outline';
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800',
    glass: 'bg-white/10 dark:bg-gray-900/50 backdrop-blur-md border border-white/20 dark:border-gray-700/50',
    gradient: 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 backdrop-blur-md border border-purple-400/30',
    outline: 'bg-transparent border-2 border-gray-200 dark:border-gray-700',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all duration-300',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

// ===========================================================================
// FEATURE CARD
// ===========================================================================

interface FeatureCardProps {
  icon: IconName;
  title: string;
  description: string;
  color?: ColorTheme;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  color = 'purple',
  className,
}) => {
  const colors = colorMap[color];

  return (
    <Card
      className={cn(
        'group hover:shadow-xl hover:-translate-y-1 cursor-default',
        className
      )}
    >
      <div
        className={cn(
          'w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110',
          colors.bgLight
        )}
      >
        <DynamicIcon name={icon} className={colors.text} size={28} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};

// ===========================================================================
// STAT CARD
// ===========================================================================

interface StatCardProps {
  title: string;
  value: string | number;
  icon: IconName;
  trend?: number;
  trendLabel?: string;
  color?: ColorTheme;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  trend,
  trendLabel,
  color = 'purple',
  className,
}) => {
  const colors = colorMap[color];
  const isPositive = trend && trend > 0;
  const isNegative = trend && trend < 0;

  return (
    <Card className={cn('relative overflow-hidden', className)}>
      {/* Background Icon */}
      <div className="absolute -right-4 -top-4 opacity-5">
        <DynamicIcon name={icon} size={120} />
      </div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className={cn(
              'w-12 h-12 rounded-xl flex items-center justify-center',
              colors.bg
            )}
          >
            <DynamicIcon name={icon} className="text-white" size={24} />
          </div>
          {trend !== undefined && (
            <div
              className={cn(
                'flex items-center gap-1 px-2 py-1 rounded-full text-sm font-medium',
                isPositive && 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
                isNegative && 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400',
                !isPositive && !isNegative && 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
              )}
            >
              <DynamicIcon
                name={isPositive ? 'TrendingUp' : isNegative ? 'TrendingDown' : 'TrendingUp'}
                size={14}
              />
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
        </div>

        <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-3xl font-bold text-gray-900 dark:text-white">{value}</p>
        {trendLabel && (
          <p className="text-xs text-gray-400 mt-1">{trendLabel}</p>
        )}
      </div>
    </Card>
  );
};

// ===========================================================================
// PRICING CARD
// ===========================================================================

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  name: string;
  price: number | null;
  description: string;
  features: PricingFeature[];
  isPopular?: boolean;
  currency?: string;
  billingPeriod?: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
  className?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  currency = '$',
  billingPeriod = 'month',
  ctaText = 'Get Started',
  onCtaClick,
  className,
}) => {
  return (
    <Card
      variant={isPopular ? 'gradient' : 'default'}
      className={cn(
        'relative flex flex-col',
        isPopular && 'border-2 border-purple-500 scale-105',
        className
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-4 py-1 rounded-full">
            MOST POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="mb-6">
        {price !== null ? (
          <>
            <span className="text-5xl font-black text-gray-900 dark:text-white">
              {currency}{price}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-lg">
              /{billingPeriod}
            </span>
          </>
        ) : (
          <span className="text-4xl font-bold text-gray-900 dark:text-white">
            Custom
          </span>
        )}
      </div>

      <button
        onClick={onCtaClick}
        className={cn(
          'w-full py-3 px-6 rounded-xl font-semibold transition-all duration-200 mb-6',
          isPopular
            ? 'bg-white text-purple-900 hover:bg-gray-100'
            : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
        )}
      >
        {ctaText}
      </button>

      <ul className="space-y-3 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <DynamicIcon
              name={feature.included ? 'Check' : 'X'}
              className={cn(
                'flex-shrink-0 mt-0.5',
                feature.included
                  ? 'text-green-500'
                  : 'text-gray-400 dark:text-gray-600'
              )}
              size={18}
            />
            <span
              className={cn(
                feature.included
                  ? 'text-gray-700 dark:text-gray-300'
                  : 'text-gray-400 dark:text-gray-600 line-through'
              )}
            >
              {feature.text}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

// ===========================================================================
// TESTIMONIAL CARD
// ===========================================================================

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
  avatar,
  className,
}) => {
  return (
    <Card variant="glass" className={cn('', className)}>
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <DynamicIcon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={18} />
        ))}
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-lg mb-6 italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-gray-900 dark:text-white">{author}</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {role}, {company}
          </p>
        </div>
      </div>
    </Card>
  );
};

// ===========================================================================
// ROADMAP CARD
// ===========================================================================

interface RoadmapCardProps {
  icon: IconName;
  title: string;
  description: string;
  quarter: string;
  color?: ColorTheme;
  className?: string;
}

export const RoadmapCard: React.FC<RoadmapCardProps> = ({
  icon,
  title,
  description,
  quarter,
  color = 'purple',
  className,
}) => {
  const colors = colorMap[color];

  return (
    <Card
      variant="glass"
      className={cn(
        'group hover:shadow-2xl hover:-translate-y-2 transition-all duration-300',
        `hover:shadow-${color}-500/20`,
        className
      )}
    >
      <div
        className={cn(
          'w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110',
          `bg-gradient-to-br ${colors.bgGradient}`
        )}
      >
        <DynamicIcon name={icon} className="text-white" size={32} />
      </div>

      <div className={cn('inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4', colors.bgLight)}>
        <span className={cn('text-xs font-bold', colors.text)}>{quarter}</span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
};
