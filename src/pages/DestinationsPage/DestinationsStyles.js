import styled from 'styled-components';


// =============================================================================
// DESTINATIONS – Section, search input, cards grid
// =============================================================================

/** Wrapper for destinations page (heading + search + grid) */
export const DestinationsSection = styled.section`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.xl} 0;

  h2 {
    margin-bottom: ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.header};
  }

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.lg} 0;
    margin-bottom: ${({ theme }) => theme.spacing.lg};

    h2 {
      font-size: 1.75rem;
      padding: 0 ${({ theme }) => theme.spacing.md};
      margin-bottom: ${({ theme }) => theme.spacing.lg};
    }
  }

  @media (max-width: 480px) {
    padding: 1.25rem 0;
    margin-bottom: ${({ theme }) => theme.spacing.md};

    h2 {
      font-size: 1.5rem;
      margin-bottom: 1.25rem;
    }
  }
`;

export const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  padding: 0 ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    padding: 0 ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    padding: 0 ${({ theme }) => theme.spacing.sm};
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 14px 20px;
  font-size: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;
  transition: ${({ theme }) => theme.transition};
  box-shadow: ${({ theme }) => theme.shadows.sm};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 4px rgba(44, 95, 124, 0.2), ${({ theme }) => theme.shadows.md};
  }

  &::placeholder {
    color: #9CA3AF;
  }

  @media (max-width: 768px) {
    padding: 12px 16px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 10px 14px;
    font-size: 0.9rem;
  }
`;

export const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 300px);
  justify-content: center;
  align-items: start;
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 1024px) {
    gap: ${({ theme }) => theme.spacing.xl};
    padding: ${({ theme }) => theme.spacing.lg};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    gap: 1.25rem;
    padding: 0.75rem;
  }
`;

export const NoResultsMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 1.1rem;
`;
