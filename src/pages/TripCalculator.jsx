import { useState } from 'react';
import { cityCosts } from '../data/destinations';

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
    setResult(`You need approximately $${totalCost} for your ${daysNum} day trip to ${city}.`);
  };

  return (
    <div className="calculator-main">
      <h1 className="calculator-title">Trip Calculator</h1>
      <div className="calculator-container">
        <form id="tripCalculatorForm" onSubmit={handleSubmit}>
          <div className="calculator-form-group">
            <label htmlFor="city" className="calculator-label">
              Place you wish to visit:
            </label>
            <select
              id="city"
              className="calculator-select"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            >
              <option value="">Select a city</option>
              {cities.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="calculator-form-group">
            <label htmlFor="days" className="calculator-label">
              Number of days:
            </label>
            <input
              id="days"
              type="number"
              min="1"
              className="calculator-input"
              value={days}
              onChange={(e) => setDays(e.target.value)}
              placeholder="e.g. 5"
            />
          </div>
          <button type="submit" className="btn calculator-btn">
            Calculate Cost
          </button>
        </form>
        {result && (
          <div className="calculator-result" style={{ display: 'block' }}>
            <p id="resultMessage" className="calculator-result-message">
              {result}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
