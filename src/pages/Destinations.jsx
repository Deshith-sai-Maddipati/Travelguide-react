/**
 * WanderWorld – Destinations Page
 *
 * Lists all destinations as cards with a debounced search that filters
 * by name, tagline, or description. Non-matching cards are visually
 * dimmed (isFilteredOut) but remain in the DOM.
 */

import { useMemo, useState, useRef, useEffect } from 'react';

import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import {
  DestinationsSection,
  SearchContainer,
  SearchInput,
  CardsGrid,
} from '../styles';

/**
 * Builds a map of destination id -> true if it does NOT match the search query.
 * Used to dim non-matching cards while keeping them in the layout.
 */
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

export default function Destinations() {
  const [searchQuery, setSearchQuery] = useState('');
  const debounceRef = useRef(null);

  // Clear debounce timer on unmount
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
    <DestinationsSection>
      <h2>Featured Destinations</h2>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search destinations..."
          onChange={handleSearchChange}
          aria-label="Search destinations"
        />
      </SearchContainer>
      <CardsGrid id="destinations-container">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            destination={dest}
            isFilteredOut={!!matchMap[dest.id]}
          />
        ))}
      </CardsGrid>
    </DestinationsSection>
  );
}
