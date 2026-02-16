import { useMemo, useState, useRef, useEffect } from 'react';
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
    <>
      <section className="Destinations">
        <h2>Featured Destinations</h2>
        <div className="search-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search destinations..."
            onChange={handleSearchChange}
            aria-label="Search destinations"
          />
        </div>
        <div className="cards" id="destinations-container">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              isFilteredOut={!!matchMap[dest.id]}
            />
          ))}
        </div>
      </section>
    </>
  );
}
