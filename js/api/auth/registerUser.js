import { API_REGISTER } from "../../constants/constants.js";

export async function registerUser(user){
  const postData ={
    method : "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user)
  }
  const response = await fetch(API_REGISTER, postData);
  const json = await response.json();

  if(!json.ok){
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
}