import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { ShieldCheck, Users, Flame, Utensils } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Users,
      title: { en: 'Family Owned', es: 'Negocio Familiar' },
      description: { en: 'Rooted in New Britain, our family brings you the true flavors of Puerto Rico.', es: 'Arraigados en New Britain, nuestra familia te trae los verdaderos sabores de P.R.' }
    },
    {
      icon: ShieldCheck,
      title: { en: 'Super Clean Kitchen', es: 'Cocina Impecable' },
      description: { en: 'Cleanliness is our top priority. We maintain a professional, transparent kitchen environment.', es: 'La limpieza es nuestra prioridad. Mantenemos un ambiente de cocina profesional y transparente.' }
    },
    {
      icon: Flame,
      title: { en: 'Authentic Spices', es: 'Especias Auténticas' },
      description: { en: 'We use real sofrito and imported Puerto Rican seasonings for that "Taste of the Island".', es: 'Usamos sofrito real y condimentos importados para ese "Sabor de la Isla".' }
    },
    {
      icon: Utensils,
      title: { en: 'Fresh Daily', es: 'Fresco a Diario' },
      description: { en: 'Our Pernil is slow-roasted every single day. No shortcuts, just slow-cooked perfection.', es: 'Nuestro Pernil se asa a fuego lento todos los días. Sin atajos, solo perfección.' }
    }
  ];

  return (
    <section id="about" className="py-24 bg-bori-warm/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                src="https://picsum.photos/seed/bori-kitchen/1000/1000"
                alt="Our Clean Kitchen"
                className="rounded-[2.5rem] shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-bori-red rounded-3xl -z-0 rotate-12" />
              <div className="absolute -top-8 -left-8 w-1/2 h-1/2 bg-bori-yellow/20 rounded-full blur-3xl" />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="text-bori-red font-bold uppercase tracking-widest text-sm mb-4 block">
              {t({ en: 'The Bori Story', es: 'La Historia de Bori' })}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-stone-900 mb-6 lowercase">
              {t({ en: 'The Heart & Soul of Puerto Rican Flavor', es: 'El Corazón y Alma del Sabor Boricua' })}
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed mb-10">
              {t({ 
                en: "Bori Express was born from a desire to share the rich culinary heritage of Puerto Rico with our New Britain community. Every dish we serve is a tribute to our grandmother's recipes—bold, savory, and made with the freshest ingredients.",
                es: "Bori Express nació del deseo de compartir la rica herencia culinaria de Puerto Rico con nuestra comunidad de New Britain. Cada plato que servimos es un tributo a las recetas de nuestra abuela: audaces, sabrosas y hechas con los ingredientes más frescos."
              })}
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-stone-100">
                    <feature.icon className="w-6 h-6 text-bori-red" />
                  </div>
                  <h4 className="font-bold text-stone-900">{t(feature.title)}</h4>
                  <p className="text-stone-600 text-sm leading-relaxed">{t(feature.description)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
