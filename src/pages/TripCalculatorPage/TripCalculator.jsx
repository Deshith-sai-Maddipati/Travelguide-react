/**
 * WanderWorld – Trip Calculator Page
 *
 * Budget estimator: user selects a city and start/end dates;
 * shows itemized breakdown (hotel, food, transport, activities) and total cost.
 * Form managed with react-hook-form.
 */

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { cityCosts, getCostBreakdown } from '../../data/destinationsData';
import { translations } from '../../data/translations';
import {
  CalculatorPageWrapper,
  CalculatorMain,
  CalculatorBackButton,
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
} from './TripCalculatorStyles';

const cities = Object.keys(cityCosts);
const { tripCalculator } = translations;

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
      alert(tripCalculator.validation.endDateAfterStart);
      return;
    }
    const daysNum = getDaysBetween(start, end);
    const breakdown = getCostBreakdown(city, daysNum, tripCalculator.costLabels);
    setResult({ city, daysNum, breakdown });
  };

  return (
    <CalculatorPageWrapper>
      <CalculatorBackButton to="/">{tripCalculator.backButton}</CalculatorBackButton>
      <CalculatorMain>
        <CalculatorTitle>{tripCalculator.title}</CalculatorTitle>
        <CalculatorContainer>
        <form id="tripCalculatorForm" onSubmit={handleSubmit(onSubmit)}>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="city">{tripCalculator.form.placeLabel}</CalculatorLabel>
            <CalculatorSelect
              id="city"
              {...register('city', { required: tripCalculator.validation.cityRequired })}
            >
              <option value="">{tripCalculator.form.cityPlaceholder}</option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </CalculatorSelect>
            {errors.city && <CalculatorError>{errors.city.message}</CalculatorError>}
          </CalculatorFormGroup>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="startDate">{tripCalculator.form.startDateLabel}</CalculatorLabel>
            <CalculatorInput
              id="startDate"
              type="date"
              {...register('startDate', { required: tripCalculator.validation.startDateRequired })}
            />
            {errors.startDate && <CalculatorError>{errors.startDate.message}</CalculatorError>}
          </CalculatorFormGroup>
          <CalculatorFormGroup>
            <CalculatorLabel htmlFor="endDate">{tripCalculator.form.endDateLabel}</CalculatorLabel>
            <CalculatorInput
              id="endDate"
              type="date"
              min={startDate || undefined}
              {...register('endDate', { required: tripCalculator.validation.endDateRequired })}
            />
            {errors.endDate && <CalculatorError>{errors.endDate.message}</CalculatorError>}
          </CalculatorFormGroup>
          <CalculatorSubmitButton type="submit">{tripCalculator.form.submitButton}</CalculatorSubmitButton>
        </form>
        {result && (
          <CalculatorResult>
            <CalculatorResultMessage>
              {tripCalculator.result.message
                .replace('{daysNum}', result.daysNum)
                .replace('{city}', result.city)}
            </CalculatorResultMessage>
            <CalculatorBreakdown>
              {result.breakdown.items.map(({ label, amount }) => (
                <CalculatorBreakdownItem key={label}>
                  <span>{label} :</span>
                  <span>{formatCurrency(amount)}</span>
                </CalculatorBreakdownItem>
              ))}
              <CalculatorBreakdownTotal>
                <span>{tripCalculator.result.total} :</span>
                <span>{formatCurrency(result.breakdown.total)}</span>
              </CalculatorBreakdownTotal>
            </CalculatorBreakdown>
          </CalculatorResult>
        )}
        </CalculatorContainer>
      </CalculatorMain>
    </CalculatorPageWrapper>
  );
}
