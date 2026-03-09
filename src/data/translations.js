/**
 * WanderWorld – Translations / Content
 *
 * Central content and copy for all pages and components.
 * Consume via: import { translations } from '../data/translations';
 */

export const translations = {
  common: {
    siteName: 'WanderWorld',
    nav: {
      home: 'Home',
      destinations: 'Destinations',
      gallery: 'Gallery',
      contact: 'Contact',
    },
    footer: '© {year} WanderWorld. All rights reserved.',
  },

  home: {
    hero: {
      title: 'Discover the World',
      tagline: 'Explore breathtaking destinations and create unforgettable memories.',
      subtext:
        'From city breaks to island getaways, we help you plan the perfect trip with curated guides, honest tips, and a handy trip budget calculator.',
      cta: 'Explore Destinations',
    },
    whyTravel: {
      title: 'Why Travel With Us',
      features: [
        {
          icon: '✈️',
          title: 'Curated guides',
          description: 'Hand-picked spots and practical tips for each destination.',
        },
        {
          icon: '🧮',
          title: 'Trip Calculator',
          description: 'Estimate daily costs and plan your budget before you go.',
        },
        {
          icon: '📸',
          title: 'Inspiration',
          description: 'Browse our gallery and get ideas for your next adventure.',
        },
      ],
    },
    tripCalcLink: 'Trip Calculator',
  },

  contact: {
    title: 'Contact Us',
    sections: {
      email: 'Email',
      phone: 'Phone',
      address: 'Address',
      hours: 'Hours',
    },
    info: {
      email: 'wandeworld@gmail.com',
      phone: '+911234567898',
      address: '123 Main Street, Anytown, USA',
      hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    },
    mapsHint: '— Opens in Maps',
    followUs: 'Follow Us',
  },

  gallery: {
    title: 'Gallery',
    description: 'Explore stunning destination images. Select a city to explore its gallery.',
    dropdown: {
      label: 'Choose a destination',
      placeholder: 'Select a city…',
      ariaLabel: 'Select city for gallery',
    },
    messages: {
      loading: 'Loading photos…',
      error: 'Error: {error}',
      noImages: 'No images found for {city}.',
      selectCity: 'Select a city above to explore its gallery.',
    },
  },

  destinations: {
    title: 'Featured Destinations',
    search: {
      placeholder: 'Search destinations...',
      ariaLabel: 'Search destinations',
    },
    noResults: 'No destinations match your search. Try a different term.',
  },

  tripCalculator: {
    backButton: '← Back to Home',
    title: 'Trip Calculator',
    form: {
      placeLabel: 'Place you wish to visit:',
      cityPlaceholder: 'Select a city',
      startDateLabel: 'Start date:',
      endDateLabel: 'End date:',
      submitButton: 'Calculate Cost',
    },
    validation: {
      cityRequired: 'Please select a city',
      startDateRequired: 'Start date is required',
      endDateRequired: 'End date is required',
      endDateAfterStart: 'End date must be on or after start date.',
    },
    result: {
      message: 'Estimated budget for your {daysNum} day trip to {city}',
      total: 'Total',
    },
    costLabels: {
      hotel: 'Hotel',
      food: 'Food',
      transport: 'Transport',
      activities: 'Activities',
    },
  },

  destinationCard: {
    learnMore: 'Learn More',
    showLess: 'Show Less',
    loading: 'Loading...',
  },

  destinationModal: {
    closeAriaLabel: 'Close modal',
  },

  cityCarousel: {
    prevAriaLabel: 'Previous',
    nextAriaLabel: 'Next',
  },

  app: {
    loadingFallback: 'Loading…',
  },
};
