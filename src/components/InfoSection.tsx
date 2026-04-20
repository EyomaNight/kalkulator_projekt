'use client';

export default function InfoSection() {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-lg shadow-lg p-8 mb-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">📚 Jak Używać Aplikacji?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-xl font-bold text-blue-600 mb-2">1. Kalkulatory</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Skorzystaj z naszych kalkulatorów do obliczenia BMI, zapotrzebowania kalorycznego (TDEE), procentu tkanki tłuszczowej i spodzielanego makroskładu. Wszystkie obliczenia bazują na naukowych formułach.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-xl font-bold text-green-600 mb-2">2. Śledzenie</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Śledź swoje postępy wpisując wagę codziennie. Aplikacja będzie pokazywać średnią wagę i zmianę. Nie zapomnij o pitaniu wody - tracker pomoże ci nie stracić nawyk!
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-xl font-bold text-purple-600 mb-2">3. Porady</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Przeczytaj praktyczne porady dotyczące odchudzania, budowy masy mięśniowej i ogólnego zdrowia. Każda porada jest sprawdzona i oparta na najnowszych badaniach naukowych.
          </p>
        </div>

        <div className="bg-white p-5 rounded-lg shadow">
          <h3 className="text-xl font-bold text-orange-600 mb-2">4. Konsystencja</h3>
          <p className="text-gray-700 text-sm leading-relaxed">
            Klucz do sukcesu to konsystencja! Wykonuj obliczenia regularnie i śledź swoje postępy. Najlepsze efekty widać po 4-8 tygodniach systematycznej pracy.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
        <h3 className="font-bold text-yellow-900 mb-2">⚠️ Ważne!!!</h3>
        <p className="text-yellow-900 text-sm leading-relaxed">
          Ta aplikacja jest narzędziem edukacyjnym i informacyjnym. Wszystkie obliczenia to przybliżenia. Wyniki mogą się różnić w zależności od indywidualnych cech fizycznych. Przed rozpoczęciem nowego programu treningowego lub dietetycznego skonsultuj się z lekarzem lub dietetykiem.
        </p>
      </div>
    </div>
  );
}
