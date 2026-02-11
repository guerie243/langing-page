
import React from 'react';

export const Benefits: React.FC = () => {
  const cards = [
    {
      title: "Commandes en 2 étapes",
      desc: "Zéro friction pour vos clients. Ils choisissent, valident et c'est fini. Taux de conversion boosté par 2.",
      icon: "⚡",
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Messages Pro & Automatiques",
      desc: "Recevez des bons de commande structurés et complets directement sur votre WhatsApp. Plus besoin de tout noter.",
      icon: "📱",
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "Itinéraire GPS Précis",
      desc: "On capture la position exacte de vos clients. Un clic sur le lien reçu et Maps vous guide jusqu'à leur porte.",
      icon: "📍",
      color: "bg-orange-50 text-orange-600"
    }
  ];

  return (
    <section className="px-6 py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-neutral-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center text-3xl mb-8 shadow-sm`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-black mb-4">{card.title}</h3>
            <p className="text-neutral-500 text-sm leading-relaxed">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
