
import React from 'react';
import { useLandingActivity } from '../hooks/useLandingActivity';

export const FinalCTA: React.FC = () => {
  const { trackAndNavigate } = useLandingActivity();

  return (
    <section className="px-6 py-16 bg-[#1A1A1A] text-white text-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto space-y-10 relative z-10">
        <div className="inline-block bg-emerald-500 text-white text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-xl shadow-emerald-500/20">
          REJOIGNEZ-NOUS MAINTENANT
        </div>

        <h2 className="text-3xl md:text-6xl font-black leading-tight tracking-tight">
          Prêt à moderniser <br />votre business ?
        </h2>

        <p className="text-base text-neutral-400 max-w-xl mx-auto">
          Créez votre vitrine en moins de 2 minutes et commencez à recevoir des commandes propres aujourd'hui.
        </p>

        <div className="pt-6 flex flex-col items-center gap-6 w-full">
          <button
            onClick={() => trackAndNavigate('final_cta')}
            className="w-full bg-white text-[#1A1A1A] font-black py-4 rounded-[1.5rem] shadow-[0_25px_60px_-15px_rgba(255,255,255,0.1)] hover:bg-neutral-100 hover:scale-[1.02] active:scale-95 transition-all text-base whitespace-nowrap uppercase tracking-tight">
            Créer ma vitrine gratuitement
          </button>

          <div className="flex flex-row items-center justify-center text-xs font-black text-emerald-500 uppercase tracking-[0.2em]">
            <span className="flex items-center gap-1.5 whitespace-nowrap">
              100% GRATUIT
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
