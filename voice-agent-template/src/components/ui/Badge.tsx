/**
 * Badge Component
 * Small labels for status, categories, and tags
 */

import React from 'react';
import { cn } from '../../utils/cn';
import { ColorTheme } from '../../types';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'gradient';
  color?: ColorTheme;
  size?: 'sm' | 'default' | 'lg';
  pulse?: boolean;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  color = 'purple',
  size = 'default',
  pulse = false,
  className,
}) => {
  const colorClasses: Record<ColorTheme, Record<string, string>> = {
    purple: {
      default: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
      outline: 'border-purple-500 text-purple-600 dark:border-purple-400 dark:text-purple-400',
      gradient: 'bg-gradient-to-r from-purple-600 to-purple-800 text-white',
    },
    blue: {
      default: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
      outline: 'border-blue-500 text-blue-600 dark:border-blue-400 dark:text-blue-400',
      gradient: 'bg-gradient-to-r from-blue-600 to-blue-800 text-white',
    },
    green: {
      default: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
      outline: 'border-green-500 text-green-600 dark:border-green-400 dark:text-green-400',
      gradient: 'bg-gradient-to-r from-green-600 to-green-800 text-white',
    },
    orange: {
      default: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
      outline: 'border-orange-500 text-orange-600 dark:border-orange-400 dark:text-orange-400',
      gradient: 'bg-gradient-to-r from-orange-600 to-orange-800 text-white',
    },
    red: {
      default: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
      outline: 'border-red-500 text-red-600 dark:border-red-400 dark:text-red-400',
      gradient: 'bg-gradient-to-r from-red-600 to-red-800 text-white',
    },
    pink: {
      default: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300',
      outline: 'border-pink-500 text-pink-600 dark:border-pink-400 dark:text-pink-400',
      gradient: 'bg-gradient-to-r from-pink-600 to-pink-800 text-white',
    },
    indigo: {
      default: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300',
      outline: 'border-indigo-500 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400',
      gradient: 'bg-gradient-to-r from-indigo-600 to-indigo-800 text-white',
    },
    teal: {
      default: 'bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-300',
      outline: 'border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400',
      gradient: 'bg-gradient-to-r from-teal-600 to-teal-800 text-white',
    },
  };

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    default: 'text-sm px-3 py-1',
    lg: 'text-base px-4 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-semibold rounded-full',
        variant === 'outline' && 'border-2 bg-transparent',
        colorClasses[color][variant],
        sizeClasses[size],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className={cn(
            'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
            color === 'green' && 'bg-green-400',
            color === 'red' && 'bg-red-400',
            color === 'purple' && 'bg-purple-400',
            color === 'blue' && 'bg-blue-400',
          )} />
          <span className={cn(
            'relative inline-flex rounded-full h-2 w-2',
            color === 'green' && 'bg-green-500',
            color === 'red' && 'bg-red-500',
            color === 'purple' && 'bg-purple-500',
            color === 'blue' && 'bg-blue-500',
          )} />
        </span>
      )}
      {children}
    </span>
  );
};
