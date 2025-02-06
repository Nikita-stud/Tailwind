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
  console.log(json)
  //This lines gets the accessToken that you get from sending in the loginForm to the Noroff API and stores it in localStorage
  
  if(token){
    saveLocalStorage('token', token);
    document.location.href ="/feed";
  }


  /*
  This code is for when user enter feed page or any other page through URL without
  Login in first
  */

  // let isUserLogin = false;
  // const pathName = window.location.pathname;

  // if(user){
  //   isUserLogin = true;
  //   document.location.href ="/feed";
  // }else if(pathName !== "/"){
  //   document.location.href ="/";
  // }
  

  //This line throws Error of Network-Register.errors (if exists) first value (if exists ) and access message
  if(!json.ok){
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
}