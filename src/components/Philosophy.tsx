import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-[#F4EFFC] border-y border-[#E5E0E9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] text-[11px] sm:text-xs font-medium tracking-tight">
              the philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B1D] tracking-tight leading-[1.08] text-balance">
            The antidote to the endless swipe.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-[#4A4549] font-normal leading-relaxed">
            Dating apps are engineered for addiction, not connection. They keep people trapped inside 
            an endless carousel of faces, trading dead-end messages with matches who never meet. 
            Datevra was designed from the ground up for people who value chemistry over algorithms.
          </p>
        </div>

        {/* 3 Editorial Pillars Comparing the Old Standard vs Datevra */}
        <div className="mt-14 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Pillar 01 */}
          <div className="p-7 sm:p-8 bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#4A4549] mb-4">
                01. Curation over Quantity
              </div>
              <h3 className="text-xl sm:text-2xl text-[#1E1B1D] font-bold mb-3 tracking-tight">
                No endless catalogs.
              </h3>
              <p className="text-sm text-[#4A4549] leading-relaxed">
                Swiping through hundreds of profiles desensitizes our capacity to connect. Instead of 
                infinite stacks, Datevra presents two thoughtfully curated pairings every Thursday, 
                evaluated for life cadence, conversation dynamic, and genuine intent.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E0E9]/60 flex items-center justify-between text-xs text-[#4A4549]">
              <span className="text-[#1E1B1D] font-semibold">Datevra Standard</span>
              <span>2 Curated pairings / week</span>
            </div>
          </div>

          {/* Pillar 02 */}
          <div className="p-7 sm:p-8 bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#4A4549] mb-4">
                02. Frictionless Logistics
              </div>
              <h3 className="text-xl sm:text-2xl text-[#1E1B1D] font-bold mb-3 tracking-tight">
                Reserved tables, not texting loops.
              </h3>
              <p className="text-sm text-[#4A4549] leading-relaxed">
                The most vulnerable momentum is lost in the awkward "Where should we go?" dance. 
                When two members say yes, Datevra secures an intimate table at a curated partner 
                establishment. You simply choose the time slot and show up.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E0E9]/60 flex items-center justify-between text-xs text-[#4A4549]">
              <span className="text-[#1E1B1D] font-semibold">Datevra Standard</span>
              <span>Zero planning fatigue</span>
            </div>
          </div>

          {/* Pillar 03 */}
          <div className="p-7 sm:p-8 bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
            <div>
              <div className="text-xs font-mono text-[#4A4549] mb-4">
                03. Community Accountability
              </div>
              <h3 className="text-xl sm:text-2xl text-[#1E1B1D] font-bold mb-3 tracking-tight">
                Zero ghosting tolerance.
              </h3>
              <p className="text-sm text-[#4A4549] leading-relaxed">
                Every member signs our Community Accord. Confirming a date is an intentional commitment. 
                Members who no-show or cancel without 24 hours notice have their membership permanently 
                revoked. Respect is our primary currency.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-[#E5E0E9]/60 flex items-center justify-between text-xs text-[#4A4549]">
              <span className="text-[#1E1B1D] font-semibold">Datevra Standard</span>
              <span>99.2% date fulfillment</span>
            </div>
          </div>

        </div>

        {/* Quiet Trust Bar */}
        <div className="mt-10 sm:mt-12 p-5 sm:p-6 rounded-2xl bg-[#F2F1F8] border border-[#E5E0E9] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#4A4549]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#1E1B1D] shrink-0" />
            <span>Strict privacy: Your full identity and direct contacts remain private until you meet in person.</span>
          </div>
          <div className="flex items-center gap-4 text-[#4A4549] font-medium shrink-0">
            <span>Verified Identity</span>
            <span aria-hidden="true">·</span>
            <span>Manual Vetting</span>
            <span aria-hidden="true">·</span>
            <span>No Public Feeds</span>
          </div>
        </div>

      </div>
    </section>
  );
};
