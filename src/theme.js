/**
 * Design tokens for styled-components (matches index.css :root)
 */
export const theme = {
  colors: {
    primary: '#2C5F7C',
    primaryDark: '#1A5F7A',
    header: '#1E3A5F',
    text: '#1C1917',
    bg: '#F8F9FA',
    white: '#FFFFFF',
    accent: '#FFB84D',
    border: '#E5E7EB',
  },
  shadows: {
    sm: '0 4px 8px rgba(44, 95, 124, 0.3)',
    md: '0 4px 20px rgba(30, 58, 95, 0.12)',
    lg: '0 8px 30px rgba(30, 58, 95, 0.18)',
    xl: '0 8px 20px rgba(44, 95, 124, 0.4)',
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
