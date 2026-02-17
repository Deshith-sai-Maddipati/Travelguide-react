/**
 * WanderWorld – Design Tokens (Theme)
 *
 * Single source of truth for colors, spacing, shadows, and transitions.
 * Used by styled-components via ThemeProvider. Values align with index.css :root
 * for consistency where plain CSS is used.
 */

export const theme = {
  colors: {
    primary: '#E86C00',       // Main brand, hero, CTAs
    primaryDark: '#CC5C00',  // Gradients, buttons
    header: '#1A1A1A',       // Nav and footer background
    text: '#1C1917',
    bg: '#FFF8F5',           // Page background (cream)
    border: '#FFD4B8',       // Borders and dividers
    white: '#FFFFFF',
    accent: '#E86C00',       // Highlights, hover
    accentDark: '#B85800',   // Hover states
  },
  shadows: {
    sm: '0 1px 3px rgba(232, 108, 0, 0.15)',
    md: '0 4px 20px rgba(232, 108, 0, 0.18)',
    lg: '0 8px 30px rgba(232, 108, 0, 0.2)',
    xl: '0 12px 40px rgba(232, 108, 0, 0.25)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '2.5rem',
    '3xl': '3rem',
    '4xl': '4rem',
  },
  transition: 'all 0.3s ease',
  transitionFast: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};
