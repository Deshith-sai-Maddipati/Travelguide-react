/**
 * WanderWorld – Destinations Data
 *
 * Central data for featured destinations (images, copy) and city costs
 * used by the Trip Calculator. Images are imported from the local Images folder.
 */

// -----------------------------------------------------------------------------
// Image imports (desktop and mobile variants per destination)
// -----------------------------------------------------------------------------
import hyderabadDesktop from './Images/Hyderabad_Desktop.jpg';
import hyderabadMobile from './Images/Hyderabad_Mobile.jpg';
import parisDesktop from './Images/paris-desktop.jpg';
import parisMobile from './Images/paris-mobile.jpg';
import tokyoDesktop from './Images/tokyo-desktop.jpg';
import tokyoMobile from './Images/tokyo-mobile.jpg';
import baliDesktop from './Images/bali-desktop.jpg';
import baliMobile from './Images/bali-mobile.jpg';

// -----------------------------------------------------------------------------
// Destinations list (used by Destinations page and Gallery)
// -----------------------------------------------------------------------------
export const destinations = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    tagline: 'The City of Pearls, History and Culture',
    description:
      "Hyderabad, India's tech hub, is a vibrant city known for its rich history, delicious cuisine, and modern infrastructure, offering a unique blend of tradition and innovation.",
    mobileImage: hyderabadMobile,
    desktopImage: hyderabadDesktop,
    fallbackImage: hyderabadDesktop,
  },
  {
    id: 'paris',
    name: 'Paris',
    tagline: 'The City of Lights, Romance and timeless Art',
    description:
      "Also known as the City of Light, Paris is one of the most fascinating European capitals, not just because of its art, culture, architecture, history, or even Emily in Paris. Though it may be synonymous with romance, Paris has many quirky secrets that only add to its appeal.",
    mobileImage: parisMobile,
    desktopImage: parisDesktop,
    fallbackImage: parisDesktop,
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    tagline: 'The City of the Future, Innovation and Culture',
    description:
      "Tokyo, Japan's sprawling capital, seamlessly blends cutting-edge technology, neon-lit streets, and trendsetting culture with deep historical roots, offering a vibrant mix of experiences from serene temples to bustling markets and futuristic entertainment.",
    mobileImage: tokyoMobile,
    desktopImage: tokyoDesktop,
    fallbackImage: tokyoDesktop,
  },
  {
    id: 'bali',
    name: 'Bali',
    tagline: 'The Island of the Gods, Tranquility and Beauty',
    description:
      "Bali, Indonesia's jewel, is a paradise island known for its stunning beaches, lush landscapes, and rich cultural heritage, offering a perfect blend of relaxation and adventure.",
    mobileImage: baliMobile,
    desktopImage: baliDesktop,
    fallbackImage: baliDesktop,
  },
];

// -----------------------------------------------------------------------------
// City costs (USD per day) for Trip Calculator
// -----------------------------------------------------------------------------
export const cityCosts = {
  Hyderabad: 50,
  Paris: 150,
  Tokyo: 200,
  Bali: 80,
};
