import { API_BASE } from "../../constants/constants.js";
import { API_REGISTER } from "../../constants/constants.js";
import { getValuesFromForm } from "../../helper/events/getValuesFromForm.js";

// const registerForm = document.getElementById("registerForm");

export async function registerHandler(url){
  try{
    const formObject =  getValuesFromForm("#registerForm");

    const postData ={
      method : `POST`,
      headers: {

      },
      body: JSON.stringify({
        "name": formObject.name,
        "email": formObject.email,
        "password": formObject.password,
      })
    }
  const response = await fetch(url, postData);
  const json = await response.json();
  return json; 

  }catch(error){
    console.log("Error in registering user")
  }
}
registerHandler(`${API_BASE}${API_REGISTER}`);