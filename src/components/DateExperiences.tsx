import React, { useState } from 'react';
import { ArrowRight, Bookmark, MapPin, Clock, Wine } from 'lucide-react';
import { CURATED_EXPERIENCES } from '../data/mockData';
import { DateExperience, DateMood } from '../types';

interface DateExperiencesProps {
  onSelectExperience: (experience: DateExperience) => void;
  savedIds: string[];
  onToggleSave: (id: string) => void;
}

const MOOD_FILTERS: DateMood[] = [
  'All',
  'Intimate & Atmospheric',
  'Cultural & Artful',
  'Vibrant & Conversational',
  'Gastronomic'
];

export const DateExperiences: React.FC<DateExperiencesProps> = ({
  onSelectExperience,
  savedIds,
  onToggleSave
}) => {
  const [activeMood, setActiveMood] = useState<DateMood>('All');

  const filteredExperiences = activeMood === 'All'
    ? CURATED_EXPERIENCES
    : CURATED_EXPERIENCES.filter(exp => exp.mood === activeMood);

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-[#F4F0F8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] text-[11px] sm:text-xs font-medium tracking-tight">
                curated spaces
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B1D] tracking-tight leading-[1.08] text-balance">
              Designed around unforgettable settings.
            </h2>
            <p className="mt-3 text-base text-[#4A4549] font-normal leading-relaxed">
              Every Datevra introduction receives a tailored date itinerary and reserved seating 
              at our partner spaces. Here is where our members connect.
            </p>
          </div>

          {/* Minimal Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F2F1F8] rounded-xl border border-[#E5E0E9] max-w-full">
            {MOOD_FILTERS.map((mood) => {
              const isActive = activeMood === mood;
              return (
                <button
                  key={mood}
                  onClick={() => setActiveMood(mood)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-[#FFFFFF] text-[#1E1B1D] shadow-xs'
                      : 'text-[#4A4549] hover:text-[#1E1B1D]'
                  }`}
                >
                  {mood}
                </button>
              );
            })}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredExperiences.map((exp) => {
            const isSaved = savedIds.includes(exp.id);

            return (
              <div
                key={exp.id}
                className="group bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] shadow-2xs hover:shadow-xs transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Visual Asset */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F2F1F8]">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1E1B1D]/75 via-transparent to-transparent opacity-50 group-hover:opacity-40 transition-opacity" />

                    {/* Bookmark action */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleSave(exp.id);
                      }}
                      className="absolute top-4 right-4 p-2.5 rounded-full bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#1E1B1D] shadow-xs backdrop-blur-xs transition-colors cursor-pointer"
                      aria-label="Save experience"
                    >
                      <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#1E1B1D] text-[#1E1B1D]' : ''}`} />
                    </button>

                    {/* Neighborhood marker */}
                    <div className="absolute bottom-3 left-4 text-[#FFFFFF] text-xs font-medium flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#F2F1F8]" />
                      <span>{exp.neighborhood}, {exp.city}</span>
                    </div>
                  </div>

                  {/* Card Content Area */}
                  <div className="p-6 sm:p-7">
                    {/* Unboxed Metadata */}
                    <div className="flex items-center gap-2 text-xs text-[#4A4549] mb-2 font-medium">
                      <span className="text-[#1E1B1D] font-semibold">{exp.mood}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#4A4549]" />
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-2xl text-[#1E1B1D] font-bold tracking-tight mb-2">
                      {exp.title}
                    </h3>

                    <p className="text-sm text-[#4A4549] leading-relaxed mb-4">
                      {exp.tagline}
                    </p>

                    {/* Partner Venue & Perk */}
                    <div className="p-3.5 bg-[#F4EFFC] rounded-xl border border-[#E5E0E9] text-xs text-[#1E1B1D] space-y-1">
                      <div className="font-semibold text-[#1E1B1D] flex items-center justify-between">
                        <span>Partner: {exp.venueName}</span>
                        <span className="text-[11px] text-[#4A4549] font-normal">{exp.venueType}</span>
                      </div>
                      <div className="text-[11px] text-[#4A4549] flex items-center gap-1 pt-0.5">
                        <Wine className="w-3 h-3 text-[#1E1B1D] shrink-0" />
                        <span className="truncate">{exp.perkDescription}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 pb-6 pt-1 sm:px-7 sm:pb-7">
                  <button
                    onClick={() => onSelectExperience(exp)}
                    className="w-full py-3 px-4 text-xs font-bold text-[#1E1B1D] bg-[#F2F1F8] hover:bg-[#E5E0E9] active:bg-[#DCD7E2] rounded-xl transition-colors flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <span>View Itinerary & Conversation Cards</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#4A4549] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Wishlist summary notice */}
        {savedIds.length > 0 && (
          <div className="mt-8 p-4 bg-[#FFFFFF] border border-[#E5E0E9] rounded-2xl flex items-center justify-between text-xs text-[#1E1B1D] shadow-2xs">
            <div className="flex items-center gap-2.5">
              <Bookmark className="w-4 h-4 fill-[#1E1B1D] text-[#1E1B1D]" />
              <span>You have saved <strong>{savedIds.length}</strong> date experience{savedIds.length > 1 ? 's' : ''} to your profile wishlist.</span>
            </div>
            <span className="text-[#4A4549] font-medium">Your pairings will prioritize these atmospheres</span>
          </div>
        )}

      </div>
    </section>
  );
};
