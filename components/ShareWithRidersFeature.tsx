
import React from 'react';

export const ShareWithRidersFeature: React.FC = () => {
  return (
    <section className="px-6 py-6 bg-white">
      <div className="max-w-5xl mx-auto bg-[#F3F7FF] pt-20 px-8 md:px-16 overflow-hidden rounded-[2.5rem] border border-blue-50 relative group">
        <div className="max-w-xl space-y-6 mb-16 relative z-10 text-left">
          <h2 className="text-3xl md:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight">
            Partagez avec <br className="hidden md:block"/>vos livreurs
          </h2>
          <p className="text-neutral-500 leading-relaxed text-lg font-medium max-w-md">
            Transmettez instantanément les détails de la commande et l'itinéraire GPS à votre équipe de livraison en un clic. Finis les erreurs de transmission.
          </p>
        </div>

        {/* Mockup Smartphone Container */}
        <div className="relative w-full max-w-[320px] md:max-w-[380px] h-[380px] md:h-[450px] overflow-hidden rounded-t-[3.5rem] mx-auto shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:translate-y-2">
          <div className="relative w-full aspect-[9/19.5] bg-neutral-900 rounded-[3rem] border-[8px] border-neutral-900 overflow-hidden ring-1 ring-white/10">
            <div className="relative w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop" 
                alt="Delivery Management Mockup" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30"></div>
              
              <div className="absolute top-24 left-4 right-4 space-y-3 z-40">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-neutral-100 transform translate-x-2">
                   <div className="flex justify-between items-center mb-4">
                      <span className="text-[10px] font-black text-blue-600 uppercase">Commande #482</span>
                      <div className="flex items-center gap-1">
                         <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                         <span className="text-[10px] font-bold text-neutral-400">Prêt</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-neutral-100 rounded-full flex items-center justify-center shrink-0">
                         <svg className="w-5 h-5 text-neutral-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" /></svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-bold text-neutral-900">Livreur : Moussa</div>
                        <div className="text-[10px] text-neutral-500 font-medium">Lien GPS généré ✓</div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F3F7FF] to-transparent z-40 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};
