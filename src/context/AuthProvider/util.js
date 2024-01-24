export function setTokenLocalStorage(token) {
  localStorage.setItem('@token', token);
}

export function setTokenSessionStorage(token) {
  sessionStorage.setItem('@token', token);
}

export function getTokenStorage() {
  return localStorage.getItem('@token') || sessionStorage.getItem('@token');
}

export function clearTokenLocalStorage() {
  localStorage.removeItem('@token');
}

export function clearTokenSessionStorage() {
  sessionStorage.removeItem('@token');
}
