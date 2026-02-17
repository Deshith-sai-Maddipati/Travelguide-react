/**
 * WanderWorld – Trip Calculator Page
 *
 * Simple budget estimator: user selects a city and number of days;
 * result shows approximate total cost (city daily rate × days) from cityCosts.
 */

import { useState } from 'react';

import { cityCosts } from '../data/destinations';
import {
  CalculatorMain,
  CalculatorTitle,
  CalculatorContainer,
  CalculatorFormGroup,
  CalculatorLabel,
  CalculatorSelect,
  CalculatorInput,
  CalculatorSubmitButton,
  CalculatorResult,
  CalculatorResultMessage,
} from '../styles';

const cities = Object.keys(cityCosts);

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
    setResult(
      `You need approximately $${totalCost} for your ${daysNum} day trip to ${city}.`
    );
  };

  return (
    <CalculatorMain>
      <CalculatorTitle>Trip Calculator</CalculatorTitle>
      <CalculatorContainer>
        <form id="tripCalculatorForm" onSubmit={handleSubmit}>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="city">Place you wish to visit:</CalculatorLabel>
            <CalculatorSelect
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
            </CalculatorSelect>
          </CalculatorFormGroup>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="days">Number of days:</CalculatorLabel>
            <CalculatorInput
              id="days"
              type="number"
              min="1"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="e.g. 5"
            />
          </CalculatorFormGroup>
          <CalculatorSubmitButton type="submit">Calculate Cost</CalculatorSubmitButton>
        </form>
        {result && (
          <CalculatorResult>
            <CalculatorResultMessage>{result}</CalculatorResultMessage>
          </CalculatorResult>
        )}
      </CalculatorContainer>
    </CalculatorMain>
  );
}
