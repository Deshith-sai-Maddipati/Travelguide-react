/**
 * WanderWorld – Layout Component
 *
 * Shared shell for all pages: site header (logo + nav), main content area
 * (Outlet for current route), and footer. Used as the parent route in App.jsx.
 */

import { Outlet } from 'react-router-dom';

import { translations } from '../../data/translations';
import {
  SiteHeader,
  Logo,
  Nav,
  NavLinks,
  StyledNavLink,
  Main,
  SiteFooter,
} from './LayoutStyles';

const { common } = translations;

export default function Layout() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SiteHeader>
        <Logo to="/">{common.siteName}</Logo>
        <Nav>
          <NavLinks>
            <li>
              <StyledNavLink to="/" end>{common.nav.home}</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/destinations">{common.nav.destinations}</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/gallery">{common.nav.gallery}</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contact">{common.nav.contact}</StyledNavLink>
            </li>
          </NavLinks>
        </Nav>
      </SiteHeader>

      <Main>
        <Outlet />
      </Main>

      <SiteFooter>
        <p>{common.footer.replace('{year}', currentYear)}</p>
      </SiteFooter>
    </>
  );
}
