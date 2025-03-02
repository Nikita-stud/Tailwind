import { API_LOGIN } from "../../constants/constants.mjs";
import { saveLocalStorage } from "../../events/auth/saveLocalStorage.mjs";
import { createPostRequest } from "../../events/helpers/createPostRequest.mjs";
import { catchAndDisplay } from "../../ui/helpers/catchAndDisplay.mjs";

/**
 * Logs in user and saves the JWT and email in the localStorage then redirects to feed page
 * 
 * @param {Object} user The Object contains the email and password
 * 
 * @example
 * ```js
 *  //Sending the param inside the method function to POST to the server
 * const postData = createPostRequest(user);
 * const response = await fetch(API_LOGIN, postData);
 * //Awaits a response that we can get the JWT key from and save it in local Storage
 * //with the email for saving in the posts to know they are yours, then sends you to feed page
 *  const token = json.data.accessToken;
 *   if(token){
 *     saveLocalStorage('token', token);
 *     saveLocalStorage('email', user.email)
 *     document.location.href ="/feed";
 *   }
 * ```
 */

export async function loginUser(user){
  const button = document.getElementById("loginButton");
  const fieldset = document.getElementById("fieldset");
  fieldset.disabled = true;
  button.innerText = "Logging in...";
  let jsonValue = {};
  try{
    const postData = createPostRequest(user);
    const response = await fetch(API_LOGIN, postData);
    const json = await response.json();
    jsonValue= json;

    if(!response.ok){
      throw new Error(json.errors?.[0]?.message || "Login failed");
    }

    const token = json.data.accessToken;
    if(token){
      saveLocalStorage('token', token);
      saveLocalStorage('email', user.email)
      document.location.href ="/feed";
    }
  }catch(error){
    catchAndDisplay(`#errorContainer`, jsonValue.errors?.[0]?.message)
  }finally{
    fieldset.disabled = false;
    button.innerText = "LOGIN";
  }
}