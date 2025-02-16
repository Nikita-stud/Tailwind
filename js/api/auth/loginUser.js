import { API_LOGIN } from "../../constants/constants.js";
import { saveLocalStorage } from "../../events/auth/saveLocalStorage.js";

export async function loginUser(user){
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

  if(!json.ok){
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
}