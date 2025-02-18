import { API_LOGIN } from "../../constants/constants.js";
import { saveLocalStorage } from "../../events/auth/saveLocalStorage.js";

export async function loginUser(user){
  const button = document.getElementById("loginButton");
  const fieldset = document.getElementById("fieldset");
  try{
    fieldset.disabled = true;
    button.innerText = "Logging in...";
    const postData ={
      method : "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
    const response = await fetch(API_LOGIN, postData);
    const json = await response.json();
    const token = json.data.accessToken;

    if(token){
      saveLocalStorage('token', token);
      saveLocalStorage('email', user.email)
      document.location.href ="/feed";
    }
  }catch(error){
    // if(!error){
    //   throw new Error(json.errors?.[0]?.message || "Registration failed");
    // }
    console.log("This is the error:", error.message)
  }finally{
    fieldset.disabled = false;
    button.innerText = "LOGIN";
  }
}