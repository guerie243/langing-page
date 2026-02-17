import React from 'react';
import { useLandingActivity } from '../hooks/useLandingActivity';

export const Hero: React.FC = () => {
  const { trackAndNavigate } = useLandingActivity();

  return (
    <section className="px-6 pt-8 pb-16 md:py-28 max-w-5xl mx-auto text-center overflow-hidden">
      <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 bg-emerald-50 rounded-full border border-emerald-100 shadow-sm">
        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Disponible maintenant • Gratuit</span>
      </div>

      <h1 className="text-3xl md:text-7xl font-black tracking-tight mb-6 leading-[1.1] text-neutral-900">
        Modernisez votre business et simplifiez votre prise de commandes — <span className="text-emerald-500">via WhatsApp.</span>
      </h1>

      <p className="text-base md:text-xl text-neutral-500 mb-10 max-w-2xl mx-auto leading-relaxed">
        Passez de la discussion WhatsApp confuse à un système de commande professionnel.
        Vos clients achètent en un clic, vous livrez avec un itinéraire GPS précis.
      </p>

      <div className="flex justify-center mb-20 px-0 w-full">
        <button
          onClick={() => trackAndNavigate('hero_cta')}
          className="w-full max-w-xl bg-[#1A1A1A] text-white font-black py-4 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)] hover:bg-neutral-800 hover:-translate-y-1 transition-all active:scale-95 text-lg uppercase tracking-tight whitespace-nowrap">
          Commencer gratuitement
        </button>
      </div>

      <div className="relative mx-auto max-w-[300px] md:max-w-[340px]">
        {/* Smartphone Mockup Frame */}
        <div className="relative aspect-[9/19.5] rounded-[3.5rem] bg-neutral-900 p-2.5 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-neutral-800 group cursor-pointer overflow-hidden ring-1 ring-white/10">

          {/* Screen Content */}
          <div className="relative w-full h-full bg-neutral-900 rounded-[2.5rem] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551288049-bbbda5366a71?q=80&w=1000&auto=format&fit=crop"
              alt="Démonstration OrderFlow"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
            />

            {/* Dynamic Island Mockup */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30"></div>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-2xl rounded-full flex items-center justify-center border border-white/30 shadow-2xl group-hover:scale-110 transition-all duration-300">
                <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Badge as seen in screenshot */}
            <div className="absolute bottom-8 left-6 z-20">
              <div className="px-4 py-2 bg-neutral-900/60 backdrop-blur-md rounded-xl text-[10px] font-black text-white uppercase tracking-widest border border-white/10">
                Aperçu Direct
              </div>
            </div>

            {/* Bottom Indicator Mockup */}
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/30 rounded-full z-20"></div>
          </div>
        </div>

        {/* Decorative background glow */}
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[120%] bg-emerald-500/10 blur-[100px] rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};
