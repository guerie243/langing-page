import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import clearOrderImg from '../assets/5messagewhatsapp.jpg';

export const ClearOrderFeature: React.FC = () => {
  return (
    <section className="px-6 pb-4 pt-0 bg-white">
      <div className="max-w-4xl mx-auto bg-[#DEE9FF] pt-4 pb-0 px-8 md:px-16 overflow-hidden rounded-[2.5rem] relative group border border-blue-200/50">
        <div className="max-w-xl space-y-2 mb-4 relative z-10 text-left">
          <h2 className="text-2xl md:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight">
            Recevoir une <br className="hidden md:block" />commande claire
          </h2>
          <p className="text-neutral-500 leading-relaxed text-base font-medium max-w-md">
            Les clients envoient des messages de commande clairs sur WhatsApp, précisant leurs choix et leurs localisations (adresse).
          </p>
        </div>

        <div className="relative w-full max-w-[220px] md:max-w-[250px] mx-auto translate-y-2">
          <PhoneFrame
            imageSrc={clearOrderImg}
            className="!max-w-full"
            isFull={false}
            showIsland={true}
            cutHeight="max-h-[380px] md:max-h-[480px]"
            glowColor="bg-blue-500/5"
          />
        </div>
      </div>
    </section>
  );
};
