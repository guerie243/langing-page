import React, { useEffect, useRef } from 'react';
import videoStep1 from '../assets/2catalogue.mp4';
import videoStep2 from '../assets/3informationsclient.mp4';
import videoStep3 from '../assets/4WhatsApp.mp4';

const LazyVideo: React.FC<{ src: string; className?: string }> = ({ src, className = '' }) => {
  const ref = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    // Set src once on mount (lazy initial load via preload="metadata")
    if (!video.src) {
      video.src = src;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!ref.current) return;

        if (entry.isIntersecting) {
          // Restart from beginning each time user scrolls to it
          ref.current.currentTime = 0;
          ref.current.play().catch(() => { });
        } else {
          // Just pause - do NOT remove src
          ref.current.pause();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "300px"
      }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <div className="relative w-full h-auto">
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onCanPlay={() => setIsLoading(false)}
        className={className}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px] z-10">
          <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      title: "Le client choisit ses produits",
      desc: "Il parcourt votre catalogue moderne et ajoute au panier sans avoir à discuter.",
      icon: "🛍️",
      video: videoStep1
    },
    {
      title: "Il remplit ses infos & livraison",
      desc: "Nom, numéro et position GPS précise capturée en un clic pour vous.",
      icon: "📍",
      video: videoStep2
    },
    {
      title: "WhatsApp s'ouvre tout seul",
      desc: "Le message complet est déjà prêt. Le client n'a plus qu'à cliquer sur 'Envoyer'.",
      icon: "✉️",
      video: videoStep3
    }
  ];

  return (
    <section className="px-6 pb-12 pt-0 bg-white border-t border-neutral-50 text-neutral-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 space-y-4">
          <h2 className="text-2xl md:text-5xl font-black tracking-tight">Comment ça marche ?</h2>
          <p className="text-base text-neutral-500">C'est plus simple pour vos clients, c'est plus rapide pour vous.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="group bg-[#FFF0F3] rounded-[2.5rem] p-6 flex flex-col items-center border border-pink-100/50 shadow-sm transition-all hover:shadow-md">
              {/* Image/Video Container - Small and centered */}
              <div className="relative w-full max-w-[140px] md:max-w-[160px] rounded-[0.8rem] bg-neutral-950 mb-6 overflow-hidden shadow-lg group-hover:scale-[1.03] transition-transform duration-500 border border-neutral-800">
                <LazyVideo
                  src={step.video}
                  className="w-full h-auto block"
                />

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Step number */}
                <div className="absolute top-2.5 left-2.5">
                  <div className="w-7 h-7 bg-white/95 backdrop-blur-sm text-neutral-900 rounded-lg flex items-center justify-center font-black text-xs shadow-md">
                    {i + 1}
                  </div>
                </div>
              </div>

              <div className="text-center w-full">
                <h3 className="text-lg font-bold mb-2 tracking-tight">{step.title}</h3>
                <p className="text-neutral-500 leading-relaxed text-sm px-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
