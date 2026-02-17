
import React from 'react';

export const StayInTouchFeature: React.FC = () => {
  return (
    <section className="px-6 py-4 bg-white">
      <div className="max-w-5xl mx-auto bg-[#F3F7FF] pt-12 px-8 md:px-16 overflow-hidden rounded-[2.5rem] border border-blue-50 relative group">
        <div className="max-w-xl space-y-6 mb-10 relative z-10 text-left">
          <h2 className="text-2xl md:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight">
            Restez en contact <br className="hidden md:block" />permanent avec vos clients
          </h2>
          <p className="text-neutral-500 leading-relaxed text-base font-medium max-w-md">
            Contactez vos clients à tout moment, en un seul clic via WhatsApp.
          </p>
        </div>

        {/* Mockup Smartphone Container */}
        <div className="relative w-full max-w-[320px] md:max-w-[380px] h-[300px] md:h-[450px] overflow-hidden rounded-t-[3.5rem] mx-auto shadow-[0_-20px_50px_-10px_rgba(0,0,0,0.1)] transition-transform duration-700 group-hover:translate-y-2">
          <div className="relative w-full aspect-[9/19.5] bg-neutral-900 rounded-[3rem] border-[8px] border-neutral-900 overflow-hidden ring-1 ring-white/10">
            <div className="relative w-full h-full bg-white rounded-[2.2rem] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
                alt="Messaging Interface Mockup"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30"></div>

              <div className="absolute top-20 left-4 right-4 space-y-3 z-40">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/20 transform -rotate-2 hover:rotate-0 transition-all cursor-pointer">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-[#25D366] rounded-full flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    </div>
                    <div className="flex-1">
                      <div className="text-xs font-black text-neutral-900 uppercase">Promo Flash active !</div>
                      <div className="text-[10px] text-neutral-500 font-medium">-20% sur toute la boutique jusqu'à ce soir.</div>
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
