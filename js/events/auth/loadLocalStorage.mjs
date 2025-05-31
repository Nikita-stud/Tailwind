/**
 * Loads from localStorage the key and value
 * 
 * @param {string} key  Key is the name the value was stored under
 */

export function loadLocalStorage(key){
  return localStorage.getItem(key);
}