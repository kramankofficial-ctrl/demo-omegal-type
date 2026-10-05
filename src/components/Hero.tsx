import React from 'react';
import { ArrowLeft, Instagram, Mail, Music, Linkedin } from 'lucide-react';
import { InteractiveTactileMascot } from './InteractiveTactileMascot';

interface HeroProps {
  onOpenInvitationModal: () => void;
  onOpenQuiz: () => void;
  onExploreExperiences: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenInvitationModal,
  onOpenQuiz,
  onExploreExperiences
}) => {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden bg-[#FAF9FB] text-[#141416] select-none flex flex-col justify-between">
      
      {/* ============================================================== */}
      {/* 1. TOP BAR ROW: Back button + Center Wordmark + Right trigger  */}
      {/* ============================================================== */}
      <div className="relative z-30 w-full flex items-center justify-between px-5 sm:px-8 lg:px-12 pt-5 sm:pt-7">
        
        {/* Top-left dark circular arrow button */}
        <button
          onClick={onExploreExperiences}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#18181A] hover:bg-black text-white flex items-center justify-center transition-transform hover:scale-105 active:scale-95 shadow-xs cursor-pointer shrink-0"
          aria-label="Explore Datevra"
          title="Scroll to explore"
        >
          <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.2]" />
        </button>

        {/* Center Iconic Retro Script Wordmark */}
        <div className="text-center pointer-events-auto">
          <a
            href="#"
            className="font-['Pacifico',cursive] text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-normal tracking-wide text-[#141416] hover:opacity-90 transition-opacity inline-block"
          >
            Datevra
          </a>
        </div>

        {/* Top-right quick invite trigger */}
        <button
          onClick={onOpenInvitationModal}
          className="px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-[#EAE9EE] hover:bg-[#E0DFE5] text-[#555558] hover:text-[#141416] text-[11px] sm:text-xs font-medium tracking-tight transition-colors cursor-pointer shrink-0"
        >
          say hey
        </button>
      </div>

      {/* ============================================================== */}
      {/* 2. DESKTOP LAYOUT (lg: and up - Exact 1:1 Reference Match)     */}
      {/* ============================================================== */}
      <div className="hidden lg:block">
        
        {/* LEFT-SIDE CONTENT BLOCK */}
        <div className="absolute left-8 xl:left-16 2xl:left-24 top-28 xl:top-36 z-20 max-w-[280px] xl:max-w-[320px]">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EAE9EE] text-[#555558] text-xs font-medium tracking-tight">
              ready for real dates?
            </span>
          </div>

          <h1 className="text-3xl xl:text-[40px] 2xl:text-[44px] font-black text-[#141416] tracking-tight leading-[1.06] mb-8 text-balance">
            courtship<br />
            meets craft
          </h1>

          <nav className="flex flex-col space-y-3.5 text-sm xl:text-base font-semibold text-[#222225]">
            <a
              href="#experiences"
              onClick={(e) => {
                e.preventDefault();
                onExploreExperiences();
              }}
              className="hover:text-black hover:translate-x-0.5 transition-all w-fit cursor-pointer"
            >
              Curated Dates
            </a>
            <a
              href="#philosophy"
              className="hover:text-black hover:translate-x-0.5 transition-all w-fit cursor-pointer"
            >
              The Philosophy
            </a>
            <a
              href="#match-engine"
              className="hover:text-black hover:translate-x-0.5 transition-all w-fit cursor-pointer"
            >
              Match Engine
            </a>
            <button
              onClick={onOpenQuiz}
              className="text-left hover:text-black hover:translate-x-0.5 transition-all w-fit cursor-pointer"
            >
              Date Quiz
            </button>
          </nav>
        </div>

        {/* RIGHT-SIDE CONTENT BLOCK */}
        <div className="absolute right-8 xl:right-16 2xl:right-24 top-28 xl:top-36 z-20 max-w-[280px] xl:max-w-[340px] text-right flex flex-col items-end">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#EAE9EE] text-[#555558] text-xs font-medium tracking-tight">
              invitation desk
            </span>
          </div>

          <div
            onClick={onOpenInvitationModal}
            className="text-3xl xl:text-[40px] 2xl:text-[44px] font-black text-[#141416] tracking-tight leading-[1.06] mb-3 text-balance cursor-pointer hover:opacity-75 transition-opacity"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') onOpenInvitationModal();
            }}
          >
            let’s connect!<br />
            request your invite*
          </div>

          <p className="text-xs text-[#707075] font-normal leading-relaxed mb-6 max-w-[240px]">
            *good things start with one spark. let’s make yours.
          </p>

          <div className="flex items-center gap-4 text-[#141416]">
            <a
              href="mailto:concierge@datevra.com"
              className="w-5 h-5 flex items-center justify-center hover:opacity-60 transition-opacity"
              title="Concierge Email"
            >
              <Linkedin className="w-5 h-5 fill-current stroke-none" />
            </a>
            <a
              href="#instagram"
              onClick={(e) => {
                e.preventDefault();
                alert("Datevra Instagram: @datevra");
              }}
              className="w-5 h-5 flex items-center justify-center hover:opacity-60 transition-opacity"
              title="Datevra Instagram"
            >
              <Instagram className="w-5 h-5 stroke-[2.2]" />
            </a>
            <a
              href="#playlists"
              onClick={(e) => {
                e.preventDefault();
                alert("Datevra Playlists: Curated evening date sessions.");
              }}
              className="w-5 h-5 flex items-center justify-center hover:opacity-60 transition-opacity"
              title="Curated Audio Sessions"
            >
              <Music className="w-5 h-5 stroke-[2.2]" />
            </a>
          </div>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 3. MOBILE & TABLET LAYOUT (< lg: 360px, 390px, 768px)          */}
      {/* Intentionally composed, uncluttered, highly polished            */}
      {/* ============================================================== */}
      <div className="lg:hidden relative z-20 px-5 pt-3 pb-1 flex flex-col items-center text-center">
        
        {/* Pill */}
        <div className="mb-2">
          <span className="inline-block px-3 py-0.5 rounded-full bg-[#EAE9EE] text-[#555558] text-[11px] font-medium tracking-tight">
            ready for real dates?
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl font-black text-[#141416] tracking-tight leading-tight">
          courtship meets craft
        </h1>

        {/* Fast Action Links on mobile */}
        <div className="flex items-center gap-3 pt-2 text-xs font-semibold text-[#333336]">
          <a href="#experiences" onClick={(e) => { e.preventDefault(); onExploreExperiences(); }} className="hover:underline">
            Curated Dates
          </a>
          <span className="text-stone-300" aria-hidden="true">·</span>
          <button onClick={onOpenQuiz} className="hover:underline">
            Date Quiz
          </button>
          <span className="text-stone-300" aria-hidden="true">·</span>
          <button onClick={onOpenInvitationModal} className="font-bold text-stone-900 underline">
            Request Invite
          </button>
        </div>

      </div>

      {/* ============================================================== */}
      {/* 4. CENTRAL TACTILE CHARACTER (Dominating across all screens)   */}
      {/* ============================================================== */}
      <div className="relative z-10 flex-1 flex items-end justify-center w-full max-h-[62vh] sm:max-h-[68vh] lg:max-h-[76vh] pointer-events-none px-4">
        <div className="w-full max-w-[340px] sm:max-w-[460px] md:max-w-[560px] lg:max-w-[760px] xl:max-w-[840px] h-full flex items-end justify-center">
          <InteractiveTactileMascot />
        </div>
      </div>

      {/* ============================================================== */}
      {/* 5. MOBILE BOTTOM CTA BAR (< lg: Subtle bottom anchor)         */}
      {/* ============================================================== */}
      <div className="lg:hidden relative z-20 w-full px-5 pb-4 pt-1 flex items-center justify-between text-xs text-[#707075] bg-gradient-to-t from-[#FAF9FB] via-[#FAF9FB]/90 to-transparent">
        <span 
          onClick={onOpenInvitationModal}
          className="font-bold text-[#141416] active:opacity-75 cursor-pointer underline underline-offset-2"
        >
          request your invite*
        </span>
        <div className="flex items-center gap-3 text-[#141416]">
          <a href="mailto:concierge@datevra.com" className="p-1 hover:opacity-75" title="Email">
            <Mail className="w-4 h-4" />
          </a>
          <a href="#instagram" onClick={(e) => { e.preventDefault(); alert("Datevra Instagram: @datevra"); }} className="p-1 hover:opacity-75" title="Instagram">
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>

    </section>
  );
};
