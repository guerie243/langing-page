
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#1A1A1A] rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.662 1.435 5.176L2.1 21.9l4.893-1.282A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
            </svg>
          </div>
          <span className="font-bold text-lg tracking-tight">andy</span>
        </div>
        
        <button className="bg-[#1A1A1A] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-all active:scale-95">
          Commencer gratuitement
        </button>
      </div>
    </header>
  );
};
