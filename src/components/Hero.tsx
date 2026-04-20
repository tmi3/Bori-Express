import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';
import { BUSINESS_INFO, REVIEWS, isOpenNow } from '../constants';

export default function Hero() {
  const { t } = useLanguage();
  const isBusinessOpen = isOpenNow(BUSINESS_INFO.hours);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-bori-yellow/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[500px] h-[500px] bg-bori-red/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-bori-red/10 text-bori-red rounded-full text-sm font-bold mb-6">
              <Star className="w-4 h-4 fill-current" />
              <span>{t({ en: 'Authentic Puerto Rican Cuisine', es: 'Auténtica Comida Puertorriqueña' })}</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold text-stone-900 leading-[1.1] mb-6">
              {t({ en: 'A Taste of the Island in', es: 'Un Sabor de la Isla en' })}{' '}
              <span className="text-bori-red block md:inline">New Britain.</span>
            </h1>
            
            <p className="text-xl text-stone-600 mb-10 max-w-xl leading-relaxed">
              {t({ 
                en: "Grandmother's recipes, made fresh daily with authentic spices and love. Experience the warmth of our family-owned kitchen.",
                es: "Recetas de la abuela, hechas frescas a diario con especias auténticas y amor. Vive el calor de nuestra cocina familiar."
              })}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-bori-red text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-bori-red/90 transition-all shadow-xl shadow-bori-red/20 active:scale-95"
              >
                {t({ en: 'View Menu', es: 'Ver Menú' })}
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full text-lg font-bold border-2 border-stone-100 hover:border-bori-red transition-all shadow-lg active:scale-95"
              >
                {t({ en: 'Order Now', es: 'Ordena Ya' })}
              </a>
            </div>

            <div className="grid grid-cols-2 gap-8 py-8 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-bori-red mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-stone-900 underline decoration-bori-yellow decoration-2 underline-offset-4">
                    {t({ en: 'Find Us', es: 'Localízanos' })}
                  </h4>
                  <p className="text-stone-600 text-sm mt-1">{BUSINESS_INFO.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className={cn("w-5 h-5 mt-1 shrink-0", isBusinessOpen ? "text-bori-green" : "text-bori-red")} />
                <div>
                  <h4 className="font-bold text-stone-900 underline decoration-bori-yellow decoration-2 underline-offset-4">
                    {isBusinessOpen ? t({ en: 'Open Now', es: 'Abierto Ahora' }) : t({ en: 'Closed Now', es: 'Cerrado Ahora' })}
                  </h4>
                  <p className="text-stone-600 text-sm mt-1">11:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="relative"
          >
            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/puertorico-food/1200/1500"
                alt="Delicious Puerto Rican Food"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating Review Card */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-bori-yellow rounded-full flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 text-bori-red fill-current" />
                </div>
                <div>
                  <p className="text-stone-600 italic text-sm leading-snug">
                    "{t(REVIEWS[0].comment)}"
                  </p>
                  <p className="text-stone-900 font-bold text-xs mt-1">— {REVIEWS[0].name}</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative badges */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-bori-yellow rounded-full flex flex-col items-center justify-center p-2 shadow-xl rotate-12 animate-pulse">
              <span className="text-bori-red font-black text-center text-sm leading-tight">
                {t({ en: 'BEST PERNIL IN TOWN', es: 'EL MEJOR PERNIL' })}
              </span>
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-bori-green rounded-full flex flex-col items-center justify-center p-2 shadow-xl -rotate-12 border-4 border-white">
              <span className="text-white font-bold text-center text-xs leading-tight">
                {t({ en: 'FAMILY OWNED', es: 'FAMILIA' })}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
