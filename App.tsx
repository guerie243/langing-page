
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ClearOrderFeature } from './components/ClearOrderFeature';
import { HowItWorks } from './components/HowItWorks';
import { DeliveryFeature } from './components/DeliveryFeature';
import { StayInTouchFeature } from './components/StayInTouchFeature';
import { ShareWithRidersFeature } from './components/ShareWithRidersFeature';
import { Showcase } from './components/Showcase';
import { Comparison } from './components/Comparison';
import { MessageExamples } from './components/MessageExamples';
import { TargetAudience } from './components/TargetAudience';
import { FinalCTA } from './components/FinalCTA';
import { StickyFooter } from './components/StickyFooter';
import { PersonalizedBanner } from './components/PersonalizedBanner';
import { FloatingContact } from './components/FloatingContact';

const App: React.FC = () => {
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    if (name) {
      setUserName(name);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#1A1A1A] font-['Inter',_sans-serif] selection:bg-emerald-100 selection:text-emerald-900">
      {userName && <PersonalizedBanner name={userName} />}
      
      <Header />

      <main className="overflow-hidden">
        {/* 1. HERO SECTION */}
        <Hero />
        
        {/* 2. COMMENT ÇA MARCHE */}
        <HowItWorks />

        {/* 3. COMMANDE CLAIRE (Déplacé ici) */}
        <ClearOrderFeature />

        {/* 4. LIVRAISON & ITINÉRAIRE */}
        <DeliveryFeature />

        {/* 5. CONTACT PERMANENT */}
        <StayInTouchFeature />

        {/* 6. PARTAGE LIVREURS */}
        <ShareWithRidersFeature />

        {/* 7. FLUX WHATSAPP */}
        <MessageExamples />

        {/* 8. AVANT / APRÈS */}
        <Comparison />

        {/* 9. SECTION VITRINE */}
        <Showcase />
        
        {/* 10. POUR QUI ? */}
        <TargetAudience />
        
        {/* 11. CTA FINAL */}
        <FinalCTA />
      </main>

      {/* ÉLÉMENTS PERMANENTS */}
      <StickyFooter />
      <FloatingContact />
      
      <footer className="py-12 px-6 text-center text-neutral-400 text-xs border-t border-neutral-50 mb-20 md:mb-0">
        <p>© 2025 OrderFlow. La solution numéro 1 pour vendre sur WhatsApp.</p>
        <p className="mt-2 font-medium text-neutral-500 italic">"Modernisez votre business, simplifiez la vie de vos clients."</p>
      </footer>
    </div>
  );
};

export default App;
