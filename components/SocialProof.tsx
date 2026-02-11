
import React from 'react';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: "Samba K.",
      role: "Gérant de Resto",
      text: "Depuis que j'utilise OrderFlow, je ne demande plus jamais l'adresse. Tout est dans le message WhatsApp !",
      stat: "+30% de temps gagné"
    },
    {
      name: "Marie L.",
      role: "Vendeuse de Mode",
      text: "Mes clients adorent la vitrine. C'est pro et ils commandent en 30 secondes sans me poser de questions.",
      stat: "Zéro erreur d'adresse"
    },
    {
      name: "Ahmed D.",
      role: "Commerce local",
      text: "La configuration a pris 2 minutes. Mes ventes ont explosé car les clients n'attendent plus que je réponde au téléphone.",
      stat: "Ventes boostées x2"
    }
  ];

  return (
    <section className="px-6 py-20 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black mb-4">Ils ont déjà sauté le pas.</h2>
          <div className="flex justify-center gap-1 text-emerald-500 mb-2">
            {[1,2,3,4,5].map(i => <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)}
          </div>
          <p className="text-neutral-500">+1 000 commerçants utilisent déjà OrderFlow.</p>
        </div>
        
        {/* Scroll horizontal avec snap behavior */}
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 no-scrollbar">
          {testimonials.map((t, i) => (
            <div 
              key={i} 
              className="min-w-[85%] md:min-w-[450px] bg-white p-8 rounded-[2rem] shadow-sm border border-neutral-100 flex flex-col justify-between snap-center"
            >
              <div>
                <p className="text-lg italic text-neutral-600 mb-8 leading-relaxed">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-neutral-100 rounded-full flex items-center justify-center font-bold text-neutral-400">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-black text-sm text-neutral-900">{t.name}</div>
                    <div className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider">{t.role}</div>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-neutral-50">
                <span className="text-emerald-500 font-black text-xs uppercase tracking-[0.15em]">{t.stat}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Petit indicateur visuel de scroll */}
        <div className="flex justify-center gap-2 mt-4 md:hidden">
          {testimonials.map((_, i) => (
            <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-emerald-500' : 'bg-neutral-200'}`}></div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
