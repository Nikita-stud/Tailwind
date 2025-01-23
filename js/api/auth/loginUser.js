import { API_LOGIN } from "../../constants/constants";

// export async function registerUser(user){
//   const postData ={
//     method : "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(user)
//   }
//   const response = await fetch(API_LOGIN, postData);
//   const json = await response.json();

//   //This line throws Error of Network-Register.errors (if exists) first value (if exists ) and access message
//   if(!json.ok){
//     throw new Error(json.errors?.[0]?.message || "Registration failed");
//   }
// }