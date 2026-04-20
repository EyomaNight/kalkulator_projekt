'use client';

import { useState } from 'react';

export default function TDEECalculator() {
  const [age, setAge] = useState<number>();
  const [weight, setWeight] = useState<number>();
  const [height, setHeight] = useState<number>();
  const [gender, setGender] = useState<string>('male');
  const [activity, setActivity] = useState<string>('moderate');
  const [tdee, setTDEE] = useState<number | null>(null);

  const calculateTDEE = () => {
    if (!age || !weight || !height) {
      alert('Wypełnij wszystkie pola!');
      return;
    }

    let bmr = 0;

    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }

    const activityMultipliers: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const tdeeValue = bmr * (activityMultipliers[activity] || 1.55);
    setTDEE(Math.round(tdeeValue));
  };

  const getCalorieGoals = () => {
    if (!tdee) return null;

    return {
      cut: Math.round(tdee * 0.8),
      maintain: tdee,
      bulk: Math.round(tdee * 1.1),
    };
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Kalkulator Zapotrzebowania Kalorycznego (TDEE)
      </h2>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wiek
          </label>
          <input
            type="number"
            value={age || ''}
            onChange={(e) => setAge(Number(e.target.value))}
            placeholder="np. 25"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Wzrost (cm)
          </label>
          <input
            type="number"
            value={height || ''}
            onChange={(e) => setHeight(Number(e.target.value))}
            placeholder="np. 180"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Płeć
          </label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="male">Mężczyzna</option>
            <option value="female">Kobieta</option>
          </select>
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Poziom Aktywności
        </label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="sedentary">Siedzący tryb życia</option>
          <option value="light">Lekka aktywność (1-3 dni treningów/tydzień)</option>
          <option value="moderate">Umiarkowana aktywność (3-5 dni treningów/tydzień)</option>
          <option value="active">Wysoka aktywność (6-7 dni treningów/tydzień)</option>
          <option value="veryActive">Bardzo wysoka aktywność (intensywny trening)</option>
        </select>
      </div>

      <button
        onClick={calculateTDEE}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Oblicz TDEE
      </button>

      {tdee !== null && (
        <div className="mt-4 p-4 bg-green-100 rounded-md">
          <p className="text-lg font-bold text-gray-800">
            Twoje dzienne zapotrzebowanie kaloryczne: <span className="text-2xl text-green-600">{tdee} kcal</span>
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {getCalorieGoals() && (
              <>
                <div className="bg-red-50 p-3 rounded text-center">
                  <p className="text-sm text-gray-700">Odchudzanie</p>
                  <p className="font-bold text-red-600">{getCalorieGoals()?.cut} kcal</p>
                </div>
                <div className="bg-blue-50 p-3 rounded text-center">
                  <p className="text-sm text-gray-700">Utrzymanie</p>
                  <p className="font-bold text-blue-600">{getCalorieGoals()?.maintain} kcal</p>
                </div>
                <div className="bg-orange-50 p-3 rounded text-center">
                  <p className="text-sm text-gray-700">Budowa</p>
                  <p className="font-bold text-orange-600">{getCalorieGoals()?.bulk} kcal</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
