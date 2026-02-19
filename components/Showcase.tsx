import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import showcaseVideo from '../assets/10vitrine.mp4';

export const Showcase: React.FC = () => {
  return (
    <section className="px-6 py-16 bg-neutral-50 overflow-hidden text-neutral-900">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 order-2 md:order-1 relative">
          <PhoneFrame videoSrc={showcaseVideo} showIsland className="max-w-[200px] md:max-w-[240px]" />
        </div>

        <div className="flex-1 order-1 md:order-2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 text-neutral-900 text-[11px] font-bold rounded-full uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Image de Marque
          </div>
          <h2 className="text-3xl md:text-5xl font-black leading-[1.1] tracking-tight">
            Votre business mérite une <span className="text-emerald-500">vraie identité.</span>
          </h2>
          <p className="text-base md:text-xl text-neutral-500 leading-relaxed font-medium">
            Ne soyez plus juste un numéro anonyme. Créez une vitrine qui envoie du lourd en 2 minutes : personnalisez votre logo, uploadez vos produits et commencez à briller.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="p-6 rounded-3xl bg-white border border-neutral-100 shadow-sm">
              <div className="text-emerald-500 font-black text-2xl mb-1 tracking-tighter">100%</div>
              <p className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider">Sur-mesure</p>
            </div>
            <div className="p-6 rounded-3xl bg-white border border-neutral-100 shadow-sm">
              <div className="text-emerald-500 font-black text-2xl mb-1 tracking-tighter">2 min</div>
              <p className="text-[11px] font-bold uppercase text-neutral-400 tracking-wider">de configuration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
