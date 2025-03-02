/**
 *  Gets the current time and creates an unique ID
 * 
 * @returns {string} The unique ID is returned
 * 
 * @example
 * ```js
 * //Gets your local time and saves it, rounds the number down that gets back from 0-1 multiplied by 1000
 * const time = new Date().getTime();
 * const randomNumber = Math.floor(Math.random() * 1000);
 * ```
 */

export function generateUniqueId(){
  const time = new Date().getTime();
  const randomNumber = Math.floor(Math.random() * 1000);
  return `${time}-${randomNumber}`;
}