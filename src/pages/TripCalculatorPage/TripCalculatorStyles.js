import styled from 'styled-components';
import { Link } from 'react-router-dom';

// =============================================================================
// TRIP CALCULATOR – Form container, inputs, submit button, result
// =============================================================================

/** Page wrapper for calculator (back button + centered form) */
export const CalculatorPageWrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 200px;
`;

/** Back to home link (top left of calculator page) */
export const CalculatorBackButton = styled(Link)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  left: ${({ theme }) => theme.spacing.lg};
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.5rem 0;
  color: ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: ${({ theme }) => theme.transitionFast};

  &:hover {
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`;

/** Centered form wrapper for calculator */
export const CalculatorMain = styled.div`
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  padding: ${({ theme }) => theme.spacing.lg};
  padding-top: 3.5rem;

  @media (max-width: 1024px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: 1.25rem;
    padding-top: 3.5rem;
  }

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: ${({ theme }) => theme.spacing.md};
    padding-top: 3.5rem;
  }

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacing.md} auto;
    padding: 0.75rem;
    padding-top: 3.5rem;
  }
`;

export const CalculatorTitle = styled.h1`
  color: ${({ theme }) => theme.colors.header};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: 1024px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorFormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorError = styled.span`
  display: block;
  color: #c00;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

export const CalculatorLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const CalculatorSelect = styled.select`
  width: 100%;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const CalculatorInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.text};
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 12px;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 8px;
    font-size: 0.9rem;
  }
`;

export const CalculatorSubmitButton = styled.button`
  width: 100%;
  display: inline-block;
  padding: 12px 24px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  transition: ${({ theme }) => theme.transitionFast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-4px) scale(1.02);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px rgba(44, 95, 124, 0.3), ${({ theme }) => theme.shadows.xl};
  }

  @media (max-width: 768px) {
    padding: 12px 20px;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.85rem;
  }
`;

export const CalculatorResult = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) => theme.colors.bg};
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.md};
    margin-top: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: 0.75rem;
    margin-top: ${({ theme }) => theme.spacing.md};
  }
`;

export const CalculatorResultMessage = styled.p`
  color: ${({ theme }) => theme.colors.header};
  font-size: 1.1rem;
  font-weight: 600;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

/** Itemized cost breakdown list */
export const CalculatorBreakdown = styled.ul`
  list-style: none;
  margin: ${({ theme }) => theme.spacing.lg} 0 0;
  padding: ${({ theme }) => theme.spacing.md} 0 0;
`;

export const CalculatorBreakdownItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.sm} 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const CalculatorBreakdownTotal = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.md} 0 0;
  margin-top: ${({ theme }) => theme.spacing.sm};
  font-size: 1.15rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.header};
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
`;
