import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with existing credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Patient functions
export const getPatients = async () => {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};

export const getPatientById = async (id: string) => {
  const { data, error } = await supabase
    .from('patients')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
};

export const createPatient = async (patient: any) => {
  const { data, error } = await supabase
    .from('patients')
    .insert([patient])
    .select();
  return { data, error };
};

export const updatePatient = async (id: string, updates: any) => {
  const { data, error } = await supabase
    .from('patients')
    .update(updates)
    .eq('id', id)
    .select();
  return { data, error };
};

// Appointment functions
export const getAppointments = async () => {
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      patients (
        id,
        full_name,
        email,
        phone_number
      )
    `)
    .order('appointment_date', { ascending: false });
  return { data, error };
};

export const getUpcomingAppointments = async () => {
  const today = new Date().toISOString().split('T')[0];
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      patients (
        id,
        full_name,
        email,
        phone_number
      )
    `)
    .gte('appointment_date', today)
    .order('appointment_date', { ascending: true });
  return { data, error };
};

export const getTodayAppointments = async () => {
  const today = new Date().toISOString().split('T')[0];
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      patients (
        id,
        full_name,
        email,
        phone_number
      )
    `)
    .eq('appointment_date', today)
    .order('appointment_time', { ascending: true });
  return { data, error };
};

export const createAppointment = async (appointment: any) => {
  const { data, error } = await supabase
    .from('appointments')
    .insert([appointment])
    .select();
  return { data, error };
};

export const updateAppointment = async (id: string, updates: any) => {
  const { data, error } = await supabase
    .from('appointments')
    .update(updates)
    .eq('id', id)
    .select();
  return { data, error };
};

export const deleteAppointment = async (id: string) => {
  const { error } = await supabase
    .from('appointments')
    .delete()
    .eq('id', id);
  return { error };
};

// Call logs functions
export const getCallLogs = async () => {
  const { data, error } = await supabase
    .from('call_logs')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};

export const getRecentCallLogs = async (limit: number = 10) => {
  const { data, error } = await supabase
    .from('call_logs')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(limit);
  return { data, error };
};

export const createCallLog = async (callLog: any) => {
  const { data, error } = await supabase
    .from('call_logs')
    .insert([callLog])
    .select();
  return { data, error };
};

// Analytics functions
export const getDashboardStats = async () => {
  try {
    // Get today's date
    const today = new Date().toISOString().split('T')[0];

    // Get total patients
    const { count: totalPatients } = await supabase
      .from('patients')
      .select('*', { count: 'exact', head: true });

    // Get today's appointments
    const { data: todayAppointments } = await supabase
      .from('appointments')
      .select('id')
      .eq('appointment_date', today);

    // Get pending appointments
    const { count: pendingAppointments } = await supabase
      .from('appointments')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'pending');

    // Get confirmed appointments
    const { count: confirmedAppointments } = await supabase
      .from('appointments')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'confirmed');

    // Get total appointments
    const { count: totalAppointments } = await supabase
      .from('appointments')
      .select('*', { count: 'exact', head: true });

    // Get total call logs
    const { count: totalCalls } = await supabase
      .from('call_logs')
      .select('*', { count: 'exact', head: true });

    // Get first time visitors
    const { count: firstTimeVisitors } = await supabase
      .from('patients')
      .select('*', { count: 'exact', head: true })
      .eq('is_first_visit', true);

    // Get returning patients
    const { count: returningPatients } = await supabase
      .from('patients')
      .select('*', { count: 'exact', head: true })
      .eq('is_first_visit', false);

    return {
      totalPatients: totalPatients || 0,
      todayAppointments: todayAppointments?.length || 0,
      pendingAppointments: pendingAppointments || 0,
      confirmedAppointments: confirmedAppointments || 0,
      totalAppointments: totalAppointments || 0,
      totalCalls: totalCalls || 0,
      firstTimeVisitors: firstTimeVisitors || 0,
      returningPatients: returningPatients || 0,
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    return {
      totalPatients: 0,
      todayAppointments: 0,
      pendingAppointments: 0,
      confirmedAppointments: 0,
      totalAppointments: 0,
      totalCalls: 0,
      firstTimeVisitors: 0,
      returningPatients: 0,
    };
  }
};

// Get appointment trends by date
export const getAppointmentTrends = async () => {
  const { data, error } = await supabase
    .from('appointments')
    .select('appointment_date, status')
    .order('appointment_date', { ascending: true });

  if (error || !data) return { data: [], error };

  // Group by month
  const trends: any = {};
  data.forEach((apt: any) => {
    const date = new Date(apt.appointment_date);
    const monthKey = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    if (!trends[monthKey]) {
      trends[monthKey] = {
        month: monthKey,
        appointments: 0,
        confirmed: 0,
        pending: 0,
        cancelled: 0,
        completed: 0
      };
    }

    trends[monthKey].appointments++;
    if (apt.status === 'confirmed') trends[monthKey].confirmed++;
    if (apt.status === 'pending') trends[monthKey].pending++;
    if (apt.status === 'cancelled') trends[monthKey].cancelled++;
    if (apt.status === 'completed') trends[monthKey].completed++;
  });

  return { data: Object.values(trends), error: null };
};

// Get concerns analysis
export const getConcernsAnalysis = async () => {
  const { data, error } = await supabase
    .from('appointments')
    .select('primary_concern');

  if (error || !data) return { data: [], error };

  // Count concerns
  const concerns: any = {};
  data.forEach((apt: any) => {
    const concern = apt.primary_concern || 'Not specified';
    concerns[concern] = (concerns[concern] || 0) + 1;
  });

  const concernsArray = Object.entries(concerns).map(([name, count], index) => ({
    name,
    value: count,
    color: ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1', '#d084d8', '#84d8d0'][index % 7]
  }));

  return { data: concernsArray, error: null };
};

// Get patient growth over time
export const getPatientGrowth = async () => {
  const { data, error } = await supabase
    .from('patients')
    .select('created_at, is_first_visit')
    .order('created_at', { ascending: true });

  if (error || !data) return { data: [], error };

  // Group by month
  const growth: any = {};
  data.forEach((patient: any) => {
    const date = new Date(patient.created_at);
    const monthKey = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });

    if (!growth[monthKey]) {
      growth[monthKey] = { month: monthKey, new: 0, returning: 0 };
    }

    if (patient.is_first_visit) {
      growth[monthKey].new++;
    } else {
      growth[monthKey].returning++;
    }
  });

  return { data: Object.values(growth), error: null };
};

// Get call analytics
export const getCallAnalytics = async () => {
  const { data, error } = await supabase
    .from('call_logs')
    .select('call_outcome, call_duration, created_at');

  if (error || !data) return { data: null, error };

  const totalCalls = data.length;
  const avgDuration = data.reduce((sum: number, call: any) => sum + (call.call_duration || 0), 0) / totalCalls;

  // Group outcomes
  const outcomes: any = {};
  data.forEach((call: any) => {
    const outcome = call.call_outcome || 'Unknown';
    outcomes[outcome] = (outcomes[outcome] || 0) + 1;
  });

  return {
    data: {
      totalCalls,
      avgDuration: Math.round(avgDuration),
      outcomes
    },
    error: null
  };
};

// Get appointment status distribution
export const getAppointmentStatusDistribution = async () => {
  const { data, error } = await supabase
    .from('appointments')
    .select('status');

  if (error || !data) return { data: [], error };

  const statusCount: any = {};
  data.forEach((apt: any) => {
    const status = apt.status || 'unknown';
    statusCount[status] = (statusCount[status] || 0) + 1;
  });

  const statusArray = Object.entries(statusCount).map(([name, count], index) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value: count,
    color: ['#10b981', '#f59e0b', '#6366f1', '#ef4444', '#6b7280'][index % 5]
  }));

  return { data: statusArray, error: null };
};

// Get call volume trends over time
export const getCallVolumeTrends = async () => {
  const { data, error } = await supabase
    .from('call_logs')
    .select('created_at, call_outcome')
    .order('created_at', { ascending: true });

  if (error || !data) return { data: [], error };

  // Group by day
  const trends: any = {};
  data.forEach((call: any) => {
    const date = new Date(call.created_at);
    const dayKey = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    if (!trends[dayKey]) {
      trends[dayKey] = {
        date: dayKey,
        total: 0,
        appointment_booked: 0,
        information_provided: 0,
        callback_requested: 0,
        no_answer: 0,
        other: 0
      };
    }

    trends[dayKey].total++;
    const outcome = call.call_outcome || 'other';
    if (trends[dayKey][outcome] !== undefined) {
      trends[dayKey][outcome]++;
    } else {
      trends[dayKey].other++;
    }
  });

  return { data: Object.values(trends), error: null };
};

// Get call outcomes distribution
export const getCallOutcomesDistribution = async () => {
  const { data, error } = await supabase
    .from('call_logs')
    .select('call_outcome');

  if (error || !data) return { data: [], error };

  const outcomes: any = {};
  data.forEach((call: any) => {
    const outcome = call.call_outcome || 'Unknown';
    outcomes[outcome] = (outcomes[outcome] || 0) + 1;
  });

  const outcomesArray = Object.entries(outcomes).map(([name, count], index) => ({
    name: name.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    value: count,
    color: ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'][index % 6]
  }));

  return { data: outcomesArray, error: null };
};

// Get call duration statistics
export const getCallDurationStats = async () => {
  const { data, error } = await supabase
    .from('call_logs')
    .select('call_duration');

  if (error || !data || data.length === 0) {
    return {
      data: {
        avgDuration: 0,
        minDuration: 0,
        maxDuration: 0,
        totalDuration: 0
      },
      error
    };
  }

  const durations = data.map((call: any) => call.call_duration || 0);
  const totalDuration = durations.reduce((sum: number, duration: number) => sum + duration, 0);
  const avgDuration = totalDuration / durations.length;
  const minDuration = Math.min(...durations);
  const maxDuration = Math.max(...durations);

  return {
    data: {
      avgDuration: Math.round(avgDuration),
      minDuration,
      maxDuration,
      totalDuration
    },
    error: null
  };
};

// Get unique callers count
export const getUniqueCallersCount = async () => {
  const { data, error } = await supabase
    .from('call_logs')
    .select('patient_email');

  if (error || !data) return { count: 0, error };

  const uniqueEmails = new Set(data.map((call: any) => call.patient_email).filter(Boolean));
  return { count: uniqueEmails.size, error: null };
};