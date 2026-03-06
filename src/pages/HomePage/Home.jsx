/**
 * WanderWorld – Home Page
 *
 * Landing page: hero section, "Why Travel With Us" features, and a link
 * to the Trip Calculator.
 */

import { translations } from '../../data/translations';
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
} from './HomeStyles';

const { home } = translations;

export default function Home() {
  return (
    <>
      <Hero>
        <HeroInner>
          <HeroTitle>{home.hero.title}</HeroTitle>
          <HeroTagline>{home.hero.tagline}</HeroTagline>
          <HeroSubtext>{home.hero.subtext}</HeroSubtext>
          <HeroCTA to="/destinations">{home.hero.cta}</HeroCTA>
        </HeroInner>
      </Hero>

      <HomeWhy>
        <h2>{home.whyTravel.title}</h2>
        <HomeFeatures>
          {home.whyTravel.features.map(({ icon, title, description }) => (
            <HomeFeatureItem key={title}>
              <HomeFeatureIcon aria-hidden>{icon}</HomeFeatureIcon>
              <strong>{title}</strong> — {description}
            </HomeFeatureItem>
          ))}
        </HomeFeatures>
      </HomeWhy>

      <HomeTripCalc>
        <TripCalcLink to="/trip-calculator">{home.tripCalcLink}</TripCalcLink>
      </HomeTripCalc>
    </>
  );
}
