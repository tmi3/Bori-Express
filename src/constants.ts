import { MenuItem, Review, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  address: '1360 East St, New Britain, CT 06053',
  phone: '9592083423',
  phoneFormatted: '(959) 208-3423',
  hours: {
    monday: { open: '11:00 AM', close: '8:00 PM' },
    tuesday: { open: '11:00 AM', close: '8:00 PM' },
    wednesday: { open: '11:00 AM', close: '8:00 PM' },
    thursday: { open: '11:00 AM', close: '9:00 PM' },
    friday: { open: '11:00 AM', close: '10:00 PM' },
    saturday: { open: '11:00 AM', close: '10:00 PM' },
    sunday: { open: '12:00 PM', close: '7:00 PM' },
  },
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Maria R.',
    rating: 5,
    comment: {
      en: 'The rice pudding will make you cry. Just like my abuela used to make!',
      es: 'El arroz con leche te hará llorar. ¡Tal como lo hacía mi abuela!',
    },
  },
  {
    id: '2',
    name: 'Carlos M.',
    rating: 5,
    comment: {
      en: 'Best Pernil in New Britain. The skin is so crispy!',
      es: 'El mejor pernil en New Britain. ¡El cuero está tan crujiente!',
    },
  },
  {
    id: '3',
    name: 'Jessica L.',
    rating: 5,
    comment: {
      en: 'Sweet Plantain Pizza is a game changer. Trust me.',
      es: 'La pizza de plátano maduro cambia las reglas del juego. Créeme.',
    },
  },
];

export const isOpenNow = (hours: BusinessInfo['hours']) => {
  const now = new Date();
  const day = now.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const dayHours = hours[day];
  
  if (dayHours.closed) return false;
  
  const [openTime, openPeriod] = dayHours.open.split(' ');
  const [closeTime, closePeriod] = dayHours.close.split(' ');
  
  const [openH, openM] = openTime.split(':').map(Number);
  const [closeH, closeM] = closeTime.split(':').map(Number);
  
  const convertTo24 = (h: number, period: string) => {
    if (period === 'PM' && h !== 12) return h + 12;
    if (period === 'AM' && h === 12) return 0;
    return h;
  };
  
  const openTotal = convertTo24(openH, openPeriod) * 60 + openM;
  const closeTotal = convertTo24(closeH, closePeriod) * 60 + closeM;
  const nowTotal = now.getHours() * 60 + now.getMinutes();
  
  return nowTotal >= openTotal && nowTotal <= closeTotal;
};

export const MENU_ITEMS: MenuItem[] = [
  // Rice & Beans
  {
    id: 'rb1',
    name: { en: 'Yellow Rice with Pigeon Peas', es: 'Arroz con Gandules' },
    description: { en: 'Traditional Puerto Rican yellow rice seasoned with sofrito and pigeon peas.', es: 'Arroz amarillo tradicional sazonado con sofrito y gandules.' },
    price: '$5.00',
    category: 'rice-beans',
    popular: true,
  },
  {
    id: 'rb2',
    name: { en: 'White Rice & Beans', es: 'Arroz Blanco y Habichuelas' },
    description: { en: 'Fluffy white rice served with savory stewed pink beans.', es: 'Arroz blanco esponjoso servido con habichuelas rosadas guisadas.' },
    price: '$5.00',
    category: 'rice-beans',
  },
  // Mains
  {
    id: 'm1',
    name: { en: 'Pernil (Roast Pork)', es: 'Pernil Asado' },
    description: { en: 'Slow-roasted pork shoulder marinated in garlic and spices. Crispy skin included.', es: 'Paleta de cerdo asada a fuego lento marinada en ajo y especias. Cuero crujiente incluido.' },
    price: '$12.00',
    category: 'mains',
    popular: true,
    chefChoice: true,
    image: 'https://picsum.photos/seed/pernil/800/600',
  },
  {
    id: 'm2',
    name: { en: 'Baked Chicken', es: 'Pollo al Horno' },
    description: { en: 'Tender chicken quarters seasoned with island herbs and baked to perfection.', es: 'Cuartos de pollo tiernos sazonados con hierbas de la isla y horneados a la perfección.' },
    price: '$10.00',
    category: 'mains',
  },
  {
    id: 'm3',
    name: { en: 'Beef Empanada', es: 'Empanadilla de Carne' },
    description: { en: 'Crispy pastry filled with seasoned ground beef.', es: 'Pastelillo crujiente relleno de carne molida sazonada.' },
    price: '$3.50',
    category: 'mains',
  },
  // Specialties
  {
    id: 's1',
    name: { en: 'Sweet Plantain Pizza', es: 'Pizza de Plátano Maduro' },
    description: { en: 'Our famous specialty! A unique fusion of sweet plantains and savory toppings.', es: '¡Nuestra famosa especialidad! Una fusión única de plátanos maduros y coberturas saladas.' },
    price: '$15.00',
    category: 'specialties',
    chefChoice: true,
  },
  // Sides
  {
    id: 'sd1',
    name: { en: 'Fried Sweet Plantains', es: 'Maduros' },
    description: { en: 'Caramelized sweet plantains.', es: 'Plátanos maduros caramelizados.' },
    price: '$4.00',
    category: 'sides',
    popular: true,
  },
  {
    id: 'sd2',
    name: { en: 'Fried Cassava', es: 'Yuca Frita' },
    description: { en: 'Crispy outside, tender inside cassava with garlic sauce.', es: 'Yuca crujiente por fuera y tierna por dentro con mojo de ajo.' },
    price: '$5.00',
    category: 'sides',
  },
  {
    id: 'sd3',
    name: { en: 'Potato Balls', es: 'Rellenos de Papa' },
    description: { en: 'Mashed potato balls stuffed with seasoned ground beef.', es: 'Bolas de puré de papa rellenas de carne molida sazonada.' },
    price: '$4.50',
    category: 'sides',
  },
  // Desserts
  {
    id: 'd1',
    name: { en: 'Rice Pudding', es: 'Arroz con Leche' },
    description: { en: 'Creamy homemade rice pudding with a hint of cinnamon.', es: 'Arroz con leche cremoso hecho en casa con un toque de canela.' },
    price: '$5.00',
    category: 'desserts',
    popular: true,
  },
  {
    id: 'd2',
    name: { en: 'Flan', es: 'Flan de Vainilla' },
    description: { en: 'Smooth vanilla custard with caramel sauce.', es: 'Natilla suave de vainilla con salsa de caramelo.' },
    price: '$5.00',
    category: 'desserts',
  },
];
