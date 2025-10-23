// Kullanıcı tipleri
export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

// Hizmet tipleri
export interface Service {
  id: string;
  name: string;
  description: string;
  duration: number; // dakika
  price: number;
  category: ServiceCategory;
  image?: string;
}

export type ServiceCategory = 
  | 'manicure'
  | 'pedicure'
  | 'gel'
  | 'nail-art'
  | 'prosthetic'
  | 'care';

// Randevu tipleri
export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  date: Date;
  time: string;
  notes?: string;
  status: AppointmentStatus;
  createdAt: Date;
}

export type AppointmentStatus = 
  | 'pending'
  | 'confirmed'
  | 'completed'
  | 'cancelled';

// Galeri tipleri
export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  category: ServiceCategory;
  createdAt: Date;
}

// Form tipleri
export interface LoginForm {
  email: string;
  password: string;
}

export interface RegisterForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface AppointmentForm {
  serviceId: string;
  date: Date;
  time: string;
  notes?: string;
}