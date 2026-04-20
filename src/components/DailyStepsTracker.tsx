'use client';

import { useState, useEffect } from 'react';

export default function DailyStepsTracker() {
  const [steps, setSteps] = useState<number>(0);
  const [dailyGoal, setDailyGoal] = useState<number>(10000);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newGoal, setNewGoal] = useState<string>('');

  const dailyGoalDefault = 10000;

  const addSteps = (amount: number) => {
    setSteps(steps + amount);
  };

  const resetSteps = () => {
    setSteps(0);
  };

  const updateGoal = () => {
    if (newGoal && Number(newGoal) > 0) {
      setDailyGoal(Number(newGoal));
      setIsEditing(false);
      setNewGoal('');
    }
  };

  const percentage = Math.round((steps / dailyGoal) * 100);

  const getCaloriesBurned = () => {
    // Average: 1 step ~= 0.04 calories for average person
    return Math.round(steps * 0.04);
  };

  const getDistanceKm = () => {
    // Average step length: 0.762 meters
    return (steps * 0.762) / 1000;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-gray-800">Licznik Kroków 👟</h2>
        {isEditing ? (
          <div className="flex gap-2">
            <input
              type="number"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              placeholder={`${dailyGoal} kroków`}
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
          <span className="font-bold text-gray-700">{steps.toLocaleString()} / {dailyGoal.toLocaleString()} kroków</span>
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
          onClick={() => addSteps(500)}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-lg transition"
        >
          + 500
        </button>
        <button
          onClick={() => addSteps(1000)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition"
        >
          + 1000
        </button>
        <button
          onClick={() => addSteps(5000)}
          className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 rounded-lg transition"
        >
          + 5000
        </button>
      </div>

      {steps > 0 && (
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-blue-100 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-700">Dystans</p>
            <p className="text-2xl font-bold text-blue-600">{getDistanceKm().toFixed(2)} km</p>
          </div>

          <div className="bg-orange-100 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-700">Spalane kalorie</p>
            <p className="text-2xl font-bold text-orange-600">{getCaloriesBurned()} kcal</p>
          </div>
        </div>
      )}

      <button
        onClick={resetSteps}
        className="w-full bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 rounded-lg transition"
      >
        Resetuj dzisiaj
      </button>

      <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-gray-700">
          <span className="font-bold">💡 Wskazówka:</span> WHO rekomenduje minimum {dailyGoalDefault.toLocaleString()} kroków dziennie dla zdrowia. To około 5 km dziennie!
        </p>
      </div>
    </div>
  );
}
