/**
 * Storage utilities dla Local Storage
 */

interface UserProfile {
  name: string;
  age: number;
  gender: 'male' | 'female';
  weight: number;
  height: number;
  goal: 'cutting' | 'bulking' | 'balanced';
}

const STORAGE_KEYS = {
  USER_PROFILE: 'fitness_user_profile',
  PROGRESS_ENTRIES: 'fitness_progress_entries',
  WATER_INTAKE: 'fitness_water_intake',
};

/**
 * Pobiera profil użytkownika z Local Storage
 */
export const getUserProfile = (): UserProfile | null => {
  if (typeof window === 'undefined') return null;

  const stored = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
  return stored ? JSON.parse(stored) : null;
};

/**
 * Zapisuje profil użytkownika w Local Storage
 */
export const saveUserProfile = (profile: UserProfile): void => {
  if (typeof window === 'undefined') return;

  localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
};

/**
 * Pobiera historię postępów
 */
export const getProgressEntries = () => {
  if (typeof window === 'undefined') return [];

  const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS_ENTRIES);
  return stored ? JSON.parse(stored) : [];
};

/**
 * Dodaje nowy wpis postępu
 */
export const addProgressEntry = (entry: any): void => {
  if (typeof window === 'undefined') return;

  const entries = getProgressEntries();
  entries.push(entry);
  localStorage.setItem(STORAGE_KEYS.PROGRESS_ENTRIES, JSON.stringify(entries));
};

/**
 * Usuwa wpis postępu
 */
export const deleteProgressEntry = (id: number): void => {
  if (typeof window === 'undefined') return;

  const entries = getProgressEntries();
  const filtered = entries.filter((entry: any) => entry.id !== id);
  localStorage.setItem(STORAGE_KEYS.PROGRESS_ENTRIES, JSON.stringify(filtered));
};

/**
 * Pobiera dzisienne spożycie wody
 */
export const getTodayWaterIntake = () => {
  if (typeof window === 'undefined') return 0;

  const today = new Date().toISOString().split('T')[0];
  const stored = localStorage.getItem(STORAGE_KEYS.WATER_INTAKE);

  if (!stored) return 0;

  const data = JSON.parse(stored);
  return data[today] || 0;
};

/**
 * Dodaje spożytą wodę
 */
export const addWaterIntake = (amount: number): void => {
  if (typeof window === 'undefined') return;

  const today = new Date().toISOString().split('T')[0];
  const stored = localStorage.getItem(STORAGE_KEYS.WATER_INTAKE);
  const data = stored ? JSON.parse(stored) : {};

  data[today] = (data[today] || 0) + amount;
  localStorage.setItem(STORAGE_KEYS.WATER_INTAKE, JSON.stringify(data));
};

/**
 * Resetuje dzienne spożycie wody
 */
export const resetWaterIntake = (): void => {
  if (typeof window === 'undefined') return;

  const today = new Date().toISOString().split('T')[0];
  const stored = localStorage.getItem(STORAGE_KEYS.WATER_INTAKE);
  const data = stored ? JSON.parse(stored) : {};

  data[today] = 0;
  localStorage.setItem(STORAGE_KEYS.WATER_INTAKE, JSON.stringify(data));
};

/**
 * Czyści wszystkie dane
 */
export const clearAllData = (): void => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
  localStorage.removeItem(STORAGE_KEYS.PROGRESS_ENTRIES);
  localStorage.removeItem(STORAGE_KEYS.WATER_INTAKE);
};
