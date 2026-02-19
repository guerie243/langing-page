import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import shareVideo from '../assets/8partage.mp4';

export const ShareWithRidersFeature: React.FC = () => {
  return (
    <section className="px-6 pb-4 pt-0 bg-white">
      <div className="max-w-4xl mx-auto bg-[#DEE9FF] pt-4 px-8 md:px-16 overflow-hidden rounded-[2.5rem] border border-blue-200/50 relative group">
        <div className="max-w-xl space-y-2 mb-4 relative z-10 text-left">
          <h2 className="text-2xl md:text-5xl font-black text-[#1A1A1A] leading-tight tracking-tight">
            Transmettez les commandes <br className="hidden md:block" />à vos livreurs en un clic
          </h2>
          <p className="text-neutral-500 leading-relaxed text-base font-medium max-w-md">
            Transmettez instantanément les détails de la commande, l'adresse de livraison et l'itinéraire GPS à votre équipe de livraison en un clic.
          </p>
        </div>

        <div className="relative w-full max-w-[220px] md:max-w-[250px] mx-auto translate-y-2">
          <PhoneFrame
            videoSrc={shareVideo}
            className="!max-w-full"
            isFull={false}
            cutHeight="max-h-[450px] md:max-h-[550px]"
            glowColor="bg-blue-500/5"
          />
        </div>
      </div>
    </section>
  );
};
