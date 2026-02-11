
import React from 'react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Le client choisit ses produits",
      desc: "Il parcourt votre catalogue moderne et ajoute au panier sans avoir à discuter.",
      icon: "🛍️",
      img: "https://picsum.photos/400/600?random=20"
    },
    {
      title: "Il remplit ses infos & livraison",
      desc: "Nom, numéro et position GPS précise capturée en un clic pour vous.",
      icon: "📍",
      img: "https://picsum.photos/400/600?random=21"
    },
    {
      title: "WhatsApp s'ouvre tout seul",
      desc: "Le message complet est déjà prêt. Le client n'a plus qu'à cliquer sur 'Envoyer'.",
      icon: "✉️",
      img: "https://picsum.photos/400/600?random=22"
    }
  ];

  return (
    <section className="px-6 py-24 bg-white border-t border-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight">Comment ça marche ?</h2>
          <p className="text-lg text-neutral-500">C'est plus simple pour vos clients, c'est plus rapide pour vous.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className="relative aspect-[3/4] rounded-[2.5rem] bg-neutral-50 mb-8 overflow-hidden border border-neutral-100 shadow-inner group-hover:shadow-xl transition-all duration-500">
                <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="w-12 h-12 bg-[#1A1A1A] text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-xl mb-4">
                    {i + 1}
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-neutral-500 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
