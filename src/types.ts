export interface MenuItem {
  id: string;
  name: { en: string; es: string };
  description: { en: string; es: string };
  price: string;
  category: 'rice-beans' | 'mains' | 'sides' | 'desserts' | 'specialties';
  popular?: boolean;
  chefChoice?: boolean;
  image?: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  comment: { en: string; es: string };
}

export interface BusinessInfo {
  address: string;
  phone: string;
  phoneFormatted: string;
  hours: {
    [key: string]: { open: string; close: string; closed?: boolean };
  };
}
