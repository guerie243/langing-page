
import React from 'react';

export const TargetAudience: React.FC = () => {
  const types = ["Boutiques", "Restaurants", "Vendeurs WhatsApp", "Livraisons Locales"];

  return (
    <section className="px-6 py-12 bg-neutral-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-black mb-12">Fait pour votre business.</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {types.map((t, i) => (
            <div key={i} className="bg-white px-6 py-3 rounded-2xl border border-neutral-200 font-bold shadow-sm">
              {t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
