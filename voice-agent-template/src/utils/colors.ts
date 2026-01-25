/**
 * Color Utilities
 * Maps color theme names to Tailwind CSS classes
 */

import { ColorTheme } from '../types';

export const colorMap: Record<ColorTheme, {
  bg: string;
  bgLight: string;
  bgGradient: string;
  text: string;
  textLight: string;
  border: string;
  ring: string;
  shadow: string;
}> = {
  purple: {
    bg: "bg-purple-600",
    bgLight: "bg-purple-100 dark:bg-purple-900/30",
    bgGradient: "from-purple-600 to-purple-800",
    text: "text-purple-600 dark:text-purple-400",
    textLight: "text-purple-100",
    border: "border-purple-600 dark:border-purple-400",
    ring: "ring-purple-600",
    shadow: "shadow-purple-500/25",
  },
  blue: {
    bg: "bg-blue-600",
    bgLight: "bg-blue-100 dark:bg-blue-900/30",
    bgGradient: "from-blue-600 to-blue-800",
    text: "text-blue-600 dark:text-blue-400",
    textLight: "text-blue-100",
    border: "border-blue-600 dark:border-blue-400",
    ring: "ring-blue-600",
    shadow: "shadow-blue-500/25",
  },
  green: {
    bg: "bg-green-600",
    bgLight: "bg-green-100 dark:bg-green-900/30",
    bgGradient: "from-green-600 to-green-800",
    text: "text-green-600 dark:text-green-400",
    textLight: "text-green-100",
    border: "border-green-600 dark:border-green-400",
    ring: "ring-green-600",
    shadow: "shadow-green-500/25",
  },
  orange: {
    bg: "bg-orange-600",
    bgLight: "bg-orange-100 dark:bg-orange-900/30",
    bgGradient: "from-orange-600 to-orange-800",
    text: "text-orange-600 dark:text-orange-400",
    textLight: "text-orange-100",
    border: "border-orange-600 dark:border-orange-400",
    ring: "ring-orange-600",
    shadow: "shadow-orange-500/25",
  },
  red: {
    bg: "bg-red-600",
    bgLight: "bg-red-100 dark:bg-red-900/30",
    bgGradient: "from-red-600 to-red-800",
    text: "text-red-600 dark:text-red-400",
    textLight: "text-red-100",
    border: "border-red-600 dark:border-red-400",
    ring: "ring-red-600",
    shadow: "shadow-red-500/25",
  },
  pink: {
    bg: "bg-pink-600",
    bgLight: "bg-pink-100 dark:bg-pink-900/30",
    bgGradient: "from-pink-600 to-pink-800",
    text: "text-pink-600 dark:text-pink-400",
    textLight: "text-pink-100",
    border: "border-pink-600 dark:border-pink-400",
    ring: "ring-pink-600",
    shadow: "shadow-pink-500/25",
  },
  indigo: {
    bg: "bg-indigo-600",
    bgLight: "bg-indigo-100 dark:bg-indigo-900/30",
    bgGradient: "from-indigo-600 to-indigo-800",
    text: "text-indigo-600 dark:text-indigo-400",
    textLight: "text-indigo-100",
    border: "border-indigo-600 dark:border-indigo-400",
    ring: "ring-indigo-600",
    shadow: "shadow-indigo-500/25",
  },
  teal: {
    bg: "bg-teal-600",
    bgLight: "bg-teal-100 dark:bg-teal-900/30",
    bgGradient: "from-teal-600 to-teal-800",
    text: "text-teal-600 dark:text-teal-400",
    textLight: "text-teal-100",
    border: "border-teal-600 dark:border-teal-400",
    ring: "ring-teal-600",
    shadow: "shadow-teal-500/25",
  },
};

export const getGradientClasses = (primary: ColorTheme, secondary: ColorTheme): string => {
  const gradients: Record<string, string> = {
    'purple-pink': 'from-purple-600 to-pink-600',
    'blue-purple': 'from-blue-600 to-purple-600',
    'green-teal': 'from-green-600 to-teal-600',
    'orange-red': 'from-orange-600 to-red-600',
    'pink-purple': 'from-pink-600 to-purple-600',
    'indigo-blue': 'from-indigo-600 to-blue-600',
    'teal-green': 'from-teal-600 to-green-600',
  };

  return gradients[`${primary}-${secondary}`] || gradients['purple-pink'];
};

export const getChartColor = (color: ColorTheme): string => {
  const chartColors: Record<ColorTheme, string> = {
    purple: '#9333ea',
    blue: '#3b82f6',
    green: '#22c55e',
    orange: '#f97316',
    red: '#ef4444',
    pink: '#ec4899',
    indigo: '#6366f1',
    teal: '#14b8a6',
  };

  return chartColors[color];
};
