/**
 * WanderWorld – Layout Component
 *
 * Shared shell for all pages: site header (logo + nav), main content area
 * (Outlet for current route), and footer. Used as the parent route in App.jsx.
 */

import { Outlet } from 'react-router-dom';

import {
  SiteHeader,
  Logo,
  Nav,
  NavLinks,
  StyledNavLink,
  Main,
  SiteFooter,
} from '../styles';

export default function Layout() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SiteHeader>
        <Logo to="/">WanderWorld</Logo>
        <Nav>
          <NavLinks>
            <li>
              <StyledNavLink to="/" end>Home</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/destinations">Destinations</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/gallery">Gallery</StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/contact">Contact</StyledNavLink>
            </li>
          </NavLinks>
        </Nav>
      </SiteHeader>

      <Main>
        <Outlet />
      </Main>

      <SiteFooter>
        <p>&copy; {currentYear} WanderWorld. All rights reserved.</p>
      </SiteFooter>
    </>
  );
}
