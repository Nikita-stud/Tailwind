import { formHandler } from "./events/auth/formHandler.js";

function pathEvents(){
  const pathName = window.location.pathname;

  console.log(pathName);
  switch(pathName){
    case "/index.html":
    case "/":
      formHandler('#loginForm', pathName);
      break;
    case "/register.html":
      formHandler('#registerForm', pathName);
      break;
  }
}
pathEvents()
















// import { getValuesFromForm } from "./helper/events/getValuesFromForm.js";


// const loginContainer = document.getElementById("login_container");
// const registerContainer = document.getElementById("register_container");



// async function getPosts(accessToken, apiKey) {
//   const response = await fetch("https://v2.api.noroff.dev/social/posts", {
//     method: "GET",
//     headers: {
//       Authorization: `Bearer ${accessToken}`,
//       "X-Noroff-API-Key": apiKey,
//       "Content-Type": "application/json",
//     },
//   });

//   if (!response.ok) {
//     // Possibly check for errors
//     const errorData = await response.json();
//     console.error("Error fetching posts:", errorData);
//     return;
//   }

//   const data = await response.json();
//   console.log(data);
//   return data;
// }
// getPosts(`${ACCESS_TOKEN}`, `${API_KEY}` )



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