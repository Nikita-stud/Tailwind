import { API_LOGIN } from "../../constants/constants.js";

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
  //This lines gets the accessToken that you get from sending in the loginForm to the Noroff API and stores it in localStorage
  const token = json.data.accessToken;
  localStorage.setItem(`token:`, token);

  //This line throws Error of Network-Register.errors (if exists) first value (if exists ) and access message
  if(!json.ok){
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
}
