import { loginUser } from "../../api/auth/loginUser.mjs";
import { registerUser } from "../../api/auth/registerUser.mjs";
import { createOwnPost } from "../../ui/auth/createOwmPosts.mjs";

/**
 * //Gets the forms values and saves them as an Object, then calls function depending on the URL
 * 
 * @param {string} formID ID of the form in question 
 * @param {string} pathName The URL you are on
 * @param {string} buttonID Submit Button of form in question
 * 
 * @example
 * ```js
 * //When the form is submitted the values of inputs are stored 
 * const data =  new FormData(e.target);
 * const entries =  Object.fromEntries(data.entries());
 * //Depending on the pathname the functions are called
 * if(pathName === "/register.html"){
 *   cta.innerText = "Submitting...";
 *   registerUser(entries);
 * }
 * if(pathName === "/" || pathName === "/index.html"){
 *   loginUser(entries);
 * }
 * if(pathName ==="/feed/"){
 *   createOwnPost(entries);
 * }
 * ```
 */

export function formHandler(formID, pathName, buttonID){
  const formRegister = document.querySelector(`${formID}`);
  const cta = document.querySelector(`${buttonID}`);
  
  formRegister.addEventListener("submit", (e)=>{
    e.preventDefault();
  
    const data =  new FormData(e.target);
    const entries =  Object.fromEntries(data.entries());

    if(pathName === "/register.html"){
      cta.innerText = "Submitting...";
      registerUser(entries);
    }
    if(pathName === "/" || pathName === "/index.html"){
      loginUser(entries);
    }
    if(pathName ==="/feed/"){
      createOwnPost(entries);
    }
  });
}