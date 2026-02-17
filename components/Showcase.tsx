
import React from 'react';
import { useLandingActivity } from '../hooks/useLandingActivity';

export const Showcase: React.FC = () => {
  const { trackAndNavigate } = useLandingActivity();

  return (
    <section className="px-6 py-16 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div className="flex-1 order-2 md:order-1 relative">
          <div className="relative mx-auto max-w-[280px] md:max-w-sm">
            {/* Phone Mockup Premium */}
            <div className="relative z-10 bg-neutral-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] border-[8px] border-neutral-800">
              <div className="bg-white rounded-[2.2rem] overflow-hidden aspect-[9/19.5] relative">
                {/* App Content Mockup */}
                <div className="h-44 bg-gradient-to-br from-emerald-400 to-emerald-600 p-6 flex flex-col justify-end relative">
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-6 bg-black/20 rounded-full flex items-center justify-center">
                    <div className="w-8 h-1 bg-white/40 rounded-full"></div>
                  </div>
                  <div className="w-20 h-20 rounded-2xl bg-white shadow-xl mb-[-45px] border-4 border-white overflow-hidden z-20">
                    <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="Profile" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="mt-14 px-6 space-y-4">
                  <div>
                    <h4 className="font-black text-xl text-neutral-900">Ma Boutique Chic</h4>
                    <p className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Ouvert • Prêt-à-porter</p>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-100 flex gap-3">
                      <div className="w-16 h-16 bg-neutral-200 rounded-xl overflow-hidden shrink-0">
                        <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=200&auto=format&fit=crop" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 flex flex-col justify-between py-1">
                        <div className="h-3 w-3/4 bg-neutral-200 rounded-full"></div>
                        <div className="h-2 w-1/2 bg-neutral-100 rounded-full"></div>
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-black text-neutral-900">15,000 CFA</span>
                          <div className="w-6 h-6 bg-emerald-500 rounded-lg flex items-center justify-center">
                            <span className="text-white text-xs">+</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-neutral-50 rounded-2xl border border-neutral-100 flex gap-3 opacity-50">
                      <div className="w-16 h-16 bg-neutral-200 rounded-xl shrink-0"></div>
                      <div className="flex-1 space-y-2">
                        <div className="h-3 w-full bg-neutral-200 rounded-full"></div>
                        <div className="h-3 w-2/3 bg-neutral-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Bottom checkout float */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-neutral-900 rounded-2xl flex justify-between items-center shadow-2xl">
                  <div className="text-white">
                    <div className="text-[8px] text-neutral-400 font-bold uppercase">Total</div>
                    <div className="text-sm font-bold">15,000 CFA</div>
                  </div>
                  <div
                    className="px-4 py-2 bg-emerald-500 rounded-xl text-[10px] font-black text-white cursor-pointer hover:bg-emerald-600 transition-colors"
                    onClick={() => trackAndNavigate('showcase_mockup_cta')}
                  >
                    COMMANDER
                  </div>
                </div>
              </div>
            </div>
            {/* Background decorative blobs */}
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-emerald-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-blue-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
          </div>
        </div>

        <div className="flex-1 order-1 md:order-2 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-neutral-200 text-neutral-900 text-[11px] font-bold rounded-full uppercase tracking-widest shadow-sm">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Image de Marque
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-neutral-900 leading-[1.1] tracking-tight">
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
