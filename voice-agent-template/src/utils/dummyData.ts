/**
 * Dummy Data Generators
 * Generate realistic mock data for dashboard demos
 */

import { CallLog, DashboardStats, ChartDataPoint, TimeSeriesData } from '../types';

// Random helpers
const randomInt = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomFloat = (min: number, max: number) => Math.random() * (max - min) + min;
const randomChoice = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

// Sample data
const firstNames = ['James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda', 'William', 'Elizabeth', 'David', 'Barbara', 'Richard', 'Susan', 'Joseph', 'Jessica', 'Thomas', 'Sarah', 'Charles', 'Karen'];
const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin'];

const callSummaries = [
  'Inquired about pricing and services',
  'Scheduled an appointment for next week',
  'Asked about availability on weekends',
  'Requested a callback from a specialist',
  'Inquired about cancellation policy',
  'Booked a consultation session',
  'Asked questions about the process',
  'Requested information to be emailed',
  'Changed existing appointment time',
  'Left a message for the team',
  'Inquired about emergency services',
  'Asked about payment options',
];

const outcomes = ['completed', 'missed', 'voicemail', 'transferred'] as const;
const sentiments = ['positive', 'neutral', 'negative'] as const;

// ===========================================================================
// GENERATORS
// ===========================================================================

export function generateDashboardStats(): DashboardStats {
  return {
    totalCalls: randomInt(1500, 5000),
    totalCustomers: randomInt(800, 3000),
    avgDuration: randomFloat(2, 8),
    satisfaction: randomFloat(4.2, 4.9),
    bookingRate: randomInt(45, 85),
    responseTime: randomFloat(0.5, 2.5),
    callsTrend: randomFloat(-10, 30),
    customersTrend: randomFloat(5, 25),
    satisfactionTrend: randomFloat(-2, 8),
  };
}

export function generateCallLogs(count: number = 50): CallLog[] {
  const logs: CallLog[] = [];
  const now = new Date();

  for (let i = 0; i < count; i++) {
    const timestamp = new Date(now.getTime() - randomInt(0, 30 * 24 * 60 * 60 * 1000));
    logs.push({
      id: `call-${i + 1}`,
      timestamp: timestamp.toISOString(),
      callerName: `${randomChoice(firstNames)} ${randomChoice(lastNames)}`,
      phoneNumber: `+1 (${randomInt(200, 999)}) ${randomInt(100, 999)}-${randomInt(1000, 9999)}`,
      duration: randomInt(30, 600),
      outcome: randomChoice([...outcomes]),
      summary: randomChoice(callSummaries),
      sentiment: randomChoice([...sentiments]),
    });
  }

  return logs.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
}

export function generateTimeSeriesData(days: number = 30): TimeSeriesData[] {
  const data: TimeSeriesData[] = [];
  const now = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    const dayOfWeek = date.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

    // More calls on weekdays
    const baseCalls = isWeekend ? randomInt(20, 50) : randomInt(50, 120);
    const bookings = Math.floor(baseCalls * randomFloat(0.3, 0.6));
    const missed = Math.floor(baseCalls * randomFloat(0.05, 0.15));

    data.push({
      date: date.toISOString().split('T')[0],
      calls: baseCalls,
      bookings,
      missed,
    });
  }

  return data;
}

export function generateHourlyDistribution(): ChartDataPoint[] {
  return Array.from({ length: 24 }, (_, hour) => {
    let value: number;
    if (hour >= 9 && hour <= 11) {
      value = randomInt(50, 100); // Morning peak
    } else if (hour >= 14 && hour <= 16) {
      value = randomInt(40, 80); // Afternoon peak
    } else if (hour >= 6 && hour <= 20) {
      value = randomInt(15, 40); // Business hours
    } else {
      value = randomInt(2, 15); // Off hours
    }

    return {
      name: `${hour}:00`,
      value,
    };
  });
}

export function generateOutcomeDistribution(): ChartDataPoint[] {
  const total = 100;
  const completed = randomInt(60, 75);
  const booked = randomInt(15, 25);
  const voicemail = randomInt(5, 15);
  const missed = total - completed - booked - voicemail;

  return [
    { name: 'Completed', value: completed, color: '#22c55e' },
    { name: 'Booked', value: booked, color: '#3b82f6' },
    { name: 'Voicemail', value: voicemail, color: '#f97316' },
    { name: 'Missed', value: Math.max(0, missed), color: '#ef4444' },
  ];
}

export function generateSentimentData(): ChartDataPoint[] {
  return [
    { name: 'Positive', value: randomInt(55, 70), color: '#22c55e' },
    { name: 'Neutral', value: randomInt(20, 30), color: '#6b7280' },
    { name: 'Negative', value: randomInt(5, 15), color: '#ef4444' },
  ];
}

export function generateWeeklyComparison(): ChartDataPoint[] {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    name: day,
    thisWeek: randomInt(30, 100),
    lastWeek: randomInt(25, 90),
  }));
}

export function generateTopQueries(): { query: string; count: number }[] {
  const queries = [
    'Pricing information',
    'Appointment availability',
    'Service details',
    'Location/directions',
    'Operating hours',
    'Cancellation policy',
    'Insurance accepted',
    'Wait times',
  ];

  return queries
    .map(query => ({
      query,
      count: randomInt(20, 150),
    }))
    .sort((a, b) => b.count - a.count);
}

export function generatePerformanceMetrics() {
  return {
    avgResponseTime: randomFloat(0.8, 2.0),
    firstCallResolution: randomInt(75, 92),
    customerSatisfaction: randomFloat(4.2, 4.9),
    callsPerHour: randomInt(8, 25),
    peakHour: `${randomInt(9, 11)}:00 AM`,
    avgHandleTime: randomFloat(3, 7),
  };
}
