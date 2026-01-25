// Dummy data generator for demo purposes

export const generateDummyStats = () => ({
  totalPatients: 2847,
  todayAppointments: 34,
  pendingAppointments: 12,
  confirmedAppointments: 89,
  totalAppointments: 1563,
  totalCalls: 892,
  firstTimeVisitors: 1243,
  returningPatients: 1604,
  completedAppointments: 1462,
  cancelledAppointments: 12,
  monthlyGrowth: 23.5,
  satisfactionRate: 4.8,
  averageWaitTime: 12,
  totalRevenue: 284700,
});

export const generateAppointmentTrends = () => [
  { month: 'Jan 2025', appointments: 156, confirmed: 142, pending: 14, completed: 138 },
  { month: 'Feb 2025', appointments: 178, confirmed: 165, pending: 13, completed: 162 },
  { month: 'Mar 2025', appointments: 203, confirmed: 189, pending: 14, completed: 185 },
  { month: 'Apr 2025', appointments: 234, confirmed: 218, pending: 16, completed: 214 },
  { month: 'May 2025', appointments: 267, confirmed: 251, pending: 16, completed: 247 },
  { month: 'Jun 2025', apartments: 289, confirmed: 271, pending: 18, completed: 268 },
  { month: 'Jul 2025', appointments: 312, confirmed: 295, pending: 17, completed: 291 },
  { month: 'Aug 2025', appointments: 334, confirmed: 318, pending: 16, completed: 315 },
  { month: 'Sep 2025', appointments: 356, confirmed: 339, pending: 17, completed: 336 },
  { month: 'Oct 2025', appointments: 378, confirmed: 361, pending: 17, completed: 358 },
  { month: 'Nov 2025', appointments: 401, confirmed: 384, pending: 17, completed: 381 },
];

export const generateConcernsData = () => [
  { name: 'Acne Treatment', value: 432, color: '#8b5cf6' },
  { name: 'Skin Cancer Screening', value: 367, color: '#ec4899' },
  { name: 'Anti-Aging', value: 298, color: '#3b82f6' },
  { name: 'Eczema & Psoriasis', value: 234, color: '#10b981' },
  { name: 'Hair Loss', value: 189, color: '#f59e0b' },
  { name: 'Cosmetic Procedures', value: 156, color: '#ef4444' },
];

export const generatePatientGrowth = () => [
  { month: 'Jan', new: 123, returning: 156 },
  { month: 'Feb', new: 145, returning: 178 },
  { month: 'Mar', new: 167, returning: 203 },
  { month: 'Apr', new: 189, returning: 234 },
  { month: 'May', new: 212, returning: 267 },
  { month: 'Jun', new: 234, returning: 289 },
  { month: 'Jul', new: 256, returning: 312 },
  { month: 'Aug', new: 278, returning: 334 },
  { month: 'Sep', new: 301, returning: 356 },
  { month: 'Oct', new: 323, returning: 378 },
  { month: 'Nov', new: 345, returning: 401 },
];

export const generateStatusDistribution = () => [
  { name: 'Confirmed', value: 89, color: '#10b981' },
  { name: 'Pending', value: 12, color: '#f59e0b' },
  { name: 'Completed', value: 1462, color: '#6366f1' },
  { month: 'Cancelled', value: 12, color: '#ef4444' },
];

export const generateRevenueData = () => [
  { month: 'Jan', revenue: 23400, appointments: 156 },
  { month: 'Feb', revenue: 26780, appointments: 178 },
  { month: 'Mar', revenue: 30550, appointments: 203 },
  { month: 'Apr', revenue: 35180, appointments: 234 },
  { month: 'May', revenue: 40155, appointments: 267 },
  { month: 'Jun', revenue: 43465, appointments: 289 },
  { month: 'Jul', revenue: 46920, appointments: 312 },
  { month: 'Aug', revenue: 50230, appointments: 334 },
  { month: 'Sep', revenue: 53540, appointments: 356 },
  { month: 'Oct', revenue: 56850, appointments: 378 },
  { month: 'Nov', revenue: 60315, appointments: 401 },
];

export const generateCallLogs = () => {
  const outcomes = ['appointment_booked', 'information_provided', 'callback_requested', 'no_answer'];
  const names = [
    'Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim', 'Jessica Martinez',
    'Robert Taylor', 'Amanda Lee', 'Christopher Brown', 'Michelle Wilson', 'Daniel Garcia',
    'Jennifer Davis', 'Matthew Anderson', 'Ashley Thomas', 'Joshua Moore', 'Samantha Jackson',
    'Andrew White', 'Nicole Harris', 'Ryan Martin', 'Elizabeth Thompson', 'Brandon Lewis'
  ];

  const summaries = [
    'Patient inquired about acne treatment options and pricing. Scheduled consultation for next week.',
    'Discussed skin cancer screening procedures. Patient requested callback for scheduling.',
    'Patient asked about cosmetic procedures and recovery time. Appointment booked successfully.',
    'General inquiry about clinic hours and insurance coverage. Information provided.',
    'Patient interested in anti-aging treatments. Consultation scheduled for evaluation.',
    'Follow-up call regarding previous appointment. Rescheduled for preferred time slot.',
    'New patient asking about eczema treatment options. Provided detailed information.',
    'Patient called to confirm appointment and ask pre-visit questions. All questions answered.',
    'Inquiry about laser hair removal pricing and sessions required. Detailed explanation provided.',
    'Patient reported skin concern and requested urgent appointment. Same-day slot provided.',
  ];

  const calls = [];
  for (let i = 0; i < 45; i++) {
    const daysAgo = Math.floor(Math.random() * 30);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    calls.push({
      id: `call_${i + 1}`,
      patient_name: names[Math.floor(Math.random() * names.length)],
      patient_email: `patient${i + 1}@example.com`,
      call_duration: Math.floor(Math.random() * 480) + 60, // 1-8 minutes
      call_outcome: outcomes[Math.floor(Math.random() * outcomes.length)],
      conversation_summary: summaries[Math.floor(Math.random() * summaries.length)],
      created_at: date.toISOString(),
    });
  }

  return calls.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};

export const generateCallVolumeTrends = () => {
  const trends = [];
  for (let i = 30; i >= 0; i--) {
    const date = new Date();
    date.setDate(date.getDate() - i);
    const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    trends.push({
      date: dateStr,
      total: Math.floor(Math.random() * 35) + 15,
      appointment_booked: Math.floor(Math.random() * 15) + 5,
      information_provided: Math.floor(Math.random() * 10) + 3,
      callback_requested: Math.floor(Math.random() * 8) + 2,
      no_answer: Math.floor(Math.random() * 5) + 1,
    });
  }
  return trends;
};

export const generateCallOutcomes = () => [
  { name: 'Appointment Booked', value: 412, color: '#10b981' },
  { name: 'Information Provided', value: 267, color: '#3b82f6' },
  { name: 'Callback Requested', value: 156, color: '#f59e0b' },
  { name: 'No Answer', value: 57, color: '#ef4444' },
];

export const generateCallDurationStats = () => ({
  avgDuration: 248, // seconds
  minDuration: 45,
  maxDuration: 612,
  totalDuration: 221216, // total seconds
});

export const generateDummyPatients = () => {
  const names = [
    'Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim', 'Jessica Martinez',
    'Robert Taylor', 'Amanda Lee', 'Christopher Brown', 'Michelle Wilson', 'Daniel Garcia',
    'Jennifer Davis', 'Matthew Anderson', 'Ashley Thomas', 'Joshua Moore', 'Samantha Jackson',
    'Andrew White', 'Nicole Harris', 'Ryan Martin', 'Elizabeth Thompson', 'Brandon Lewis',
    'Stephanie Miller', 'Kevin Wilson', 'Laura Martinez', 'James Anderson', 'Maria Garcia'
  ];

  return names.map((name, index) => {
    const daysAgo = Math.floor(Math.random() * 180);
    const date = new Date();
    date.setDate(date.getDate() - daysAgo);

    return {
      id: `patient_${index + 1}`,
      full_name: name,
      email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
      phone_number: `+1 (${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
      is_first_visit: Math.random() > 0.6,
      total_visits: Math.floor(Math.random() * 12) + 1,
      created_at: date.toISOString(),
    };
  });
};

export const generateDummyAppointments = () => {
  const concerns = [
    'Acne Treatment', 'Skin Cancer Screening', 'Anti-Aging Consultation',
    'Eczema Treatment', 'Psoriasis Management', 'Hair Loss Evaluation',
    'Laser Hair Removal', 'Botox Consultation', 'Chemical Peel',
    'Mole Removal', 'Rosacea Treatment', 'Skin Tag Removal'
  ];

  const times = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

  const appointments = [];
  const patients = generateDummyPatients();

  // Generate 60 appointments across past and future dates
  for (let i = 0; i < 60; i++) {
    const daysOffset = Math.floor(Math.random() * 60) - 30; // -30 to +30 days
    const date = new Date();
    date.setDate(date.getDate() + daysOffset);

    const patient = patients[Math.floor(Math.random() * patients.length)];
    const isPast = daysOffset < 0;

    appointments.push({
      id: `apt_${i + 1}`,
      patient_id: patient.id,
      patient_name: patient.full_name,
      patient_email: patient.email,
      patient_phone: patient.phone_number,
      appointment_date: date.toISOString().split('T')[0],
      appointment_time: times[Math.floor(Math.random() * times.length)],
      primary_concern: concerns[Math.floor(Math.random() * concerns.length)],
      is_first_visit: Math.random() > 0.7,
      status: isPast ? (Math.random() > 0.1 ? 'completed' : 'cancelled') : (Math.random() > 0.3 ? 'confirmed' : 'pending'),
      created_at: date.toISOString(),
      patients: patient,
    });
  }

  return appointments.sort((a, b) => new Date(b.appointment_date).getTime() - new Date(a.appointment_date).getTime());
};

export const generateHourlyAppointments = () => {
  const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];
  return hours.map(hour => ({
    hour,
    appointments: Math.floor(Math.random() * 8) + 2,
  }));
};

export const generateDoctorPerformance = () => [
  { name: 'Dr. Smith', patients: 234, satisfaction: 4.9, revenue: 89400 },
  { name: 'Dr. Johnson', patients: 198, satisfaction: 4.8, revenue: 76200 },
  { name: 'Dr. Williams', patients: 176, satisfaction: 4.7, revenue: 68900 },
  { name: 'Dr. Brown', patients: 156, satisfaction: 4.8, revenue: 62400 },
];

export const generateWeeklyActivity = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    day,
    appointments: Math.floor(Math.random() * 25) + 10,
    calls: Math.floor(Math.random() * 20) + 5,
    newPatients: Math.floor(Math.random() * 8) + 2,
  }));
};

export const generateTreatmentPopularity = () => [
  { treatment: 'Botox', sessions: 156, revenue: 46800, growth: 12.5 },
  { treatment: 'Laser Treatment', sessions: 134, revenue: 40200, growth: 8.3 },
  { treatment: 'Chemical Peel', sessions: 98, revenue: 29400, growth: 15.7 },
  { treatment: 'Microdermabrasion', sessions: 87, revenue: 26100, growth: 6.2 },
  { treatment: 'Fillers', sessions: 76, revenue: 22800, growth: 18.9 },
  { treatment: 'Acne Treatment', sessions: 145, revenue: 43500, growth: 10.4 },
];

export const generateAgeDistribution = () => [
  { range: '18-25', patients: 234, percentage: 12 },
  { range: '26-35', patients: 567, percentage: 29 },
  { range: '36-45', patients: 489, percentage: 25 },
  { range: '46-55', patients: 378, percentage: 19 },
  { range: '56-65', patients: 198, percentage: 10 },
  { range: '65+', patients: 98, percentage: 5 },
];

export const generateGenderDistribution = () => [
  { gender: 'Female', value: 1678, color: '#ec4899' },
  { gender: 'Male', value: 1169, color: '#3b82f6' },
];

export const generateTimeSlotPopularity = () => [
  { slot: '9-10 AM', bookings: 34, avgDuration: 45 },
  { slot: '10-11 AM', bookings: 42, avgDuration: 48 },
  { slot: '11-12 PM', bookings: 38, avgDuration: 52 },
  { slot: '12-1 PM', bookings: 28, avgDuration: 40 },
  { slot: '1-2 PM', bookings: 32, avgDuration: 46 },
  { slot: '2-3 PM', bookings: 45, avgDuration: 50 },
  { slot: '3-4 PM', bookings: 48, avgDuration: 55 },
  { slot: '4-5 PM', bookings: 52, avgDuration: 58 },
  { slot: '5-6 PM', bookings: 46, avgDuration: 51 },
];

export const generateMonthlyComparison = () => [
  { metric: 'Patients', current: 2847, previous: 2304, change: 23.5 },
  { metric: 'Appointments', current: 1563, previous: 1323, change: 18.1 },
  { metric: 'Revenue', current: 284700, previous: 230500, change: 23.5 },
  { metric: 'Calls', current: 892, previous: 774, change: 15.2 },
  { metric: 'New Patients', current: 1243, previous: 987, change: 25.9 },
];

export const generateReferralSources = () => [
  { source: 'Google Search', patients: 456, percentage: 28, color: '#4285f4' },
  { source: 'Social Media', patients: 389, percentage: 24, color: '#e4405f' },
  { source: 'Word of Mouth', patients: 312, percentage: 19, color: '#10b981' },
  { source: 'Doctor Referral', patients: 267, percentage: 16, color: '#8b5cf6' },
  { source: 'Website', patients: 198, percentage: 12, color: '#f59e0b' },
  { source: 'Other', patients: 25, percentage: 1, color: '#6b7280' },
];

export const generateSatisfactionTrends = () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  return months.map(month => ({
    month,
    rating: (Math.random() * 0.4 + 4.6).toFixed(1),
    reviews: Math.floor(Math.random() * 50) + 80,
  }));
};

export const generateAppointmentHeatmap = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'];

  const heatmap: any[] = [];
  days.forEach(day => {
    hours.forEach(hour => {
      heatmap.push({
        day,
        hour,
        value: Math.floor(Math.random() * 8) + 1,
      });
    });
  });
  return heatmap;
};

export const generateTopServices = () => [
  { service: 'Skin Consultation', count: 456, revenue: 45600, avgPrice: 100 },
  { service: 'Acne Treatment', count: 389, revenue: 58350, avgPrice: 150 },
  { service: 'Anti-Aging', count: 334, revenue: 66800, avgPrice: 200 },
  { service: 'Laser Therapy', count: 267, revenue: 80100, avgPrice: 300 },
  { service: 'Cosmetic Procedures', count: 234, revenue: 93600, avgPrice: 400 },
];

export const generateRetentionCohort = () => [
  { cohort: 'Jan 2025', month0: 100, month1: 85, month2: 72, month3: 68 },
  { cohort: 'Feb 2025', month0: 100, month1: 88, month2: 75, month3: 71 },
  { cohort: 'Mar 2025', month0: 100, month1: 90, month2: 78, month3: 73 },
  { cohort: 'Apr 2025', month0: 100, month1: 87, month2: 76, month3: 0 },
  { cohort: 'May 2025', month0: 100, month1: 89, month2: 0, month3: 0 },
  { cohort: 'Jun 2025', month0: 100, month1: 0, month2: 0, month3: 0 },
];

// Call Logs Advanced Analytics
export const generateCallHourlyDistribution = () => {
  const hours = ['9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM'];
  return hours.map(hour => ({
    hour,
    calls: Math.floor(Math.random() * 35) + 15,
    appointmentsBooked: Math.floor(Math.random() * 18) + 6,
  }));
};

export const generateCallDurationDistribution = () => [
  { range: '0-2 min', calls: 87, percentage: 9.8 },
  { range: '2-4 min', calls: 267, percentage: 29.9 },
  { range: '4-6 min', calls: 356, percentage: 39.9 },
  { range: '6-8 min', calls: 145, percentage: 16.3 },
  { range: '8+ min', calls: 37, percentage: 4.1 },
];

export const generateDailyCallTrends = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  return days.map(day => ({
    day,
    weekday: Math.floor(Math.random() * 40) + 25,
    weekend: Math.floor(Math.random() * 25) + 10,
  }));
};

export const generateCallConversionMetrics = () => ({
  totalCalls: 892,
  appointmentsBooked: 412,
  conversionRate: 46.2,
  averageCallsToBook: 2.16,
  callbackConversionRate: 68.5,
  informationToBookingRate: 24.7,
});

export const generateTopCallingHours = () => [
  { hour: '2-3 PM', calls: 78, bookings: 36 },
  { hour: '3-4 PM', calls: 72, bookings: 34 },
  { hour: '10-11 AM', calls: 68, bookings: 31 },
  { hour: '11-12 PM', calls: 64, bookings: 29 },
  { hour: '1-2 PM', calls: 59, bookings: 27 },
];

export const generateCallQualityMetrics = () => ({
  avgHandleTime: '4:08',
  firstCallResolution: 76.3,
  callbackRate: 17.5,
  abandonmentRate: 6.4,
  avgWaitTime: '0:32',
  satisfactionScore: 4.7,
});

export const generateCallTypeBreakdown = () => [
  { type: 'New Patient Inquiry', value: 423, color: '#8b5cf6' },
  { type: 'Appointment Scheduling', value: 267, color: '#10b981' },
  { type: 'Treatment Questions', value: 156, color: '#3b82f6' },
  { type: 'Follow-up Calls', value: 46, color: '#f59e0b' },
];

export const generateWeeklyCallComparison = () => {
  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  return weeks.map(week => ({
    week,
    thisMonth: Math.floor(Math.random() * 60) + 200,
    lastMonth: Math.floor(Math.random() * 50) + 180,
  }));
};
