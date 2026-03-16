import React from 'react';
import { useLandingActivity } from '../hooks/useLandingActivity';
import demoVideo from '../assets/1démonstration.mp4';
import demoPoster from '../assets/1démonstration.jpg';
import { PhoneFrame } from './PhoneFrame';

export const Hero: React.FC = () => {
  const { trackAndNavigate, trackAndExternalNavigate } = useLandingActivity();

  return (
    <section className="px-6 pt-8 pb-10 md:py-20 max-w-5xl mx-auto text-center overflow-hidden text-neutral-900">
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Disponible maintenant • Gratuit</span>
      </div>

      <h1 className="text-3xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1]">
        Transformez votre WhatsApp en une vitrine d'éliteTransformez votre WhatsApp en une vitrine d'élite — <span className="text-emerald-500">WhatsApp</span>
      </h1>

      <p className="text-base md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        Fini les commandes perdues dans les discussions. Vos clients achètent en un clic, vos livreurs reçoivent la position exacte. Simple, rapide, professionnel.
      </p>

      <div className="flex flex-col items-center gap-4 mb-8 px-0 w-full">
        <button
          onClick={() => trackAndNavigate('hero_cta')}
          className="w-full max-w-xl bg-[#1A1A1A] text-white font-black py-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:bg-neutral-800 hover:-translate-y-1 transition-all active:scale-95 text-lg uppercase tracking-tight whitespace-nowrap">
          Commencer gratuitement
        </button>

        <button
          onClick={() => trackAndExternalNavigate('hero_demo', "https://wa.me/243850691679?text=Bonjour%20l'%C3%A9quipe%20Andy%20Business%20!%20Je%20suis%20int%C3%A9ress%C3%A9%20par%20votre%20solution%20et%20j'aimerais%20b%C3%A9n%C3%A9ficier%20d'une%20d%C3%A9monstration%20personnalis%C3%A9e.%20Pouvez-vous%20me%20donner%20plus%20d'informations%20%3F%20Merci%20!")}
          className="w-full max-w-xl bg-white text-neutral-600 font-bold py-3 rounded-2xl border-2 border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200 transition-all active:scale-95 text-base tracking-tight">
          Demander une démo
        </button>
      </div>

      {/* Hero phone reduced to 220-260px range to feel less massive */}
      <PhoneFrame videoSrc={demoVideo} poster={demoPoster} showIsland className="max-w-[220px] md:max-w-[260px]" />
    </section>
  );
};
