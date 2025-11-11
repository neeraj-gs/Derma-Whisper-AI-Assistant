export interface Treatment {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'laser' | 'skin' | 'hair' | 'facial';
  price?: string;
  duration?: string;
  benefits?: string[];
}

export interface Concern {
  id: string;
  title: string;
  description: string;
  icon: string;
  treatments: string[];
}

export interface Appointment {
  id: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  treatment: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  createdAt: string;
}

export interface GalleryItem {
  id: string;
  before: string;
  after: string;
  treatment: string;
  description?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  comment: string;
  treatment: string;
  date: string;
  avatar?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
}