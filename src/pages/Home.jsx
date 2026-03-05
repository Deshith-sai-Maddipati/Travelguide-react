/**
 * WanderWorld – Home Page
 *
 * Landing page: hero section, "Why Travel With Us" features, and a link
 * to the Trip Calculator. Includes a demo useEffect that fetches from Picsum
 * (for learning; data is only logged).
 */

import { useEffect } from 'react';

import {
  Hero,
  HeroInner,
  HeroTitle,
  HeroTagline,
  HeroSubtext,
  HeroCTA,
  HomeWhy,
  HomeFeatures,
  HomeFeatureItem,
  HomeFeatureIcon,
  HomeTripCalc,
  TripCalcLink,
} from '../styles';

const PICSUM_LIST_URL = 'https://picsum.photos/v2/list';

export default function Home() {
  // Demo: fetch Picsum photo list on mount (results logged to console)
  useEffect(() => {
    fetch(PICSUM_LIST_URL)
      .then((response) => {
        if (!response.ok) throw new Error(`HTTP error ${response.status}`);
        return response.json();
      })
      .then((data) => {
        console.log('Picsum photos (fetch learning):', data);
        const pictureLinkDetails = data.map((photo) => ({
          id: photo.id,
          author: photo.author,
          sourceUrl: photo.url,
          downloadUrl: photo.download_url,
          width: photo.width,
          height: photo.height,
        }));
        console.log('Picture link details (url + download_url per photo):', pictureLinkDetails);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
      });
  }, []);

  return (
    <>
      <Hero>
        <HeroInner>
          <HeroTitle>Discover the World</HeroTitle>
          <HeroTagline>
            Explore breathtaking destinations and create unforgettable memories.
          </HeroTagline>
          <HeroSubtext>
            From city breaks to island getaways, we help you plan the perfect trip with curated guides, honest tips, and a handy trip budget calculator.
          </HeroSubtext>
          <HeroCTA to="/destinations">Explore Destinations</HeroCTA>
        </HeroInner>
      </Hero>

      <HomeWhy>
        <h2>Why Travel With Us</h2>
        <HomeFeatures>
          <HomeFeatureItem>
            <HomeFeatureIcon aria-hidden>✈️</HomeFeatureIcon>
            <strong>Curated guides</strong> — Hand-picked spots and practical tips for each destination.
          </HomeFeatureItem>
          <HomeFeatureItem>
            <HomeFeatureIcon aria-hidden>🧮</HomeFeatureIcon>
            <strong>Trip Calculator</strong> — Estimate daily costs and plan your budget before you go.
          </HomeFeatureItem>
          <HomeFeatureItem>
            <HomeFeatureIcon aria-hidden>📸</HomeFeatureIcon>
            <strong>Inspiration</strong> — Browse our gallery and get ideas for your next adventure.
          </HomeFeatureItem>
        </HomeFeatures>
      </HomeWhy>

      <HomeTripCalc>
        <TripCalcLink to="/trip-calculator">Trip Calculator</TripCalcLink>
      </HomeTripCalc>
    </>
  );
}
