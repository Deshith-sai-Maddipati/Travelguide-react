// =============================================================================
// HOME – Hero, features, Trip Calculator CTA
// =============================================================================

/** Full-width hero section (gradient, CTA) */

import styled from 'styled-components';
import { Link} from 'react-router-dom';

export const Hero = styled.section`
  padding: ${({ theme }) => theme.spacing['4xl']} ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary} 0%, ${({ theme }) => theme.colors.primaryDark} 100%);
  color: ${({ theme }) => theme.colors.white};
`;

export const HeroInner = styled.div`
  max-width: 640px;
  margin: 0 auto;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const HeroTagline = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing.md};
  font-size: 1.2rem;
  opacity: 0.95;
  line-height: 1.4;
`;

export const HeroSubtext = styled.p`
  margin: 0 0 ${({ theme }) => theme.spacing['2xl']};
  max-width: 100%;
  font-size: 1rem;
  line-height: 1.6;
  opacity: 0.9;
`;

export const HeroCTA = styled(Link)`
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

export const HomeWhy = styled.section`
  background-color: ${({ theme }) => theme.colors.bg};
  padding: ${({ theme }) => theme.spacing['3xl']} ${({ theme }) => theme.spacing.xl};
  text-align: center;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing['2xl']};
    color: ${({ theme }) => theme.colors.header};
  }
`;

export const HomeFeatures = styled.ul`
  list-style: none;
  margin: 0 auto;
  padding: 0;
  max-width: 720px;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
  text-align: left;
`;

export const HomeFeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const HomeFeatureIcon = styled.span`
  font-size: 1.5rem;
  flex-shrink: 0;
`;

export const HomeTripCalc = styled.section`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']} ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const TripCalcLink = styled(Link)`
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
