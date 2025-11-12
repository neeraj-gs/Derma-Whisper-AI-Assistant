import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useClerk } from '@clerk/clerk-react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import {
  Calendar, Clock, User, Phone, Mail, FileText,
  Check, X, Edit, Trash2, Plus, ArrowLeft, Filter,
  Download, Upload, Search, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  getAppointments,
  getPatients,
  createAppointment,
  updateAppointment,
  deleteAppointment
} from '@/services/supabase';

interface Appointment {
  id: string;
  title: string;
  start: string;
  end: string;
  extendedProps: {
    patientName: string;
    patientEmail: string;
    patientPhone: string;
    treatment: string;
    status: string;
    notes: string;
  };
  backgroundColor?: string;
  borderColor?: string;
}

const BookingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [treatments, setTreatments] = useState<any[]>([]);
  const [patients, setPatients] = useState<any[]>([]);
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Form state for new/edit appointment
  const [formData, setFormData] = useState({
    patientName: '',
    patientEmail: '',
    patientPhone: '',
    date: '',
    time: '',
    treatment: '',
    status: 'pending',
    notes: ''
  });

  // Mock appointments for demo
  const mockAppointments: Appointment[] = [
    {
      id: '1',
      title: 'Priya Sharma - Laser Hair Reduction',
      start: '2024-01-15T10:00:00',
      end: '2024-01-15T11:00:00',
      backgroundColor: '#10b981',
      borderColor: '#10b981',
      extendedProps: {
        patientName: 'Priya Sharma',
        patientEmail: 'priya@example.com',
        patientPhone: '+91 9876543210',
        treatment: 'Laser Hair Reduction',
        status: 'confirmed',
        notes: 'First session'
      }
    },
    {
      id: '2',
      title: 'Rahul Kumar - Acne Treatment',
      start: '2024-01-15T14:00:00',
      end: '2024-01-15T15:00:00',
      backgroundColor: '#f59e0b',
      borderColor: '#f59e0b',
      extendedProps: {
        patientName: 'Rahul Kumar',
        patientEmail: 'rahul@example.com',
        patientPhone: '+91 9876543211',
        treatment: 'Acne Treatment',
        status: 'pending',
        notes: 'Follow-up visit'
      }
    },
    {
      id: '3',
      title: 'Anjali Patel - HydraFacial',
      start: '2024-01-16T11:00:00',
      end: '2024-01-16T12:30:00',
      backgroundColor: '#10b981',
      borderColor: '#10b981',
      extendedProps: {
        patientName: 'Anjali Patel',
        patientEmail: 'anjali@example.com',
        patientPhone: '+91 9876543212',
        treatment: 'HydraFacial',
        status: 'confirmed',
        notes: 'Regular monthly session'
      }
    },
    {
      id: '4',
      title: 'Vikram Singh - Anti-Aging Therapy',
      start: '2024-01-17T15:00:00',
      end: '2024-01-17T16:30:00',
      backgroundColor: '#6366f1',
      borderColor: '#6366f1',
      extendedProps: {
        patientName: 'Vikram Singh',
        patientEmail: 'vikram@example.com',
        patientPhone: '+91 9876543213',
        treatment: 'Anti-Aging Therapy',
        status: 'completed',
        notes: 'Third session completed'
      }
    }
  ];

  useEffect(() => {
    fetchBookingsData();
  }, []);

  const fetchBookingsData = async () => {
    setLoading(true);
    try {
      // Fetch appointments from your database
      const { data: appointmentsData } = await getAppointments();
      if (appointmentsData && appointmentsData.length > 0) {
        const formattedAppointments = appointmentsData.map((apt: any) => ({
          id: apt.id,
          title: `${apt.patients?.full_name || apt.patient_name} - ${apt.primary_concern}`,
          start: `${apt.appointment_date}T${apt.appointment_time}`,
          end: `${apt.appointment_date}T${addHours(apt.appointment_time, 1)}`,
          backgroundColor: getStatusColor(apt.status),
          borderColor: getStatusColor(apt.status),
          extendedProps: {
            patientName: apt.patients?.full_name || apt.patient_name,
            patientEmail: apt.patients?.email || apt.patient_email,
            patientPhone: apt.patients?.phone_number || apt.patient_phone,
            treatment: apt.primary_concern,
            status: apt.status,
            notes: apt.call_summary || ''
          }
        }));
        setAppointments(formattedAppointments);
      } else {
        // Use mock data if no real data
        setAppointments(mockAppointments);
      }

      // Fetch patients
      const { data: patientsData } = await getPatients();
      if (patientsData) {
        setPatients(patientsData);
      }
    } catch (error) {
      console.error('Error fetching bookings data:', error);
      // Use mock data on error
      setAppointments(mockAppointments);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return '#10b981';
      case 'pending':
        return '#f59e0b';
      case 'completed':
        return '#6366f1';
      case 'cancelled':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  const addHours = (time: string, hours: number) => {
    const [h, m] = time.split(':');
    const newHour = parseInt(h) + hours;
    return `${newHour.toString().padStart(2, '0')}:${m}`;
  };

  const handleDateClick = (arg: any) => {
    setFormData({
      ...formData,
      date: arg.dateStr,
      time: '10:00'
    });
    setShowAddModal(true);
  };

  const handleEventClick = (arg: any) => {
    setSelectedAppointment(arg.event);
    setShowEditModal(true);
  };

  const handleAddAppointment = async () => {
    try {
      const newAppointment = {
        patient_name: formData.patientName,
        patient_email: formData.patientEmail,
        patient_phone: formData.patientPhone,
        appointment_date: formData.date,
        appointment_time: formData.time,
        treatment: formData.treatment,
        status: formData.status,
        notes: formData.notes
      };

      const { data, error } = await createAppointment(newAppointment);
      if (!error) {
        fetchBookingsData();
        setShowAddModal(false);
        resetForm();
      }
    } catch (error) {
      console.error('Error adding appointment:', error);
    }
  };

  const handleUpdateAppointment = async () => {
    if (!selectedAppointment) return;

    try {
      const updates = {
        status: formData.status,
        notes: formData.notes
      };

      const { error } = await updateAppointment(selectedAppointment.id, updates);
      if (!error) {
        fetchBookingsData();
        setShowEditModal(false);
        setSelectedAppointment(null);
      }
    } catch (error) {
      console.error('Error updating appointment:', error);
    }
  };

  const handleDeleteAppointment = async () => {
    if (!selectedAppointment) return;

    if (confirm('Are you sure you want to delete this appointment?')) {
      try {
        const { error } = await deleteAppointment(selectedAppointment.id);
        if (!error) {
          fetchBookingsData();
          setShowEditModal(false);
          setSelectedAppointment(null);
        }
      } catch (error) {
        console.error('Error deleting appointment:', error);
      }
    }
  };

  const resetForm = () => {
    setFormData({
      patientName: '',
      patientEmail: '',
      patientPhone: '',
      date: '',
      time: '',
      treatment: '',
      status: 'pending',
      notes: ''
    });
  };

  const filteredAppointments = appointments.filter(apt => {
    const matchesStatus = filterStatus === 'all' || apt.extendedProps.status === filterStatus;
    const matchesSearch = searchTerm === '' ||
      apt.extendedProps.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      apt.extendedProps.treatment.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                onClick={() => navigate('/admin/dashboard')}
                variant="ghost"
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Dashboard
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Bookings Calendar</h1>
                <p className="text-sm text-gray-600">Manage appointments and schedules</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={() => setShowAddModal(true)}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Appointment
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-6 py-4">
        <div className="bg-white rounded-lg shadow p-4">
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
                placeholder="Search by patient or treatment..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 border rounded-lg px-3 py-2 text-sm"
              />
            </div>
            <div className="ml-auto flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Import
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="container mx-auto px-6 py-4">
        <div className="bg-white rounded-lg shadow p-6">
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={filteredAppointments}
            dateClick={handleDateClick}
            eventClick={handleEventClick}
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={true}
            height="auto"
            eventDisplay="block"
            eventTimeFormat={{
              hour: '2-digit',
              minute: '2-digit',
              meridiem: 'short'
            }}
          />
        </div>
      </div>

      {/* Add Appointment Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Add New Appointment</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Patient Name</label>
                <input
                  type="text"
                  value={formData.patientName}
                  onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="Enter patient name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  value={formData.patientEmail}
                  onChange={(e) => setFormData({ ...formData, patientEmail: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="patient@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                <input
                  type="tel"
                  value={formData.patientPhone}
                  onChange={(e) => setFormData({ ...formData, patientPhone: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Time</label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Treatment</label>
                <select
                  value={formData.treatment}
                  onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="">Select treatment</option>
                  <option value="Laser Hair Reduction">Laser Hair Reduction</option>
                  <option value="Acne Treatment">Acne Treatment</option>
                  <option value="HydraFacial">HydraFacial</option>
                  <option value="Anti-Aging Therapy">Anti-Aging Therapy</option>
                  <option value="Chemical Peel">Chemical Peel</option>
                  <option value="Botox">Botox</option>
                  <option value="Dermal Fillers">Dermal Fillers</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  rows={3}
                  placeholder="Additional notes..."
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setShowAddModal(false);
                  resetForm();
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleAddAppointment}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Add Appointment
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Appointment Modal */}
      {showEditModal && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Appointment Details</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600">Patient</p>
                <p className="font-medium">{selectedAppointment.extendedProps.patientName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Contact</p>
                <p className="font-medium">{selectedAppointment.extendedProps.patientEmail}</p>
                <p className="font-medium">{selectedAppointment.extendedProps.patientPhone}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Treatment</p>
                <p className="font-medium">{selectedAppointment.extendedProps.treatment}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Date & Time</p>
                <p className="font-medium">
                  {new Date(selectedAppointment.start).toLocaleString()}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                >
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full border rounded-lg px-3 py-2"
                  rows={3}
                  placeholder="Additional notes..."
                />
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={handleDeleteAppointment}
                className="text-red-600 hover:bg-red-50"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete
              </Button>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    setShowEditModal(false);
                    setSelectedAppointment(null);
                  }}
                >
                  Close
                </Button>
                <Button
                  onClick={handleUpdateAppointment}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  Update
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingsPage;