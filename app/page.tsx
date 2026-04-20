import BMICalculator from '@/components/BMICalculator';
import TDEECalculator from '@/components/TDEECalculator';
import BodyFatCalculator from '@/components/BodyFatCalculator';
import MacroCalculator from '@/components/MacroCalculator';
import OneRMCalculator from '@/components/OneRMCalculator';
import CaloriesBurnedCalculator from '@/components/CaloriesBurnedCalculator';
import FitnessTips from '@/components/FitnessTips';
import ProgressTracker from '@/components/ProgressTracker';
import WaterIntakeTracker from '@/components/WaterIntakeTracker';
import DailyStepsTracker from '@/components/DailyStepsTracker';
import InfoSection from '@/components/InfoSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            💪 Fitness Kalkulator
          </h1>
          <p className="text-xl text-gray-700">
            Kompleksowe narzędzie do śledzenia postępów i planowania treningów
          </p>
        </div>

        {/* Info Section */}
        <InfoSection />

        {/* Main Content - Three Sections */}
        <div className="grid grid-cols-1 gap-8">
          {/* Kalkulatory Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">🔢 Kalkulatory</h2>
            <div className="space-y-6">
              <BMICalculator />
              <TDEECalculator />
              <BodyFatCalculator />
              <MacroCalculator />
              <OneRMCalculator />
              <CaloriesBurnedCalculator />
            </div>
          </div>

          {/* Śledzenie Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">📊 Śledzenie Postępów</h2>
            <div className="space-y-6">
              <WaterIntakeTracker />
              <DailyStepsTracker />
              <ProgressTracker />
            </div>
          </div>

          {/* Porady Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">💡 Porady Fitness</h2>
            <FitnessTips />
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>
            💪 Rób konsekwentnie, rób mądrze, rób zmiany! 🚀
          </p>
        </div>
      </div>
    </main>
  );
}
