import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 sm:py-32 bg-[#F4EFFC] border-t border-[#E5E0E9]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] text-[11px] sm:text-xs font-medium tracking-tight">
              inquiries & standards
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B1D] tracking-tight leading-[1.08] text-balance">
            Frequently answered questions.
          </h2>
          <p className="mt-3 text-[#4A4549] text-sm sm:text-base font-normal">
            Everything you need to know about our invitation vetting, table reservations, and code of conduct.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#F2F1F8]/50 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-[#1E1B1D]">
                    {item.question}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-[#F2F1F8] border border-[#E5E0E9] flex items-center justify-center shrink-0 text-[#1E1B1D]">
                    {isOpen ? <Minus className="w-3.5 h-3.5 stroke-[2.5]" /> : <Plus className="w-3.5 h-3.5 stroke-[2.5]" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#4A4549] font-normal leading-relaxed border-t border-[#E5E0E9]/60 animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quiet support note */}
        <div className="mt-12 text-center text-xs text-[#4A4549]">
          Have an unlisted inquiry or partner venue suggestion?{' '}
          <a href="mailto:concierge@datevra.com" className="text-[#1E1B1D] underline underline-offset-2 font-semibold">
            Reach the Datevra Curatorial Desk
          </a>
        </div>

      </div>
    </section>
  );
};
