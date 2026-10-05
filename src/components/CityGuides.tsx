import React, { useState } from 'react';
import { MapPin, Wine, ArrowRight, ShieldCheck } from 'lucide-react';
import { CITY_OPTIONS } from '../data/mockData';
import { CityOption } from '../types';

interface CityGuidesProps {
  onSelectCityForInvitation: (city: CityOption) => void;
}

export const CityGuides: React.FC<CityGuidesProps> = ({ onSelectCityForInvitation }) => {
  const [selectedCityId, setSelectedCityId] = useState<string>('nyc');

  const selectedCity = CITY_OPTIONS.find(c => c.id === selectedCityId) || CITY_OPTIONS[0];

  return (
    <section id="cities" className="py-24 sm:py-32 bg-[#F4EFFC] border-t border-[#E5E0E9]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="mb-3">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] text-[11px] sm:text-xs font-medium tracking-tight">
                city chapters
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B1D] tracking-tight leading-[1.08] text-balance">
              Where Datevra tables are waiting.
            </h2>
            <p className="mt-3 text-base text-[#4A4549] font-normal leading-relaxed">
              We cultivate a deliberate network of partner hosts in key cultural capitals. 
              Each city chapter is capped to ensure high member intentionality.
            </p>
          </div>

          <div className="text-xs text-[#4A4549] font-mono font-medium">
            <span>6 Chapters</span>
            <span className="mx-2" aria-hidden="true">·</span>
            <span className="text-[#1E1B1D] font-semibold">100+ Partner Spaces</span>
          </div>
        </div>

        {/* City Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#E5E0E9]">
          {CITY_OPTIONS.map((city) => {
            const isSelected = city.id === selectedCityId;
            return (
              <button
                key={city.id}
                onClick={() => setSelectedCityId(city.id)}
                className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#1E1B1D] text-[#FFFFFF] shadow-xs'
                    : 'bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] hover:text-[#1E1B1D] hover:bg-[#E5E0E9]'
                }`}
              >
                <span>{city.name}</span>
                {!city.available && (
                  <span className="text-[10px] opacity-65 font-normal">(Waitlist)</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected City Detail Card */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E0E9] p-7 sm:p-10 lg:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#4A4549] mb-1">
                <span>{selectedCity.country}</span>
                <span aria-hidden="true">·</span>
                <span className="text-[#1E1B1D] font-sans font-semibold">
                  {selectedCity.available ? 'Active Chapter' : 'Launching Soon'}
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl text-[#1E1B1D] font-black tracking-tight">
                {selectedCity.name}
              </h3>
            </div>

            <div className="space-y-3.5 text-sm text-[#4A4549]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#4A4549] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1E1B1D] font-semibold">Key Enclaves: </strong>
                  <span>{selectedCity.neighborhoods}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Wine className="w-4 h-4 text-[#4A4549] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1E1B1D] font-semibold">Curated Portfolio: </strong>
                  <span>{selectedCity.curatedVenuesCount} listening lounges, bistros, and quiet corners</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-[#4A4549] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1E1B1D] font-semibold">Admission Status: </strong>
                  <span>Rolling weekly admissions based on intentionality and cohort balance.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onSelectCityForInvitation(selectedCity)}
                className="px-6 py-3 text-xs font-bold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] rounded-xl transition-all shadow-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <span>
                  {selectedCity.available 
                    ? `Request Invitation in ${selectedCity.name}` 
                    : `Join ${selectedCity.name} Priority Waitlist`}
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#F4EFFC] rounded-2xl p-6 sm:p-7 border border-[#E5E0E9] space-y-4">
            <h4 className="text-lg text-[#1E1B1D] font-bold tracking-tight">
              Venue Standards in {selectedCity.name}
            </h4>
            
            <ul className="text-xs text-[#4A4549] space-y-2.5 leading-relaxed">
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E1B1D] shrink-0" />
                <span>Conversational decibel monitoring (no shouted dinners)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E1B1D] shrink-0" />
                <span>Reserved corner booth priority for Datevra pairings</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E1B1D] shrink-0" />
                <span>Independent hosts with authentic culinary craftsmanship</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#1E1B1D] shrink-0" />
                <span>Direct billing coordination with venue management</span>
              </li>
            </ul>

            <div className="pt-2 border-t border-[#E5E0E9] text-[11px] text-[#4A4549] italic">
              "We visit and dine at every venue unannounced before certifying it for our members."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
