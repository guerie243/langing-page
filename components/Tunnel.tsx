
import React from 'react';

export const Tunnel: React.FC = () => {
  return (
    <section className="px-6 py-20 bg-neutral-50 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded-full uppercase tracking-tighter">
            Conversion Instantanée
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-deep-black leading-tight">
            Commandez avant de changer d'avis.
          </h2>
          <p className="text-lg text-soft-grey leading-relaxed">
            Nous avons supprimé toutes les barrières psychologiques. Plus de formulaires interminables ou de discussions qui durent des heures.
          </p>
          
          <div className="space-y-4 pt-4">
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 rounded-full bg-deep-black text-white flex items-center justify-center shrink-0 font-bold">1</div>
              <p className="font-semibold text-deep-black">Choix des produits en un tap.</p>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-8 h-8 rounded-full bg-deep-black text-white flex items-center justify-center shrink-0 font-bold">2</div>
              <p className="font-semibold text-deep-black">Infos de livraison & Validation.</p>
            </div>
          </div>
          
          <p className="text-soft-grey italic pt-4">
            "Plus c'est simple pour vos clients, plus vous vendez. C'est mathématique."
          </p>
        </div>

        <div className="flex-1 relative">
           <div className="bg-white rounded-3xl shadow-2xl p-8 border border-neutral-100 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="flex justify-between items-center mb-8">
                <h4 className="font-bold text-lg">Finaliser ma commande</h4>
                <span className="text-emerald-whatsapp font-bold">Total: 15,200 CFA</span>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-soft-grey">Nom Complet</label>
                  <div className="h-12 bg-neutral-50 rounded-xl border border-neutral-200 px-4 flex items-center text-sm">Jean Dupont</div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase text-soft-grey">Téléphone WhatsApp</label>
                  <div className="h-12 bg-neutral-50 rounded-xl border border-neutral-200 px-4 flex items-center text-sm">+221 77 XXX XX XX</div>
                </div>
                <div className="pt-4">
                   <button className="w-full h-14 bg-emerald-whatsapp text-white rounded-xl font-extrabold shadow-lg shadow-emerald-200 hover:scale-[1.02] active:scale-95 transition-all">
                      Confirmer via WhatsApp
                   </button>
                </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
