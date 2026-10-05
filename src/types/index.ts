export type DateMood = 'All' | 'Intimate & Atmospheric' | 'Cultural & Artful' | 'Vibrant & Conversational' | 'Gastronomic';

export interface ItineraryStep {
  time: string;
  activity: string;
  detail: string;
}

export interface DateExperience {
  id: string;
  title: string;
  tagline: string;
  mood: DateMood;
  neighborhood: string;
  city: string;
  duration: string;
  image: string;
  venueName: string;
  venueType: string;
  perkDescription: string;
  vibeDescription: string;
  itinerary: ItineraryStep[];
  conversationStarters: string[];
  dressSuggestion: string;
}

export interface CityOption {
  id: string;
  name: string;
  country: string;
  neighborhoods: string;
  curatedVenuesCount: number;
  available: boolean;
}

export interface TestimonialItem {
  id: string;
  names: string;
  durationTogether: string;
  city: string;
  venue: string;
  quote: string;
  dateType: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    sublabel: string;
    archetypeId: string;
  }[];
}

export interface QuizResult {
  archetype: string;
  tagline: string;
  description: string;
  idealVenue: string;
  sampleTopic: string;
  recommendedExperienceId: string;
}
