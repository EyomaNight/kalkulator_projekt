'use client';

import { useState } from 'react';

export default function CaloriesBurnedCalculator() {
  const [weight, setWeight] = useState<number>();
  const [duration, setDuration] = useState<number>();
  const [activity, setActivity] = useState<string>('walking');
  const [caloriesBurned, setCaloriesBurned] = useState<number | null>(null);

  const activities: { [key: string]: number } = {
    walking: 3.5,
    jogging: 7.0,
    running: 10.0,
    cycling: 6.0,
    swimming: 5.0,
    hiking: 5.0,
    gym: 6.0,
    yoga: 2.5,
    dancing: 5.0,
    tennis: 7.0,
    kickboxing: 8.0,
    hiit: 9.0,
  };

  const activityNames: { [key: string]: string } = {
    walking: '🚶 Spacer',
    jogging: '🏃 Jogging',
    running: '🏃‍♂️ Bieganie',
    cycling: '🚴 Kolarstwo',
    swimming: '🏊 Pływanie',
    hiking: '🥾 Wędrówka',
    gym: '🏋️ Siłownia (umiarkowana)',
    yoga: '🧘 Joga',
    dancing: '💃 Taniec',
    tennis: '🎾 Tenis',
    kickboxing: '🥊 Kickboxing',
    hiit: '⚡ HIIT (wysoka intensywność)',
  };

  const calculateCalories = () => {
    if (!weight || !duration) {
      alert('Podaj wagę i czas trwania!');
      return;
    }

    const met = activities[activity];
    const calories = met * weight * (duration / 60);

    setCaloriesBurned(Math.round(calories));
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Kalkulator Spalonych Kalorii
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Waga (kg)
        </label>
        <input
          type="number"
          value={weight || ''}
          onChange={(e) => setWeight(Number(e.target.value))}
          placeholder="np. 75"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Typ aktywności
        </label>
        <select
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          {Object.keys(activities).map((act) => (
            <option key={act} value={act}>
              {activityNames[act]}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Czas trwania (minuty)
        </label>
        <input
          type="number"
          value={duration || ''}
          onChange={(e) => setDuration(Number(e.target.value))}
          placeholder="np. 30"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button
        onClick={calculateCalories}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md transition duration-200"
      >
        Oblicz Spalane Kalorie
      </button>

      {caloriesBurned !== null && (
        <div className="mt-4 p-4 bg-orange-100 rounded-md">
          <p className="text-lg font-bold text-gray-800">
            Spalane kalorie: <span className="text-2xl text-orange-600">{caloriesBurned} kcal</span>
          </p>
          <p className="text-md text-gray-700 mt-2">
            {activityNames[activity]} przez {duration} minut dla osoby ważącej {weight} kg
          </p>

          <div className="mt-4 p-3 bg-white rounded border border-orange-200">
            <p className="text-sm text-gray-700">
              💡 <span className="font-bold">Wiadomość:</span> Aby spalić 1 funt (0.45 kg) tłuszczu, należy spalić około 3500 kalorii.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
