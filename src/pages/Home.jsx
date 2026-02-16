import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <h1 className="hero-title">Discover the World</h1>
          <p className="hero-tagline">
            Explore breathtaking destinations and create unforgettable memories.
          </p>
          <p className="hero-subtext">
            From city breaks to island getaways, we help you plan the perfect trip with curated guides, honest tips, and a handy trip budget calculator.
          </p>
          <Link to="/destinations" className="btn hero-cta">
            Explore Destinations
          </Link>
        </div>
      </section>

      <section className="home-why">
        <h2>Why Travel With Us</h2>
        <ul className="home-features">
          <li>
            <span className="home-feature-icon" aria-hidden>✈️</span>
            <strong>Curated guides</strong> — Hand-picked spots and practical tips for each destination.
          </li>
          <li>
            <span className="home-feature-icon" aria-hidden>🧮</span>
            <strong>Trip Calculator</strong> — Estimate daily costs and plan your budget before you go.
          </li>
          <li>
            <span className="home-feature-icon" aria-hidden>📸</span>
            <strong>Inspiration</strong> — Browse our gallery and get ideas for your next adventure.
          </li>
        </ul>
      </section>

      <section className="home-trip-calc">
        <Link to="/trip-calculator" className="btn">
          Trip Calculator
        </Link>
      </section>
    </>
  );
}
