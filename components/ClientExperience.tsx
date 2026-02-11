
import React from 'react';

export const ClientExperience: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 order-2 md:order-1 relative">
           <div className="bg-white text-[#1A1A1A] p-8 rounded-3xl shadow-2xl space-y-6 rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
              <div className="space-y-4">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-bold">1</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Détails</div>
                 </div>
                 <div className="h-10 bg-neutral-50 rounded-lg border border-neutral-100"></div>
              </div>
              <div className="space-y-4 opacity-40">
                 <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-neutral-100 text-neutral-600 flex items-center justify-center text-[10px] font-bold">2</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Paiement</div>
                 </div>
                 <div className="h-10 bg-neutral-50 rounded-lg border border-neutral-100"></div>
              </div>
              <button className="w-full h-12 bg-emerald-500 text-white rounded-xl font-bold text-sm">Suivant</button>
           </div>
        </div>

        <div className="flex-1 order-1 md:order-2 space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Zéro friction. <br />
            L'achat en 2 étapes.
          </h2>
          <p className="text-lg text-neutral-400 leading-relaxed">
            Vos clients achètent sans avoir à discuter pendant des heures. Ils sélectionnent, indiquent leur position et valident. Vous recevez tout sur WhatsApp prêt à être livré.
          </p>
          <div className="flex items-center gap-4 py-4 px-6 bg-white/5 rounded-2xl border border-white/10">
            <span className="text-emerald-500 text-xl font-bold">+40%</span>
            <span className="text-sm text-neutral-400">D'augmentation du taux de conversion constatée.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
