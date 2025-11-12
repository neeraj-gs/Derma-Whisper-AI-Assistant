import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import {
  Calendar, Users, DollarSign, TrendingUp, Activity, Clock,
  UserCheck, AlertCircle, FileText, Star, Package, LogOut,
  BarChart3, PieChart as PieChartIcon, Settings, Menu, X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  getDashboardSummary,
  getAppointments,
  getUsers,
  getTreatmentPopularity,
  getReviews,
  getConsultations,
  getRevenue,
  getAppointmentAnalytics,
  getRevenueAnalytics
} from '@/services/supabase';

interface DashboardData {
  todayAppointments: number;
  monthlyRevenue: number;
  totalPatients: number;
  pendingAppointments: number;
}

const AdminDashboardEnhanced: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { signOut } = useClerk();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dashboardData, setDashboardData] = useState<DashboardData>({
    todayAppointments: 0,
    monthlyRevenue: 0,
    totalPatients: 0,
    pendingAppointments: 0
  });

  // Chart data states
  const [appointmentTrend, setAppointmentTrend] = useState<any[]>([]);
  const [revenueTrend, setRevenueTrend] = useState<any[]>([]);
  const [treatmentStats, setTreatmentStats] = useState<any[]>([]);
  const [recentAppointments, setRecentAppointments] = useState<any[]>([]);
  const [recentReviews, setRecentReviews] = useState<any[]>([]);

  // Mock data for demonstration
  const mockAppointmentTrend = [
    { month: 'Jan', appointments: 45, revenue: 125000 },
    { month: 'Feb', appointments: 52, revenue: 145000 },
    { month: 'Mar', appointments: 48, revenue: 132000 },
    { month: 'Apr', appointments: 61, revenue: 168000 },
    { month: 'May', appointments: 57, revenue: 156000 },
    { month: 'Jun', appointments: 68, revenue: 189000 },
  ];

  const mockTreatmentStats = [
    { name: 'Laser Hair Reduction', value: 35, color: '#8884d8' },
    { name: 'Acne Treatment', value: 25, color: '#82ca9d' },
    { name: 'Anti-Aging', value: 20, color: '#ffc658' },
    { name: 'HydraFacial', value: 15, color: '#ff7c7c' },
    { name: 'Others', value: 5, color: '#8dd1e1' },
  ];

  const mockPatientGrowth = [
    { month: 'Jan', new: 12, returning: 33 },
    { month: 'Feb', new: 15, returning: 37 },
    { month: 'Mar', new: 18, returning: 30 },
    { month: 'Apr', new: 22, returning: 39 },
    { month: 'May', new: 19, returning: 38 },
    { month: 'Jun', new: 25, returning: 43 },
  ];

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    setLoading(true);
    try {
      // Use mock data for initial setup - replace with real Supabase queries when tables are ready
      setDashboardData({
        todayAppointments: 8,
        monthlyRevenue: 189000,
        totalPatients: 245,
        pendingAppointments: 12
      });

      setAppointmentTrend(mockAppointmentTrend);
      setTreatmentStats(mockTreatmentStats);

      // Try to fetch real data from Supabase
      const { data: appointments } = await getAppointments();
      if (appointments && appointments.length > 0) {
        setRecentAppointments(appointments.slice(0, 5));
      }

      const { data: reviews } = await getReviews();
      if (reviews && reviews.length > 0) {
        setRecentReviews(reviews.slice(0, 3));
      }

    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    localStorage.removeItem('isAdmin');
    navigate('/admin');
  };

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'appointments', label: 'Appointments', icon: Calendar },
    { id: 'patients', label: 'Patients', icon: Users },
    { id: 'treatments', label: 'Treatments', icon: Package },
    { id: 'analytics', label: 'Analytics', icon: PieChartIcon },
    { id: 'reviews', label: 'Reviews', icon: Star },
    { id: 'consultations', label: 'AI Consultations', icon: Activity },
  ];

  const StatCard = ({ title, value, icon: Icon, trend, color }: any) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
        {trend && (
          <div className={`flex items-center text-sm ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            <TrendingUp className="w-4 h-4 mr-1" />
            {Math.abs(trend)}%
          </div>
        )}
      </div>
      <p className="text-gray-600 text-sm mb-1">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{value}</p>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-white shadow-xl transition-all duration-300`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className={`${sidebarOpen ? 'block' : 'hidden'}`}>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-xs text-gray-600 mt-1">{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-500 hover:text-gray-700"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <item.icon className="w-5 h-5" />
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            ))}

            <button
              onClick={() => navigate('/admin/bookings')}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
            >
              <Calendar className="w-5 h-5" />
              {sidebarOpen && <span>Bookings Calendar</span>}
            </button>

            <div className="pt-4 border-t">
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-all"
              >
                <LogOut className="w-5 h-5" />
                {sidebarOpen && <span>Sign Out</span>}
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
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user?.firstName || 'Admin'}!
            </h2>
            <p className="text-gray-600">Here's what's happening at your clinic today</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Today's Appointments"
              value={dashboardData.todayAppointments}
              icon={Calendar}
              trend={12}
              color="bg-blue-600"
            />
            <StatCard
              title="Monthly Revenue"
              value={`₹${dashboardData.monthlyRevenue.toLocaleString()}`}
              icon={DollarSign}
              trend={8}
              color="bg-green-600"
            />
            <StatCard
              title="Total Patients"
              value={dashboardData.totalPatients}
              icon={Users}
              trend={15}
              color="bg-purple-600"
            />
            <StatCard
              title="Pending Appointments"
              value={dashboardData.pendingAppointments}
              icon={Clock}
              color="bg-orange-600"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Appointment Trend Chart */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Appointment Trends</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={appointmentTrend}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="appointments"
                    stroke="#8884d8"
                    fill="#8884d8"
                    fillOpacity={0.6}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Treatment Distribution Pie Chart */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Treatment Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={treatmentStats}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {treatmentStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Revenue Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={appointmentTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="revenue"
                  stroke="#82ca9d"
                  strokeWidth={2}
                  dot={{ fill: '#82ca9d' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Patient Growth Chart */}
          <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
            <h3 className="text-lg font-semibold mb-4">Patient Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={mockPatientGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="new" fill="#8884d8" name="New Patients" />
                <Bar dataKey="returning" fill="#82ca9d" name="Returning Patients" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Recent Activity Tables */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Appointments */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>
              <div className="space-y-4">
                {recentAppointments.length > 0 ? (
                  recentAppointments.map((appointment: any) => (
                    <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{appointment.users?.name || 'Unknown Patient'}</p>
                        <p className="text-sm text-gray-600">
                          {appointment.treatments?.name || 'Treatment'} - {appointment.appointment_date}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                        appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500">No recent appointments</p>
                )}
              </div>
            </div>

            {/* Recent Reviews */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Recent Reviews</h3>
              <div className="space-y-4">
                {recentReviews.length > 0 ? (
                  recentReviews.map((review: any) => (
                    <div key={review.id} className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <p className="font-medium">{review.users?.name || 'Anonymous'}</p>
                        <div className="ml-auto flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <div className="space-y-4">
                    {/* Mock Reviews */}
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <p className="font-medium">Priya Sharma</p>
                        <div className="ml-auto flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Excellent service and results!</p>
                    </div>
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center mb-2">
                        <p className="font-medium">Rahul Kumar</p>
                        <div className="ml-auto flex">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                          ))}
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                      </div>
                      <p className="text-sm text-gray-600">Very professional staff and clean facility.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardEnhanced;