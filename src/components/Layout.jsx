import { Outlet, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.white};

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
    position: relative;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
  }
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 900;

  &:hover {
    color: ${({ theme }) => theme.colors.white};
  }

  @media (max-width: 768px) {
    font-size: 1.25rem;
    width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const Nav = styled.nav`
  @media (max-width: 768px) {
    width: 100%;
    order: 2;
    margin-top: ${({ theme }) => theme.spacing.sm};
    margin-left: 0;
    padding-left: 0;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100%;
  }

  li {
    @media (max-width: 768px) {
      width: auto;
      margin: 0;
      padding: 0;

      &:first-child {
        margin-left: 0;
        padding-left: 0;

        a {
          padding-left: 0;
        }
      }
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: underline;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: 5px;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &[aria-current="page"] {
    color: ${({ theme }) => theme.colors.accent};
    font-weight: 700;
  }

  @media (max-width: 768px) {
    display: block;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    text-align: left;
    font-size: 1.1rem;
    white-space: nowrap;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: ${({ theme }) => theme.colors.accent};
    }
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const Main = styled.main`
  flex: 1;
`;

const SiteFooter = styled.footer`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.header};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 768px) {
    padding: 1.25rem ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.lg};

    p {
      font-size: 0.9rem;
    }
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md} 0.75rem;
    margin-top: 1.25rem;

    p {
      font-size: 0.85rem;
    }
  }
`;

export default function Layout() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <SiteHeader>
        <Logo to="/">WanderWorld</Logo>
        <Nav>
          <NavLinks>
            <li><StyledNavLink to="/" end>Home</StyledNavLink></li>
            <li><StyledNavLink to="/destinations">Destinations</StyledNavLink></li>
            <li><StyledNavLink to="/gallery">Gallery</StyledNavLink></li>
            <li><StyledNavLink to="/contact">Contact</StyledNavLink></li>
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
