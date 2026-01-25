/**
 * Dashboard Stat Cards Component
 * Grid of key metrics for dashboard overview
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { StatCard } from '../ui/Card';
import { DashboardStats } from '../../types';
import siteConfig from '../../config/site.config';

interface StatCardsProps {
  stats: DashboardStats;
  className?: string;
}

export const StatCards: React.FC<StatCardsProps> = ({ stats, className }) => {
  const { metrics } = siteConfig.dashboard;

  const cards = [
    {
      ...metrics.totalCalls,
      value: stats.totalCalls.toLocaleString(),
      trend: stats.callsTrend,
      trendLabel: 'vs last month',
      color: 'purple' as const,
    },
    {
      ...metrics.totalCustomers,
      value: stats.totalCustomers.toLocaleString(),
      trend: stats.customersTrend,
      trendLabel: 'vs last month',
      color: 'blue' as const,
    },
    {
      ...metrics.avgDuration,
      value: `${stats.avgDuration.toFixed(1)} min`,
      color: 'green' as const,
    },
    {
      ...metrics.satisfaction,
      value: `${stats.satisfaction.toFixed(1)}/5`,
      trend: stats.satisfactionTrend,
      trendLabel: 'vs last month',
      color: 'orange' as const,
    },
    {
      ...metrics.bookingRate,
      value: `${stats.bookingRate}%`,
      color: 'pink' as const,
    },
    {
      ...metrics.responseTime,
      value: `${stats.responseTime.toFixed(1)}s`,
      color: 'indigo' as const,
    },
  ];

  return (
    <div className={cn('grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4', className)}>
      {cards.map((card, index) => (
        <StatCard
          key={index}
          title={card.label}
          value={card.value}
          icon={card.icon}
          trend={card.trend}
          trendLabel={card.trendLabel}
          color={card.color}
        />
      ))}
    </div>
  );
};
