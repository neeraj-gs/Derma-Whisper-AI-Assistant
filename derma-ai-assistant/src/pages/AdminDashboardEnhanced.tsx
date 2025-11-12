import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser, useClerk } from '@clerk/clerk-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import {
  Calendar, Users, Clock, UserCheck,
  BarChart3, PieChart as PieChartIcon, LogOut, Menu, X, AlertCircle,
  Mail, Phone as PhoneIcon, MapPin, Search, Filter, CheckCircle, XCircle, PhoneCall
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  getDashboardStats,
  getAppointments,
  getPatients,
  getAppointmentTrends,
  getConcernsAnalysis,
  getPatientGrowth,
  getAppointmentStatusDistribution,
  getCallLogs,
  getCallVolumeTrends,
  getCallOutcomesDistribution,
  getCallDurationStats,
  getUniqueCallersCount
} from '@/services/supabase';

interface DashboardStats {
  totalPatients: number;
  todayAppointments: number;
  pendingAppointments: number;
  confirmedAppointments: number;
  totalAppointments: number;
  totalCalls: number;
  firstTimeVisitors: number;
  returningPatients: number;
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

  const [stats, setStats] = useState<DashboardStats>({
    totalPatients: 0,
    todayAppointments: 0,
    pendingAppointments: 0,
    confirmedAppointments: 0,
    totalAppointments: 0,
    totalCalls: 0,
    firstTimeVisitors: 0,
    returningPatients: 0
  });

  const [appointmentTrend, setAppointmentTrend] = useState<any[]>([]);
  const [concernsData, setConcernsData] = useState<any[]>([]);
  const [patientGrowthData, setPatientGrowthData] = useState<any[]>([]);
  const [statusDistribution, setStatusDistribution] = useState<any[]>([]);
  const [allAppointments, setAllAppointments] = useState<any[]>([]);
  const [allPatients, setAllPatients] = useState<any[]>([]);

  // Call Logs state
  const [allCallLogs, setAllCallLogs] = useState<any[]>([]);
  const [callVolumeTrends, setCallVolumeTrends] = useState<any[]>([]);
  const [callOutcomes, setCallOutcomes] = useState<any[]>([]);
  const [callDurationStats, setCallDurationStats] = useState<any>({
    avgDuration: 0,
    minDuration: 0,
    maxDuration: 0,
    totalDuration: 0
  });
  const [uniqueCallersCount, setUniqueCallersCount] = useState(0);

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    setLoading(true);
    try {
      // Fetch dashboard stats
      const dashboardStats = await getDashboardStats();
      setStats(dashboardStats);

      // Fetch appointment trends
      const { data: trends } = await getAppointmentTrends();
      if (trends && trends.length > 0) {
        setAppointmentTrend(trends);
      }

      // Fetch concerns analysis
      const { data: concerns } = await getConcernsAnalysis();
      if (concerns && concerns.length > 0) {
        setConcernsData(concerns);
      }

      // Fetch patient growth
      const { data: growth } = await getPatientGrowth();
      if (growth && growth.length > 0) {
        setPatientGrowthData(growth);
      }

      // Fetch status distribution
      const { data: statusDist } = await getAppointmentStatusDistribution();
      if (statusDist && statusDist.length > 0) {
        setStatusDistribution(statusDist);
      }

      // Fetch all appointments
      const { data: appointments } = await getAppointments();
      if (appointments && appointments.length > 0) {
        setAllAppointments(appointments);
      }

      // Fetch all patients
      const { data: patients } = await getPatients();
      if (patients && patients.length > 0) {
        setAllPatients(patients);
      }

      // Fetch call logs
      const { data: callLogs } = await getCallLogs();
      if (callLogs && callLogs.length > 0) {
        setAllCallLogs(callLogs);
      }

      // Fetch call volume trends
      const { data: volumeTrends } = await getCallVolumeTrends();
      if (volumeTrends && volumeTrends.length > 0) {
        setCallVolumeTrends(volumeTrends);
      }

      // Fetch call outcomes
      const { data: outcomes } = await getCallOutcomesDistribution();
      if (outcomes && outcomes.length > 0) {
        setCallOutcomes(outcomes);
      }

      // Fetch call duration stats
      const { data: durationStats } = await getCallDurationStats();
      if (durationStats) {
        setCallDurationStats(durationStats);
      }

      // Fetch unique callers count
      const { count: uniqueCallers } = await getUniqueCallersCount();
      if (uniqueCallers) {
        setUniqueCallersCount(uniqueCallers);
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
    { id: 'call-logs', label: 'Call Logs', icon: PhoneCall },
    { id: 'analytics', label: 'Analytics', icon: PieChartIcon },
  ];

  const StatCard = ({ title, value, icon: Icon, subtitle, color }: any) => (
    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 ${color} bg-opacity-10 rounded-lg flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-1">{title}</p>
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
    </div>
  );

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard data...</p>
        </div>
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
              {activeTab === 'overview' && 'Welcome back!'}
              {activeTab === 'appointments' && 'Appointments Management'}
              {activeTab === 'patients' && 'Patients Database'}
              {activeTab === 'call-logs' && 'Call Logs & Voice Analytics'}
              {activeTab === 'analytics' && 'Analytics & Reports'}
            </h2>
            <p className="text-gray-600">
              {activeTab === 'overview' && "Here's what's happening at your clinic"}
              {activeTab === 'appointments' && 'View and manage all appointments'}
              {activeTab === 'patients' && 'View all patient information'}
              {activeTab === 'call-logs' && 'Track all voice calls and interactions'}
              {activeTab === 'analytics' && 'Detailed insights and trends'}
            </p>
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <>
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard
                  title="Total Patients"
                  value={stats.totalPatients}
                  icon={Users}
                  subtitle={`${stats.firstTimeVisitors} new, ${stats.returningPatients} returning`}
                  color="bg-purple-600"
                />
                <StatCard
                  title="Today's Appointments"
                  value={stats.todayAppointments}
                  icon={Calendar}
                  subtitle={`${stats.pendingAppointments} pending`}
                  color="bg-blue-600"
                />
                <StatCard
                  title="Total Appointments"
                  value={stats.totalAppointments}
                  icon={Clock}
                  subtitle={`${stats.confirmedAppointments} confirmed`}
                  color="bg-green-600"
                />
                <StatCard
                  title="Voice Calls"
                  value={stats.totalCalls}
                  icon={PhoneCall}
                  color="bg-orange-600"
                />
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Appointment Trends */}
                {appointmentTrend.length > 0 && (
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
                          stackId="1"
                          stroke="#8884d8"
                          fill="#8884d8"
                          name="Total"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Concerns Distribution */}
                {concernsData.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Primary Concerns</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={concernsData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
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
                )}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Recent Appointments</h3>
                <div className="space-y-4">
                  {allAppointments.slice(0, 5).map((appointment: any) => (
                    <div key={appointment.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div>
                        <p className="font-medium">{appointment.patients?.full_name || appointment.patient_name}</p>
                        <p className="text-sm text-gray-600">
                          {appointment.primary_concern} - {new Date(appointment.appointment_date).toLocaleDateString()}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(appointment.status)}`}>
                        {appointment.status}
                      </span>
                    </div>
                  ))}
                  {allAppointments.length === 0 && (
                    <div className="text-center py-8 text-gray-500">
                      <AlertCircle className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No appointments found</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Appointments Tab */}
          {activeTab === 'appointments' && (
            <>
              {/* Search and Filter */}
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Filter className="w-5 h-5 text-gray-500" />
                    <select
                      value={filterStatus}
                      onChange={(e) => setFilterStatus(e.target.value)}
                      className="border rounded-lg px-3 py-2 text-sm"
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
                      className="flex-1 border rounded-lg px-3 py-2 text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Upcoming Appointments */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-green-600" />
                  Upcoming Appointments ({upcomingAppointments.length})
                </h3>
                <div className="space-y-3">
                  {upcomingAppointments.length > 0 ? (
                    upcomingAppointments.map((apt: any) => (
                      <div key={apt.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{apt.patients?.full_name || apt.patient_name}</h4>
                            <p className="text-sm text-gray-600">{apt.patient_email}</p>
                            <p className="text-sm text-gray-600">{apt.patient_phone || apt.patients?.phone_number}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(apt.status)}`}>
                            {apt.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 text-sm">
                          <div>
                            <p className="text-gray-500">Date</p>
                            <p className="font-medium">{new Date(apt.appointment_date).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Time</p>
                            <p className="font-medium">{apt.appointment_time}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Concern</p>
                            <p className="font-medium">{apt.primary_concern}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">First Visit</p>
                            <p className="font-medium">{apt.is_first_visit ? 'Yes' : 'No'}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No upcoming appointments</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Past Appointments */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Past Appointments ({pastAppointments.length})
                </h3>
                <div className="space-y-3">
                  {pastAppointments.length > 0 ? (
                    pastAppointments.map((apt: any) => (
                      <div key={apt.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow opacity-80">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{apt.patients?.full_name || apt.patient_name}</h4>
                            <p className="text-sm text-gray-600">{apt.patient_email}</p>
                            <p className="text-sm text-gray-600">{apt.patient_phone || apt.patients?.phone_number}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(apt.status)}`}>
                            {apt.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 text-sm">
                          <div>
                            <p className="text-gray-500">Date</p>
                            <p className="font-medium">{new Date(apt.appointment_date).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Time</p>
                            <p className="font-medium">{apt.appointment_time}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Concern</p>
                            <p className="font-medium">{apt.primary_concern}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">First Visit</p>
                            <p className="font-medium">{apt.is_first_visit ? 'Yes' : 'No'}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Clock className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No past appointments</p>
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
              <div className="bg-white rounded-lg shadow p-4 mb-6">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search by name, email, or phone..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 border rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              {/* Patients List */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">All Patients ({filteredPatients.length})</h3>
                <div className="space-y-4">
                  {filteredPatients.length > 0 ? (
                    filteredPatients.map((patient: any) => {
                      // Get appointments for this patient
                      const patientAppointments = allAppointments.filter(
                        apt => apt.patient_id === patient.id ||
                        apt.patient_email === patient.email ||
                        apt.patients?.email === patient.email
                      );

                      return (
                        <div key={patient.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-lg">{patient.full_name}</h4>
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
                            <div className="text-right text-sm text-gray-600">
                              <p>Registered: {new Date(patient.created_at).toLocaleDateString()}</p>
                            </div>
                          </div>

                          {/* Patient Appointments */}
                          {patientAppointments.length > 0 && (
                            <div className="mt-4 pt-4 border-t">
                              <h5 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                Appointments ({patientAppointments.length})
                              </h5>
                              <div className="space-y-2">
                                {patientAppointments.slice(0, 3).map((apt: any) => (
                                  <div key={apt.id} className="bg-gray-50 rounded-lg p-3 text-sm">
                                    <div className="flex items-center justify-between mb-1">
                                      <span className="font-medium">{apt.primary_concern}</span>
                                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(apt.status)}`}>
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
                                {patientAppointments.length > 3 && (
                                  <p className="text-xs text-gray-500 text-center pt-1">
                                    + {patientAppointments.length - 3} more appointments
                                  </p>
                                )}
                              </div>
                            </div>
                          )}

                          {patientAppointments.length === 0 && (
                            <div className="mt-4 pt-4 border-t">
                              <p className="text-sm text-gray-500 text-center py-2">No appointments yet</p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Users className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No patients found</p>
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
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 bg-opacity-10 rounded-lg flex items-center justify-center">
                      <PhoneCall className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Total Calls</p>
                  <p className="text-3xl font-bold text-gray-900">{stats.totalCalls}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-green-600 bg-opacity-10 rounded-lg flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Unique Callers</p>
                  <p className="text-3xl font-bold text-gray-900">{uniqueCallersCount}</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-purple-600 bg-opacity-10 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Avg Duration</p>
                  <p className="text-3xl font-bold text-gray-900">{Math.floor(callDurationStats.avgDuration / 60)}m {callDurationStats.avgDuration % 60}s</p>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-orange-600 bg-opacity-10 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-1">Total Duration</p>
                  <p className="text-3xl font-bold text-gray-900">{Math.floor(callDurationStats.totalDuration / 60)}m</p>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Call Volume Trends */}
                {callVolumeTrends.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Call Volume Over Time</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={callVolumeTrends}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="total"
                          stackId="1"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          name="Total Calls"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                )}

                {/* Call Outcomes Distribution */}
                {callOutcomes.length > 0 && (
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h3 className="text-lg font-semibold mb-4">Call Outcomes</h3>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={callOutcomes}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${((percent || 0) * 100).toFixed(0)}%`}
                          outerRadius={80}
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
                )}
              </div>

              {/* Recent Call Logs List */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Recent Call Logs</h3>
                <div className="space-y-3">
                  {allCallLogs.length > 0 ? (
                    allCallLogs.map((call: any) => (
                      <div key={call.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-lg">{call.patient_name}</h4>
                            <p className="text-sm text-gray-600">{call.patient_email}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              call.call_outcome === 'appointment_booked' ? 'bg-green-100 text-green-800' :
                              call.call_outcome === 'information_provided' ? 'bg-blue-100 text-blue-800' :
                              call.call_outcome === 'callback_requested' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {call.call_outcome?.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3 text-sm">
                          <div>
                            <p className="text-gray-500">Date</p>
                            <p className="font-medium">{new Date(call.created_at).toLocaleDateString()}</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Duration</p>
                            <p className="font-medium">{Math.floor(call.call_duration / 60)}m {call.call_duration % 60}s</p>
                          </div>
                          <div>
                            <p className="text-gray-500">Time</p>
                            <p className="font-medium">{new Date(call.created_at).toLocaleTimeString()}</p>
                          </div>
                        </div>
                        {call.conversation_summary && (
                          <div className="mt-3 pt-3 border-t">
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Summary: </span>
                              {call.conversation_summary}
                            </p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <PhoneCall className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p>No call logs found</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}

          {/* Analytics Tab */}
          {activeTab === 'analytics' && (
            <>
              {/* Patient Growth Chart */}
              {patientGrowthData.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Patient Growth Over Time</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={patientGrowthData}>
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
              )}

              {/* Status Distribution */}
              {statusDistribution.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                  <h3 className="text-lg font-semibold mb-4">Appointment Status Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={statusDistribution} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis type="category" dataKey="name" />
                      <Tooltip />
                      <Bar dataKey="value" fill="#8884d8">
                        {statusDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              )}

              {/* Appointment Trends */}
              {appointmentTrend.length > 0 && (
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-4">Appointment Trends by Month</h3>
                  <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={appointmentTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="appointments" stroke="#8884d8" name="Total" strokeWidth={2} />
                      <Line type="monotone" dataKey="confirmed" stroke="#82ca9d" name="Confirmed" strokeWidth={2} />
                      <Line type="monotone" dataKey="pending" stroke="#ffc658" name="Pending" strokeWidth={2} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardEnhanced;