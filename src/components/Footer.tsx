'use client';

export default function Footer() {
  const copyright = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="font-bold text-white mb-3">O Aplikacji</h3>
            <p className="text-sm">
              Fitness Kalkulator to narzędzie do śledzenia postępów fitness, liczenia kalorii i planowania treningów.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">Funkcje</h3>
            <ul className="text-sm space-y-1">
              <li>✓ Kalkulatory fitness</li>
              <li>✓ Śledzenie postępów</li>
              <li>✓ Porady trenera</li>
              <li>✓ Tracker wody</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-3">Disclaimer</h3>
            <p className="text-sm">
              Ta aplikacja jest narzędziem edukacyjnym. Przed zmianą diety lub programu treningowego skonsultuj się z profesjonalistą.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            © {copyright} Fitness Kalkulator • Made with 💪 for Fitness Enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
