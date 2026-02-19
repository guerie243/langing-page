import React from 'react';
import { useLandingActivity } from '../hooks/useLandingActivity';
import demoVideo from '../assets/1démonstration.mp4';
import { PhoneFrame } from './PhoneFrame';

export const Hero: React.FC = () => {
  const { trackAndNavigate } = useLandingActivity();

  return (
    <section className="px-6 pt-8 pb-10 md:py-20 max-w-5xl mx-auto text-center overflow-hidden text-neutral-900">
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Disponible maintenant • Gratuit</span>
      </div>

      <h1 className="text-3xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
        Modernisez votre business et simplifiez votre prise de commandes — <span className="text-emerald-500">via WhatsApp.</span>
      </h1>

      <p className="text-base md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        Passez de la discussion WhatsApp confuse à un système de commande professionnel.
        Vos clients achètent en un clic, vous livrez avec un itinéraire GPS précis.
      </p>

      <div className="flex justify-center mb-8 px-0 w-full">
        <button
          onClick={() => trackAndNavigate('hero_cta')}
          className="w-full max-w-xl bg-[#1A1A1A] text-white font-black py-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:bg-neutral-800 hover:-translate-y-1 transition-all active:scale-95 text-lg uppercase tracking-tight whitespace-nowrap">
          Commencer gratuitement
        </button>
      </div>

      {/* Hero phone reduced to 220-260px range to feel less massive */}
      <PhoneFrame videoSrc={demoVideo} showIsland className="max-w-[220px] md:max-w-[260px]" />
    </section>
  );
};
