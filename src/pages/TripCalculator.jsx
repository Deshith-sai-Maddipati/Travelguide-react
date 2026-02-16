import { useState } from 'react';
import styled from 'styled-components';
import { cityCosts } from '../data/destinations';

const cities = Object.keys(cityCosts);

const CalculatorMain = styled.div`
  max-width: 600px;
  margin: ${({ theme }) => theme.spacing.xl} auto;
  padding: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 1024px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.lg} auto;
    padding: ${({ theme }) => theme.spacing.md};
  }

  @media (max-width: 480px) {
    margin: ${({ theme }) => theme.spacing.md} auto;
    padding: 0.75rem;
  }
`;

const CalculatorTitle = styled.h1`
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

const CalculatorContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.md};

  @media (max-width: 1024px) {
    padding: 1.25rem;
  }

  @media (max-width: 768px) {
    padding: 1.25rem;
  }

  @media (max-width: 480px) {
    padding: ${({ theme }) => theme.spacing.md};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 480px) {
    margin-bottom: ${({ theme }) => theme.spacing.md};
  }
`;

const Label = styled.label`
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

const Select = styled.select`
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

const Input = styled.input`
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

const SubmitButton = styled.button`
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

const Result = styled.div`
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

const ResultMessage = styled.p`
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

export default function TripCalculator() {
  const [city, setCity] = useState('');
  const [days, setDays] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const daysNum = parseInt(days, 10);
    if (!city || !daysNum || daysNum < 1) {
      alert('Please fill in all fields correctly.');
      return;
    }
    const costPerDay = cityCosts[city];
    const totalCost = daysNum * costPerDay;
    setResult(`You need approximately $${totalCost} for your ${daysNum} day trip to ${city}.`);
  };

  return (
    <CalculatorMain>
      <CalculatorTitle>Trip Calculator</CalculatorTitle>
      <CalculatorContainer>
        <form id="tripCalculatorForm" onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="city">Place you wish to visit:</Label>
            <Select
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select a city</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </Select>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="days">Number of days:</Label>
            <Input
              id="days"
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="e.g. 5"
            />
          </FormGroup>
          <SubmitButton type="submit">Calculate Cost</SubmitButton>
        </form>
        {result && (
          <Result>
            <ResultMessage>{result}</ResultMessage>
          </Result>
        )}
      </CalculatorContainer>
    </CalculatorMain>
  );
}
