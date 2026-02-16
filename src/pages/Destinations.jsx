import { useMemo, useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

function getMatchMap(list, query) {
  const q = query.toLowerCase().trim();
  if (!q) return {};
  const matchMap = {};
  list.forEach((d) => {
    const matches =
      d.name.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q);
    matchMap[d.id] = !matches;
  });
  return matchMap;
}

const Section = styled.section`
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

const SearchContainer = styled.div`
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

const SearchInput = styled.input`
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

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const debounceRef = useRef(null);

  useEffect(() => {
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
  }, []);

  const matchMap = useMemo(
    () => getMatchMap(destinations, searchQuery),
    [searchQuery]
  );

  const handleSearchChange = (e) => {
    const value = e.target.value;
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => setSearchQuery(value), 300);
  };

  return (
    <Section>
      <h2>Featured Destinations</h2>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search destinations..."
          onChange={handleSearchChange}
          aria-label="Search destinations"
        />
      </SearchContainer>
      <Cards id="destinations-container">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            isFilteredOut={!!matchMap[dest.id]}
          />
        ))}
      </Cards>
    </Section>
  );
}
