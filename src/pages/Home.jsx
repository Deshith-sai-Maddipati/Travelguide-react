import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PICSUM_LIST_URL = 'https://picsum.photos/v2/list';

/* Styled components */
const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  color: ${({ theme }) => theme.colors.white};
`;

const HeroInner = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

const HeroTitle = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
`;

const HeroTagline = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: 1.2rem;
  opacity: 0.95;
  line-height: 1.4;
`;

const HeroSubtext = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing['2xl']};
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

const HeroCTA = styled(Link)`
  display: inline-block;
  margin-top: ${({ theme }) => theme.spacing.md};
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitionFast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.header};
  }
`;

const HomeWhy = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  text-align: center;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    color: ${({ theme }) => theme.colors.header};
  }
`;

const HomeFeatures = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: left;
`;

const HomeFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

const HomeFeatureIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

const HomeTripCalc = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const TripCalcLink = styled(Link)`
  display: inline-block;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitionFast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`;

export default function Home() {
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
