/**
 * Icon Utility
 * Dynamic icon component that renders lucide-react icons by name
 */

import React from 'react';
import * as LucideIcons from 'lucide-react';
import { IconName } from '../types';

interface DynamicIconProps {
  name: IconName;
  className?: string;
  size?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = '',
  size = 24
}) => {
  const IconComponent = LucideIcons[name as keyof typeof LucideIcons] as React.FC<{
    className?: string;
    size?: number;
  }>;

  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return <IconComponent className={className} size={size} />;
};

// Pre-defined icon sets for common use cases
export const iconSets = {
  voice: ['Phone', 'Mic', 'Headphones', 'MessageSquare'],
  scheduling: ['Calendar', 'Clock', 'Bell', 'CheckCircle'],
  analytics: ['BarChart3', 'TrendingUp', 'PieChart', 'Activity'],
  navigation: ['Home', 'Settings', 'User', 'Menu'],
  actions: ['Plus', 'Edit', 'Trash', 'Download', 'Upload'],
  status: ['Check', 'X', 'AlertCircle', 'Info'],
};
