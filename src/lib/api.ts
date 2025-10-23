import { User, Appointment, Service, GalleryItem, RegisterForm, AppointmentForm } from '@/lib/types';
import { services } from '@/data/services';

// Mock API gecikme simülasyonu
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Dummy kullanıcı verisi
let currentUser: User | null = null;

// Dummy randevu verisi (localStorage'dan alınacak)
let appointments: Appointment[] = [];

// Dolu saatler (dummy data)
const bookedSlots: Record<string, string[]> = {
  '2025-10-20': ['10:00', '11:30', '14:00'],
  '2025-10-21': ['12:00', '15:30'],
  '2025-10-22': ['09:00', '16:00'],
};

// Auth API
export const authAPI = {
  async login(email: string, password: string): Promise<User> {
    await delay(1000);
    
    // Dummy login kontrolü
    if (email && password) {
      currentUser = {
        id: 'user-1',
        name: 'Kullanıcı Adı',
        email: email,
        phone: '+90 555 123 4567',
        createdAt: new Date(),
      };
      localStorage.setItem('user', JSON.stringify(currentUser));
      return currentUser;
    }
    
    throw new Error('Geçersiz email veya şifre');
  },
  
  async register(userData: RegisterForm): Promise<User> {
    await delay(1000);
    
    currentUser = {
      id: 'user-' + Date.now(),
      name: userData.name,
      email: userData.email,
      phone: userData.phone,
      createdAt: new Date(),
    };
    
    localStorage.setItem('user', JSON.stringify(currentUser));
    return currentUser;
  },
  
  async getCurrentUser(): Promise<User | null> {
    const userData = localStorage.getItem('user');
    if (userData) {
      currentUser = JSON.parse(userData);
      return currentUser;
    }
    return null;
  },
  
  async logout(): Promise<void> {
    await delay(500);
    currentUser = null;
    localStorage.removeItem('user');
  }
};

// Hizmetler API
export const servicesAPI = {
  async getServices(): Promise<Service[]> {
    await delay(500);
    return services;
  },
  
  async getServiceById(id: string): Promise<Service | null> {
    await delay(300);
    return services.find(service => service.id === id) || null;
  },
  
  async getServicesByCategory(category: string): Promise<Service[]> {
    await delay(300);
    return services.filter(service => service.category === category);
  }
};

// Randevu API
export const appointmentAPI = {
  async getAvailableSlots(date: string): Promise<string[]> {
    await delay(500);
    
    // Tüm mevcut saatler
    const allSlots = [
      '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
      '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
      '15:00', '15:30', '16:00', '16:30', '17:00', '17:30'
    ];
    
    // O gün için dolu saatleri çıkar
    const booked = bookedSlots[date] || [];
    return allSlots.filter(slot => !booked.includes(slot));
  },
  
  async createAppointment(appointmentData: AppointmentForm): Promise<Appointment> {
    await delay(1000);
    
    const newAppointment: Appointment = {
      id: 'apt-' + Date.now(),
      userId: currentUser?.id || 'user-1',
      serviceId: appointmentData.serviceId,
      date: new Date(appointmentData.date),
      time: appointmentData.time,
      notes: appointmentData.notes,
      status: 'pending',
      createdAt: new Date(),
    };
    
    // LocalStorage'a kaydet
    appointments.push(newAppointment);
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Dolu saatleri güncelle
    const dateKey = appointmentData.date.toISOString().split('T')[0];
    if (!bookedSlots[dateKey]) {
      bookedSlots[dateKey] = [];
    }
    bookedSlots[dateKey].push(appointmentData.time);
    
    return newAppointment;
  },
  
  async getUserAppointments(): Promise<Appointment[]> {
    await delay(500);
    
    // LocalStorage'dan yükle
    const savedAppointments = localStorage.getItem('appointments');
    if (savedAppointments) {
      appointments = JSON.parse(savedAppointments);
    }
    
    return appointments.filter(apt => apt.userId === currentUser?.id);
  }
};

// Galeri API
export const galleryAPI = {
  async getGalleryItems(): Promise<GalleryItem[]> {
    await delay(500);
    
    // Dummy galeri verileri
    return [
      {
        id: 'gallery-1',
        title: 'Nail Art Çalışması 1',
        image: '/gallery/sample1.jpg',
        category: 'nail-art',
        createdAt: new Date(),
      },
      {
        id: 'gallery-2',
        title: 'Jel Tırnak Uygulaması',
        image: '/gallery/sample2.jpg',
        category: 'gel',
        createdAt: new Date(),
      },
      // Daha fazla örnek eklenebilir
    ];
  }
};