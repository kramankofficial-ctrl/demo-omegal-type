import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenInvitationModal: () => void;
  onOpenQuiz: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInvitationModal, onOpenQuiz }) => {
  return (
    <footer className="bg-[#F4F0F8] text-[#4A4549] py-16 sm:py-20 border-t border-[#E5E0E9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 pb-12 sm:pb-16 border-b border-[#E5E0E9]">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-['Pacifico',cursive] text-3xl sm:text-4xl text-[#1E1B1D] tracking-wide block">
              Datevra
            </span>
            <p className="text-sm text-[#4A4549] font-normal leading-relaxed max-w-sm">
              The era of meaningful dates. Curated weekly introductions and guaranteed tables 
              at the city's most distinctive listening lounges, bistros, and cultural spaces.
            </p>
            <div className="pt-2 text-xs text-[#4A4549]/70 font-mono">
              New York · London · Paris · San Francisco · Austin · Tokyo
            </div>
          </div>

          {/* Navigation Mirrors */}
          <div className="md:col-span-2 space-y-3.5 text-xs">
            <div className="font-bold text-[#1E1B1D] uppercase tracking-wider">
              Experience
            </div>
            <ul className="space-y-2.5 text-[#4A4549] font-medium">
              <li>
                <a href="#philosophy" className="hover:text-[#1E1B1D] transition-colors">The Philosophy</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-[#1E1B1D] transition-colors">Curated Dates</a>
              </li>
              <li>
                <a href="#match-engine" className="hover:text-[#1E1B1D] transition-colors">Match Engine</a>
              </li>
              <li>
                <button onClick={onOpenQuiz} className="hover:text-[#1E1B1D] transition-colors cursor-pointer text-left">
                  Date Archetype Quiz
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3.5 text-xs">
            <div className="font-bold text-[#1E1B1D] uppercase tracking-wider">
              Membership
            </div>
            <ul className="space-y-2.5 text-[#4A4549] font-medium">
              <li>
                <button onClick={onOpenInvitationModal} className="hover:text-[#1E1B1D] transition-colors cursor-pointer text-left">
                  Request Invitation
                </button>
              </li>
              <li>
                <a href="#cities" className="hover:text-[#1E1B1D] transition-colors">City Chapters</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1E1B1D] transition-colors">Community Accord</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1E1B1D] transition-colors">Partner Standards</a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3.5 text-xs">
            <div className="font-bold text-[#1E1B1D] uppercase tracking-wider">
              Curatorial Desk
            </div>
            <p className="text-[#4A4549] leading-relaxed font-normal">
              Direct inquiries regarding partner venues or private chapter launches:
            </p>
            <a 
              href="mailto:concierge@datevra.com" 
              className="inline-flex items-center gap-1.5 text-[#1E1B1D] hover:opacity-75 transition-opacity font-semibold pt-1"
            >
              <span>concierge@datevra.com</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

        {/* Quiet Bottom Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#4A4549] gap-4">
          <div>
            © {new Date().getFullYear()} Datevra Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6 font-medium text-[#4A4549]">
            <span className="hover:text-[#1E1B1D] transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-[#1E1B1D] transition-colors cursor-pointer">Community Accord</span>
            <span className="hover:text-[#1E1B1D] transition-colors cursor-pointer">Host Venue Agreement</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
