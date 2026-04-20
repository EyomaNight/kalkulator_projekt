import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fitness Kalkulator - BMI, TDEE, Makroskład',
  description: 'Kompleksowe narzędzie do śledzenia postępów fitness, obliczania kalorii i planowania treningów',
  keywords: 'fitness, kalkulator, BMI, TDEE, diet, training',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
