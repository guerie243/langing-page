import React from 'react';
import { PhoneFrame } from './PhoneFrame';
import flowVideo from '../assets/9fluxwhatsapp.mp4';

export const MessageExamples: React.FC = () => {
  return (
    <section className="px-6 py-6 bg-neutral-50 border-t border-neutral-100 text-neutral-900">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-black">Le Flux WhatsApp</h2>
          <p className="text-neutral-500 mt-2">D'une simple discussion à une gestion de commande professionelle et moderne.</p>
        </div>

        {/* Message examples/flow: reduced to 200-240px for a more compact look */}
        <PhoneFrame videoSrc={flowVideo} showIsland className="max-w-[200px] md:max-w-[240px]" />
      </div>
    </section>
  );
};
