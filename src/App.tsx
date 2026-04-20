/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './components/LanguageContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-bori-yellow/30">
        <Navbar />
        <main>
          <Hero />
          
          {/* Review Ticker (Social Proof) */}
          <div className="bg-bori-red py-6 overflow-hidden flex whitespace-nowrap border-y-4 border-bori-yellow shadow-2xl skew-y-1 transform origin-left">
            <div className="animate-marquee flex items-center gap-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 text-white font-bold text-lg px-4 uppercase tracking-tighter">
                  <span className="text-bori-yellow">★ ★ ★ ★ ★</span>
                  <span>"The rice pudding will make you cry"</span>
                  <span className="w-2 h-2 bg-bori-yellow rounded-full" />
                  <span>"Best Pernil in New Britain"</span>
                  <span className="w-2 h-2 bg-bori-yellow rounded-full" />
                  <span>"Authentic Puerto Rican flavor"</span>
                </div>
              ))}
            </div>
            <div className="animate-marquee2 absolute top-6 flex items-center gap-12">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex items-center gap-4 text-white font-bold text-lg px-4 uppercase tracking-tighter">
                  <span className="text-bori-yellow">★ ★ ★ ★ ★</span>
                  <span>"The rice pudding will make you cry"</span>
                  <span className="w-2 h-2 bg-bori-yellow rounded-full" />
                  <span>"Best Pernil in New Britain"</span>
                  <span className="w-2 h-2 bg-bori-yellow rounded-full" />
                  <span>"Authentic Puerto Rican flavor"</span>
                </div>
              ))}
            </div>
          </div>

          <Menu />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee 40s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </LanguageProvider>
  );
}

