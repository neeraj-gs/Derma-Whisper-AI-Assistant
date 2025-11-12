import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Initialize Supabase client with existing credentials

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Auth functions
export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// User functions
export const getUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .order('created_at', { ascending: false });
  return { data, error };
};

export const getUserById = async (id: string) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)
    .single();
  return { data, error };
};

// Appointment functions
export const getAppointments = async () => {
  const { data, error } = await supabase
    .from('appointments')
    .select(`
      *,
      users (
        id,
        name,
        email,
        phone
      ),
      treatments (
        id,
        name,
        category,
        price
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
      users (
        id,
        name,
        email,
        phone
      ),
      treatments (
        id,
        name,
        category
      )
    `)
    .gte('appointment_date', today)
    .order('appointment_date', { ascending: true });
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

// Treatment functions
export const getTreatments = async () => {
  const { data, error } = await supabase
    .from('treatments')
    .select('*')
    .order('name', { ascending: true });
  return { data, error };
};

// Analytics functions
export const getAppointmentAnalytics = async () => {
  const { data, error } = await supabase
    .from('appointment_analytics')
    .select('*')
    .order('month', { ascending: false })
    .limit(12);
  return { data, error };
};

export const getRevenueAnalytics = async () => {
  const { data, error } = await supabase
    .from('revenue_analytics')
    .select('*')
    .order('month', { ascending: false })
    .limit(12);
  return { data, error };
};

export const getTreatmentPopularity = async () => {
  const { data, error } = await supabase
    .from('treatment_popularity')
    .select('*')
    .limit(10);
  return { data, error };
};

// Consultation functions
export const getConsultations = async () => {
  const { data, error } = await supabase
    .from('consultations')
    .select(`
      *,
      users (
        id,
        name,
        email
      )
    `)
    .order('consultation_date', { ascending: false });
  return { data, error };
};

// Review functions
export const getReviews = async () => {
  const { data, error } = await supabase
    .from('reviews')
    .select(`
      *,
      users (
        id,
        name
      ),
      treatments (
        id,
        name
      )
    `)
    .order('created_at', { ascending: false });
  return { data, error };
};

// Revenue functions
export const getRevenue = async (startDate?: string, endDate?: string) => {
  let query = supabase
    .from('revenue')
    .select(`
      *,
      users (
        id,
        name,
        email
      ),
      appointments (
        id,
        appointment_date,
        appointment_time
      )
    `);

  if (startDate) {
    query = query.gte('created_at', startDate);
  }
  if (endDate) {
    query = query.lte('created_at', endDate);
  }

  const { data, error } = await query.order('created_at', { ascending: false });
  return { data, error };
};

// Dashboard summary functions
export const getDashboardSummary = async () => {
  const today = new Date().toISOString().split('T')[0];
  const thisMonth = new Date().toISOString().substring(0, 7);

  // Get today's appointments
  const { data: todayAppointments } = await supabase
    .from('appointments')
    .select('id')
    .eq('appointment_date', today);

  // Get this month's revenue
  const { data: monthRevenue } = await supabase
    .from('revenue')
    .select('amount')
    .gte('created_at', `${thisMonth}-01`)
    .eq('status', 'completed');

  // Get total users
  const { count: totalUsers } = await supabase
    .from('users')
    .select('*', { count: 'exact' });

  // Get pending appointments
  const { count: pendingAppointments } = await supabase
    .from('appointments')
    .select('*', { count: 'exact' })
    .eq('status', 'pending');

  const totalRevenueThisMonth = monthRevenue?.reduce((sum, r) => sum + (r.amount || 0), 0) || 0;

  return {
    todayAppointments: todayAppointments?.length || 0,
    monthlyRevenue: totalRevenueThisMonth,
    totalPatients: totalUsers || 0,
    pendingAppointments: pendingAppointments || 0,
  };
};

// Concerns functions
export const getConcerns = async () => {
  const { data, error } = await supabase
    .from('concerns')
    .select('*')
    .order('name', { ascending: true });
  return { data, error };
};

export const getPatientConcerns = async (userId: string) => {
  const { data, error } = await supabase
    .from('patient_concerns')
    .select(`
      *,
      concerns (
        id,
        name,
        description
      )
    `)
    .eq('user_id', userId)
    .order('created_at', { ascending: false });
  return { data, error };
};

// Treatment Progress functions
export const getTreatmentProgress = async (userId?: string) => {
  let query = supabase
    .from('treatment_progress')
    .select(`
      *,
      users (
        id,
        name
      ),
      treatments (
        id,
        name,
        category
      ),
      appointments (
        id,
        appointment_date
      )
    `);

  if (userId) {
    query = query.eq('user_id', userId);
  }

  const { data, error } = await query.order('created_at', { ascending: false });
  return { data, error };
};