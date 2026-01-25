/**
 * Dashboard Chart Components
 * Reusable chart wrappers using Recharts
 */

import React from 'react';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ComposedChart,
} from 'recharts';
import { Card } from '../ui/Card';
import { cn } from '../../utils/cn';
import siteConfig from '../../config/site.config';

const { chartColors } = siteConfig.dashboard;

// ===========================================================================
// LINE CHART
// ===========================================================================

interface LineChartProps {
  title: string;
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  className?: string;
}

export const SimpleLineChart: React.FC<LineChartProps> = ({
  title,
  data,
  dataKey,
  xAxisKey = 'name',
  color = chartColors.primary,
  className,
}) => {
  return (
    <Card className={cn('', className)}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis dataKey={xAxisKey} stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
            dot={{ fill: color, strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

// ===========================================================================
// AREA CHART
// ===========================================================================

interface AreaChartProps {
  title: string;
  data: any[];
  dataKeys: { key: string; color: string; name?: string }[];
  xAxisKey?: string;
  className?: string;
}

export const SimpleAreaChart: React.FC<AreaChartProps> = ({
  title,
  data,
  dataKeys,
  xAxisKey = 'name',
  className,
}) => {
  return (
    <Card className={cn('', className)}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            {dataKeys.map((dk, i) => (
              <linearGradient key={i} id={`gradient-${dk.key}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={dk.color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={dk.color} stopOpacity={0} />
              </linearGradient>
            ))}
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis dataKey={xAxisKey} stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
          {dataKeys.map((dk, i) => (
            <Area
              key={i}
              type="monotone"
              dataKey={dk.key}
              name={dk.name || dk.key}
              stroke={dk.color}
              strokeWidth={2}
              fill={`url(#gradient-${dk.key})`}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

// ===========================================================================
// BAR CHART
// ===========================================================================

interface BarChartProps {
  title: string;
  data: any[];
  dataKey: string;
  xAxisKey?: string;
  color?: string;
  className?: string;
}

export const SimpleBarChart: React.FC<BarChartProps> = ({
  title,
  data,
  dataKey,
  xAxisKey = 'name',
  color = chartColors.primary,
  className,
}) => {
  return (
    <Card className={cn('', className)}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis dataKey={xAxisKey} stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Bar dataKey={dataKey} fill={color} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

// ===========================================================================
// COMPARISON BAR CHART
// ===========================================================================

interface ComparisonBarChartProps {
  title: string;
  data: any[];
  bars: { key: string; color: string; name?: string }[];
  xAxisKey?: string;
  className?: string;
}

export const ComparisonBarChart: React.FC<ComparisonBarChartProps> = ({
  title,
  data,
  bars,
  xAxisKey = 'name',
  className,
}) => {
  return (
    <Card className={cn('', className)}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis dataKey={xAxisKey} stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
          {bars.map((bar, i) => (
            <Bar
              key={i}
              dataKey={bar.key}
              name={bar.name || bar.key}
              fill={bar.color}
              radius={[4, 4, 0, 0]}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

// ===========================================================================
// PIE CHART
// ===========================================================================

interface PieChartProps {
  title: string;
  data: { name: string; value: number; color?: string }[];
  className?: string;
}

export const SimplePieChart: React.FC<PieChartProps> = ({
  title,
  data,
  className,
}) => {
  const COLORS = [chartColors.primary, chartColors.secondary, chartColors.success, chartColors.warning, chartColors.info];

  return (
    <Card className={cn('', className)}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={5}
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={entry.color || COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

// ===========================================================================
// COMPOSED CHART (LINE + BAR)
// ===========================================================================

interface ComposedChartProps {
  title: string;
  data: any[];
  bars: { key: string; color: string; name?: string }[];
  lines: { key: string; color: string; name?: string }[];
  xAxisKey?: string;
  className?: string;
}

export const SimpleComposedChart: React.FC<ComposedChartProps> = ({
  title,
  data,
  bars,
  lines,
  xAxisKey = 'name',
  className,
}) => {
  return (
    <Card className={cn('', className)}>
      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
          <XAxis dataKey={xAxisKey} stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: 'none',
              borderRadius: '8px',
              color: '#fff',
            }}
          />
          <Legend />
          {bars.map((bar, i) => (
            <Bar
              key={`bar-${i}`}
              dataKey={bar.key}
              name={bar.name || bar.key}
              fill={bar.color}
              radius={[4, 4, 0, 0]}
            />
          ))}
          {lines.map((line, i) => (
            <Line
              key={`line-${i}`}
              type="monotone"
              dataKey={line.key}
              name={line.name || line.key}
              stroke={line.color}
              strokeWidth={3}
              dot={{ fill: line.color, strokeWidth: 2, r: 4 }}
            />
          ))}
        </ComposedChart>
      </ResponsiveContainer>
    </Card>
  );
};
