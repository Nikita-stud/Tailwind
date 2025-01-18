import { getValuesFromForm } from "./helper/events/getValuesFromForm.js";


const API_BASE = "https://v2.api.noroff.dev";
const API_REGISTER = "/auth/register";
const API_LOGIN = "/auth/login";
const API_KEY_URL = "/auth/create-api-key";


const welcomeHeader = document.getElementById("welcome_header");
const loginContainer = document.getElementById("login_container");
const registerContainer = document.getElementById("register_container");
const createNewText = document.getElementById("create-acc");

function toggleCreateAccount(){
  createNewText.addEventListener("click", ()=>{
    loginContainer.classList.toggle("hidden");
    
    if(loginContainer.classList.contains("hidden")){
        registerContainer.classList.toggle("hidden");
        welcomeHeader.innerText = "Create Account";
        createNewText.innerText = "Sign in instead"
    }else{
        registerContainer.classList.toggle("hidden");
        welcomeHeader.innerText = "Welcome";
        createNewText.innerText = "Create new account"
    }
  })
}
toggleCreateAccount()





// async function getToken(url){
//   try{
//     const postData ={
//       method : `POST`,
//       // headers: {
//       //   Authorization: `Bearer ${load("token")}`,
//       // },
//       body: JSON.stringify({
//         name: "My Token JS2 CS",
//       })
//     }
//   const response = await fetch(url, postData);
//   const json = await response.json();
//   console.log(json)
//   return json; 

//   }catch(error){
//     console.log("Error in registering user")
//   }
// }
// getToken(`${API_BASE}${API_KEY_URL}`);









// export async function registerUser(url){
//   try{
//     const registerForm = document.getElementById("register_form");
//     const formObject = getValuesFromForm(registerForm);

//     const postData ={
//       method : `POST`,
//       headers: {

//       },
//       body: JSON.stringify({
//         "name": formObject.name,
//         "email": formObject.email,
//         "password": formObject.password,
//       })
//     }
//   const response = await fetch(url, postData);
//   const json = await response.json();
//   return json; 

//   }catch(error){
//     console.log("Error in registering user")
//   }
// }
// registerUser(`${API_BASE}${API_REGISTER}`);

// Must save name, email, password in OBject of data












// export function loginUser(email, password){

//   const loginForm = document.getElementById("login_form");
//   getValuesFromForm(loginForm);


//   method : `POST`,
//   header: "",
//   body: JSON.stringify({
//     "email": email,
//     "password": password,
//   })
// }

// export function viewPosts(){

// }

// export function filterPosts(){

// }

// export function searchPosts(){

// }

// export function filterSinglePost(){

// }

// export function createPost(){

// }

// export function updatePost(){

// }

// export function deletePost(){

// }

// //Additional features 

// export function commentPost(){

// }

// export function editProfile(){

// }

// export function handleFriends(){

// }

// export function reactToPost(){

// }











// export function handleCLick(event){
//   const post = {id: event.target.dataset.id};
//   const favoriteList = JSON.parse(localStorage.get("favorites")) || [];
//   favoriteList.push(post);
//   localStorage.setItem("favorites", JSON.stringify(favoriteList));
// };