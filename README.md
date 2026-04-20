# 💪 Fitness Kalkulator

Kompleksowe narzędzie webowe do śledzenia postępów fitness, obliczania kalorii, makroskładu i planowania treningów. Aplikacja zbudowana z Next.js, React i TypeScript z responsywnym designem.

## 🎯 Główne Funkcje

### 📊 Kalkulatory
- **BMI (Body Mass Index)** - Obliczanie i kategoryzacja wskaźnika masy ciała
- **TDEE (Total Daily Energy Expenditure)** - Dzienne zapotrzebowanie kaloryczne z proponowanym podziałem (odchudzanie, utrzymanie, budowa)
- **Procent Tkanki Tłuszczowej** - Metoda 3-pomiarowa (pomiar szyi, talii, bioder)
- **Makroskład** - Rozpodział białka, węglowodanów i tłuszczów wg celu treningu
- **1RM (One Repetition Max)** - Obliczanie maksymalnego powtórzenia (4 formuły)
- **Spalane Kalorie** - Kalorie spalane podczas różnych aktywności fizycznych
- **Indeks Siły** - Ocena poziomu zaawansowania

### 👟 Śledzenie Postępów
- **Tracker Wody** - Codzienny monitoring spożycia wody z progresem i celami
- **Licznik Kroków** - Śledzenie kroków z obliczaniem dystansu i spalanych kalorii
- **Tracker Wagi** - Historyczne śledzenie wagi z wykresami i statystykami
- **Notatki** - Opcjonalne notatki do każdego wpisu

### 💡 Porady
- **Wskazówki Fitness** - Praktyczne rady do odchudzania i budowy masy
- **Zagadnienia Zdrowia** - Informacje o odpoczynku, nawodnieniu i suplementacji

## 🚀 Technologia

| Technologia | Wersja | Cel |
|-------------|--------|-----|
| **Next.js** | ^14.0.0 | React framework |
| **React** | ^18.2.0 | UI library |
| **TypeScript** | ^5.0.0 | Type safety |
| **Tailwind CSS** | ^3.3.0 | Styling |
| **ESLint** | ^8.0.0 | Code quality |
| **Prettier** | ^3.0.0 | Code formatting |

## 📋 Wymagania Systemowe

- Node.js 16+ lub wyższa
- npm, yarn, lub pnpm package manager

## 🛠 Instalacja i Uruchomienie

### 1. Klonowanie Repozytorium
```bash
git clone https://github.com/EyomaNight/kalkulator_projekt.git
cd kalkulator_projekt
```

### 2. Instalacja Zależności
```bash
npm install
# lub
yarn install
# lub
pnpm install
```

### 3. Uruchomienie Serwera Deweloperskiego
```bash
npm run dev
# lub
yarn dev
# lub
pnpm dev
```

Otwórz [http://localhost:3000](http://localhost:3000) w przeglądarce.

### 4. Build Produkcyjny
```bash
npm run build
npm start
```

## 📁 Struktura Projektu

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout z Header i Footer
│   ├── page.tsx                 # Strona główna z całą zawartością
│   └── globals.css              # Globalne style
├── src/
│   ├── components/              # React komponenty
│   │   ├── BMICalculator.tsx           # Kalkulator BMI
│   │   ├── TDEECalculator.tsx          # Kalkulator TDEE
│   │   ├── BodyFatCalculator.tsx       # Kalkulator tkanki tłuszczowej
│   │   ├── MacroCalculator.tsx         # Kalkulator makroskładu
│   │   ├── OneRMCalculator.tsx         # Kalkulator 1RM
│   │   ├── CaloriesBurnedCalculator.tsx # Spalane kalorie
│   │   ├── ProgressTracker.tsx         # Tracker wagi
│   │   ├── WaterIntakeTracker.tsx      # Tracker wody
│   │   ├── DailyStepsTracker.tsx       # Licznik kroków
│   │   ├── FitnessTips.tsx             # Porady fitness
│   │   ├── Header.tsx                  # Header
│   │   ├── Footer.tsx                  # Footer
│   │   └── InfoSection.tsx             # Sekcja informacyjna
│   └── lib/                     # Funkcje utility
│       ├── calculations.ts      # Funkcje obliczeniowe
│       └── storage.ts           # Local Storage helpers
├── public/                      # Static assets
├── package.json                 # Zależności projektu
├── tsconfig.json                # Konfiguracja TypeScript
├── next.config.js               # Konfiguracja Next.js
├── tailwind.config.js           # Konfiguracja Tailwind
├── postcss.config.js            # Konfiguracja PostCSS
├── .eslintrc.json               # ESLint konfiguracja
├── .prettierrc                  # Prettier konfiguracja
└── README.md                    # Dokumentacja
```

## 📝 Dostępne Komendy

```bash
npm run dev           # Start serwer deweloperski
npm run build         # Build dla produkcji
npm start            # Start production server
npm run lint         # Sprawdzenie kodu z ESLint
npm run format       # Formatowanie kodu z Prettier
npm run format:check # Sprawdzenie formatowania
```

## 🎨 Design i UX

- **Responsywny Design** - Działa świetnie na telefonie, tablecie i desktopie
- **Gradientowe Tła** - Nowoczesny, atrakcyjny wygląd
- **Intuicyjny Interfejs** - Łatwy w obsłudze dla każdego
- **Informacyjne Wskazówki** - Podpowiedzi i wyjaśnienia przy każdej funkcji
- **Szybkie Ładowanie** - Zoptymalizowana wydajność

## 🧮 Formuły Obliczeniowe

### BMI
```
BMI = Waga (kg) / (Wzrost (m))²
```

### TDEE - Mifflin-St Jeor
```
Mężczyźni: BMR = 88.362 + (13.397 × waga) + (4.799 × wzrost) - (5.677 × wiek)
Kobiety: BMR = 447.593 + (9.247 × waga) + (3.098 × wzrost) - (4.33 × wiek)
TDEE = BMR × Mnożnik Aktywności
```

### 1RM - Epley
```
1RM = Waga × (1 + Powtórzenia/30)
```

### Spalane Kalorie
```
Kalorie = MET × Waga (kg) × Czas (h)
```

## 💾 Local Storage

Aplikacja automatycznie zapisuje dane w Local Storage przeglądarki:
- **Profil użytkownika** - Dane osobowe
- **Historia postępów** - Historyczne wpisy wagi
- **Spożycie wody** - Dzienne śledzenie hydratacji

Dane pozostają w przeglądarce i nie są wysyłane na serwer.

## 🔒 Bezpieczeństwo i Prywatność

- Wszystkie obliczenia odbywają się w przeglądarce
- Brak przesyłania danych osobowych
- Dane przechowywane lokalnie w Local Storage
- Brak śledzenia lub zbierania danych

## 📚 Zastosowane Koncepty Programistyczne

### React
- ✓ Hooks (useState, useEffect)
- ✓ Komponenty funkcyjne
- ✓ State management
- ✓ Event handling

### TypeScript
- ✓ Type Safety
- ✓ Interfaces (TSX)
- ✓ Type Annotations

### Next.js
- ✓ App Router (nowy standard)
- ✓ Metadata API
- ✓ Client Components ('use client')

### CSS/Tailwind
- ✓ Utility-first CSS
- ✓ Responsive Design (md:, lg:)
- ✓ Gradient backgrounds
- ✓ Hover effects

## 🎓 Poziom Trudności

**Dla początkujących programistów:**
- Czytelny, dobrze skomentowany kod
- Najnowsze standardy React i Next.js
- Praktyczne przykłady use cases
- Odpowiedني dla uczniów 4 klasy technikum

**Oferuje naukę:**
- Hooks React
- TypeScript
- Next.js framework
- Tailwind CSS
- Local Storage API
- Responsywny design

## 🤝 Contributing

Zapraszamy do ulepszania projektu! Możesz:
- Zgłaszać bugi
- Sugerować nowe funkcje
- Poprawiać dokumentację
- Tworzyć pull requests

## 📄 Licencja

Projekt jest dostępny na licencji MIT. Możesz go swobodnie używać i modyfikować.

## 🙏 Credits

- Formuły: StackExchange, PubMed Central
- Design: Tailwind CSS
- Framework: Vercel (Next.js)

## ⚠️ Disclaimer

**Ta aplikacja jest narzędziem edukacyjnym i informacyjnym.**

Obliczenia są przybliżeniami i mogą się różnić w zależności od:
- Budowy ciała
- Genetyki
- Metabolizmu
- Poziomu aktywności

**Przed zmianą diety, suplementacji lub programu treningowego skonsultuj się z:**
- Lekarzem
- Dietetykiem
- Trenerem personalnym

Autorzy nie ponoszą odpowiedzialności za misuse aplikacji.

## 📞 Support

Masz pytania? Skontaktuj się:
- [GitHub Issues](https://github.com/EyomaNight/kalkulator_projekt/issues)
- [GitHub Discussions](https://github.com/EyomaNight/kalkulator_projekt/discussions)

---

**Ostatnia aktualizacja:** Kwiecień 2026

**Stworzono z ❤️ dla fitness enthusiastów**

💪 *Rób konsekwentnie, rób mądrze, rób zmiany!*

