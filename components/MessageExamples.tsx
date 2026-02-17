
import React from 'react';
import { useLandingActivity } from '../hooks/useLandingActivity';

export const MessageExamples: React.FC = () => {
  const { trackAndNavigate } = useLandingActivity();

  return (
    <section className="px-6 py-16 bg-neutral-50 border-t border-neutral-100">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-black text-[#1A1A1A]">Le Flux WhatsApp</h2>
          <p className="text-neutral-500 mt-2">D'une simple discussion à une gestion de commande professionelle et moderne.</p>
        </div>

        <div className="relative bg-[#075E54] rounded-[2.5rem] pt-8 pb-12 px-4 md:px-10 shadow-2xl overflow-hidden border-8 border-neutral-800">
          {/* Mockup Status Bar */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 opacity-30">
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
          </div>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="space-y-6">
              <h3 className="text-[11px] font-black uppercase text-emerald-100 tracking-[0.2em] text-center">
                1. LA COMMANDE CLIENT
              </h3>

              <div className="relative bg-white rounded-2xl p-6 shadow-lg max-w-[95%] mx-auto">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">📢</span>
                  <span className="font-bold text-neutral-800">Nouvelle Commande !</span>
                </div>

                <div className="space-y-4 text-xs text-neutral-700">
                  <div className="flex gap-2">
                    <span className="font-bold">Client:</span>
                    <span>Jean Dupont</span>
                  </div>

                  <div className="space-y-1">
                    <div className="font-bold">Articles:</div>
                    <div className="pl-2">- Burger XL x2 (10,000 CFA)</div>
                    <div className="pl-2">- Frites x1 (2,500 CFA)</div>
                  </div>

                  <div className="font-bold">Total: 12,500 CFA</div>

                  <div className="flex items-start gap-2 pt-2 text-neutral-800">
                    <span className="text-red-500">📍</span>
                    <div className="flex flex-col">
                      <span className="font-bold">Position:</span>
                      <span className="text-blue-600 underline text-xs">bit.ly/gps-location</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-neutral-800">
                    <span className="text-red-500">📞</span>
                    <span className="font-bold">Contact:</span>
                    <span>77 123 45 67</span>
                  </div>
                </div>

                <div className="text-[10px] text-neutral-400 text-right mt-4">10:05</div>

                {/* Bubble tail left */}
                <div className="absolute top-0 -left-2 w-3 h-3 bg-white [clip-path:polygon(100%_0,0_0,100%_100%)]"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-6 opacity-60">
              <h3 className="text-[11px] font-black uppercase text-emerald-100 tracking-[0.2em] text-center">
                2. VOTRE CONFIRMATION
              </h3>
              {/* On peut ajouter une bulle ici aussi mais le screenshot s'arrête au titre */}
              <div className="h-20 bg-emerald-800/20 rounded-2xl border-2 border-dashed border-emerald-500/30 flex items-center justify-center">
                <span className="text-emerald-200 text-xs font-bold">Votre réponse automatique ici...</span>
              </div>
            </div>
          </div>

          {/* Floating badge inside phone as seen in screenshot */}
          <div className="absolute bottom-6 left-6 cursor-pointer hover:scale-105 transition-transform" onClick={() => trackAndNavigate('message_example_badge')}>
            <div className="bg-emerald-400 text-white text-[9px] font-black px-3 py-1.5 rounded-lg uppercase shadow-xl">
              COMMENCEZ GRATUITEMENT
            </div>
          </div>

          {/* WhatsApp floating button icon as seen in screenshot */}
          <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};
