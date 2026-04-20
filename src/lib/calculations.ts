/**
 * Kalkulacje fitness - utility functions
 */

/**
 * Oblicza BMI (Indeks Masy Ciała)
 * @param weight - waga w kg
 * @param height - wzrost w cm
 * @returns BMI zaokrąglone do 1 miejsca po przecinku
 */
export const calculateBMI = (weight: number, height: number): number => {
  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  return Math.round(bmi * 10) / 10;
};

/**
 * Zwraca kategorię BMI
 */
export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) return 'Niedowaga';
  if (bmi < 25) return 'Prawidłowa waga';
  if (bmi < 30) return 'Nadwaga';
  return 'Otyłość';
};

/**
 * Oblicza BMR (Basal Metabolic Rate) metodą Mifflina-St Jeora
 */
export const calculateBMR = (
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female'
): number => {
  if (gender === 'male') {
    return 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
  } else {
    return 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
  }
};

/**
 * Oblicza TDEE (Total Daily Energy Expenditure)
 */
export const calculateTDEE = (
  weight: number,
  height: number,
  age: number,
  gender: 'male' | 'female',
  activityLevel: number
): number => {
  const bmr = calculateBMR(weight, height, age, gender);
  return Math.round(bmr * activityLevel);
};

/**
 * Oblicza procent tkanki tłuszczowej (metoda 3-pomiarowa dla mężczyzn)
 */
export const calculateBodyFatMale = (
  weight: number,
  neck: number,
  waist: number
): number => {
  const bf =
    495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(weight)) - 450;
  return Math.round(bf * 10) / 10;
};

/**
 * Oblicza procent tkanki tłuszczowej (metoda 3-pomiarowa dla kobiet)
 */
export const calculateBodyFatFemale = (
  weight: number,
  neck: number,
  waist: number,
  hip: number
): number => {
  const bf =
    495 /
      (1.29579 -
        0.35004 * Math.log10(waist + hip - neck) +
        0.22100 * Math.log10(weight)) -
    450;
  return Math.round(bf * 10) / 10;
};

/**
 * Oblicza masę mięśniową na podstawie wagi i procentu tkanki tłuszczowej
 */
export const calculateLeanMass = (weight: number, bodyFatPercent: number): number => {
  const leanMass = weight - (weight * (bodyFatPercent / 100));
  return Math.round(leanMass * 10) / 10;
};

/**
 * Oblicza rozpodział makroskładników
 */
export const calculateMacros = (
  tdee: number,
  goal: 'balanced' | 'cutting' | 'bulking'
): { protein: number; carbs: number; fat: number } => {
  let proteinPercent = 0.3;
  let carbPercent = 0.4;
  let fatPercent = 0.3;

  if (goal === 'cutting') {
    proteinPercent = 0.35;
    carbPercent = 0.35;
    fatPercent = 0.3;
  } else if (goal === 'bulking') {
    proteinPercent = 0.3;
    carbPercent = 0.45;
    fatPercent = 0.25;
  }

  return {
    protein: Math.round((tdee * proteinPercent) / 4),
    carbs: Math.round((tdee * carbPercent) / 4),
    fat: Math.round((tdee * fatPercent) / 9),
  };
};

/**
 * Zwraca kategorię tkanki tłuszczowej
 */
export const getBodyFatCategory = (bodyFat: number, gender: 'male' | 'female'): string => {
  if (gender === 'male') {
    if (bodyFat < 6) return 'Bardzo niska (profesjonalny sportowiec)';
    if (bodyFat < 13) return 'Niska (widoczne mięśnie)';
    if (bodyFat < 18) return 'Fit (zdrowa waga)';
    if (bodyFat < 25) return 'Średnia (norma)';
    return 'Wysoka (nadwaga)';
  } else {
    if (bodyFat < 13) return 'Bardzo niska (profesjonalny sportowiec)';
    if (bodyFat < 20) return 'Niska (widoczne mięśnie)';
    if (bodyFat < 25) return 'Fit (zdrowa waga)';
    if (bodyFat < 32) return 'Średnia (norma)';
    return 'Wysoka (nadwaga)';
  }
};
