import { DateExperience, CityOption, TestimonialItem, QuizQuestion, QuizResult } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_couple_date_bistro_1791206720158.jpg';
export const TACTILE_MASCOT_IMAGE = '/src/assets/images/datevra_tactile_character_1791207015678.jpg';

export const CURATED_EXPERIENCES: DateExperience[] = [
  {
    id: 'vinyl-salon',
    title: 'The Vinyl Salon & Natural Wine',
    tagline: 'Analog warm acoustics, rare jazz pressings, and low-intervention Loire pours.',
    mood: 'Intimate & Atmospheric',
    neighborhood: 'West Village',
    city: 'New York',
    duration: '2.5 — 3 hours',
    image: '/src/assets/images/curated_vinyl_lounge_1791206739969.jpg',
    venueName: 'Kissa Reverie',
    venueType: 'Japanese Listening Bar & Wine Salon',
    perkDescription: 'Guaranteed corner booth reservation + sommelier cellar preview pour',
    vibeDescription: 'Tucked behind a quiet residential brownstone, this warm walnut room runs on custom tube amplifiers and 1960s Blue Note pressings. The music is audible yet gentle enough to converse without raising your voice.',
    itinerary: [
      { time: '7:30 PM', activity: 'Aperitif Arrival', detail: 'Settle into reserved corner booth with house sparkling chenin blanc.' },
      { time: '8:15 PM', activity: 'Curated Vinyl Listening', detail: 'The resident selector spins late Japanese ambient and French modal jazz.' },
      { time: '9:15 PM', activity: 'Small Plates & Digestifs', detail: 'Tasting of warm gougères, aged comté, and heritage amaro.' }
    ],
    conversationStarters: [
      'The album that changed how you view a city you used to live in.',
      'A habit or interest you picked up purely by accident that stuck.',
      'What does a perfect, unplanned Sunday look like for you?'
    ],
    dressSuggestion: 'Smart casual with warm textures — relaxed tailoring, knitwear, or silk.'
  },
  {
    id: 'gallery-bistro',
    title: 'Contemporary Sculpture & Candlelit Bistro',
    tagline: 'Curated gallery promenade followed by quiet corner dining.',
    mood: 'Cultural & Artful',
    neighborhood: 'Le Marais',
    city: 'Paris',
    duration: '3 hours',
    image: '/src/assets/images/curated_art_gallery_1791206755769.jpg',
    venueName: 'Atelier Saint-Germain',
    venueType: 'Private Sculpture Pavilion & Bistro',
    perkDescription: 'After-hours exhibition access pass + complimentary seasonal amuse-bouche',
    vibeDescription: 'Begin with natural conversation as you stroll through sun-washed minimalist installations, transitioning seamlessly to a tucked-away candlelit table 3 doors down.',
    itinerary: [
      { time: '6:00 PM', activity: 'Private Exhibition Viewing', detail: 'Slow walk through contemporary stone sculpture and architectural sketches.' },
      { time: '7:15 PM', activity: 'Evening Bistro Walk', detail: 'Short cobbled stroll across the square to a reserved candlelit table.' },
      { time: '7:30 PM', activity: 'Three-Course Seasonal Supper', detail: 'Savor roasted root vegetables, hand-rolled pasta, and crisp Sancerre.' }
    ],
    conversationStarters: [
      'Which piece in the room did you secretly want to take home?',
      'The most unexpectedly memorable trip you have ever taken alone.',
      'What is an opinion you held firmly five years ago that you completely reversed?'
    ],
    dressSuggestion: 'Effortless architectural layers, sculptural jewelry, or a classic trench.'
  },
  {
    id: 'rooftop-botanical',
    title: 'The Solarium Twilight & Botanical Cocktails',
    tagline: 'Panoramic golden hour skyline through antique glass and citrus trees.',
    mood: 'Vibrant & Conversational',
    neighborhood: 'Mayfair',
    city: 'London',
    duration: '2.5 hours',
    image: '/src/assets/images/curated_rooftop_sunset_1791206770091.jpg',
    venueName: 'The Conservatory Room',
    venueType: 'Rooftop Glasshouse & Botanical Bar',
    perkDescription: 'High-terrace skyline seating + bespoke bespoke herbal infusions crafted to order',
    vibeDescription: 'An airy glass atrium high above the avenue, lush with climbing jasmine and dwarf olive trees. As dusk settles, the glass ceiling mirrors city lights and gentle jazz.',
    itinerary: [
      { time: '6:30 PM', activity: 'Golden Hour Welcome', detail: 'Meet under the glass dome as dusk paints the skyline.' },
      { time: '7:15 PM', activity: 'Botanical Pairings', detail: 'Artisanal gin infusions with rosemary and bergamot paired with savory flatbreads.' },
      { time: '8:00 PM', activity: 'Terrace Stargazing', detail: 'Step onto the heated exterior colonnade for quiet evening views.' }
    ],
    conversationStarters: [
      'What is a place that feels like an emotional sanctuary to you?',
      'If you had six months to learn an entirely new craft, what would it be?',
      'The best piece of advice someone gave you that you initially ignored.'
    ],
    dressSuggestion: 'Elevated evening wear — contemporary silhouette with clean lines.'
  },
  {
    id: 'chef-counter',
    title: 'The Heritage Chef’s Table & Sommelier Journey',
    tagline: 'Front-row culinary craftsmanship with intimate conversation.',
    mood: 'Gastronomic',
    neighborhood: 'SoHo',
    city: 'New York',
    duration: '3.5 hours',
    image: '/src/assets/images/hero_couple_date_bistro_1791206720158.jpg',
    venueName: 'Maison Miro',
    venueType: 'Intimate 14-Seat Chef Counter',
    perkDescription: 'Side-by-side reserved marble counter seats + welcome glass of vintage Champagne',
    vibeDescription: 'Sitting shoulder-to-shoulder removes the interview-like pressure of across-the-table dining. Watch the kitchen dance while sharing notes on unexpected flavour combinations.',
    itinerary: [
      { time: '7:00 PM', activity: 'Champagne Greeting', detail: 'Arrive and be welcomed personally by the chef with artisanal gougères.' },
      { time: '7:30 PM', activity: 'Multi-Course Tasting', detail: 'Five thoughtful courses highlighting local seasonal harvests.' },
      { time: '9:30 PM', activity: 'Espresso & Hand-Rolled Truffles', detail: 'Linger comfortably as the dining room winds down quietly.' }
    ],
    conversationStarters: [
      'A dish that instantly transports you back to childhood.',
      'The strangest culinary tradition your family or friends have.',
      'What makes you feel truly grounded during a hectic week?'
    ],
    dressSuggestion: 'Refined date night elegance — crisp collared shirt, tailored trousers or slip dress.'
  }
];

export const CITY_OPTIONS: CityOption[] = [
  { id: 'nyc', name: 'New York City', country: 'United States', neighborhoods: 'West Village · SoHo · Brooklyn Heights', curatedVenuesCount: 28, available: true },
  { id: 'lon', name: 'London', country: 'United Kingdom', neighborhoods: 'Mayfair · Marylebone · Shoreditch', curatedVenuesCount: 22, available: true },
  { id: 'par', name: 'Paris', country: 'France', neighborhoods: 'Le Marais · Saint-Germain · 11ème', curatedVenuesCount: 19, available: true },
  { id: 'sfo', name: 'San Francisco', country: 'United States', neighborhoods: 'Pacific Heights · Mission · Presidio', curatedVenuesCount: 16, available: true },
  { id: 'atx', name: 'Austin', country: 'United States', neighborhoods: 'South Congress · Clarksville · East Austin', curatedVenuesCount: 14, available: true },
  { id: 'tok', name: 'Tokyo', country: 'Japan', neighborhoods: 'Daikanyama · Nakameguro · Aoyama', curatedVenuesCount: 18, available: false }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 't1',
    names: 'Elena V. & Marcus T.',
    durationTogether: '18 months together',
    city: 'New York',
    venue: 'Kissa Reverie (Vinyl Salon)',
    quote: 'We spent zero minutes in awkward small talk over an app. Datevra matched our taste in jazz and architecture, booked the corner booth, and we ended up staying until the bar closed down. It felt like serendipity with a safety net.',
    dateType: 'Analog Vinyl & Natural Wine'
  },
  {
    id: 't2',
    names: 'Sophia C. & Julian B.',
    durationTogether: '14 months together',
    city: 'London',
    venue: 'The Conservatory Room',
    quote: 'Traditional dating apps felt like a second full-time job of endless texting that went nowhere. Datevra introduced us on a Thursday, we met on Saturday at sunset, and neither of us looked at our phones once the whole evening.',
    dateType: 'Botanical Rooftop & Twilight'
  },
  {
    id: 't3',
    names: 'Camille D. & Alexandre R.',
    durationTogether: '9 months together',
    city: 'Paris',
    venue: 'Atelier Saint-Germain',
    quote: 'Having the date experience thoughtfully pre-arranged took away 100% of the first-date friction. All the mental energy went into listening, laughing, and discovering someone who actually shares your values.',
    dateType: 'Art Gallery Walk & Bistro'
  }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Where do you naturally feel most relaxed and captivating?',
    options: [
      {
        label: 'A warm, dimly-lit room with acoustic warmth and tactile details',
        sublabel: 'Low background decibels, rich wood, vinyl grooves, analog soul',
        archetypeId: 'vinyl-salon'
      },
      {
        label: 'An inspiring cultural space with open architectural sightlines',
        sublabel: 'Sculptures, thoughtful conversation while in motion, sunlight',
        archetypeId: 'gallery-bistro'
      },
      {
        label: 'An elevated greenhouse terrace with sweeping skyline views',
        sublabel: 'Golden hour twilight, botanicals, vibrant conversational buzz',
        archetypeId: 'rooftop-botanical'
      },
      {
        label: 'A front-row seat watching master artisans at their craft',
        sublabel: 'Counter dining, tasting menus, sensory culinary discovery',
        archetypeId: 'chef-counter'
      }
    ]
  },
  {
    id: 2,
    question: 'What is your ideal rhythm for getting to know someone?',
    options: [
      {
        label: 'Deep, focused immersion with unhurried pauses and mutual curiosity',
        sublabel: 'We listen to the music, let questions breathe, and skip superficial small talk',
        archetypeId: 'vinyl-salon'
      },
      {
        label: 'Side-by-side shared commentary on art, ideas, and unusual passions',
        sublabel: 'Starting with a walk makes eye contact natural and conversations playful',
        archetypeId: 'gallery-bistro'
      },
      {
        label: 'High-energy banter, storytelling, and celebrating a great week',
        sublabel: 'Witty, dynamic back-and-forth over crisp drinks and evening skies',
        archetypeId: 'rooftop-botanical'
      },
      {
        label: 'Bonding over taste, hospitality, and shared sensory appreciation',
        sublabel: 'Culinary adventures where each course unlocks a new personal story',
        archetypeId: 'chef-counter'
      }
    ]
  },
  {
    id: 3,
    question: 'What time slot best matches your personal chemistry?',
    options: [
      {
        label: 'Thursday 8:00 PM — Unwinding after a productive week',
        sublabel: 'The weekend is close, conversation flows effortlessly without pressure',
        archetypeId: 'vinyl-salon'
      },
      {
        label: 'Saturday 5:30 PM — Transition from daytime culture to evening dinner',
        sublabel: 'Gentle golden light that naturally evolves into a memorable night',
        archetypeId: 'gallery-bistro'
      },
      {
        label: 'Friday 7:00 PM — Prime sunset aperitivo kicking off the weekend',
        sublabel: 'Dressed up, celebratory energy, great city perspectives',
        archetypeId: 'rooftop-botanical'
      },
      {
        label: 'Wednesday 7:30 PM — Mid-week intentional dining indulgence',
        sublabel: 'A deliberate pause to savor an extraordinary meal and company',
        archetypeId: 'chef-counter'
      }
    ]
  }
];

export const QUIZ_RESULTS: Record<string, QuizResult> = {
  'vinyl-salon': {
    archetype: 'The Analog Connoisseur',
    tagline: 'You thrive in intimate, tactile environments with authentic character.',
    description: 'You appreciate substance over spectacle. For you, genuine chemistry happens when the lighting is warm, the acoustics are calibrated, and there is zero pressure to rush.',
    idealVenue: 'Quiet Japanese listening lounges, subterranean wine salons, and private record rooms.',
    sampleTopic: 'The records that define key chapters of your life, and the cities you felt most yourself in.',
    recommendedExperienceId: 'vinyl-salon'
  },
  'gallery-bistro': {
    archetype: 'The Artful Stroller',
    tagline: 'You connect through shared curiosity and visual dialogue.',
    description: 'You prefer dates in motion. Walking through a private gallery or sculpture courtyard before dinner creates effortless natural moments without the interrogation-style feel of standard dates.',
    idealVenue: 'Modern sculpture courtyards followed by intimate neighborhood bistros.',
    sampleTopic: 'What kind of architecture moves you, and the unexpected journeys that reshaped your worldview.',
    recommendedExperienceId: 'gallery-bistro'
  },
  'rooftop-botanical': {
    archetype: 'The Golden Hour Romantic',
    tagline: 'You flourish in vibrant settings with expansive city horizons.',
    description: 'You bring infectious energy and love celebrating life’s milestones. You look forward to dressing up and enjoying sunset vistas with someone who matches your witty conversational pace.',
    idealVenue: 'Glass conservatory greenhouses and botanical skyline terraces.',
    sampleTopic: 'Your biggest bold leap in the past three years and what adventure is calling you next.',
    recommendedExperienceId: 'rooftop-botanical'
  },
  'chef-counter': {
    archetype: 'The Epicurean Companion',
    tagline: 'You bond through shared sensory exploration and culinary craft.',
    description: 'You understand that hospitality is an art form. Sitting shoulder-to-shoulder at an intimate chef’s counter allows conversation to flow around delicious surprises and passionate stories.',
    idealVenue: 'Exclusive 12-seat chef tasting counters and cellar speakeasies.',
    sampleTopic: 'Childhood food memories, hidden food gems discovered while traveling, and personal passions.',
    recommendedExperienceId: 'chef-counter'
  }
};

export const FAQ_ITEMS = [
  {
    question: 'How is Datevra fundamentally different from standard dating apps?',
    answer: 'Standard dating apps profit from keeping you single and swiping endlessly through superficial photo catalogs. Datevra is intentionally built around the real-world date. We don’t have swiping stacks, infinite feeds, or read-receipt games. Every member is vetted for intentionality. When two members express mutual interest, Datevra automatically coordinates schedules and secures a reserved table at a hand-picked partner venue.'
  },
  {
    question: 'How do the partner venue reservations work?',
    answer: 'Datevra partners directly with high-caliber, character-rich venues—from vinyl listening bars to quiet bistro nooks. When a date is confirmed, our platform coordinates with the venue to hold your reservation under your Datevra key. You skip the stressful "Where do we go?" debate and arrive at a guaranteed table with curated perks (such as a sommelier welcome pour or chef appetizer).'
  },
  {
    question: 'What is the member vetting and acceptance process?',
    answer: 'Membership is by application or member referral. We review applications weekly based on values alignment, relationship intentionality, and geographical community balance. We prioritize members who value genuine presence, emotional intelligence, and respect for their match’s time.'
  },
  {
    question: 'How does Datevra protect privacy and eliminate ghosting?',
    answer: 'Your full name, exact contact info, and employer remain private until you choose to share them in person. To prevent the flake culture of modern apps, Datevra enforces a clear Code of Conduct: if a confirmed reservation is canceled without 24 hours notice or a member no-shows, their membership is revoked immediately.'
  },
  {
    question: 'What does membership cost?',
    answer: 'Datevra offers quarterly and annual memberships that include curated weekly pairings, guaranteed partner venue reservations, concierge date rescheduling, and private access to seasonal member cultural evenings.'
  }
];
