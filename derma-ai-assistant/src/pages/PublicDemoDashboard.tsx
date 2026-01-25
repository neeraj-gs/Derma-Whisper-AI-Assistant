import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, ComposedChart
} from 'recharts';
import {
  Calendar, Users, Clock, TrendingUp, DollarSign,
  BarChart3, PieChart as PieChartIcon, Menu, X,
  PhoneCall, Activity, Star, ArrowUp, ArrowDown, Zap, ArrowLeft, ExternalLink, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  generateDummyStats,
  generateAppointmentTrends,
  generateConcernsData,
  generatePatientGrowth,
  generateRevenueData,
  generateCallLogs,
  generateCallVolumeTrends,
  generateCallOutcomes,
  generateCallDurationStats,
  generateWeeklyActivity,
  generateTreatmentPopularity,
  generateAgeDistribution,
  generateGenderDistribution,
  generateTimeSlotPopularity,
  generateMonthlyComparison,
  generateReferralSources,
  generateSatisfactionTrends,
  generateTopServices,
  generateRetentionCohort,
  generateCallHourlyDistribution,
  generateCallDurationDistribution,
  generateDailyCallTrends,
  generateCallConversionMetrics,
  generateTopCallingHours,
  generateCallQualityMetrics,
  generateCallTypeBreakdown,
  generateWeeklyCallComparison
} from '@/utils/dummyData';

interface DashboardStats {
  totalPatients: number;
  todayAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  totalAppointments: number;
  totalCalls: number;
  firstTimeVisitors: number;
  returningPatients: number;
  completedAppointments: number;
  cancelledAppointments: number;
  monthlyGrowth: number;
  satisfactionRate: number;
  averageWaitTime: number;
  totalRevenue: number;
}

const PublicDemoDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Use dummy data
  const [stats] = useState<DashboardStats>(generateDummyStats());
  const [_appointmentTrend] = useState<any[]>(generateAppointmentTrends());
  const [concernsData] = useState<any[]>(generateConcernsData());
  const [patientGrowthData] = useState<any[]>(generatePatientGrowth());
  const [_revenueData] = useState<any[]>(generateRevenueData());
  const [_allCallLogs] = useState<any[]>(generateCallLogs());
  const [_callVolumeTrends] = useState<any[]>(generateCallVolumeTrends());
  const [_callOutcomes] = useState<any[]>(generateCallOutcomes());
  const [callDurationStats] = useState<any>(generateCallDurationStats());
  const [uniqueCallersCount] = useState(673);

  // Advanced Analytics dummy data
  const [weeklyActivity] = useState<any[]>(generateWeeklyActivity());
  const [treatmentPopularity] = useState<any[]>(generateTreatmentPopularity());
  const [ageDistribution] = useState<any[]>(generateAgeDistribution());
  const [_genderDistribution] = useState<any[]>(generateGenderDistribution());
  const [_timeSlotPopularity] = useState<any[]>(generateTimeSlotPopularity());
  const [monthlyComparison] = useState<any[]>(generateMonthlyComparison());
  const [referralSources] = useState<any[]>(generateReferralSources());
  const [satisfactionTrends] = useState<any[]>(generateSatisfactionTrends());
  const [topServices] = useState<any[]>(generateTopServices());
  const [retentionCohort] = useState<any[]>(generateRetentionCohort());

  // Call Logs Advanced Analytics dummy data
  const [callHourlyDistribution] = useState<any[]>(generateCallHourlyDistribution());
  const [callDurationDistribution] = useState<any[]>(generateCallDurationDistribution());
  const [dailyCallTrends] = useState<any[]>(generateDailyCallTrends());
  const [callConversionMetrics] = useState<any>(generateCallConversionMetrics());
  const [topCallingHours] = useState<any[]>(generateTopCallingHours());
  const [callQualityMetrics] = useState<any>(generateCallQualityMetrics());
  const [callTypeBreakdown] = useState<any[]>(generateCallTypeBreakdown());
  const [weeklyCallComparison] = useState<any[]>(generateWeeklyCallComparison());

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const EnhancedStatCard = ({ title, value, icon: Icon, subtitle, color, trend, trendValue }: any) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group">
      <div className={`absolute top-0 right-0 w-32 h-32 ${color} opacity-5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className={`w-14 h-14 ${color} bg-opacity-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`w-7 h-7 ${color.replace('bg-', 'text-')}`} />
          </div>
          {trend && (
            <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-sm font-semibold ${
              trend === 'up' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
            }`}>
              {trend === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
              {trendValue}%
            </div>
          )}
        </div>
        <p className="text-gray-500 text-sm font-medium mb-1">{title}</p>
        <p className="text-4xl font-bold text-gray-900 mb-1">{value}</p>
        {subtitle && <p className="text-sm text-gray-600 mt-2">{subtitle}</p>}
      </div>
    </div>
  );

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'analytics', label: 'Analytics & Reports', icon: TrendingUp },
    { id: 'call-logs', label: 'Call Logs & Voice Analytics', icon: PhoneCall },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 border-8 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-2xl font-bold text-gray-700">Loading Demo Dashboard...</p>
          <p className="text-gray-500 mt-2">Preparing analytics and insights</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      {/* Demo Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white py-3 px-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5" />
            <span className="font-semibold">Live Demo Dashboard</span>
            <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">REAL-TIME DATA</span>
          </div>
          <Button
            onClick={() => navigate('/voice-ai-demo')}
            variant="outline"
            size="sm"
            className="border-white text-white hover:bg-white/20"
          >
            <ArrowLeft className=" text-black w-4 h-4 mr-2" />
            <span className="text-black">Back to Product Page</span>
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'w-72' : 'w-0'} transition-all duration-300 bg-gradient-to-b from-purple-900 to-indigo-900 text-white min-h-screen overflow-hidden`}>
          <div className="p-6">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Activity className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold">AI Dashboard</h2>
                  <p className="text-xs text-purple-300">Demo Mode</p>
                </div>
              </div>
            </div>

            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    activeTab === item.id
                      ? 'bg-white text-purple-900 shadow-lg transform scale-105'
                      : 'hover:bg-white/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="mt-8 p-4 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20">
              <p className="text-sm font-semibold mb-2">🎯 Demo Features</p>
              <ul className="text-xs space-y-1 text-purple-200">
                <li>• Live call analytics</li>
                <li>• Real-time bookings</li>
                <li>• Patient insights</li>
                <li>• Performance metrics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-40">
            <div className="px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">
                    {sidebarItems.find(item => item.id === activeTab)?.label}
                  </h1>
                  <p className="text-sm text-gray-500">Showcasing AI-powered analytics</p>
                </div>
              </div>
              <Button
                onClick={() => navigate('/voice-ai-demo')}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Try Voice Demo
              </Button>
            </div>
          </div>

          {/* Content Area */}
          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <>
                {/* Top Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <EnhancedStatCard
                    title="Total Patients"
                    value={stats.totalPatients.toLocaleString()}
                    icon={Users}
                    color="bg-blue-500"
                    trend="up"
                    trendValue={stats.monthlyGrowth}
                    subtitle="Active in database"
                  />
                  <EnhancedStatCard
                    title="Total Appointments"
                    value={stats.totalAppointments.toLocaleString()}
                    icon={Calendar}
                    color="bg-green-500"
                    trend="up"
                    trendValue="18.1"
                    subtitle={`${stats.confirmedAppointments} confirmed`}
                  />
                  <EnhancedStatCard
                    title="Total Calls"
                    value={stats.totalCalls.toLocaleString()}
                    icon={PhoneCall}
                    color="bg-purple-500"
                    trend="up"
                    trendValue="15.2"
                    subtitle="AI-handled calls"
                  />
                  <EnhancedStatCard
                    title="Revenue"
                    value={`$${(stats.totalRevenue / 1000).toFixed(1)}K`}
                    icon={DollarSign}
                    color="bg-orange-500"
                    trend="up"
                    trendValue={stats.monthlyGrowth}
                    subtitle="This month"
                  />
                </div>

                {/* Additional Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <EnhancedStatCard
                    title="Today's Appointments"
                    value={stats.todayAppointments}
                    icon={Clock}
                    color="bg-pink-500"
                    subtitle="Scheduled for today"
                  />
                  <EnhancedStatCard
                    title="Satisfaction Rate"
                    value={`${stats.satisfactionRate}/5`}
                    icon={Star}
                    color="bg-yellow-500"
                    subtitle="Customer feedback"
                  />
                  <EnhancedStatCard
                    title="Avg Wait Time"
                    value={`${stats.averageWaitTime}min`}
                    icon={Clock}
                    color="bg-indigo-500"
                    subtitle="Response time"
                  />
                  <EnhancedStatCard
                    title="New Patients"
                    value={stats.firstTimeVisitors.toLocaleString()}
                    icon={Users}
                    color="bg-green-500"
                    trend="up"
                    trendValue="25.9"
                    subtitle="First-time visitors"
                  />
                </div>

                {/* Charts Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Weekly Activity */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Activity</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <ComposedChart data={weeklyActivity}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="day" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                        <Legend />
                        <Bar dataKey="appointments" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="Appointments" />
                        <Line type="monotone" dataKey="calls" stroke="#f59e0b" strokeWidth={3} name="Calls" />
                        <Line type="monotone" dataKey="newPatients" stroke="#10b981" strokeWidth={3} name="New Patients" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Patient Concerns */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Top Patient Concerns</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={concernsData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={(entry: any) => `${entry.name}: ${entry.value}`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {concernsData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Patient Growth */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Patient Growth Trend</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={patientGrowthData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="month" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                        <Legend />
                        <Line type="monotone" dataKey="new" stroke="#10b981" strokeWidth={3} name="New Patients" />
                        <Line type="monotone" dataKey="returning" stroke="#3b82f6" strokeWidth={3} name="Returning Patients" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Age Distribution */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Age Distribution</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={ageDistribution} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis type="number" stroke="#9ca3af" />
                        <YAxis dataKey="range" type="category" stroke="#9ca3af" width={80} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                        <Bar dataKey="patients" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Referral Sources */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Patient Referral Sources</h3>
                  <div className="space-y-6">
                    {referralSources.map((source, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-900 text-lg">{source.source}</span>
                          <div className="flex items-center gap-3">
                            <span className="text-gray-600">{source.patients} patients</span>
                            <span className="font-bold" style={{ color: source.color }}>{source.percentage}%</span>
                          </div>
                        </div>
                        <div className="h-4 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000"
                            style={{
                              width: `${source.percentage}%`,
                              backgroundColor: source.color
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Month-over-Month Performance */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Month-over-Month Performance</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b-2 border-gray-200">
                          <th className="text-left py-3 px-4 font-bold text-gray-700">Metric</th>
                          <th className="text-right py-3 px-4 font-bold text-gray-700">Current Month</th>
                          <th className="text-right py-3 px-4 font-bold text-gray-700">Previous Month</th>
                          <th className="text-right py-3 px-4 font-bold text-gray-700">Change</th>
                        </tr>
                      </thead>
                      <tbody>
                        {monthlyComparison.map((row, index) => (
                          <tr key={index} className="border-b border-gray-100 hover:bg-purple-50 transition-colors">
                            <td className="py-4 px-4 font-semibold text-gray-900">{row.metric}</td>
                            <td className="text-right py-4 px-4 font-bold text-gray-900">
                              {row.metric === 'Revenue' ? `$${row.current.toLocaleString()}` : row.current.toLocaleString()}
                            </td>
                            <td className="text-right py-4 px-4 text-gray-600">
                              {row.metric === 'Revenue' ? `$${row.previous.toLocaleString()}` : row.previous.toLocaleString()}
                            </td>
                            <td className="text-right py-4 px-4">
                              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-bold ${
                                row.change > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                                {row.change > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                                {Math.abs(row.change)}%
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <>
                {/* Analytics Overview Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Conversion Rate</h4>
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-5xl font-bold text-gray-900 mb-2">68.4%</p>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-1">
                        <ArrowUp className="w-4 h-4" />
                        +5.2%
                      </div>
                      <span className="text-sm text-gray-600">vs last month</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Retention Rate</h4>
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-5xl font-bold text-gray-900 mb-2">82.1%</p>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-1">
                        <ArrowUp className="w-4 h-4" />
                        +3.7%
                      </div>
                      <span className="text-sm text-gray-600">vs last month</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold text-gray-900">Avg Revenue/Patient</h4>
                      <DollarSign className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-5xl font-bold text-gray-900 mb-2">$347</p>
                    <div className="flex items-center gap-2">
                      <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold flex items-center gap-1">
                        <ArrowUp className="w-4 h-4" />
                        +8.4%
                      </div>
                      <span className="text-sm text-gray-600">vs last month</span>
                    </div>
                  </div>
                </div>

                {/* Top Treatments by Revenue */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {treatmentPopularity.map((treatment, index) => (
                    <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-lg text-gray-900">{treatment.treatment}</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          treatment.growth > 10 ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                        }`}>
                          +{treatment.growth}%
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Sessions</span>
                          <span className="font-bold text-gray-900">{treatment.sessions}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-600">Revenue</span>
                          <span className="font-bold text-purple-600">${treatment.revenue.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Patient Satisfaction Trend */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Patient Satisfaction Trend</h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <ComposedChart data={satisfactionTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis yAxisId="left" stroke="#9ca3af" />
                      <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
                      <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                      <Legend />
                      <Bar yAxisId="left" dataKey="reviews" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="Reviews Count" />
                      <Line yAxisId="right" type="monotone" dataKey="rating" stroke="#f59e0b" strokeWidth={3} name="Avg Rating" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                {/* Top Services Performance */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Top Services Performance</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={topServices} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis type="number" stroke="#9ca3af" />
                      <YAxis dataKey="service" type="category" stroke="#9ca3af" width={150} />
                      <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                      <Bar dataKey="revenue" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Patient Retention Cohort */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Patient Retention Cohort Analysis</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={retentionCohort}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="cohort" stroke="#9ca3af" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                      <Legend />
                      <Line type="monotone" dataKey="month0" stroke="#8b5cf6" strokeWidth={2} name="Month 0" />
                      <Line type="monotone" dataKey="month1" stroke="#ec4899" strokeWidth={2} name="Month 1" />
                      <Line type="monotone" dataKey="month2" stroke="#f59e0b" strokeWidth={2} name="Month 2" />
                      <Line type="monotone" dataKey="month3" stroke="#10b981" strokeWidth={2} name="Month 3" />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}

            {/* Call Logs Tab */}
            {activeTab === 'call-logs' && (
              <>
                {/* Call Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                    <PhoneCall className="w-10 h-10 mb-3" />
                    <p className="text-blue-100 text-sm font-medium mb-1">Total Calls</p>
                    <p className="text-4xl font-bold">{stats.totalCalls}</p>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>+15.2% this month</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                    <Users className="w-10 h-10 mb-3" />
                    <p className="text-green-100 text-sm font-medium mb-1">Unique Callers</p>
                    <p className="text-4xl font-bold">{uniqueCallersCount}</p>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <TrendingUp className="w-4 h-4" />
                      <span>+12.8% growth</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                    <Clock className="w-10 h-10 mb-3" />
                    <p className="text-purple-100 text-sm font-medium mb-1">Avg Duration</p>
                    <p className="text-4xl font-bold">{Math.floor(callDurationStats.avgDuration / 60)}:{(callDurationStats.avgDuration % 60).toString().padStart(2, '0')}</p>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <Activity className="w-4 h-4" />
                      <span>Optimal length</span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                    <Zap className="w-10 h-10 mb-3" />
                    <p className="text-orange-100 text-sm font-medium mb-1">Total Duration</p>
                    <p className="text-4xl font-bold">{Math.floor(callDurationStats.totalDuration / 3600)}h</p>
                    <div className="mt-2 flex items-center gap-1 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>High engagement</span>
                    </div>
                  </div>
                </div>

                {/* Call Performance Metrics */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">Conversion Rate</h4>
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <p className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      {callConversionMetrics.conversionRate}%
                    </p>
                    <p className="text-sm text-gray-600 mb-3">Calls to appointments</p>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                        style={{ width: `${callConversionMetrics.conversionRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">Callback Success</h4>
                      <PhoneCall className="w-6 h-6 text-blue-600" />
                    </div>
                    <p className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                      {callConversionMetrics.callbackConversionRate}%
                    </p>
                    <p className="text-sm text-gray-600 mb-3">Callbacks converted</p>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
                        style={{ width: `${callConversionMetrics.callbackConversionRate}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold text-gray-900">Avg Calls to Book</h4>
                      <Activity className="w-6 h-6 text-purple-600" />
                    </div>
                    <p className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                      {callConversionMetrics.averageCallsToBook}
                    </p>
                    <p className="text-sm text-gray-600 mb-3">Touchpoints needed</p>
                    <div className="flex items-center gap-2 mt-3">
                      <div className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        Optimal
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Charts Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Hourly Call Distribution */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Hourly Call Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <ComposedChart data={callHourlyDistribution}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="hour" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                        <Legend />
                        <Bar dataKey="calls" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Total Calls" />
                        <Line type="monotone" dataKey="appointmentsBooked" stroke="#10b981" strokeWidth={3} name="Appointments Booked" />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Call Duration Distribution */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-600" />
                      Call Duration Distribution
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={callDurationDistribution} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis type="number" stroke="#9ca3af" />
                        <YAxis dataKey="range" type="category" stroke="#9ca3af" width={80} />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                        <Bar dataKey="calls" radius={[0, 8, 8, 0]}>
                          {callDurationDistribution.map((_entry, index) => (
                            <Cell key={`cell-${index}`} fill={['#8b5cf6', '#a855f7', '#c084fc', '#d8b4fe', '#e9d5ff'][index]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Weekly Call Comparison */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-orange-600" />
                      Weekly Call Comparison
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <BarChart data={weeklyCallComparison}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                        <XAxis dataKey="week" stroke="#9ca3af" />
                        <YAxis stroke="#9ca3af" />
                        <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                        <Legend />
                        <Bar dataKey="thisMonth" fill="#f59e0b" radius={[8, 8, 0, 0]} name="This Month" />
                        <Bar dataKey="lastMonth" fill="#d1d5db" radius={[8, 8, 0, 0]} name="Last Month" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Call Type Breakdown */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <PieChartIcon className="w-5 h-5 text-indigo-600" />
                      Call Type Breakdown
                    </h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={callTypeBreakdown}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={(entry: any) => `${entry.type.split(' ')[0]}: ${entry.value}`}
                          outerRadius={100}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {callTypeBreakdown.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Top Calling Hours & Call Quality */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  {/* Top Calling Hours */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Star className="w-6 h-6 text-yellow-500" />
                      Top Calling Hours
                    </h3>
                    <div className="space-y-4">
                      {topCallingHours.map((hour, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                                index === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500' :
                                index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-400' :
                                index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                                'bg-gradient-to-br from-blue-400 to-blue-600'
                              }`}>
                                #{index + 1}
                              </div>
                              <div>
                                <p className="font-bold text-gray-900">{hour.hour}</p>
                                <p className="text-sm text-gray-600">{hour.calls} calls</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-green-600">{hour.bookings} bookings</p>
                              <p className="text-xs text-gray-500">{((hour.bookings / hour.calls) * 100).toFixed(1)}% rate</p>
                            </div>
                          </div>
                          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full transition-all duration-500"
                              style={{ width: `${(hour.calls / topCallingHours[0].calls) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call Quality Metrics */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                      <Activity className="w-6 h-6 text-blue-600" />
                      Call Quality Metrics
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-100">
                        <p className="text-sm text-gray-600 mb-1">Avg Handle Time</p>
                        <p className="text-3xl font-bold text-blue-600">{callQualityMetrics.avgHandleTime}</p>
                      </div>
                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-100">
                        <p className="text-sm text-gray-600 mb-1">First Call Resolution</p>
                        <p className="text-3xl font-bold text-green-600">{callQualityMetrics.firstCallResolution}%</p>
                      </div>
                      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border-2 border-orange-100">
                        <p className="text-sm text-gray-600 mb-1">Callback Rate</p>
                        <p className="text-3xl font-bold text-orange-600">{callQualityMetrics.callbackRate}%</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-100">
                        <p className="text-sm text-gray-600 mb-1">Satisfaction Score</p>
                        <p className="text-3xl font-bold text-purple-600">{callQualityMetrics.satisfactionScore}/5</p>
                      </div>
                      <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-4 border-2 border-red-100">
                        <p className="text-sm text-gray-600 mb-1">Abandonment Rate</p>
                        <p className="text-3xl font-bold text-red-600">{callQualityMetrics.abandonmentRate}%</p>
                      </div>
                      <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl p-4 border-2 border-indigo-100">
                        <p className="text-sm text-gray-600 mb-1">Avg Wait Time</p>
                        <p className="text-3xl font-bold text-indigo-600">{callQualityMetrics.avgWaitTime}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Daily Call Trends */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                    Daily Call Trends (Weekday vs Weekend)
                  </h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <AreaChart data={dailyCallTrends}>
                      <defs>
                        <linearGradient id="colorWeekday" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        </linearGradient>
                        <linearGradient id="colorWeekend" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }} />
                      <Legend />
                      <Area
                        type="monotone"
                        dataKey="weekday"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorWeekday)"
                        name="Weekday Pattern"
                      />
                      <Area
                        type="monotone"
                        dataKey="weekend"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorWeekend)"
                        name="Weekend Pattern"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicDemoDashboard;
