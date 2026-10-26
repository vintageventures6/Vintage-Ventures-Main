import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OperatingIdea } from './components/OperatingIdea';
import { PartnerModel } from './components/PartnerModel';
import { CrossBorderDelivery } from './components/CrossBorderDelivery';
import { OperatingCapability } from './components/OperatingCapability';
import { BeyondRecruitment } from './components/BeyondRecruitment';
import { MeasurementSystem } from './components/MeasurementSystem';
import { SuccessStories } from './components/SuccessStories';
import { LinkedInFeed } from './components/LinkedInFeed';
import { EngagementMethodology } from './components/EngagementMethodology';
import { InteractiveEstimator } from './components/InteractiveEstimator';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { DeckViewerModal } from './components/DeckViewerModal';
import { FloatingSocialProof } from './components/FloatingSocialProof';

export default function App() {
  const [isDeckOpen, setIsDeckOpen] = useState(false);
  const [deckInitialSlide, setDeckInitialSlide] = useState(1);
  const [prefilledScope, setPrefilledScope] = useState('');

  const handleOpenDeck = (slideNum: number = 1) => {
    setDeckInitialSlide(slideNum);
    setIsDeckOpen(true);
  };

  const handleScrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectSolution = (solutionTitle: string) => {
    setPrefilledScope(solutionTitle);
    handleScrollToContact();
  };

  const handlePlanSelected = (summary: string) => {
    setPrefilledScope(summary);
    handleScrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#0d262f] text-slate-100 flex flex-col font-sans selection:bg-[#d4af37]/30 selection:text-white">
      {/* Navigation Top Bar Contract */}
      <Navbar
        onOpenDeck={() => handleOpenDeck(1)}
        onOpenConsultation={handleScrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Page 1: Hero & Strategic Positioning */}
        <Hero
          onOpenDeck={() => handleOpenDeck(1)}
          onOpenConsultation={handleScrollToContact}
        />

        {/* Page 2: The Operating Idea & Value Creation Framework */}
        <OperatingIdea />

        {/* Page 3: The Partner Model: 4 Solutions */}
        <PartnerModel onSelectSolution={handleSelectSolution} />

        {/* Pages 4 & 5: Recruitment Delivery & 8-Step Pipeline */}
        <CrossBorderDelivery />

        {/* Page 7: Operating Capability (BPO & HR Administration) */}
        <OperatingCapability />

        {/* Page 8: Beyond Recruitment (5 Stages & Advisory/Improvement/Planning) */}
        <BeyondRecruitment />

        {/* Page 6: Measurement System (Activity to Business Outcomes) */}
        <MeasurementSystem />

        {/* Client Success Stories Carousel (Concrete outcomes & impact) */}
        <SuccessStories onSelectSolutionForInquiry={handlePlanSelected} />

        {/* Social Proof & Live LinkedIn Leadership Feed */}
        <LinkedInFeed />

        {/* Page 9: Engagement Methodology & Extension Quote */}
        <EngagementMethodology />

        {/* Interactive Delivery Capacity & SLA Modeler */}
        <InteractiveEstimator onPlanSelected={handlePlanSelected} />

        {/* Page 10: Executive Contact & Consultation Booking */}
        <ContactSection prefilledScope={prefilledScope} />
      </main>

      {/* Clean quiet Footer */}
      <Footer onOpenDeck={() => handleOpenDeck(1)} />

      {/* High-Resolution Presentation Deck Viewer & Download Modal */}
      <DeckViewerModal
        isOpen={isDeckOpen}
        onClose={() => setIsDeckOpen(false)}
        initialSlide={deckInitialSlide}
      />

      {/* Floating LinkedIn Social Proof & Follow Dock */}
      <FloatingSocialProof />
    </div>
  );
}
