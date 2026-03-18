/**
 * WanderWorld – Destinations Data
 *
 * Central data for featured destinations (images, copy) and city costs
 * used by the Trip Calculator. Images are in public/Images – paths work standalone
 * and when embedded via ImageBaseUrlContext.
 */

const IMG = (name) => `/Images/${name}`;

// -----------------------------------------------------------------------------
// Destinations list (used by Destinations page and Gallery)
// -----------------------------------------------------------------------------
export const destinationsData = [
  {
    id: 'hyderabad',
    name: 'Hyderabad',
    tagline: 'The City of Pearls, History and Culture',
    description:
      "Hyderabad, India's tech hub, is a vibrant city known for its rich history, delicious cuisine, and modern infrastructure, offering a unique blend of tradition and innovation.",
    mobileImage: IMG('Hyderabad_Mobile.jpg'),
    desktopImage: IMG('Hyderabad_Desktop.jpg'),
    fallbackImage: IMG('Hyderabad_Desktop.jpg'),
  },
  {
    id: 'paris',
    name: 'Paris',
    tagline: 'The City of Lights, Romance and timeless Art',
    description:
      "Also known as the City of Light, Paris is one of the most fascinating European capitals, not just because of its art, culture, architecture, history, or even Emily in Paris. Though it may be synonymous with romance, Paris has many quirky secrets that only add to its appeal.",
    mobileImage: IMG('paris-mobile.jpg'),
    desktopImage: IMG('paris-desktop.jpg'),
    fallbackImage: IMG('paris-desktop.jpg'),
  },
  {
    id: 'tokyo',
    name: 'Tokyo',
    tagline: 'The City of the Future, Innovation and Culture',
    description:
      "Tokyo, Japan's sprawling capital, seamlessly blends cutting-edge technology, neon-lit streets, and trendsetting culture with deep historical roots, offering a vibrant mix of experiences from serene temples to bustling markets and futuristic entertainment.",
    mobileImage: IMG('tokyo-mobile.jpg'),
    desktopImage: IMG('tokyo-desktop.jpg'),
    fallbackImage: IMG('tokyo-desktop.jpg'),
  },
  {
    id: 'bali',
    name: 'Bali',
    tagline: 'The Island of the Gods, Tranquility and Beauty',
    description:
      "Bali, Indonesia's jewel, is a paradise island known for its stunning beaches, lush landscapes, and rich cultural heritage, offering a perfect blend of relaxation and adventure.",
    mobileImage: IMG('bali-mobile.jpg'),
    desktopImage: IMG('bali-desktop.jpg'),
    fallbackImage: IMG('bali-desktop.jpg'),
  },
  {
    id: 'barcelona',
    name: 'Barcelona',
    tagline: 'Where Gaudí Dreams Meet Mediterranean Sun',
    description:
      "Barcelona blends avant-garde architecture, world-class cuisine, and beach culture. From the Sagrada Família to the Gothic Quarter, it's a city of art, passion, and endless sunshine.",
    mobileImage: IMG('barcelona-mobile.jpg'),
    desktopImage: IMG('barcelona-desktop.jpg'),
    fallbackImage: IMG('barcelona-desktop.jpg'),
  },
  {
    id: 'rome',
    name: 'Rome',
    tagline: 'The Eternal City, Where History Lives',
    description:
      "Rome is an open-air museum where ancient ruins, Renaissance masterpieces, and la dolce vita collide. Walk through millennia of history, savor authentic pasta, and toss a coin in the Trevi Fountain.",
    mobileImage: IMG('rome-mobile.jpg'),
    desktopImage: IMG('rome-desktop.jpg'),
    fallbackImage: IMG('rome-desktop.jpg'),
  },
  {
    id: 'new-york',
    name: 'New York',
    tagline: 'The City That Never Sleeps',
    description:
      "New York pulses with energy—Broadway shows, world-class museums, diverse neighborhoods, and iconic skylines. From Central Park to Times Square, it's the ultimate urban adventure.",
    mobileImage: IMG('newyork-mobile.jpg'),
    desktopImage: IMG('newyork-desktop.jpg'),
    fallbackImage: IMG('newyork-desktop.jpg'),
  },
  {
    id: 'london',
    name: 'London',
    tagline: 'Tradition Meets Innovation',
    description:
      "London mixes royal heritage with cutting-edge culture. Explore Buckingham Palace, the British Museum, West End theatre, and eclectic markets—all in a city where history and modernity coexist.",
    mobileImage: IMG('london-mobile.jpg'),
    desktopImage: IMG('london-desktop.jpg'),
    fallbackImage: IMG('london-desktop.jpg'),
  },
  {
    id: 'dubai',
    name: 'Dubai',
    tagline: 'Where Desert Meets the Future',
    description:
      "Dubai dazzles with record-breaking skyscrapers, luxury shopping, and desert adventures. From the Burj Khalifa to golden beaches, it's a playground of ambition and opulence.",
    mobileImage: IMG('dubai-mobile.jpg'),
    desktopImage: IMG('dubai-desktop.jpg'),
    fallbackImage: IMG('dubai-desktop.jpg'),
  },
  {
    id: 'sydney',
    name: 'Sydney',
    tagline: 'Harbour City, Beach Culture, Endless Summer',
    description:
      "Sydney offers iconic landmarks like the Opera House and Harbour Bridge, stunning beaches from Bondi to Manly, and a laid-back lifestyle that defines Australian coastal living.",
    mobileImage: IMG('sydney-mobile.jpg'),
    desktopImage: IMG('sydney-desktop.jpg'),
    fallbackImage: IMG('sydney-desktop.jpg'),
  },
  {
    id: 'amsterdam',
    name: 'Amsterdam',
    tagline: 'Canals, Culture, and Creative Spirit',
    description:
      "Amsterdam charms with cobblestone streets, historic canals, world-class museums, and a relaxed, bike-friendly vibe. Discover art, history, and cozy cafés around every corner.",
    mobileImage: IMG('amsterdam-mobile.jpg'),
    desktopImage: IMG('amsterdam-desktop.jpg'),
    fallbackImage: IMG('amsterdam-desktop.jpg'),
  },
  {
    id: 'bangkok',
    name: 'Bangkok',
    tagline: 'Temples, Street Food, and 24/7 Energy',
    description:
      "Bangkok thrills with golden temples, bustling markets, legendary street food, and a nightlife that never stops. A sensory overload of sights, sounds, and flavors.",
    mobileImage: IMG('bangkok-mobile.jpg'),
    desktopImage: IMG('bangkok-desktop.jpg'),
    fallbackImage: IMG('bangkok-desktop.jpg'),
  },
  {
    id: 'lisbon',
    name: 'Lisbon',
    tagline: 'Seven Hills, Fado, and Golden Light',
    description:
      "Lisbon enchants with pastel buildings, historic trams, soulful fado music, and stunning viewpoints. A coastal capital where old-world charm meets contemporary creativity.",
    mobileImage: IMG('lisbon-mobile.jpg'),
    desktopImage: IMG('lisbon-desktop.jpg'),
    fallbackImage: IMG('lisbon-desktop.jpg'),
  },
  {
    id: 'cape-town',
    name: 'Cape Town',
    tagline: 'Where Mountain Meets Ocean',
    description:
      "Cape Town dazzles with Table Mountain, pristine beaches, world-class vineyards, and a rich cultural tapestry. Adventure, wildlife, and natural beauty in one unforgettable destination.",
    mobileImage: IMG('capetown-mobile.jpg'),
    desktopImage: IMG('capetown-desktop.jpg'),
    fallbackImage: IMG('capetown-desktop.jpg'),
  },
  {
    id: 'kerala',
    name: 'Kerala',
    tagline: "God's Own Country, Backwaters and Serenity",
    description:
      "Kerala, India's southwestern paradise, enchants with its lush backwaters, tea plantations, Ayurvedic wellness, and pristine beaches. From houseboat cruises to spice plantations, it's a haven of natural beauty and tranquility.",
    mobileImage: IMG('kerala-mobile.jpg'),
    desktopImage: IMG('kerala-desktop.jpg'),
    fallbackImage: IMG('kerala-desktop.jpg'),
  },
  {
    id: 'singapore',
    name: 'Singapore',
    tagline: 'Lion City, Garden City, Future City',
    description:
      "Singapore blends futuristic architecture, lush gardens, and multicultural cuisine. From Marina Bay to hawker centers, it's a clean, efficient, and endlessly fascinating city-state.",
    mobileImage: IMG('singapore-mobile.jpg'),
    desktopImage: IMG('singapore-desktop.jpg'),
    fallbackImage: IMG('singapore-desktop.jpg'),
  },
];

// -----------------------------------------------------------------------------
// City costs (USD per day) for Trip Calculator
// Per-category breakdown: hotel, food, transport, activities
// -----------------------------------------------------------------------------
const dailyBreakdown = {
  hotel: 0.4,
  food: 0.3,
  transport: 0.15,
  activities: 0.15,
};

export const cityCosts = {
  Hyderabad: 50,
  Paris: 150,
  Tokyo: 200,
  Bali: 80,
  Barcelona: 120,
  Rome: 130,
  'New York': 250,
  London: 180,
  Dubai: 220,
  Sydney: 160,
  Amsterdam: 140,
  Bangkok: 60,
  Lisbon: 100,
  'Cape Town': 90,
  Kerala: 55,
  Singapore: 170,
};

const DEFAULT_COST_LABELS = {
  hotel: 'Hotel',
  food: 'Food',
  transport: 'Transport',
  activities: 'Activities',
};

/** Get itemized cost breakdown for a city (per day) */
export function getCostBreakdown(city, days, labels = DEFAULT_COST_LABELS) {
  const dailyTotal = cityCosts[city];
  if (!dailyTotal) return null;
  const items = [
    { label: labels.hotel, amount: Math.round(dailyTotal * dailyBreakdown.hotel * days) },
    { label: labels.food, amount: Math.round(dailyTotal * dailyBreakdown.food * days) },
    { label: labels.transport, amount: Math.round(dailyTotal * dailyBreakdown.transport * days) },
    { label: labels.activities, amount: Math.round(dailyTotal * dailyBreakdown.activities * days) },
  ];
  const total = items.reduce((sum, i) => sum + i.amount, 0);
  return { items, total };
}
