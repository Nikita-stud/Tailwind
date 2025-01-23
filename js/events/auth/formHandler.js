import { registerUser } from "../../api/auth/registerUser.js";

export function formHandler(formID, pathName){
  //This line gets the ID of the Form
  const formRegister = document.querySelector(`${formID}`);
  

    //This code gets the values from the Form of specific formID
  formRegister.addEventListener("submit", (e)=>{
    e.preventDefault();
  
    const data =  new FormData(e.target);
    const entries =  Object.fromEntries(data.entries());
    console.log(entries)

    //Depending on the pathName/endpoint the form values will be send to different forms
    if(pathName === "/register.html"){
      registerUser(entries);
    }
    else if(pathName === "/index.html"){
      loginUser(entries);
    }
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