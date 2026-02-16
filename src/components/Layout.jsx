import { Outlet, Link, NavLink } from 'react-router-dom';

export default function Layout() {
  const currentYear = new Date().getFullYear();

  const navLinkClass = ({ isActive }) =>
    isActive ? 'nav-link active' : 'nav-link';

  return (
    <>
      <header className="site-header">
        <Link to="/" className="logo">
          WanderWorld
        </Link>
        <nav>
          <ul className="nav-links">
            <li><NavLink to="/" end className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/destinations" className={navLinkClass}>Destinations</NavLink></li>
            <li><NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>&copy; {currentYear} WanderWorld. All rights reserved.</p>
      </footer>
    </>
  );
}
