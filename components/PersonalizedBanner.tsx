
import React from 'react';

interface PersonalizedBannerProps {
  name: string;
}

export const PersonalizedBanner: React.FC<PersonalizedBannerProps> = ({ name }) => {
  return (
    <div className="bg-neutral-900 text-white px-6 py-3 text-center text-sm font-medium animate-slide-down relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-500/10 opacity-50"></div>
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 relative z-10">
        <span className="text-emerald-400">✨</span>
        <p>
          Bienvenue <span className="font-bold text-emerald-400">{name}</span>, prêt à moderniser votre boutique ?
        </p>
      </div>
      <style>{`
        @keyframes slide-down {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};
