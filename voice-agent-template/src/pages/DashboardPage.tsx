/**
 * Dashboard Page
 * Analytics and call logs dashboard
 */

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { DynamicIcon } from '../utils/icons';
import {
  StatCards,
  SimpleAreaChart,
  SimpleBarChart,
  ComparisonBarChart,
  SimplePieChart,
  CallLogsTable,
} from '../components/dashboard';
import {
  generateDashboardStats,
  generateCallLogs,
  generateTimeSeriesData,
  generateHourlyDistribution,
  generateOutcomeDistribution,
  generateSentimentData,
  generateWeeklyComparison,
} from '../utils/dummyData';
import siteConfig from '../config/site.config';
import { cn } from '../utils/cn';

type TabId = 'overview' | 'analytics' | 'calls';

export const DashboardPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Generate dummy data
  const [stats] = useState(generateDashboardStats());
  const [callLogs] = useState(generateCallLogs(100));
  const [timeSeriesData] = useState(generateTimeSeriesData(30));
  const [hourlyData] = useState(generateHourlyDistribution());
  const [outcomeData] = useState(generateOutcomeDistribution());
  const [sentimentData] = useState(generateSentimentData());
  const [weeklyData] = useState(generateWeeklyComparison());

  const { dashboard } = siteConfig;

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950">
      {/* Demo Banner */}
      {dashboard.showDemoBanner && (
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-3 px-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <DynamicIcon name="Zap" size={20} />
              <span className="font-semibold">{dashboard.demoBannerText}</span>
              <Badge color="green" pulse size="sm" className="bg-white/20 text-white">
                LIVE DATA
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20"
              onClick={() => navigate('/')}
            >
              <DynamicIcon name="ArrowLeft" size={16} className="mr-2" />
              Back to Home
            </Button>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {dashboard.title}
            </h1>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <DynamicIcon name="Download" size={16} className="mr-2" />
                Export
              </Button>
              <Button size="sm" onClick={() => navigate('/')}>
                <DynamicIcon name="Phone" size={16} className="mr-2" />
                Try Demo
              </Button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 mt-4 bg-gray-100 dark:bg-slate-800 p-1 rounded-lg w-fit">
            {dashboard.tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all',
                  activeTab === tab.id
                    ? 'bg-white dark:bg-slate-700 text-purple-600 dark:text-purple-400 shadow-sm'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                <DynamicIcon name={tab.icon} size={16} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stat Cards */}
            <StatCards stats={stats} />

            {/* Charts Row */}
            <div className="grid lg:grid-cols-2 gap-8">
              <SimpleAreaChart
                title="Call Volume Trends"
                data={timeSeriesData}
                dataKeys={[
                  { key: 'calls', color: '#9333ea', name: 'Total Calls' },
                  { key: 'bookings', color: '#22c55e', name: 'Bookings' },
                ]}
                xAxisKey="date"
              />
              <SimplePieChart
                title="Call Outcomes"
                data={outcomeData}
              />
            </div>

            {/* Recent Calls */}
            <CallLogsTable logs={callLogs.slice(0, 10)} />
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <SimpleBarChart
                title="Hourly Call Distribution"
                data={hourlyData}
                dataKey="value"
                color="#9333ea"
              />
              <ComparisonBarChart
                title="Weekly Comparison"
                data={weeklyData}
                bars={[
                  { key: 'thisWeek', color: '#9333ea', name: 'This Week' },
                  { key: 'lastWeek', color: '#6b7280', name: 'Last Week' },
                ]}
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <SimplePieChart
                title="Sentiment Analysis"
                data={sentimentData}
              />
              <SimpleAreaChart
                title="Missed Calls Trend"
                data={timeSeriesData}
                dataKeys={[
                  { key: 'missed', color: '#ef4444', name: 'Missed Calls' },
                ]}
                xAxisKey="date"
              />
            </div>
          </div>
        )}

        {/* Calls Tab */}
        {activeTab === 'calls' && (
          <div className="space-y-8">
            <CallLogsTable logs={callLogs} />
          </div>
        )}
      </main>
    </div>
  );
};
