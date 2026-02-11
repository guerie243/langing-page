
import React from 'react';

export const GPSFeature: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1A1A1A] leading-tight">
            Ne demandez plus jamais : <br className="hidden md:block" />
            <span className="text-emerald-500">"C'est où l'adresse ?"</span>
          </h2>
          <p className="text-lg text-neutral-500 leading-relaxed">
            Contrairement aux autres, nous capturons la position exacte de vos clients au moment de l'achat. Vous recevez un lien d'itinéraire direct. Livrez en un temps record.
          </p>
          <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 inline-flex items-center gap-3">
             <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
             </div>
             <span className="font-bold text-emerald-900 text-sm">Itinéraire intelligent inclus</span>
          </div>
        </div>
        
        <div className="flex-1 w-full max-w-md">
           <div className="bg-neutral-100 rounded-3xl overflow-hidden shadow-2xl border border-neutral-100 aspect-square relative">
              <img src="https://picsum.photos/800/800?grayscale" alt="Map mockup" className="w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/80 via-transparent to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-4 h-4 bg-emerald-500 rounded-full shadow-lg animate-ping"></div>
                 </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-white rounded-2xl shadow-xl flex justify-between items-center">
                 <div>
                    <div className="text-[10px] uppercase font-bold text-neutral-400">Arrivée estimée</div>
                    <div className="text-sm font-bold">8 minutes</div>
                 </div>
                 <button className="bg-[#1A1A1A] text-white text-[10px] font-bold px-4 py-2 rounded-lg">Y ALLER</button>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
