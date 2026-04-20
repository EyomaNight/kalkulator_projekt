'use client';

import { useState } from 'react';

export default function OneRMCalculator() {
  const [weight, setWeight] = useState<number>();
  const [reps, setReps] = useState<number>();
  const [oneRM, setOneRM] = useState<number | null>(null);
  const [formula, setFormula] = useState<string>('epley');

  const calculateOneRM = () => {
    if (!weight || !reps || reps < 1) {
      alert('Podaj wagę i liczbę powtórzeń!');
      return;
    }

    let rm = 0;

    if (formula === 'epley') {
      // Epley Formula: 1RM = weight × (1 + reps/30)
      rm = weight * (1 + reps / 30);
    } else if (formula === 'brzycki') {
      // Brzycki Formula: 1RM = weight × 36 / (37 - reps)
      rm = (weight * 36) / (37 - reps);
    } else if (formula === 'lander') {
      // Lander Formula: 1RM = (100 × weight) / (101.3 - 2.67123 × reps)
      rm = (100 * weight) / (101.3 - 2.67123 * reps);
    } else if (formula === 'mayhew') {
      // Mayhew Formula: 1RM = (100 × weight) / (52.2 + 41.9 × e^(-0.055 × reps))
      rm =
        (100 * weight) /
        (52.2 + 41.9 * Math.pow(Math.E, -0.055 * reps));
    }

    setOneRM(Math.round(rm * 10) / 10);
  };

  const getStrengthLevel = () => {
    if (!oneRM || !weight) return '';

    const ratio = oneRM / weight;

    if (ratio < 1.1) return 'Początkujący';
    if (ratio < 1.3) return 'Średniozaawansowany';
    if (ratio < 1.5) return 'Zaawansowany';
    return 'Ekspert';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Kalkulator Maksymalnego Powtórzenia (1RM)
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Formuła obliczeniowa
        </label>
        <select
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="epley">Epley (most popularna)</option>
          <option value="brzycki">Brzycki</option>
          <option value="lander">Lander</option>
          <option value="mayhew">Mayhew</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Waga (kg)
          </label>
          <input
            type="number"
            value={weight || ''}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="np. 100"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Powtórzenia
          </label>
          <input
            type="number"
            value={reps || ''}
            onChange={(e) => setReps(Number(e.target.value))}
            placeholder="np. 5"
            min="1"
            max="10"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </div>

      <button
        onClick={calculateOneRM}
        className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Oblicz 1RM
      </button>

      {oneRM !== null && (
        <div className="mt-4 p-4 bg-red-100 rounded-md">
          <p className="text-lg font-bold text-gray-800">
            Twoje maksymalne powtórzenie: <span className="text-2xl text-red-600">{oneRM} kg</span>
          </p>
          <p className="text-md text-gray-700 mt-2">
            Poziom zaawansowania: <span className="font-bold">{getStrengthLevel()}</span>
          </p>

          <div className="mt-4 p-3 bg-white rounded border border-red-200">
            <p className="text-sm font-bold text-gray-700 mb-2">Przybliżone ciężary dla danej liczby powtórzeń:</p>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[1, 3, 5, 8, 10].map((rep) => (
                <div key={rep} className="bg-red-50 p-2 rounded text-center">
                  <p className="text-gray-600">{rep} x rep</p>
                  <p className="font-bold text-red-600">
                    {Math.round((oneRM / (1 + rep / 30)) * 10) / 10} kg
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
