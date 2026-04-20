'use client';

import { useState, useEffect } from 'react';

export default function WaterIntakeTracker() {
  const [intakeToday, setIntakeToday] = useState<number>(0);
  const [dailyGoal, setDailyGoal] = useState<number>(2000);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newGoal, setNewGoal] = useState<string>('');

  const glassSize = 250;

  const addWater = (amount: number) => {
    setIntakeToday(intakeToday + amount);
  };

  const resetToday = () => {
    setIntakeToday(0);
  };

  const updateGoal = () => {
    if (newGoal && Number(newGoal) > 0) {
      setDailyGoal(Number(newGoal));
      setIsEditing(false);
      setNewGoal('');
    }
  };

  const percentage = Math.round((intakeToday / dailyGoal) * 100);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Spożycie Wody 💧</h2>
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="number"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder={`${dailyGoal} ml`}
              className="px-2 py-1 border border-gray-300 rounded-md text-sm"
            />
            <button onClick={updateGoal} className="text-sm bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700">
              OK
            </button>
            <button onClick={() => setIsEditing(false)} className="text-sm bg-gray-400 text-white px-2 py-1 rounded hover:bg-gray-500">
              Anuluj
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setIsEditing(true);
              setNewGoal(String(dailyGoal));
            }}
            className="text-sm text-blue-600 hover:text-blue-800 underline"
          >
            Zmień cel
          </button>
        )}
      </div>

      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-bold text-gray-700">{intakeToday} / {dailyGoal} ml</span>
          <span className={`font-bold ${percentage >= 100 ? 'text-green-600' : 'text-blue-600'}`}>{percentage}%</span>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-8 overflow-hidden">
          <div
            className={`h-full ${percentage >= 100 ? 'bg-green-500' : 'bg-blue-500'} transition-all duration-300 flex items-center justify-center text-white text-sm font-bold`}
            style={{ width: `${Math.min(percentage, 100)}%` }}
          >
            {percentage >= 100 && `✓ ${percentage}%`}
            {percentage > 20 && percentage < 100 && `${percentage}%`}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-6">
        <button
          onClick={() => addWater(glassSize)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
        >
          + 250 ml
        </button>
        <button
          onClick={() => addWater(500)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
        >
          + 500 ml
        </button>
        <button
          onClick={() => addWater(1000)}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg transition"
        >
          + 1L
        </button>
      </div>

      <button
        onClick={resetToday}
        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-lg transition"
      >
        Resetuj dzisiaj
      </button>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <span className="font-bold">💡 Wskazówka:</span> Pij co najmniej {dailyGoal} ml wody dziennie. Dla osób trenujących rekomenduje się 3-4 litry.
        </p>
      </div>
    </div>
  );
}
