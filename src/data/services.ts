import { Service } from '@/lib/types';

export const services: Service[] = [
  // Manikür
  {
    id: 'service-1',
    name: 'Kuru Manikür',
    description: 'Tırnak etini temizleme, şekillendirme ve bakım',
    duration: 45,
    price: 150,
    category: 'manicure',
  },
  {
    id: 'service-2',
    name: 'Spa Manikür',
    description: 'Nemlendirici maskeli manikür ve el bakımı',
    duration: 60,
    price: 200,
    category: 'manicure',
  },
  
  // Pedikür
  {
    id: 'service-3',
    name: 'Spa Pedikür',
    description: 'Ayak bakımı, peeling ve nemlendirme',
    duration: 75,
    price: 250,
    category: 'pedicure',
  },
  
  // Jel İşlemler
  {
    id: 'service-4',
    name: 'Kalıcı Oje',
    description: 'Uzun süre dayanıklı jel oje uygulaması',
    duration: 90,
    price: 300,
    category: 'gel',
  },
  {
    id: 'service-5',
    name: 'Kalıcı Oje Çıkartma',
    description: 'Profesyonel jel oje temizleme',
    duration: 30,
    price: 100,
    category: 'gel',
  },
  {
    id: 'service-6',
    name: 'Jel Şablon',
    description: 'Şablonla jel tırnak uzatma',
    duration: 120,
    price: 400,
    category: 'gel',
  },
  {
    id: 'service-7',
    name: 'Jel Tips',
    description: 'Tips ile jel tırnak uygulaması',
    duration: 150,
    price: 500,
    category: 'gel',
  },
  {
    id: 'service-8',
    name: 'Üst Form',
    description: 'Formla tırnak uzatma işlemi',
    duration: 180,
    price: 600,
    category: 'gel',
  },
  
  // Protez Tırnak
  {
    id: 'service-9',
    name: 'Protez Tırnak Bakım',
    description: 'Mevcut protez tırnak dolgu ve bakımı',
    duration: 90,
    price: 350,
    category: 'prosthetic',
  },
  
  // Nail Art
  {
    id: 'service-10',
    name: 'Nail Art',
    description: 'Özel tasarım tırnak süslemesi',
    duration: 30,
    price: 100,
    category: 'nail-art',
  },
  
  // Bakım
  {
    id: 'service-11',
    name: 'Tırnak Güçlendirme',
    description: 'Zayıf tırnaklar için güçlendirici bakım',
    duration: 60,
    price: 200,
    category: 'care',
  },
];

export const serviceCategories = {
  manicure: 'Manikür',
  pedicure: 'Pedikür',
  gel: 'Jel İşlemler',
  'nail-art': 'Nail Art',
  prosthetic: 'Protez Tırnak',
  care: 'Bakım',
};

// Hizmet kategorisine göre filtreleme
export function getServicesByCategory(category: string) {
  return services.filter(service => service.category === category);
}

// ID'ye göre hizmet bulma
export function getServiceById(id: string) {
  return services.find(service => service.id === id);
}