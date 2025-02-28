import { API_REGISTER } from "../../constants/constants.mjs";
import { catchAndDisplay } from "../../ui/helpers/catchAndDisplay.mjs";

export async function registerUser(user){
  const button = document.getElementById("submitRegister");
  const fieldset = document.getElementById("fieldset");
  fieldset.disabled = true;
  button.innerText = "Logging in...";
  let jsonValue = {};
  try{
    const postData ={
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
    const response = await fetch(API_REGISTER, postData);
    const json = await response.json();
    jsonValue = json;
  
    if(!response.ok){
      throw new Error(json.errors?.[0]?.message || "Registration failed");
    }else{
      window.location.replace("/")
    }
  }catch(error){
    catchAndDisplay(`#errorContainer`, jsonValue.errors?.[0]?.message)
  }finally{
    fieldset.disabled = false;
    button.innerText = "SIGN UP";
  }
}