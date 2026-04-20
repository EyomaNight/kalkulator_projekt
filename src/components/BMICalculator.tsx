'use client';

import { useState } from 'react';

export default function BMICalculator() {
  const [height, setHeight] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [bmi, setBMI] = useState<number | null>(null);
  const [category, setCategory] = useState<string>('');

  const calculateBMI = () => {
    if (!height || !weight) {
      alert('Wypełnij wszystkie pola!');
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBMI(Math.round(bmiValue * 10) / 10);

    if (bmiValue < 18.5) {
      setCategory('Niedowaga');
    } else if (bmiValue < 25) {
      setCategory('Prawidłowa waga');
    } else if (bmiValue < 30) {
      setCategory('Nadwaga');
    } else {
      setCategory('Otyłość');
    }
  };

  const getBMIColor = () => {
    if (!category) return 'bg-gray-100';
    if (category === 'Niedowaga') return 'bg-blue-100';
    if (category === 'Prawidłowa waga') return 'bg-green-100';
    if (category === 'Nadwaga') return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Kalkulator BMI</h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wzrost (cm)
          </label>
          <input
            type="number"
            value={height || ''}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="np. 180"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Waga (kg)
          </label>
          <input
            type="number"
            value={weight || ''}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="np. 75"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <button
        onClick={calculateBMI}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Oblicz BMI
      </button>

      {bmi !== null && (
        <div className={`mt-4 p-4 rounded-md ${getBMIColor()}`}>
          <p className="text-lg font-bold text-gray-800">
            Twoje BMI: <span className="text-2xl text-blue-600">{bmi}</span>
          </p>
          <p className="text-md text-gray-700 mt-2">
            Kategoria: <span className="font-bold">{category}</span>
          </p>
        </div>
      )}
    </div>
  );
}
