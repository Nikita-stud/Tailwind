import { API_REGISTER } from "../../constants/constants.mjs";
import { createPostRequest } from "../../events/helpers/createPostRequest.mjs";
import { catchAndDisplay } from "../../ui/helpers/catchAndDisplay.mjs";

/**
 * Register user by sending their form values to server and then redirecting to login page
 * 
 * @param {Object} user The Object contains the username, email and password
 * 
 * @example
 * ```js
 *  //Sending the param inside the method function to POST to the server
 * const postData = createPostRequest(user);
 * const response = await fetch(API_LOGIN, postData);
 * //Awaits a response and if ok sends the user to login page 
 *  window.location.replace("/")
 * ```
 */

export async function registerUser(user){
  const button = document.getElementById("submitRegister");
  const fieldset = document.getElementById("fieldset");
  fieldset.disabled = true;
  button.innerText = "Logging in...";
  let jsonValue = {};
  try{
    const postData = createPostRequest(user);
    const response = await fetch(API_REGISTER, postData);
    const json = await response.json();
    jsonValue = json;
  
    if(!response.ok){
      throw new Error(json.errors?.[0]?.message || "Registration failed");
    }else{
      window.location.href("/")
    }
  }catch(error){
    catchAndDisplay(`#errorContainer`, jsonValue.errors?.[0]?.message)
  }finally{
    fieldset.disabled = false;
    button.innerText = "SIGN UP";
  }
}