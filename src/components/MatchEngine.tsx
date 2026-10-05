import React, { useState } from 'react';
import { Wine, Check } from 'lucide-react';

export const MatchEngine: React.FC = () => {
  const [activeStepTab, setActiveStepTab] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'The Private Lifestyle Index',
      subtitle: 'Intentional profiling without vanity metrics',
      desc: 'No endless albums of selfies or superficial bios. Your profile captures three thoughtful prompts, your favorite neighborhood spots, dietary sensibilities, and weekly evening cadence.',
      badge: 'Completed upon admission'
    },
    {
      num: '02',
      title: 'The Thursday Introduction',
      subtitle: 'Two calibrated pairings every week',
      desc: 'Every Thursday at noon, our curation engine introduces you to at most two people whose values, conversation rhythm, and weekend schedules align. You have 24 hours to accept or pass.',
      badge: 'Delivered every Thursday'
    },
    {
      num: '03',
      title: 'The Reserved Table',
      subtitle: 'Zero coordination stress or back-and-forth',
      desc: 'When mutual interest is confirmed, Datevra immediately secures an intimate corner table or booth at a vetted partner establishment. Both guests receive the booking key and address.',
      badge: 'Guaranteed reservation'
    }
  ];

  return (
    <section id="match-engine" className="py-24 sm:py-32 bg-[#F4F0F8]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] text-[11px] sm:text-xs font-medium tracking-tight">
              match architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B1D] tracking-tight leading-[1.08] text-balance">
            From Thursday introduction to Saturday evening table.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#4A4549] font-normal leading-relaxed">
            We removed everything people dread about modern dating: endless profile carousels, 
            shallow text banter that fizzles out, and awkward restaurant planning.
          </p>
        </div>

        {/* 3 Step Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {steps.map((step, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStepTab(idx)}
              className={`p-7 sm:p-8 rounded-2xl border transition-all duration-200 cursor-pointer ${
                activeStepTab === idx
                  ? 'bg-[#FFFFFF] border-[#1E1B1D] shadow-xs'
                  : 'bg-[#F2F1F8] border-[#E5E0E9] hover:border-[#1E1B1D]/40'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-[#4A4549] mb-4 font-mono">
                <span>{step.num}</span>
                <span className="text-[11px] text-[#4A4549] font-sans font-medium">{step.badge}</span>
              </div>
              <h3 className="text-2xl text-[#1E1B1D] font-bold mb-1 tracking-tight">
                {step.title}
              </h3>
              <p className="text-xs text-[#1E1B1D] font-semibold mb-3">
                {step.subtitle}
              </p>
              <p className="text-sm text-[#4A4549] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Simulation: The Thursday Member Dossier Card */}
        <div className="bg-[#F4EFFC] rounded-3xl border border-[#E5E0E9] p-6 sm:p-10 lg:p-12">
          <div className="max-w-xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-[#4A4549] font-semibold block mb-1">
              Sample Member Dossier
            </span>
            <h4 className="text-2xl sm:text-3xl text-[#1E1B1D] font-black tracking-tight">
              What a Thursday pairing looks like.
            </h4>
            <p className="text-xs sm:text-sm text-[#4A4549] mt-1.5 leading-relaxed">
              Thoughtful, privacy-conscious information designed to spark memorable conversation.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] shadow-xs p-6 sm:p-8 max-w-2xl mx-auto">
            {/* Header of Dossier */}
            <div className="flex items-start justify-between border-b border-[#E5E0E9] pb-5">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-[#1E1B1D]">Julian B.</span>
                  <span className="text-xs text-[#4A4549] font-mono">· Age 31</span>
                </div>
                <div className="text-xs text-[#4A4549] mt-0.5">
                  Architectural Lighting Designer · Mayfair, London
                </div>
              </div>
              <div className="px-2.5 py-1 bg-[#F2F1F8] border border-[#E5E0E9] rounded-md text-[11px] font-mono text-[#4A4549] font-medium">
                Pairing #284
              </div>
            </div>

            {/* Curated Prompts */}
            <div className="py-5 space-y-4 border-b border-[#E5E0E9] text-xs">
              <div>
                <span className="font-bold text-[#1E1B1D] block mb-0.5">
                  Favorite spot when the city is quiet:
                </span>
                <p className="text-[#4A4549] italic">
                  "The greenhouse courtyard at the Chelsea Physic Garden on a misty Tuesday morning."
                </p>
              </div>

              <div>
                <span className="font-bold text-[#1E1B1D] block mb-0.5">
                  An unconventional obsession:
                </span>
                <p className="text-[#4A4549] italic">
                  "Restoring 1970s Italian desk lamps and hunting for rare Bossa Nova vinyl."
                </p>
              </div>

              <div>
                <span className="font-bold text-[#1E1B1D] block mb-0.5">
                  Looking for in a partner:
                </span>
                <p className="text-[#4A4549] italic">
                  "Someone who enjoys spontaneous late dinners, unhurried conversations, and doesn’t live through their screen."
                </p>
              </div>
            </div>

            {/* Held Table Card */}
            <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-[#1E1B1D] uppercase tracking-wide font-semibold">
                  Proposed Table Reserved
                </span>
                <div className="text-xs font-bold text-[#1E1B1D] flex items-center gap-1.5">
                  <Wine className="w-3.5 h-3.5 text-[#4A4549]" />
                  <span>The Conservatory Room · Saturday 7:30 PM</span>
                </div>
                <div className="text-[11px] text-[#4A4549]">
                  Corner booth held under Datevra Pass
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="px-4 py-2 text-xs font-semibold text-[#4A4549] hover:text-[#1E1B1D] bg-[#F2F1F8] border border-[#E5E0E9] hover:bg-[#E5E0E9] rounded-xl transition-colors cursor-pointer"
                >
                  Pass Politely
                </button>
                <button
                  type="button"
                  className="px-4 py-2 text-xs font-bold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] rounded-xl transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Accept Date</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
