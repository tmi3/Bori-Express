import React from 'react';
import { useLanguage } from './LanguageContext';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-stone-900 rounded-[3rem] overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-bori-red/10 animate-pulse" />
          
          <div className="grid lg:grid-cols-2">
            <div className="p-12 lg:p-20">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8">
                {t({ en: 'Visit Us or Order Out', es: 'Visítanos o Pide para Llevar' })}
              </h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-bori-red" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{t({ en: 'Address', es: 'Dirección' })}</h4>
                    <p className="text-stone-400">{BUSINESS_INFO.address}</p>
                    <a 
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS_INFO.address)}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-bori-yellow hover:underline text-sm font-bold inline-block mt-2"
                    >
                      {t({ en: 'Get Directions', es: 'Cómo Llegar' })}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-bori-green" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{t({ en: 'Phone', es: 'Teléfono' })}</h4>
                    <a href={`tel:${BUSINESS_INFO.phone}`} className="text-stone-400 hover:text-white transition-colors">
                      {BUSINESS_INFO.phoneFormatted}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                    <ClockIcon className="w-6 h-6 text-bori-yellow" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">{t({ en: 'Business Hours', es: 'Horario' })}</h4>
                    <ul className="text-stone-400 text-sm space-y-1">
                      {Object.entries(BUSINESS_INFO.hours).map(([day, time]) => (
                        <li key={day} className="flex justify-between w-48 capitalize">
                          <span>{t({ en: day, es: day === 'monday' ? 'Lunes' : day === 'tuesday' ? 'Martes' : day === 'wednesday' ? 'Miércoles' : day === 'thursday' ? 'Jueves' : day === 'friday' ? 'Viernes' : day === 'saturday' ? 'Sábado' : 'Domingo' })}:</span>
                          <span className="text-stone-100">{time.open} - {time.close}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-bori-red transition-all rounded-full flex items-center justify-center text-white">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 bg-white/5 hover:bg-blue-600 transition-all rounded-full flex items-center justify-center text-white">
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="h-96 lg:h-full min-h-[400px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.790547702476!2d-72.76077382343468!3d41.68261907126466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7cb7663ba0e81%3A0xff3c9bc11e69b0a7!2s1360%20East%20St%2C%20New%20Britain%2C%20CT%2006053!5e0!3m2!1sen!2sus!4v171365431!5m2!1sen!2sus" 
                className="w-full h-full grayscale opacity-70 invert contrast-125"
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
