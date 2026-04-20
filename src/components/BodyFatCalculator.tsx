'use client';

import { useState } from 'react';

export default function BodyFatCalculator() {
  const [gender, setGender] = useState<string>('male');
  const [weight, setWeight] = useState<number>();
  const [neck, setNeck] = useState<number>();
  const [waist, setWaist] = useState<number>();
  const [hip, setHip] = useState<number>();
  const [bodyFat, setBodyFat] = useState<number | null>(null);
  const [leanMass, setLeanMass] = useState<number | null>(null);

  const calculateBodyFat = () => {
    if (!weight || !neck || !waist || (gender === 'female' && !hip)) {
      alert('Wypełnij wszystkie pola!');
      return;
    }

    let bf = 0;

    if (gender === 'male') {
      bf = 495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(weight)) - 450;
    } else {
      if (!hip) return;
      bf = 495 / (1.29579 - 0.35004 * Math.log10(waist + hip - neck) + 0.22100 * Math.log10(weight)) - 450;
    }

    const lm = weight - (weight * (bf / 100));

    setBodyFat(Math.round(bf * 10) / 10);
    setLeanMass(Math.round(lm * 10) / 10);
  };

  const getBodyFatCategory = () => {
    if (bodyFat === null) return '';

    if (gender === 'male') {
      if (bodyFat < 6) return 'Bardzo niska (profesjonalny sportowiec)';
      if (bodyFat < 13) return 'Niska (widoczne mięśnie)';
      if (bodyFat < 18) return 'Fit (zdrowa waga)';
      if (bodyFat < 25) return 'Średnia (norma)';
      return 'Wysoka (nadwaga)';
    } else {
      if (bodyFat < 13) return 'Bardzo niska (profesjonalny sportowiec)';
      if (bodyFat < 20) return 'Niska (widoczne mięśnie)';
      if (bodyFat < 25) return 'Fit (zdrowa waga)';
      if (bodyFat < 32) return 'Średnia (norma)';
      return 'Wysoka (nadwaga)';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Kalkulator Procentu Tkanki Tłuszczowej</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Płeć
        </label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="male">Mężczyzna</option>
          <option value="female">Kobieta</option>
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
            placeholder="np. 75"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Szyja (cm)
          </label>
          <input
            type="number"
            value={neck || ''}
            onChange={(e) => setNeck(Number(e.target.value))}
            placeholder="np. 37"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Talia (cm)
          </label>
          <input
            type="number"
            value={waist || ''}
            onChange={(e) => setWaist(Number(e.target.value))}
            placeholder="np. 80"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {gender === 'female' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Biodra (cm)
            </label>
            <input
              type="number"
              value={hip || ''}
              onChange={(e) => setHip(Number(e.target.value))}
              placeholder="np. 95"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
        )}
      </div>

      <button
        onClick={calculateBodyFat}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Oblicz Procent Tkanki Tłuszczowej
      </button>

      {bodyFat !== null && (
        <div className="mt-4 p-4 bg-purple-100 rounded-md">
          <p className="text-lg font-bold text-gray-800">
            Twoja tkanka tłuszczowa: <span className="text-2xl text-purple-600">{bodyFat}%</span>
          </p>
          <p className="text-md text-gray-700 mt-2">
            Kategoria: <span className="font-bold">{getBodyFatCategory()}</span>
          </p>
          <p className="text-md text-gray-700 mt-2">
            Masa mięśniowa: <span className="font-bold text-green-600">{leanMass} kg</span>
          </p>
        </div>
      )}
    </div>
  );
}
