export function saveUserPreference(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(`Failed to save preference "${key}":`, error);
  }
}

export function loadUserPreference(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (error) {
    console.error(`Failed to load preference "${key}":`, error);
    return null;
  }
}
