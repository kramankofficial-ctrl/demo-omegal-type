import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, Copy, Check } from 'lucide-react';
import { CITY_OPTIONS } from '../data/mockData';
import { DateExperience, QuizResult } from '../types';

interface MembershipModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCity?: string;
  preselectedArchetype?: QuizResult | null;
  preselectedExperience?: DateExperience | null;
}

export const MembershipModal: React.FC<MembershipModalProps> = ({
  isOpen,
  onClose,
  preselectedCity,
  preselectedArchetype,
  preselectedExperience
}) => {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    city: preselectedCity || 'nyc',
    datingIntent: 'Long-term relationship with creative & intellectual depth',
    favoriteSpot: '',
    agreedConduct: false,
    agreedPunctual: false,
    agreedPrivacy: false
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generatedPassId, setGeneratedPassId] = useState<string>('');
  const [copiedPass, setCopiedPass] = useState(false);

  useEffect(() => {
    if (preselectedCity) {
      setFormData(prev => ({ ...prev, city: preselectedCity }));
    }
  }, [preselectedCity]);

  if (!isOpen) return null;

  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!formData.favoriteSpot.trim()) {
      errs.favoriteSpot = 'Please share at least one favorite place';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const validateStep3 = () => {
    const errs: Record<string, string> = {};
    if (!formData.agreedConduct || !formData.agreedPunctual || !formData.agreedPrivacy) {
      errs.accord = 'Please confirm all three Community Accord commitments';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && validateStep1()) setStep(2);
    else if (step === 2 && validateStep2()) setStep(3);
    else if (step === 3 && validateStep3()) {
      const passId = `DV-${Math.floor(1000 + Math.random() * 9000)}-${formData.city.toUpperCase()}`;
      setGeneratedPassId(passId);
      setStep(4);
    }
  };

  const handleCopyPass = () => {
    navigator.clipboard.writeText(generatedPassId);
    setCopiedPass(true);
    setTimeout(() => setCopiedPass(false), 2000);
  };

  const selectedCityObj = CITY_OPTIONS.find(c => c.id === formData.city) || CITY_OPTIONS[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#1E1B1D]/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="relative w-full max-w-xl bg-[#F4F0F8] rounded-3xl shadow-2xl border border-[#E5E0E9] overflow-hidden my-6 sm:my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-5 sm:p-6 pb-4 border-b border-[#E5E0E9] flex items-center justify-between">
          <div>
            <span className="font-['Pacifico',cursive] text-2xl text-[#1E1B1D] tracking-wide block">
              Datevra
            </span>
            <div className="text-xs text-[#4A4549] mt-0.5 font-medium">
              {step < 4 ? `Invitation Step 0${step} of 03` : 'Submission Confirmed'}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-[#4A4549] hover:text-[#1E1B1D] hover:bg-[#F2F1F8] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Line */}
        {step < 4 && (
          <div className="w-full h-1 bg-[#F2F1F8]">
            <div 
              className="h-full bg-[#1E1B1D] transition-all duration-300 ease-out"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        <div className="p-5 sm:p-8 space-y-6 max-h-[82vh] overflow-y-auto">
          
          {/* STEP 1: Personal Details */}
          {step === 1 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl text-[#1E1B1D] font-black tracking-tight">
                  Begin your invitation.
                </h3>
                <p className="text-xs text-[#4A4549] mt-1.5 leading-relaxed font-normal">
                  Datevra is private and by invitation. We review each application to cultivate 
                  a thoughtful, respectful community.
                </p>
              </div>

              {preselectedArchetype && (
                <div className="p-3 bg-[#F4EFFC] rounded-xl border border-[#E5E0E9] text-xs text-[#1E1B1D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1E1B1D] shrink-0" />
                  <span>
                    Matched Archetype: <strong>{preselectedArchetype.archetype}</strong>
                  </span>
                </div>
              )}

              {preselectedExperience && (
                <div className="p-3 bg-[#F4EFFC] rounded-xl border border-[#E5E0E9] text-xs text-[#1E1B1D] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1E1B1D] shrink-0" />
                  <span>
                    Preferred Experience: <strong>{preselectedExperience.title}</strong>
                  </span>
                </div>
              )}

              <div className="space-y-3.5 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#1E1B1D] mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Julian Belmont"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0E9] bg-[#FFFFFF] text-sm text-[#1E1B1D] focus:outline-hidden focus:ring-1 focus:ring-[#1E1B1D] focus:border-[#1E1B1D]"
                  />
                  {errors.fullName && (
                    <span className="text-xs text-rose-700 mt-1 block font-medium">{errors.fullName}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B1D] mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. julian@studiobelmont.com"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0E9] bg-[#FFFFFF] text-sm text-[#1E1B1D] focus:outline-hidden focus:ring-1 focus:ring-[#1E1B1D] focus:border-[#1E1B1D]"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-700 mt-1 block font-medium">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B1D] mb-1">
                    City Chapter
                  </label>
                  <select
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0E9] bg-[#FFFFFF] text-sm text-[#1E1B1D] focus:outline-hidden focus:ring-1 focus:ring-[#1E1B1D] focus:border-[#1E1B1D]"
                  >
                    {CITY_OPTIONS.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name} ({c.country}) {!c.available ? '— Waitlist' : ''}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Intentionality & Taste */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl text-[#1E1B1D] font-black tracking-tight">
                  Sensibility & Intent.
                </h3>
                <p className="text-xs text-[#4A4549] mt-1.5 leading-relaxed font-normal">
                  Tell us what kind of presence and connection you bring to the table.
                </p>
              </div>

              <div className="space-y-3.5 pt-2">
                <div>
                  <label className="block text-xs font-bold text-[#1E1B1D] mb-1">
                    What are you looking for right now?
                  </label>
                  <select
                    value={formData.datingIntent}
                    onChange={(e) => setFormData({ ...formData, datingIntent: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0E9] bg-[#FFFFFF] text-sm text-[#1E1B1D] focus:outline-hidden focus:ring-1 focus:ring-[#1E1B1D] focus:border-[#1E1B1D]"
                  >
                    <option value="Long-term relationship with creative & intellectual depth">
                      Long-term relationship with creative & intellectual depth
                    </option>
                    <option value="High-intentionality dating without app burnout">
                      High-intentionality dating without app burnout
                    </option>
                    <option value="Thoughtful courtship with an authentic partner">
                      Thoughtful courtship with an authentic partner
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1E1B1D] mb-1">
                    Your favorite quiet spot in {selectedCityObj.name}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.favoriteSpot}
                    onChange={(e) => setFormData({ ...formData, favoriteSpot: e.target.value })}
                    placeholder="e.g. The corner table at Buvette on a rainy afternoon, or browsing photography books at Dashwood..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E0E9] bg-[#FFFFFF] text-sm text-[#1E1B1D] focus:outline-hidden focus:ring-1 focus:ring-[#1E1B1D] focus:border-[#1E1B1D] resize-none"
                  />
                  {errors.favoriteSpot && (
                    <span className="text-xs text-rose-700 mt-1 block font-medium">{errors.favoriteSpot}</span>
                  )}
                  <span className="text-[11px] text-[#4A4549] mt-1 block">
                    Helps us pair you with members who share similar spatial affinities.
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Community Accord */}
          {step === 3 && (
            <div className="space-y-4">
              <div>
                <h3 className="text-2xl sm:text-3xl text-[#1E1B1D] font-black tracking-tight">
                  The Community Accord.
                </h3>
                <p className="text-xs text-[#4A4549] mt-1.5 leading-relaxed font-normal">
                  Datevra thrives because every member protects the integrity and respect of 
                  our partner tables.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <label className="p-3.5 bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] flex items-start gap-3 cursor-pointer hover:bg-[#F2F1F8] transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.agreedConduct}
                    onChange={(e) => setFormData({ ...formData, agreedConduct: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#1E1B1D] rounded"
                  />
                  <div className="text-xs text-[#4A4549] leading-relaxed">
                    <strong className="text-[#1E1B1D] block font-bold">Zero-Ghosting Principle</strong>
                    If I confirm a reservation, I commit to showing up or providing at least 24 hours notice.
                  </div>
                </label>

                <label className="p-3.5 bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] flex items-start gap-3 cursor-pointer hover:bg-[#F2F1F8] transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.agreedPunctual}
                    onChange={(e) => setFormData({ ...formData, agreedPunctual: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#1E1B1D] rounded"
                  />
                  <div className="text-xs text-[#4A4549] leading-relaxed">
                    <strong className="text-[#1E1B1D] block font-bold">Respect for Partner Hosts</strong>
                    I respect the staff, dress etiquette, and acoustic calm of our host spaces.
                  </div>
                </label>

                <label className="p-3.5 bg-[#FFFFFF] rounded-2xl border border-[#E5E0E9] flex items-start gap-3 cursor-pointer hover:bg-[#F2F1F8] transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.agreedPrivacy}
                    onChange={(e) => setFormData({ ...formData, agreedPrivacy: e.target.checked })}
                    className="mt-1 w-4 h-4 accent-[#1E1B1D] rounded"
                  />
                  <div className="text-xs text-[#4A4549] leading-relaxed">
                    <strong className="text-[#1E1B1D] block font-bold">Confidentiality & Discretion</strong>
                    I will not share member dossiers or photography outside of the Datevra experience.
                  </div>
                </label>
              </div>

              {errors.accord && (
                <span className="text-xs text-rose-700 block font-medium">{errors.accord}</span>
              )}
            </div>
          )}

          {/* STEP 4: Celebratory Confirmation */}
          {step === 4 && (
            <div className="space-y-6 text-center py-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div>
                <h3 className="text-3xl text-[#1E1B1D] font-black tracking-tight">
                  Application Received.
                </h3>
                <p className="text-sm text-[#4A4549] mt-2 max-w-md mx-auto">
                  Thank you, <strong>{formData.fullName}</strong>. Your invitation request for the{' '}
                  <strong>{selectedCityObj.name}</strong> chapter has been queued for curatorial review.
                </p>
              </div>

              {/* Private Invitation Pass Card */}
              <div className="p-6 bg-[#F4EFFC] border border-[#E5E0E9] rounded-2xl text-left max-w-md mx-auto shadow-2xs">
                <div className="flex items-center justify-between pb-3 border-b border-[#E5E0E9]">
                  <span className="font-['Pacifico',cursive] text-lg text-[#1E1B1D]">Datevra</span>
                  <span className="text-[11px] font-mono text-[#4A4549] uppercase">
                    Invitation Candidate
                  </span>
                </div>

                <div className="py-4 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-[#4A4549]">Applicant:</span>
                    <span className="font-bold text-[#1E1B1D]">{formData.fullName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4A4549]">Chapter:</span>
                    <span className="font-bold text-[#1E1B1D]">{selectedCityObj.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4A4549]">Pass Reference:</span>
                    <span className="font-mono text-[#1E1B1D] font-bold">{generatedPassId}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#4A4549]">Status:</span>
                    <span className="text-[#1E1B1D] font-bold">In Review (48h Notice)</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyPass}
                  className="w-full py-2 bg-[#FFFFFF] border border-[#E5E0E9] rounded-xl text-xs font-semibold text-[#1E1B1D] hover:bg-[#F2F1F8] flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copiedPass ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Reference Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Pass Reference</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 text-xs font-bold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] rounded-xl transition-colors cursor-pointer"
                >
                  Return to Website
                </button>
              </div>
            </div>
          )}

          {/* Navigation Buttons for Step 1 - 3 */}
          {step < 4 && (
            <div className="pt-4 border-t border-[#E5E0E9] flex items-center justify-between">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-4 py-2 text-xs font-semibold text-[#4A4549] hover:text-[#1E1B1D] transition-colors cursor-pointer"
                >
                  Back
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 text-xs font-bold text-[#FFFFFF] bg-[#1E1B1D] hover:bg-[#2A2629] rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
              >
                <span>{step === 3 ? 'Submit Application' : 'Continue'}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFFFFF]" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
