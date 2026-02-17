
import React from 'react';

export const DeliveryFeature: React.FC = () => {
  return (
    <section className="px-6 py-4 bg-white">
      <div className="max-w-5xl mx-auto bg-[#F3F7FF] pt-12 px-8 md:px-16 overflow-hidden rounded-[2.5rem] border border-blue-50 relative group">
        <div className="max-w-xl space-y-6 mb-10 relative z-10 text-left">
          <h2 className="text-2xl md:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight">
            Itinéraire de <br className="hidden md:block" />livraison et adresse précis
          </h2>
          <p className="text-neutral-500 leading-relaxed text-base font-medium max-w-md">
            Plus besoin de demander son chemin. Chaque commande inclut un lien GPS et une adresse précis. Lancez votre application de navigation favorite en un tap.
          </p>
        </div>

        {/* Mockup Smartphone Container */}
        <div className="relative w-full max-w-[320px] md:max-w-[380px] h-[300px] md:h-[450px] overflow-hidden rounded-t-[3.5rem] mx-auto shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:translate-y-2">
          <div className="relative w-full aspect-[9/19.5] bg-neutral-900 rounded-[3rem] border-[8px] border-neutral-900 overflow-hidden ring-1 ring-white/10">
            <div className="relative w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1000&auto=format&fit=crop"
                alt="Navigation GPS Mockup"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30"></div>

              <div className="absolute top-[180px] left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 border border-neutral-100 z-40 transform hover:scale-105 transition-transform">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">Destination</div>
                    <div className="text-sm font-bold text-neutral-900 leading-tight">123 Orchard Road</div>
                  </div>
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 right-6 z-40">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl border border-neutral-100 transform rotate-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Google_Maps_icon_%282020%29.svg" alt="Google Maps" className="w-8 h-8" />
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
