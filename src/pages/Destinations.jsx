/**
 * WanderWorld – Destinations Page
 *
 * Lists all destinations as cards with a debounced search that filters
 * by name, tagline, or description. Only matching cards are shown.
 */

import { useMemo, useState } from 'react';

import { useDebounce } from '../hooks/useDebounce';
import { destinations } from '../data/destinations';
import DestinationCard from '../components/DestinationCard';
import {
  DestinationsSection,
  SearchContainer,
  SearchInput,
  CardsGrid,
  NoResultsMessage,
} from '../styles';

/**
 * Returns only destinations that match the search query (name, tagline, or description).
 * When query is empty, returns all destinations.
 */
function getFilteredDestinations(list, query) {
  const q = query.toLowerCase().trim();
  if (!q) return list;
  return list.filter(
    (d) =>
      d.name.toLowerCase().includes(q) ||
      d.tagline.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
  );
}

export default function Destinations() {
  const [searchInput, setSearchInput] = useState('');
  const debouncedSearch = useDebounce(searchInput, 300);

  const filteredDestinations = useMemo(
    () => getFilteredDestinations(destinations, debouncedSearch),
    [debouncedSearch]
  );

  return (
    <DestinationsSection>
      <h2>Featured Destinations</h2>
      <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search destinations..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          aria-label="Search destinations"
        />
      </SearchContainer>
      <CardsGrid id="destinations-container">
        {filteredDestinations.length > 0 ? (
          filteredDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))
        ) : (
          <NoResultsMessage>
            No destinations match your search. Try a different term.
          </NoResultsMessage>
        )}
      </CardsGrid>
    </DestinationsSection>
  );
}
