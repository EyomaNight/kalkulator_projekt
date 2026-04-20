'use client';

import { useState } from 'react';

export default function MacroCalculator() {
  const [tdee, setTDEE] = useState<number>();
  const [goal, setGoal] = useState<string>('balanced');
  const [macros, setMacros] = useState<{ protein: number; carbs: number; fat: number } | null>(null);

  const calculateMacros = () => {
    if (!tdee) {
      alert('Podaj swoje dzienne zapotrzebowanie kaloryczne (TDEE)');
      return;
    }

    let proteinPercent = 0.3;
    let carbPercent = 0.4;
    let fatPercent = 0.3;

    if (goal === 'cutting') {
      proteinPercent = 0.35;
      carbPercent = 0.35;
      fatPercent = 0.3;
    } else if (goal === 'bulking') {
      proteinPercent = 0.3;
      carbPercent = 0.45;
      fatPercent = 0.25;
    }

    const protein = Math.round((tdee * proteinPercent) / 4);
    const carbs = Math.round((tdee * carbPercent) / 4);
    const fat = Math.round((tdee * fatPercent) / 9);

    setMacros({ protein, carbs, fat });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Kalkulator Makronutrientów</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Twoje TDEE (kcal/dzień)
        </label>
        <input
          type="number"
          value={tdee || ''}
          onChange={(e) => setTDEE(Number(e.target.value))}
          placeholder="np. 2500"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cel
        </label>
        <select
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="balanced">Zrównoważony (35% białko, 40% węglowodany, 25% tłuszcze)</option>
          <option value="cutting">Odchudzanie (35% białko, 35% węglowodany, 30% tłuszcze)</option>
          <option value="bulking">Budowa masy (30% białko, 45% węglowodany, 25% tłuszcze)</option>
        </select>
      </div>

      <button
        onClick={calculateMacros}
        className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Oblicz Makroskład
      </button>

      {macros && (
        <div className="mt-4 space-y-3">
          <div className="bg-pink-100 p-4 rounded-md">
            <p className="text-sm text-gray-700">Białko</p>
            <p className="text-2xl font-bold text-pink-600">{macros.protein}g</p>
            <p className="text-xs text-gray-600">{Math.round(macros.protein * 4)} kcal</p>
          </div>

          <div className="bg-yellow-100 p-4 rounded-md">
            <p className="text-sm text-gray-700">Węglowodany</p>
            <p className="text-2xl font-bold text-yellow-600">{macros.carbs}g</p>
            <p className="text-xs text-gray-600">{Math.round(macros.carbs * 4)} kcal</p>
          </div>

          <div className="bg-orange-100 p-4 rounded-md">
            <p className="text-sm text-gray-700">Tłuszcze</p>
            <p className="text-2xl font-bold text-orange-600">{macros.fat}g</p>
            <p className="text-xs text-gray-600">{Math.round(macros.fat * 9)} kcal</p>
          </div>

          <div className="bg-gray-100 p-3 rounded-md mt-4">
            <p className="text-sm font-bold text-gray-700">
              Razem: {Math.round(macros.protein * 4 + macros.carbs * 4 + macros.fat * 9)} kcal
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
