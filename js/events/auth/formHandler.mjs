import { loginUser } from "../../api/auth/loginUser.mjs";
import { registerUser } from "../../api/auth/registerUser.mjs";
import { createOwnPost } from "../../ui/auth/createOwmPosts.mjs";

export function formHandler(formID, pathName, buttonID){
  //This line gets the ID of the Form
  const formRegister = document.querySelector(`${formID}`);
  const cta = document.querySelector(`${buttonID}`);
  

    //This code gets the values from the Form of specific formID
  formRegister.addEventListener("submit", (e)=>{
    e.preventDefault();
  
    const data =  new FormData(e.target);
    const entries =  Object.fromEntries(data.entries());
    console.log(entries)

    //Depending on the pathName/endpoint the form values will be send to different forms
    if(pathName === "/register.html"){
      console.log("registerUser is being activated in formHandler")
      cta.innerText = "Submitting...";
      registerUser(entries);
    }
    if(pathName === "/" || pathName === "/index.html"){
      console.log("loginUser is being activated in formHandler")
      loginUser(entries);
    }
    if(pathName ==="/feed/"){
      createOwnPost(entries);
    }
    // return entries;
  })
}



// import { registerUser } from "../../api/auth/registerUser.js";

// export function registerHandler(){
//   const registerForm = document.getElementById("registerForm");
//   if(registerForm){
//     registerForm.addEventListener("submit", submitForm);
//   }
// }

// function submitForm(e){
//   e.preventDefault();
//   const form = new FormData(e.target);
//   const data = Object.fromEntries(form.entries());

//   console.log(data);
//   registerUser(data);
// }