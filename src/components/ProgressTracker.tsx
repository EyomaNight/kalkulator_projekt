'use client';

import { useState } from 'react';

interface ProgressEntry {
  id: number;
  date: string;
  weight: number;
  notes: string;
}

export default function ProgressTracker() {
  const [entries, setEntries] = useState<ProgressEntry[]>([]);
  const [weight, setWeight] = useState<number>();
  const [notes, setNotes] = useState<string>('');

  const addEntry = () => {
    if (!weight) {
      alert('Podaj wagę!');
      return;
    }

    const today = new Date().toISOString().split('T')[0];

    const newEntry: ProgressEntry = {
      id: Date.now(),
      date: today,
      weight,
      notes,
    };

    setEntries([newEntry, ...entries]);
    setWeight(undefined);
    setNotes('');
  };

  const deleteEntry = (id: number) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  const getWeightChange = () => {
    if (entries.length < 2) return null;

    const newest = entries[0].weight;
    const oldest = entries[entries.length - 1].weight;
    const change = newest - oldest;

    return {
      change: Math.round(change * 10) / 10,
      direction: change < 0 ? 'down' : change > 0 ? 'up' : 'stable',
    };
  };

  const averageWeight = entries.length > 0
    ? Math.round((entries.reduce((sum, entry) => sum + entry.weight, 0) / entries.length) * 10) / 10
    : 0;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Śledzenie Postępów 📊</h2>

      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-4 rounded-lg mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Bieżąca waga (kg)
        </label>
        <div className="flex gap-2">
          <input
            type="number"
            step="0.1"
            value={weight || ''}
            onChange={(e) => setWeight(Number(e.target.value))}
            placeholder="np. 75.5"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="text"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Notatki (opcjonalne)"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={addEntry}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition"
          >
            Dodaj
          </button>
        </div>
      </div>

      {entries.length > 0 && (
        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-100 p-3 rounded-lg text-center">
            <p className="text-sm text-gray-700">Średnia waga</p>
            <p className="text-2xl font-bold text-blue-600">{averageWeight} kg</p>
          </div>

          {getWeightChange() && (
            <>
              <div className={`${getWeightChange()?.change! < 0 ? 'bg-green-100' : 'bg-red-100'} p-3 rounded-lg text-center`}>
                <p className="text-sm text-gray-700">Zmiana wagi</p>
                <p className={`text-2xl font-bold ${getWeightChange()?.change! < 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {getWeightChange()?.change! > 0 ? '+' : ''}{getWeightChange()?.change} kg
                </p>
              </div>

              <div className="bg-purple-100 p-3 rounded-lg text-center">
                <p className="text-sm text-gray-700">Liczba wpisów</p>
                <p className="text-2xl font-bold text-purple-600">{entries.length}</p>
              </div>
            </>
          )}
        </div>
      )}

      {entries.length > 0 ? (
        <div>
          <h3 className="font-bold text-gray-800 mb-3">Historia:</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {entries.map((entry) => (
              <div key={entry.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition">
                <div>
                  <p className="font-bold text-gray-800">{entry.weight} kg</p>
                  <p className="text-sm text-gray-600">{entry.date}</p>
                  {entry.notes && <p className="text-sm text-gray-500 italic">{entry.notes}</p>}
                </div>
                <button
                  onClick={() => deleteEntry(entry.id)}
                  className="text-red-600 hover:text-red-800 font-bold"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500 py-8">Brak wpisów. Zacznij śledzić swoją wagę!</p>
      )}
    </div>
  );
}
