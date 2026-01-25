import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area, ComposedChart
} from 'recharts';
import {
  Calendar, Users, Clock, TrendingUp, DollarSign,
  BarChart3, PieChart as PieChartIcon, LogOut, Menu, X,
  Mail, Phone as PhoneIcon, Search, Filter, CheckCircle, PhoneCall,
  Activity, Star, ArrowUp, ArrowDown, Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  generateDummyStats,
  generateAppointmentTrends,
  generateConcernsData,
  generatePatientGrowth,
  generateStatusDistribution,
  generateRevenueData,
  generateCallLogs,
  generateCallVolumeTrends,
  generateCallOutcomes,
  generateCallDurationStats,
  generateDummyPatients,
  generateDummyAppointments,
  generateHourlyAppointments,
  generateDoctorPerformance,
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

const AdminDashboardEnhanced: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { signOut } = useClerk();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Use dummy data
  const [stats] = useState<DashboardStats>(generateDummyStats());
  const [appointmentTrend] = useState<any[]>(generateAppointmentTrends());
  const [concernsData] = useState<any[]>(generateConcernsData());
  const [patientGrowthData] = useState<any[]>(generatePatientGrowth());
  const [_statusDistribution] = useState<any[]>(generateStatusDistribution());
  const [revenueData] = useState<any[]>(generateRevenueData());
  const [allAppointments] = useState<any[]>(generateDummyAppointments());
  const [allPatients] = useState<any[]>(generateDummyPatients());
  const [hourlyData] = useState<any[]>(generateHourlyAppointments());
  const [doctorPerformance] = useState<any[]>(generateDoctorPerformance());

  // Call Logs dummy data
  const [allCallLogs] = useState<any[]>(generateCallLogs());
  const [callVolumeTrends] = useState<any[]>(generateCallVolumeTrends());
  const [callOutcomes] = useState<any[]>(generateCallOutcomes());
  const [callDurationStats] = useState<any>(generateCallDurationStats());
  const [uniqueCallersCount] = useState(673);

  // Advanced Analytics dummy data
  const [weeklyActivity] = useState<any[]>(generateWeeklyActivity());
  const [treatmentPopularity] = useState<any[]>(generateTreatmentPopularity());
  const [ageDistribution] = useState<any[]>(generateAgeDistribution());
  const [genderDistribution] = useState<any[]>(generateGenderDistribution());
  const [timeSlotPopularity] = useState<any[]>(generateTimeSlotPopularity());
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
    // Simulate loading
    setTimeout(() => setLoading(false), 800);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'call-logs', label: 'Call Logs', icon: PhoneCall },
    { id: 'analytics', label: 'Analytics', icon: PieChartIcon },
  ];

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

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const filteredAppointments = allAppointments.filter(apt => {
    const matchesStatus = filterStatus === 'all' || apt.status === filterStatus;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' ||
      (apt.patients?.full_name || apt.patient_name)?.toLowerCase().includes(searchLower) ||
      apt.primary_concern?.toLowerCase().includes(searchLower) ||
      apt.patient_email?.toLowerCase().includes(searchLower);
    return matchesStatus && matchesSearch;
  });

  const filteredPatients = allPatients.filter(patient => {
    const searchLower = searchTerm.toLowerCase();
    return searchTerm === '' ||
      patient.full_name?.toLowerCase().includes(searchLower) ||
      patient.email?.toLowerCase().includes(searchLower) ||
      patient.phone_number?.toLowerCase().includes(searchLower);
  });

  // Separate past and upcoming appointments
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingAppointments = filteredAppointments
    .filter(apt => new Date(apt.appointment_date) >= today)
    .sort((a, b) => new Date(a.appointment_date).getTime() - new Date(b.appointment_date).getTime());

  const pastAppointments = filteredAppointments
    .filter(apt => new Date(apt.appointment_date) < today)
    .sort((a, b) => new Date(b.appointment_date).getTime() - new Date(a.appointment_date).getTime());

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
        <div className="text-center">
          <div className="relative">
            <div className="animate-spin rounded-full h-20 w-20 border-b-4 border-purple-600 mx-auto mb-4"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Activity className="w-8 h-8 text-purple-600 animate-pulse" />
            </div>
          </div>
          <p className="text-gray-600 font-medium">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-72' : 'w-20'} bg-white shadow-2xl transition-all duration-300 border-r border-gray-200`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className={`${sidebarOpen ? 'block' : 'hidden'}`}>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Admin Portal
              </h1>
              <p className="text-xs text-gray-500 mt-1 font-medium">{user?.primaryEmailAddress?.emailAddress}</p>
              <div className="mt-2 px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full inline-block">
                <span className="text-xs font-semibold text-purple-700">Super Admin</span>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 hover:text-gray-700 hover:bg-gray-100 p-2 rounded-lg transition-all"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                    : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span className="font-medium">{item.label}</span>}
              </button>
            ))}

            <div className="pt-6 border-t border-gray-200">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-5 h-5" />
                {sidebarOpen && <span className="font-medium">Sign Out</span>}
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  {activeTab === 'overview' && 'Welcome back! 👋'}
                  {activeTab === 'appointments' && 'Appointments Management'}
                  {activeTab === 'patients' && 'Patients Database'}
                  {activeTab === 'call-logs' && 'Call Logs & Voice Analytics'}
                  {activeTab === 'analytics' && 'Analytics & Reports'}
                </h2>
                <p className="text-gray-600 text-lg">
                  {activeTab === 'overview' && "Here's your clinic performance overview"}
                  {activeTab === 'appointments' && 'Manage all patient appointments efficiently'}
                  {activeTab === 'patients' && 'Comprehensive patient information system'}
                  {activeTab === 'call-logs' && 'Track all voice interactions and outcomes'}
                  {activeTab === 'analytics' && 'Deep insights and performance metrics'}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Last updated</p>
                <p className="text-lg font-semibold text-gray-900">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
              </div>
            </div>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <EnhancedStatCard
                  title="Total Patients"
                  value={stats.totalPatients.toLocaleString()}
                  icon={Users}
                  subtitle={`${stats.firstTimeVisitors} new this month`}
                  color="bg-purple-600"
                  trend="up"
                  trendValue={23.5}
                />
                <EnhancedStatCard
                  title="Today's Appointments"
                  value={stats.todayAppointments}
                  icon={Calendar}
                  subtitle={`${stats.confirmedAppointments} confirmed`}
                  color="bg-blue-600"
                  trend="up"
                  trendValue={12.3}
                />
                <EnhancedStatCard
                  title="Total Appointments"
                  value={stats.totalAppointments.toLocaleString()}
                  icon={Clock}
                  subtitle={`${stats.completedAppointments} completed`}
                  color="bg-green-600"
                  trend="up"
                  trendValue={18.7}
                />
                <EnhancedStatCard
                  title="Voice Calls"
                  value={stats.totalCalls}
                  icon={PhoneCall}
                  subtitle={`${uniqueCallersCount} unique callers`}
                  color="bg-orange-600"
                  trend="up"
                  trendValue={15.2}
                />
              </div>

              {/* Secondary Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <Star className="w-8 h-8" />
                    <span className="text-3xl font-bold">{stats.satisfactionRate}</span>
                  </div>
                  <p className="text-emerald-100 text-sm">Patient Satisfaction</p>
                  <p className="text-xs text-emerald-200 mt-1">⭐ Excellent Rating</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-8 h-8" />
                    <span className="text-3xl font-bold">${(stats.totalRevenue / 1000).toFixed(0)}K</span>
                  </div>
                  <p className="text-blue-100 text-sm">Monthly Revenue</p>
                  <p className="text-xs text-blue-200 mt-1">📈 +{stats.monthlyGrowth}% growth</p>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <TrendingUp className="w-8 h-8" />
                    <span className="text-3xl font-bold">{stats.monthlyGrowth}%</span>
                  </div>
                  <p className="text-purple-100 text-sm">Monthly Growth</p>
                  <p className="text-xs text-purple-200 mt-1">🚀 Trending Up</p>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-all">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-8 h-8" />
                    <span className="text-3xl font-bold">{stats.averageWaitTime}m</span>
                  </div>
                  <p className="text-orange-100 text-sm">Avg Wait Time</p>
                  <p className="text-xs text-orange-200 mt-1">⚡ Fast Service</p>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Appointment Trends */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Appointment Trends</h3>
                    <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                      +18.7%
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={appointmentTrend}>
                      <defs>
                        <linearGradient id="colorAppointments" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="appointments"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorAppointments)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Revenue Growth */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold text-gray-900">Revenue Growth</h3>
                    <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                      +23.5%
                    </div>
                  </div>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={revenueData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                      <Line type="monotone" dataKey="appointments" stroke="#10b981" strokeWidth={3} />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* More Charts */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Primary Concerns */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Primary Concerns</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={concernsData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${(name || '').split(' ')[0]} ${((percent || 0) * 100).toFixed(0)}%`}
                        outerRadius={90}
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

                {/* Hourly Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Hourly Distribution</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={hourlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="hour" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip />
                      <Bar dataKey="appointments" fill="#ec4899" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Patient Growth */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Patient Growth</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={patientGrowthData.slice(-6)}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="new" fill="#10b981" radius={[8, 8, 0, 0]} />
                      <Bar dataKey="returning" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Weekly Activity & Time Slots */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Weekly Activity */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Weekly Activity</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <ComposedChart data={weeklyActivity}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="day" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Bar dataKey="appointments" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="Appointments" />
                      <Line type="monotone" dataKey="calls" stroke="#f59e0b" strokeWidth={3} name="Calls" />
                      <Line type="monotone" dataKey="newPatients" stroke="#10b981" strokeWidth={3} name="New Patients" />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>

                {/* Time Slot Popularity */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Peak Hours Analysis</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={timeSlotPopularity}>
                      <defs>
                        <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="slot" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="bookings"
                        stroke="#f59e0b"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorBookings)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Demographics & Referral Sources */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                {/* Age Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Age Distribution</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <BarChart data={ageDistribution} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis type="number" stroke="#9ca3af" />
                      <YAxis type="category" dataKey="range" stroke="#9ca3af" />
                      <Tooltip />
                      <Bar dataKey="patients" fill="#6366f1" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Gender Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Gender Split</h3>
                  <ResponsiveContainer width="100%" height={280}>
                    <PieChart>
                      <Pie
                        data={genderDistribution}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={(entry: any) => `${entry.gender}: ${entry.value}`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {genderDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                {/* Referral Sources */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Referral Sources</h3>
                  <div className="space-y-3">
                    {referralSources.map((source, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: source.color }}></div>
                          <span className="text-sm font-medium text-gray-700">{source.source}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="h-2 rounded-full transition-all"
                              style={{ width: `${source.percentage}%`, backgroundColor: source.color }}
                            ></div>
                          </div>
                          <span className="text-sm font-bold text-gray-900 w-12 text-right">{source.percentage}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Monthly Comparison Table */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Month-over-Month Performance</h3>
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

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Recent Appointments</h3>
                  <Button
                    onClick={() => setActiveTab('appointments')}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    View All
                  </Button>
                </div>
                <div className="space-y-3">
                  {allAppointments.slice(0, 5).map((appointment: any) => (
                    <div key={appointment.id} className="flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl hover:shadow-md transition-all border border-gray-100">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                          {(appointment.patients?.full_name || appointment.patient_name).charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{appointment.patients?.full_name || appointment.patient_name}</p>
                          <p className="text-sm text-gray-600">
                            {appointment.primary_concern} • {new Date(appointment.appointment_date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full text-xs font-semibold border ${getStatusBadgeColor(appointment.status)}`}>
                        {appointment.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <>
              {/* Search and Filter */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm font-medium focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                    >
                      <option value="all">All Status</option>
                      <option value="pending">Pending</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="completed">Completed</option>
                      <option value="cancelled">Cancelled</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-2 flex-1 max-w-md">
                    <Search className="w-5 h-5 text-gray-500" />
                    <input
                      type="text"
                      placeholder="Search by patient name, email, or concern..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                    />
                  </div>
                  <div className="ml-auto flex gap-2">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                      <span className="text-sm font-semibold text-purple-700">Total: {filteredAppointments.length}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-6 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Upcoming Appointments ({upcomingAppointments.length})
                  </h3>
                </div>
                <div className="space-y-4">
                  {upcomingAppointments.length > 0 ? (
                    upcomingAppointments.slice(0, 10).map((apt: any) => (
                      <div key={apt.id} className="border-2 border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-purple-200 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {(apt.patients?.full_name || apt.patient_name).charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900">{apt.patients?.full_name || apt.patient_name}</h4>
                              <p className="text-sm text-gray-600 flex items-center gap-2">
                                <Mail className="w-4 h-4" />
                                {apt.patient_email}
                              </p>
                              {apt.patient_phone && (
                                <p className="text-sm text-gray-600 flex items-center gap-2">
                                  <PhoneIcon className="w-4 h-4" />
                                  {apt.patient_phone}
                                </p>
                              )}
                            </div>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-xs font-bold border-2 ${getStatusBadgeColor(apt.status)}`}>
                            {apt.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-lg">
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Date</p>
                            <p className="font-bold text-gray-900">{new Date(apt.appointment_date).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Time</p>
                            <p className="font-bold text-gray-900">{apt.appointment_time}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Concern</p>
                            <p className="font-bold text-gray-900">{apt.primary_concern}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">First Visit</p>
                            <p className="font-bold text-gray-900">{apt.is_first_visit ? 'Yes' : 'No'}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Calendar className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No upcoming appointments</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Past Appointments */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Clock className="w-6 h-6 text-blue-600" />
                  Past Appointments ({pastAppointments.length})
                </h3>
                <div className="space-y-4">
                  {pastAppointments.length > 0 ? (
                    pastAppointments.slice(0, 10).map((apt: any) => (
                      <div key={apt.id} className="border-2 border-gray-100 rounded-xl p-5 opacity-75 hover:opacity-100 hover:shadow-lg transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-gray-400 to-gray-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {(apt.patients?.full_name || apt.patient_name).charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900">{apt.patients?.full_name || apt.patient_name}</h4>
                              <p className="text-sm text-gray-600">{apt.patient_email}</p>
                            </div>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-xs font-bold border-2 ${getStatusBadgeColor(apt.status)}`}>
                            {apt.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 p-4 bg-gray-50 rounded-lg">
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Date</p>
                            <p className="font-bold text-gray-900">{new Date(apt.appointment_date).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Time</p>
                            <p className="font-bold text-gray-900">{apt.appointment_time}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Concern</p>
                            <p className="font-bold text-gray-900">{apt.primary_concern}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">First Visit</p>
                            <p className="font-bold text-gray-900">{apt.is_first_visit ? 'Yes' : 'No'}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Clock className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No past appointments</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Patients Tab */}
          {activeTab === 'patients' && (
            <>
              {/* Search */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-100">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none"
                  />
                  <div className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl">
                    <span className="text-sm font-semibold text-purple-700">Total: {filteredPatients.length}</span>
                  </div>
                </div>
              </div>

              {/* Patients List */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">All Patients ({filteredPatients.length})</h3>
                <div className="space-y-4">
                  {filteredPatients.length > 0 ? (
                    filteredPatients.map((patient: any) => {
                      const patientAppointments = allAppointments.filter(
                        apt => apt.patient_id === patient.id ||
                        apt.patient_email === patient.email ||
                        apt.patients?.email === patient.email
                      );

                      return (
                        <div key={patient.id} className="border-2 border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-purple-200 transition-all">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4 flex-1">
                              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                                {patient.full_name.charAt(0)}
                              </div>
                              <div>
                                <h4 className="font-bold text-xl text-gray-900">{patient.full_name}</h4>
                                <div className="space-y-1 mt-2">
                                  <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Mail className="w-4 h-4" />
                                    {patient.email}
                                  </div>
                                  {patient.phone_number && (
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                      <PhoneIcon className="w-4 h-4" />
                                      {patient.phone_number}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-500">Registered</p>
                              <p className="font-semibold text-gray-900">{new Date(patient.created_at).toLocaleDateString()}</p>
                            </div>
                          </div>

                          {/* Patient Appointments */}
                          {patientAppointments.length > 0 && (
                            <div className="mt-4 pt-4 border-t-2 border-gray-100">
                              <h5 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
                                <Calendar className="w-5 h-5 text-purple-600" />
                                Appointments History ({patientAppointments.length})
                              </h5>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {patientAppointments.slice(0, 4).map((apt: any) => (
                                  <div key={apt.id} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                                    <div className="flex items-center justify-between mb-2">
                                      <span className="font-semibold text-gray-900">{apt.primary_concern}</span>
                                      <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusBadgeColor(apt.status)}`}>
                                        {apt.status}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-4 text-xs text-gray-600">
                                      <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(apt.appointment_date).toLocaleDateString()}
                                      </span>
                                      <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3" />
                                        {apt.appointment_time}
                                      </span>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              {patientAppointments.length > 4 && (
                                <p className="text-xs text-gray-500 text-center pt-2 font-medium">
                                  + {patientAppointments.length - 4} more appointments
                                </p>
                              )}
                            </div>
                          )}

                          {patientAppointments.length === 0 && (
                            <div className="mt-4 pt-4 border-t-2 border-gray-100">
                              <p className="text-sm text-gray-500 text-center py-3">No appointments yet</p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No patients found</p>
                    </div>
                  )}
                </div>
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

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Call Volume Trends */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Call Volume Over Time</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={callVolumeTrends}>
                      <defs>
                        <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="date" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Area
                        type="monotone"
                        dataKey="total"
                        stroke="#3b82f6"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorCalls)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Call Outcomes Distribution */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Call Outcomes</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={callOutcomes}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${(name || '').split(' ')[0]} ${((percent || 0) * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {callOutcomes.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Call Performance Metrics Section */}
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
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mb-8">
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

              {/* Recent Call Logs List */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Call Logs</h3>
                <div className="space-y-4">
                  {allCallLogs.length > 0 ? (
                    allCallLogs.slice(0, 15).map((call: any) => (
                      <div key={call.id} className="border-2 border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-blue-200 transition-all">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-4 flex-1">
                            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                              {call.patient_name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg text-gray-900">{call.patient_name}</h4>
                              <p className="text-sm text-gray-600">{call.patient_email}</p>
                            </div>
                          </div>
                          <span className={`px-4 py-2 rounded-full text-xs font-bold border-2 ${
                            call.call_outcome === 'appointment_booked' ? 'bg-green-100 text-green-800 border-green-200' :
                            call.call_outcome === 'information_provided' ? 'bg-blue-100 text-blue-800 border-blue-200' :
                            call.call_outcome === 'callback_requested' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                            'bg-gray-100 text-gray-800 border-gray-200'
                          }`}>
                            {call.call_outcome?.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mt-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Date</p>
                            <p className="font-bold text-gray-900">{new Date(call.created_at).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Duration</p>
                            <p className="font-bold text-gray-900">{Math.floor(call.call_duration / 60)}m {call.call_duration % 60}s</p>
                          </div>
                          <div>
                            <p className="text-xs text-gray-500 font-medium mb-1">Time</p>
                            <p className="font-bold text-gray-900">{new Date(call.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                          </div>
                        </div>
                        {call.conversation_summary && (
                          <div className="mt-4 pt-4 border-t-2 border-gray-100">
                            <p className="text-sm text-gray-700">
                              <span className="font-bold text-gray-900">Summary: </span>
                              {call.conversation_summary}
                            </p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-12 text-gray-500">
                      <PhoneCall className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg font-medium">No call logs found</p>
                    </div>
                  )}
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
                      +8.3%
                    </div>
                    <span className="text-sm text-gray-600">vs last month</span>
                  </div>
                </div>
              </div>

              {/* Patient Growth Chart */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Growth Over Time</h3>
                <ResponsiveContainer width="100%" height={350}>
                  <BarChart data={patientGrowthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Bar dataKey="new" fill="#8b5cf6" radius={[8, 8, 0, 0]} name="New Patients" />
                    <Bar dataKey="returning" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Returning Patients" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Appointment Trends */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Appointment Trends by Month</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <LineChart data={appointmentTrend}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="appointments" stroke="#8b5cf6" strokeWidth={3} name="Total" dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="confirmed" stroke="#10b981" strokeWidth={3} name="Confirmed" dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="pending" stroke="#f59e0b" strokeWidth={3} name="Pending" dot={{ r: 5 }} />
                    <Line type="monotone" dataKey="completed" stroke="#3b82f6" strokeWidth={3} name="Completed" dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              {/* Treatment Popularity & Satisfaction */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Treatment Popularity */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Top Treatments by Revenue</h3>
                  <div className="space-y-4">
                    {treatmentPopularity.map((treatment, index) => (
                      <div key={index} className="border-2 border-gray-100 rounded-xl p-4 hover:shadow-md transition-all">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-gray-900">{treatment.treatment}</h4>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                            treatment.growth > 15 ? 'bg-green-100 text-green-700' :
                            treatment.growth > 10 ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            +{treatment.growth}%
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-3 text-sm">
                          <div>
                            <p className="text-gray-500">Sessions</p>
                            <p className="font-bold text-gray-900">{treatment.sessions}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Revenue</p>
                            <p className="font-bold text-gray-900">${(treatment.revenue / 1000).toFixed(1)}K</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Per Session</p>
                            <p className="font-bold text-gray-900">${Math.round(treatment.revenue / treatment.sessions)}</p>
                          </div>
                        </div>
                        <div className="mt-3 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all"
                            style={{ width: `${(treatment.sessions / 160) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Satisfaction Trends */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Satisfaction Trend</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart data={satisfactionTrends}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="month" stroke="#9ca3af" />
                      <YAxis yAxisId="left" stroke="#9ca3af" domain={[4.0, 5.0]} />
                      <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Line
                        yAxisId="left"
                        type="monotone"
                        dataKey="rating"
                        stroke="#10b981"
                        strokeWidth={4}
                        name="Rating"
                        dot={{ r: 6, fill: '#10b981' }}
                      />
                      <Bar
                        yAxisId="right"
                        dataKey="reviews"
                        fill="#3b82f6"
                        radius={[8, 8, 0, 0]}
                        name="Reviews"
                        opacity={0.6}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Top Services & Retention */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Top Services */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Top Services Performance</h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={topServices} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis type="number" stroke="#9ca3af" />
                      <YAxis type="category" dataKey="service" stroke="#9ca3af" width={150} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Bar dataKey="revenue" fill="#8b5cf6" radius={[0, 8, 8, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Retention Cohort */}
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Retention Cohort</h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <LineChart data={retentionCohort}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis dataKey="cohort" stroke="#9ca3af" angle={-45} textAnchor="end" height={80} />
                      <YAxis stroke="#9ca3af" domain={[0, 100]} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}
                      />
                      <Legend />
                      <Line type="monotone" dataKey="month0" stroke="#10b981" strokeWidth={3} name="Month 0" dot={{ r: 5 }} />
                      <Line type="monotone" dataKey="month1" stroke="#3b82f6" strokeWidth={3} name="Month 1" dot={{ r: 5 }} />
                      <Line type="monotone" dataKey="month2" stroke="#f59e0b" strokeWidth={3} name="Month 2" dot={{ r: 5 }} />
                      <Line type="monotone" dataKey="month3" stroke="#ef4444" strokeWidth={3} name="Month 3" dot={{ r: 5 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Doctor Performance */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Top Performing Doctors</h3>
                <div className="space-y-4">
                  {doctorPerformance.map((doctor, index) => (
                    <div key={doctor.name} className="border-2 border-gray-100 rounded-xl p-5 hover:shadow-lg hover:border-purple-200 transition-all">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                          #{index + 1}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900">{doctor.name}</h4>
                          <div className="grid grid-cols-3 gap-4 mt-2">
                            <div>
                              <p className="text-xs text-gray-500">Patients</p>
                              <p className="font-bold text-gray-900">{doctor.patients}</p>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Rating</p>
                              <div className="flex items-center gap-1">
                                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                <p className="font-bold text-gray-900">{doctor.satisfaction}</p>
                              </div>
                            </div>
                            <div>
                              <p className="text-xs text-gray-500">Revenue</p>
                              <p className="font-bold text-gray-900">${(doctor.revenue / 1000).toFixed(0)}K</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardEnhanced;
