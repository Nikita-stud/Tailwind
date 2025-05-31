/**
 * Saves to localStorage the key and value
 * 
 * @param {string} key  Key is where the name the value will be stored under
 * @param {string} value  Value is should be a string since it is not stringified and parsed back
 */

export function saveLocalStorage(key, value){
  localStorage.setItem(key, value);
}