import React, { useState } from 'react';
import { Sparkles, ArrowRight, RotateCcw, Compass } from 'lucide-react';
import { QUIZ_QUESTIONS, QUIZ_RESULTS, CURATED_EXPERIENCES } from '../data/mockData';
import { QuizResult, DateExperience } from '../types';

interface InteractiveQuizProps {
  onApplyWithResult: (result: QuizResult) => void;
  onViewExperience: (experience: DateExperience) => void;
}

export const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
  onApplyWithResult,
  onViewExperience
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleSelectOption = (archetypeId: string) => {
    const updated = [...selectedAnswers, archetypeId];
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const counts: Record<string, number> = {};
      updated.forEach((id) => {
        counts[id] = (counts[id] || 0) + 1;
      });
      let topArchetype = updated[0];
      let maxCount = 0;
      Object.entries(counts).forEach(([id, count]) => {
        if (count > maxCount) {
          maxCount = count;
          topArchetype = id;
        }
      });
      setResult(QUIZ_RESULTS[topArchetype] || QUIZ_RESULTS['vinyl-salon']);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers([]);
    setResult(null);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentStep];

  return (
    <section id="quiz" className="py-24 sm:py-32 bg-[#F4EFFC] border-y border-[#E5E0E9]">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
          <div className="mb-3">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F2F1F8] text-[#4A4549] border border-[#E5E0E9] text-[11px] sm:text-xs font-medium tracking-tight">
              date archetype quiz
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1E1B1D] tracking-tight leading-[1.08] text-balance">
            Discover your first date archetype.
          </h2>
          <p className="mt-3 text-[#4A4549] text-sm sm:text-base font-normal">
            Three intuitive questions to reveal the exact atmosphere where your chemistry unfolds.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-[#FFFFFF] rounded-3xl border border-[#E5E0E9] shadow-xs p-6 sm:p-10 lg:p-12">
          
          {!result ? (
            <div>
              {/* Progress Indicator */}
              <div className="flex items-center justify-between text-xs text-[#4A4549] mb-4 font-mono font-medium">
                <span>Question 0{currentStep + 1} of 0{QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}%</span>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-[#F2F1F8] rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-[#1E1B1D] transition-all duration-300 ease-out"
                  style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl text-[#1E1B1D] font-bold mb-6 tracking-tight">
                {currentQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.archetypeId)}
                    className="w-full text-left p-4 sm:p-5 rounded-2xl border border-[#E5E0E9] hover:border-[#1E1B1D] hover:bg-[#F2F1F8] transition-all flex items-start gap-4 group cursor-pointer active:scale-[0.99]"
                  >
                    <div className="w-7 h-7 rounded-full border border-[#E5E0E9] group-hover:border-[#1E1B1D] group-hover:bg-[#1E1B1D] group-hover:text-[#FFFFFF] flex items-center justify-center text-xs font-mono font-semibold shrink-0 transition-colors mt-0.5 text-[#1E1B1D]">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm sm:text-base font-bold text-[#1E1B1D]">
                        {opt.label}
                      </div>
                      <div className="text-xs text-[#4A4549] mt-1 leading-relaxed">
                        {opt.sublabel}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Result Screen */
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E0E9]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#4A4549] font-semibold">
                  Your Date Archetype
                </span>
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-[#4A4549] hover:text-[#1E1B1D] flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Retake</span>
                </button>
              </div>

              <div>
                <h3 className="text-3xl sm:text-4xl text-[#1E1B1D] font-black tracking-tight">
                  {result.archetype}
                </h3>
                <p className="text-sm font-semibold text-[#1E1B1D] mt-1">
                  {result.tagline}
                </p>
                <p className="text-sm text-[#4A4549] mt-3 leading-relaxed">
                  {result.description}
                </p>
              </div>

              {/* Details Box */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-[#F4EFFC] rounded-2xl border border-[#E5E0E9]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E1B1D] mb-1">
                    <Compass className="w-3.5 h-3.5 text-[#4A4549]" />
                    <span>Ideal Setting</span>
                  </div>
                  <p className="text-xs text-[#4A4549] leading-relaxed">
                    {result.idealVenue}
                  </p>
                </div>

                <div className="p-4 bg-[#F4EFFC] rounded-2xl border border-[#E5E0E9]">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E1B1D] mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#4A4549]" />
                    <span>Tailored Spark Prompt</span>
                  </div>
                  <p className="text-xs text-[#4A4549] italic leading-relaxed">
                    "{result.sampleTopic}"
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={() => {
                    const matchedExp = CURATED_EXPERIENCES.find(
                      e => e.id === result.recommendedExperienceId
                    );
                    if (matchedExp) onViewExperience(matchedExp);
                  }}
                  className="w-full sm:w-auto text-xs font-semibold text-[#4A4549] hover:text-[#1E1B1D] underline underline-offset-4 cursor-pointer text-center sm:text-left"
                >
                  View recommended itinerary preview →
                </button>

                <button
                  onClick={() => onApplyWithResult(result)}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-bold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Apply with this Archetype</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
