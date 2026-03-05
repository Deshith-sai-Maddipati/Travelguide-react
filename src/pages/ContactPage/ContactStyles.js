import styled from 'styled-components';
// =============================================================================
// CONTACT – Main container, title, sections, text, social
// =============================================================================

/** Page wrapper for contact content */
export const ContactMain = styled.div`
  max-width: 800px;
  margin: ${({ theme }) => theme.spacing['3xl']} auto;
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacing.md} auto;
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const ContactTitle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin-bottom: 1.25rem;
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const ContactSectionTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const ContactText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 768px) {
    margin-bottom: 0.75rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

/** Single contact info row with icon */
export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bg};
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: ${({ theme }) => theme.colors.border};
    transform: translateX(4px);
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.sm};
    gap: ${({ theme }) => theme.spacing.sm};
  }
`;

/** Icon wrapper in contact items */
export const ContactIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  min-width: 44px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;

  svg {
    width: 1.25em;
    height: 1.25em;
    flex-shrink: 0;
  }
`;

/** Clickable contact link (mailto, tel, maps) */
export const ContactLink = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accentDark};
    text-decoration: underline;
  }
`;

/** Grid of social links */
export const ContactSocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/** Subtle hint text (e.g. "Opens in Maps") */
export const ContactHint = styled.span`
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.textMuted};
  margin-left: 0.25rem;
`;

/** Individual social link button */
export const ContactSocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0.75rem;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.bg};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: ${({ theme }) => theme.transition};
  border: 1px solid ${({ theme }) => theme.colors.border};

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.sm};
  }

  svg {
    width: 1em;
    height: 1em;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.6rem;
    font-size: 0.85rem;
  }
`;
