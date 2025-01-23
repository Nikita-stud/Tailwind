import { registerUser } from "../../api/auth/registerUser.js";

export function registerHandler(){
  const registerForm = document.getElementById("registerForm");
  if(registerForm){
    registerForm.addEventListener("submit", submitForm);
  }
}

function submitForm(e){
  e.preventDefault();
  const form = new FormData(e.target);
  const data = Object.fromEntries(form.entries());

  console.log(data);
  registerUser(data);
}

// export function getValuesFromForm(formQuery){
//   const formID = document.querySelector(`${formQuery}`);
  
//   formID.addEventListener("submit", (e)=>{
//     e.preventDefault();
  
//     const data = new FormData(e.target);
//     const entries = Object.fromEntries(data.entries());
//     console.log(entries)
//     return entries;
//   })
// }
