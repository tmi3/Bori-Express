import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Phone } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { BUSINESS_INFO } from '../constants';
import { cn } from '../lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: { en: 'Home', es: 'Inicio' }, href: '#home' },
    { name: { en: 'Menu', es: 'Menú' }, href: '#menu' },
    { name: { en: 'About', es: 'Nosotros' }, href: '#about' },
    { name: { en: 'Contact', es: 'Contacto' }, href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-white/90 backdrop-blur-md py-3 shadow-md' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-bori-red rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg">
                <span className="text-white font-bold text-xl">B</span>
              </div>
              <span className={cn(
                "font-display text-2xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-bori-red" : "text-bori-red"
              )}>
                Bori Express
              </span>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-stone-700 hover:text-bori-red font-medium transition-colors"
              >
                {t(link.name)}
              </a>
            ))}
            
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="flex items-center gap-1 text-stone-600 hover:text-bori-green transition-colors font-medium border-l pl-4 ml-4"
            >
              <Globe className="w-4 h-4" />
              {language === 'en' ? 'ES' : 'EN'}
            </button>

            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-bori-green text-white px-5 py-2.5 rounded-full font-bold flex items-center gap-2 hover:bg-bori-green/90 transition-transform active:scale-95 shadow-md"
            >
              <Phone className="w-4 h-4" />
              {t({ en: 'Order Now', es: 'Ordena Ya' })}
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
              className="text-stone-600 font-bold px-2 py-1"
            >
              {language === 'en' ? 'ES' : 'EN'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-700 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-stone-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-lg font-medium text-stone-700 hover:bg-bori-warm hover:text-bori-red rounded-lg transition-colors"
                >
                  {t(link.name)}
                </a>
              ))}
              <div className="pt-4 border-t border-stone-100 flex flex-col gap-4">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full bg-bori-red text-white text-center py-4 rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg"
                >
                  <Phone className="w-5 h-5" />
                  {t({ en: 'Call to Order', es: 'Llamar para Ordenar' })}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
