/**
 * WanderWorld – Trip Calculator Page
 *
 * Budget estimator: user selects a city and start/end dates;
 * shows itemized breakdown (hotel, food, transport, activities) and total cost.
 * Form managed with react-hook-form.
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { cityCosts, getCostBreakdown } from '../data/destinations';
import {
  CalculatorMain,
  CalculatorTitle,
  CalculatorContainer,
  CalculatorFormGroup,
  CalculatorLabel,
  CalculatorError,
  CalculatorSelect,
  CalculatorInput,
  CalculatorSubmitButton,
  CalculatorResult,
  CalculatorResultMessage,
  CalculatorBreakdown,
  CalculatorBreakdownItem,
  CalculatorBreakdownTotal,
} from '../styles';

const cities = Object.keys(cityCosts);

function getDaysBetween(startDateStr, endDateStr) {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const diffMs = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24)) + 1;
  return Math.max(1, diffDays);
}

function formatCurrency(amount) {
  return `$${amount.toLocaleString()}`;
}

export default function TripCalculator() {
  const [result, setResult] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: { city: '', startDate: '', endDate: '' },
  });

  const startDate = watch('startDate');

  const onSubmit = (data) => {
    const { city, startDate: start, endDate: end } = data;
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    if (endDateObj < startDateObj) {
      alert('End date must be on or after start date.');
      return;
    }
    const daysNum = getDaysBetween(start, end);
    const breakdown = getCostBreakdown(city, daysNum);
    setResult({ city, daysNum, breakdown });
  };

  return (
    <CalculatorMain>
      <CalculatorTitle>Trip Calculator</CalculatorTitle>
      <CalculatorContainer>
        <form id="tripCalculatorForm" onSubmit={handleSubmit(onSubmit)}>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="city">Place you wish to visit:</CalculatorLabel>
            <CalculatorSelect
              id="city"
              {...register('city', { required: 'Please select a city' })}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </CalculatorSelect>
            {errors.city && <CalculatorError>{errors.city.message}</CalculatorError>}
          </CalculatorFormGroup>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="startDate">Start date:</CalculatorLabel>
            <CalculatorInput
              id="startDate"
              type="date"
              {...register('startDate', { required: 'Start date is required' })}
            />
            {errors.startDate && <CalculatorError>{errors.startDate.message}</CalculatorError>}
          </CalculatorFormGroup>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="endDate">End date:</CalculatorLabel>
            <CalculatorInput
              id="endDate"
              type="date"
              min={startDate || undefined}
              {...register('endDate', { required: 'End date is required' })}
            />
            {errors.endDate && <CalculatorError>{errors.endDate.message}</CalculatorError>}
          </CalculatorFormGroup>
          <CalculatorSubmitButton type="submit">Calculate Cost</CalculatorSubmitButton>
        </form>
        {result && (
          <CalculatorResult>
            <CalculatorResultMessage>
              Estimated budget for your {result.daysNum} day trip to {result.city} 
            </CalculatorResultMessage>
            <CalculatorBreakdown>
              {result.breakdown.items.map(({ label, amount }) => (
                <CalculatorBreakdownItem key={label}>
                  <span>{label} :</span>
                  <span>{formatCurrency(amount)}</span>
                </CalculatorBreakdownItem>
              ))}
              <CalculatorBreakdownTotal>
                <span>Total :</span>
                <span>{formatCurrency(result.breakdown.total)}</span>
              </CalculatorBreakdownTotal>
            </CalculatorBreakdown>
          </CalculatorResult>
        )}
      </CalculatorContainer>
    </CalculatorMain>
  );
}
