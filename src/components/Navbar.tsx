import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenInvitationModal: () => void;
  onOpenQuiz: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInvitationModal, onOpenQuiz }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Reveal the sticky navbar only once user starts scrolling down past the hero
      if (window.scrollY > 280) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!scrolled) {
    return null; // Keep hero viewport pristine and uncluttered
  }

  return (
    <header className="sticky top-0 z-50 bg-[#F4F0F8]/95 backdrop-blur-md border-b border-[#E5E0E9] transition-all duration-300 animate-fade-in shadow-2xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Wordmark */}
          <div className="flex items-center">
            <a 
              href="#" 
              className="font-['Pacifico',cursive] text-2xl font-normal tracking-wide text-[#1E1B1D] hover:opacity-85 transition-opacity"
            >
              Datevra
            </a>
          </div>

          {/* Clean text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold text-[#4A4549]">
            <a href="#experiences" className="hover:text-[#1E1B1D] transition-colors">
              Curated Dates
            </a>
            <a href="#philosophy" className="hover:text-[#1E1B1D] transition-colors">
              Philosophy
            </a>
            <a href="#match-engine" className="hover:text-[#1E1B1D] transition-colors">
              Match Engine
            </a>
            <a href="#cities" className="hover:text-[#1E1B1D] transition-colors">
              Cities
            </a>
            <a href="#faq" className="hover:text-[#1E1B1D] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Primary Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQuiz}
              className="px-3.5 py-1.5 text-xs font-medium text-[#1E1B1D] bg-[#F2F1F8] border border-[#E5E0E9] hover:bg-[#E5E0E9]/60 rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1E1B1D]" />
              <span>Date Quiz</span>
            </button>
            <button
              onClick={onOpenInvitationModal}
              className="px-4 py-1.5 text-xs font-semibold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] active:bg-black rounded-lg transition-all shadow-2xs flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <span>Request Invitation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#4A4549] hover:text-[#1E1B1D] focus:outline-hidden"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-[#E5E0E9] bg-[#F4F0F8] px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-semibold text-[#1E1B1D]">
            <a
              href="#experiences"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4A4549] transition-colors"
            >
              Curated Dates
            </a>
            <a
              href="#philosophy"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4A4549] transition-colors"
            >
              Philosophy
            </a>
            <a
              href="#match-engine"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4A4549] transition-colors"
            >
              Match Engine
            </a>
            <a
              href="#cities"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4A4549] transition-colors"
            >
              Cities
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#4A4549] transition-colors"
            >
              FAQ
            </a>
          </nav>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuiz();
              }}
              className="w-full py-2.5 px-4 text-xs font-medium text-[#1E1B1D] bg-[#F2F1F8] border border-[#E5E0E9] hover:bg-[#E5E0E9]/60 rounded-lg flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#1E1B1D]" />
              <span>Discover Your Date Archetype</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInvitationModal();
              }}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] rounded-lg flex items-center justify-center gap-1.5"
            >
              <span>Request Private Invitation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
