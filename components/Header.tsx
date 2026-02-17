
import React from 'react';
import logo from '../assets/logo.png';
import { useLandingActivity } from '../hooks/useLandingActivity';

export const Header: React.FC = () => {
  const { trackAndNavigate } = useLandingActivity();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img src={logo} alt="Andy Logo" className="h-8 w-auto object-contain shadow-lg rounded-lg" />
          <span className="font-bold text-lg tracking-tight">andy</span>
        </div>

        <button
          onClick={() => trackAndNavigate('header_cta')}
          className="bg-[#1A1A1A] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all active:scale-95"
        >
          Commencer gratuitement
        </button>
      </div>
    </header>
  );
};
