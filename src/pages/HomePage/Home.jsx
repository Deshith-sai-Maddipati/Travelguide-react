/**
 * WanderWorld – Home Page
 *
 * Landing page: hero section, "Why Travel With Us" features, and a link
 * to the Trip Calculator.
 */

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
} from '../../styles/HomeStyles';

export default function Home() {

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
