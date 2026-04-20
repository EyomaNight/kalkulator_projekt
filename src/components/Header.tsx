'use client';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="text-4xl">🏋️</div>
            <div>
              <h1 className="text-3xl font-bold">Fitness Kalkulator</h1>
              <p className="text-blue-100 text-sm">Przekształć swoje cele fitness w rzeczywistość</p>
            </div>
          </div>

          <div className="hidden md:flex gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-blue-100 text-sm">Motywacja</div>
            </div>
            <div className="text-center border-l border-r border-blue-300 px-6">
              <div className="text-2xl font-bold">∞</div>
              <div className="text-blue-100 text-sm">Możliwości</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">📊</div>
              <div className="text-blue-100 text-sm">Dane</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
