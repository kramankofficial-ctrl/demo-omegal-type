import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#F4F0F8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-2xl mb-14 sm:mb-16">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] text-[11px] sm:text-xs font-medium tracking-tight">
              member dispatches
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B1D] tracking-tight leading-[1.08] text-balance">
            Real people. Genuine chemistry.
          </h2>
          <p className="mt-3 text-base text-[#4A4549] font-normal leading-relaxed">
            Attributable stories from members who closed their dating apps for good 
            after their first Datevra table.
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-7 sm:p-8 rounded-2xl bg-[#FFFFFF] border border-[#E5E0E9] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-[#E5E0E9] mb-4" />
                <p className="text-sm text-[#1E1B1D] leading-relaxed font-normal mb-6">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5E0E9]/60">
                <div className="text-base font-bold text-[#1E1B1D]">
                  {item.names}
                </div>
                <div className="flex items-center gap-2 text-xs text-[#4A4549] mt-0.5 font-medium">
                  <span className="text-[#1E1B1D] font-semibold">{item.durationTogether}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.city}</span>
                </div>
                <div className="text-[11px] text-[#4A4549] mt-1 font-mono">
                  First Met: {item.venue}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
