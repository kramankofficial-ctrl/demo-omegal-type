/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { StudioHero } from './components/StudioHero';
import { Philosophy } from './components/Philosophy';
import { DateExperiences } from './components/DateExperiences';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { MatchEngine } from './components/MatchEngine';
import { CityGuides } from './components/CityGuides';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { DateDetailModal } from './components/DateDetailModal';
import { MembershipModal } from './components/MembershipModal';
import { DateExperience, CityOption, QuizResult } from './types';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<DateExperience | null>(null);
  const [selectedCityForInvite, setSelectedCityForInvite] = useState<string>('nyc');
  const [selectedArchetypeForInvite, setSelectedArchetypeForInvite] = useState<QuizResult | null>(null);
  const [selectedExperienceForInvite, setSelectedExperienceForInvite] = useState<DateExperience | null>(null);
  const [savedExperienceIds, setSavedExperienceIds] = useState<string[]>(['vinyl-salon']);

  const handleToggleSaveExperience = (id: string) => {
    setSavedExperienceIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleOpenInvitationModal = () => {
    setSelectedArchetypeForInvite(null);
    setSelectedExperienceForInvite(null);
    setIsInvitationOpen(true);
  };

  const handleOpenQuiz = () => {
    const quizElem = document.getElementById('quiz');
    if (quizElem) {
      quizElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExploreExperiences = () => {
    const expElem = document.getElementById('experiences');
    if (expElem) {
      expElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCityForInvitation = (city: CityOption) => {
    setSelectedCityForInvite(city.id);
    setSelectedArchetypeForInvite(null);
    setSelectedExperienceForInvite(null);
    setIsInvitationOpen(true);
  };

  const handleApplyWithQuizResult = (result: QuizResult) => {
    setSelectedArchetypeForInvite(result);
    setSelectedExperienceForInvite(null);
    setIsInvitationOpen(true);
  };

  const handleApplyForExperience = (exp: DateExperience) => {
    setSelectedExperienceForInvite(exp);
    setSelectedArchetypeForInvite(null);
    setIsInvitationOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F0F8] text-[#1E1B1D] font-sans selection:bg-[#1E1B1D] selection:text-[#FFFFFF] overflow-x-hidden">
      {/* Scroll-aware Header Navigation */}
      <Navbar 
        onOpenInvitationModal={handleOpenInvitationModal}
        onOpenQuiz={handleOpenQuiz}
      />

      {/* Main Experience Flow */}
      <main className="flex-1 w-full">
        {/* Exact Hero Section from Specification with Video Scrubbing & Gaze Mapping */}
        <StudioHero 
          onOpenInvitationModal={handleOpenInvitationModal}
          onOpenQuiz={handleOpenQuiz}
          onExploreExperiences={handleExploreExperiences}
        />

        {/* The Philosophy: Curation over Swiping */}
        <Philosophy />

        {/* Curated Date Experiences with Mood Filters */}
        <DateExperiences 
          onSelectExperience={(exp) => setSelectedExperience(exp)}
          savedIds={savedExperienceIds}
          onToggleSave={handleToggleSaveExperience}
        />

        {/* Interactive Date Archetype Quiz */}
        <InteractiveQuiz 
          onApplyWithResult={handleApplyWithQuizResult}
          onViewExperience={(exp) => setSelectedExperience(exp)}
        />

        {/* Match Engine Architecture & Sample Dossier */}
        <MatchEngine />

        {/* City Chapters */}
        <CityGuides 
          onSelectCityForInvitation={handleSelectCityForInvitation}
        />

        {/* Member Dispatches & Testimonials */}
        <Testimonials />

        {/* Inquiries & FAQ Accordion */}
        <FAQ />
      </main>

      {/* Cohesive Light Editorial Footer */}
      <Footer 
        onOpenInvitationModal={handleOpenInvitationModal}
        onOpenQuiz={handleOpenQuiz}
      />

      {/* Date Experience Detail Modal */}
      <DateDetailModal 
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
        onApplyForDate={handleApplyForExperience}
        isSaved={selectedExperience ? savedExperienceIds.includes(selectedExperience.id) : false}
        onToggleSave={handleToggleSaveExperience}
      />

      {/* Membership Invitation Request Modal */}
      <MembershipModal 
        isOpen={isInvitationOpen}
        onClose={() => setIsInvitationOpen(false)}
        preselectedCity={selectedCityForInvite}
        preselectedArchetype={selectedArchetypeForInvite}
        preselectedExperience={selectedExperienceForInvite}
      />
    </div>
  );
}
