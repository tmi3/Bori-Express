import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { MENU_ITEMS } from '../constants';
import { Heart, Star, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

const categories = [
  { id: 'all', name: { en: 'All Items', es: 'Todo' } },
  { id: 'rice-beans', name: { en: 'Rice & Beans', es: 'Arroz y Habichuelas' } },
  { id: 'mains', name: { en: 'Chicken & Pork', es: 'Pollo y Pernil' } },
  { id: 'specialties', name: { en: 'Specialties', es: 'Especialidades' } },
  { id: 'sides', name: { en: 'Sides', es: 'Acompañantes' } },
  { id: 'desserts', name: { en: 'Desserts', es: 'Postres' } },
] as const;

export default function MenuGrid() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = MENU_ITEMS.filter(item => 
    activeCategory === 'all' ? true : item.category === activeCategory
  );

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-bori-red font-bold uppercase tracking-widest text-sm mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>{t({ en: 'Taste the Magic', es: 'Prueba la Magia' })}</span>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            {t({ en: 'Our Digital Menu', es: 'Nuestro Menú Digital' })}
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {t({ 
              en: "Authentic Puerto Rican flavors passed down through generations. Tagged items are our local favorites!",
              es: "Sabores auténticos de Puerto Rico transmitidos de generación en generación. ¡Los artículos marcados son los favoritos!"
            })}
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex overflow-x-auto pb-8 mb-8 no-scrollbar -mx-4 px-4 md:justify-center gap-2 md:gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "whitespace-nowrap px-6 py-2 rounded-full font-bold transition-all border-2",
                activeCategory === cat.id
                  ? "bg-bori-red border-bori-red text-white shadow-lg"
                  : "bg-white border-stone-100 text-stone-600 hover:border-bori-yellow"
              )}
            >
              {t(cat.name)}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-bori-warm/50 rounded-3xl p-6 border border-stone-100/50 hover:bg-white hover:shadow-xl hover:border-bori-yellow/30 transition-all flex flex-col h-full overflow-hidden relative"
              >
                {item.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-bori-yellow text-bori-red text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm">
                    {t({ en: 'POPULAR', es: 'POPULAR' })}
                  </div>
                )}
                {item.chefChoice && (
                  <div className="absolute top-4 left-4 z-10 bg-bori-green text-white text-[10px] font-black px-2 py-0.5 rounded-full shadow-sm flex items-center gap-1">
                    <Heart className="w-2.5 h-2.5 fill-current" />
                    {t({ en: "CHEF'S CHOICE", es: 'ELECCIÓN DEL CHEF' })}
                  </div>
                )}

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2 pt-4">
                    <h3 className="font-display text-xl font-bold text-stone-900 group-hover:text-bori-red transition-colors">
                      {t(item.name)}
                    </h3>
                    <span className="font-bold text-bori-green bg-bori-green/5 px-2 py-1 rounded-lg">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">
                    {t(item.description)}
                  </p>
                </div>

                <button className="w-full py-3 bg-stone-900 text-white rounded-xl font-bold text-sm tracking-wide opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 active:bg-bori-red">
                  {t({ en: 'Add to Order', es: 'Añadir a la Orden' })}
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
