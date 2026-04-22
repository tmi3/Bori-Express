import React from 'react';
import { useLanguage } from './LanguageContext';
import { BUSINESS_INFO } from '../constants';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bori-warm py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-bori-red rounded-full flex items-center justify-center">
                <span className="text-white font-bold">B</span>
              </div>
              <span className="font-display text-xl font-bold text-bori-red">Bori Express</span>
            </div>
            <p className="text-stone-500 max-w-sm mb-6">
              {t({ 
                en: "Authentic Puerto Rican kitchen serving the flavors of the island daily. Dedicated to taste, tradition, and community.",
                es: "Cocina auténtica puertorriqueña sirviendo los sabores de la isla a diario. Dedicados al sabor, la tradición y la comunidad."
              })}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6">{t({ en: 'Quick Links', es: 'Enlaces' })}</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-stone-500 hover:text-bori-red transition-colors">{t({ en: 'Home', es: 'Inicio' })}</a></li>
              <li><a href="#menu" className="text-stone-500 hover:text-bori-red transition-colors">{t({ en: 'Menu', es: 'Menú' })}</a></li>
              <li><a href="#about" className="text-stone-500 hover:text-bori-red transition-colors">{t({ en: 'About Us', es: 'Nosotros' })}</a></li>
              <li><a href="#contact" className="text-stone-500 hover:text-bori-red transition-colors">{t({ en: 'Contact', es: 'Contacto' })}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-stone-900 mb-6">{t({ en: 'Location', es: 'Ubicación' })}</h4>
            <p className="text-stone-500 mb-4">{BUSINESS_INFO.address}</p>
            <p className="text- stone-900 font-bold">{BUSINESS_INFO.phoneFormatted}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone-400 text-sm">
            © {currentYear} Bori Express. All Rights Reserved.
          </p>
          <div className="flex items-center gap-1 text-stone-400 text-sm">
            <span>Made with</span>
            <Heart className="w-3 h-3 text-bori-red fill-current" />
            <span>in New Britain, CT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
