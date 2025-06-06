export function saveUserPreference(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function loadUserPreference(key) {
  return JSON.parse(localStorage.getItem(key));
}
