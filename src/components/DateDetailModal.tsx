import React, { useState } from 'react';
import { X, Clock, Wine, Shirt, MessageSquare, Bookmark, ArrowRight } from 'lucide-react';
import { DateExperience } from '../types';

interface DateDetailModalProps {
  experience: DateExperience | null;
  onClose: () => void;
  onApplyForDate: (experience: DateExperience) => void;
  isSaved: boolean;
  onToggleSave: (experienceId: string) => void;
}

export const DateDetailModal: React.FC<DateDetailModalProps> = ({
  experience,
  onClose,
  onApplyForDate,
  isSaved,
  onToggleSave
}) => {
  const [copiedPrompt, setCopiedPrompt] = useState<number | null>(null);

  if (!experience) return null;

  const handleCopyPrompt = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(index);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E1B1D]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#F4F0F8] rounded-3xl shadow-2xl border border-[#E5E0E9] overflow-hidden my-6 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#4A4549] hover:text-[#1E1B1D] shadow-xs border border-[#E5E0E9] transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Image */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden bg-[#F2F1F8]">
          <img
            src={experience.image}
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B1D]/80 via-[#1E1B1D]/25 to-transparent" />
          
          <div className="absolute bottom-5 left-6 right-6 text-[#FFFFFF]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#F2F1F8] mb-1">
              <span>{experience.neighborhood}, {experience.city}</span>
              <span aria-hidden="true">·</span>
              <span>{experience.duration}</span>
              <span aria-hidden="true">·</span>
              <span>{experience.mood}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              {experience.title}
            </h2>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 sm:p-8 space-y-7 max-h-[75vh] overflow-y-auto">
          
          {/* Vibe Overview & Venue Info */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-[#E5E0E9]">
              <div>
                <span className="text-xs text-[#4A4549] font-mono font-medium">Partner Host</span>
                <h4 className="text-xl font-bold text-[#1E1B1D] flex items-center gap-2">
                  {experience.venueName}
                  <span className="text-xs font-normal text-[#4A4549]">
                    ({experience.venueType})
                  </span>
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onToggleSave(experience.id)}
                  className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer ${
                    isSaved 
                      ? 'bg-[#FFFFFF] border-[#1E1B1D] text-[#1E1B1D]' 
                      : 'bg-[#FFFFFF] border-[#E5E0E9] text-[#4A4549] hover:bg-[#F2F1F8]'
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isSaved ? 'fill-[#1E1B1D] text-[#1E1B1D]' : ''}`} />
                  <span>{isSaved ? 'Saved to Wishlist' : 'Save Experience'}</span>
                </button>
              </div>
            </div>

            <p className="mt-4 text-[#4A4549] text-sm leading-relaxed">
              {experience.vibeDescription}
            </p>

            {/* Exclusive Perk */}
            <div className="mt-4 p-3.5 rounded-2xl bg-[#F4EFFC] border border-[#E5E0E9] flex items-start gap-3">
              <Wine className="w-4 h-4 text-[#1E1B1D] shrink-0 mt-0.5" />
              <div className="text-xs text-[#1E1B1D]">
                <strong className="font-bold">Datevra Member Perk: </strong>
                {experience.perkDescription}
              </div>
            </div>
          </div>

          {/* Minute-by-Minute Itinerary */}
          <div>
            <h4 className="text-lg font-bold text-[#1E1B1D] mb-4 flex items-center gap-2 tracking-tight">
              <Clock className="w-4 h-4 text-[#4A4549]" />
              <span>Curated Itinerary Flow</span>
            </h4>
            
            <div className="space-y-4 relative before:absolute before:inset-y-0 before:left-3.5 before:w-0.5 before:bg-[#E5E0E9]">
              {experience.itinerary.map((step, idx) => (
                <div key={idx} className="relative flex items-start gap-4 pl-1">
                  <div className="w-5 h-5 rounded-full bg-[#1E1B1D] text-[#FFFFFF] text-[10px] font-mono font-bold flex items-center justify-center shrink-0 z-10 mt-0.5">
                    {idx + 1}
                  </div>
                  <div className="bg-[#FFFFFF] p-3.5 rounded-2xl border border-[#E5E0E9] shadow-2xs flex-1">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-bold text-[#1E1B1D]">{step.activity}</span>
                      <span className="font-mono text-[#4A4549]">{step.time}</span>
                    </div>
                    <p className="text-xs text-[#4A4549] leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Thoughtful Conversation Cards */}
          <div>
            <h4 className="text-lg font-bold text-[#1E1B1D] mb-1.5 flex items-center gap-2 tracking-tight">
              <MessageSquare className="w-4 h-4 text-[#1E1B1D]" />
              <span>Table Conversation Cards</span>
            </h4>
            <p className="text-xs text-[#4A4549] mb-4">
              Hand-picked curiosity prompts calibrated for this specific setting. Tap to copy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {experience.conversationStarters.map((prompt, i) => (
                <div
                  key={i}
                  onClick={() => handleCopyPrompt(prompt, i)}
                  className="p-3.5 bg-[#FFFFFF] hover:bg-[#F2F1F8] rounded-2xl border border-[#E5E0E9] text-xs text-[#4A4549] flex flex-col justify-between cursor-pointer transition-all hover:border-[#1E1B1D]"
                >
                  <p className="italic leading-relaxed mb-3">"{prompt}"</p>
                  <div className="flex items-center justify-between text-[11px] text-[#4A4549] pt-2 border-t border-[#E5E0E9]">
                    <span>Card #{i + 1}</span>
                    <span className="font-semibold text-[#1E1B1D]">
                      {copiedPrompt === i ? 'Copied ✓' : 'Tap to copy'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dress & Setting Guide */}
          <div className="p-4 bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] flex items-start gap-3">
            <Shirt className="w-4 h-4 text-[#4A4549] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-bold text-[#1E1B1D]">Suggested Attire</div>
              <div className="text-xs text-[#4A4549] mt-0.5 leading-relaxed">{experience.dressSuggestion}</div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-[#E5E0E9] flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-xs text-[#4A4549] text-center sm:text-left">
              Reserved exclusively for Datevra members & verified pairings.
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#4A4549] hover:text-[#1E1B1D] hover:bg-[#F2F1F8] rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onApplyForDate(experience);
                }}
                className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Experience</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
