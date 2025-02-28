import { loginUser } from "../../api/auth/loginUser.mjs";
import { registerUser } from "../../api/auth/registerUser.mjs";
import { createOwnPost } from "../../ui/auth/createOwmPosts.mjs";

export function formHandler(formID, pathName, buttonID){
  const formRegister = document.querySelector(`${formID}`);
  const cta = document.querySelector(`${buttonID}`);
  
  formRegister.addEventListener("submit", (e)=>{
    e.preventDefault();
  
    const data =  new FormData(e.target);
    const entries =  Object.fromEntries(data.entries());
    console.log(entries)

    if(pathName === "/register.html"){
      cta.innerText = "Submitting...";
      registerUser(entries);
    }
    if(pathName === "/" || pathName === "/index.html"){
      loginUser(entries);
    }
    if(pathName ==="/feed/"){
      createOwnPost(entries);
    }

  })
}