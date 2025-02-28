import { formHandler } from "./events/auth/formHandler.mjs";
import { userFormValidation } from "./ui/userFormValidation.mjs";
import { createPosts } from "./api/posts/createPosts.mjs";
import { getPosts } from "./api/posts/getPosts.mjs";
import { searchPosts } from "./events/posts/searchPosts.mjs";
import { filterPosts } from "./events/posts/filterPosts.mjs";
import { fetchSinglePost } from "./ui/auth/fetchSinglePost.mjs";

function pathEvents(){
  const pathName = window.location.pathname;

  console.log(pathName);
  switch(pathName){
    case "/index.html":
    case "/":
      formHandler('#loginForm', pathName);
      break;
    case "/register.html":
      formHandler('#registerForm', pathName, '#submitRegister');
      userFormValidation('#registerForm', '#submitRegister');
      break;
    case "/feed/":
      formHandler('#yourPostForm', pathName);

      const fetchPosts = async () =>{
        try{
          const postsObjects = await getPosts();
            createPosts(postsObjects.data);
            filterPosts(postsObjects)
            searchPosts(postsObjects);
          }catch(error){
            console.log(error)
          }
        }
        fetchPosts()
       break;
    case "/feed/post/":
      fetchSinglePost()
      break;
  }
}
pathEvents();






// //Additional features 

// export function commentPost(){

// }

// export function editProfile(){

// }

// export function follow Unfollow(){

// }

// export function reactToPost(){

// }











// export function handleCLick(event){
//   const post = {id: event.target.dataset.id};
//   const favoriteList = JSON.parse(localStorage.get("favorites")) || [];
//   favoriteList.push(post);
//   localStorage.setItem("favorites", JSON.stringify(favoriteList));
// };


//helper folder
// export function getQueryParam(param){
//   const queryString = document.location.search;
//   const parameters = new URLSearchParams(queryString);
//   const parameter = parameters.get(param);

//   return parameter;
// }

//catch and display ui folder
// export function catchAndDisplay(container="#jackets__container", message ="There was an unexpected error", messageType ="error"){
//   const inside = document.querySelector(container);
//   inside.innerHTML =`<div class="message ${messageType}">${message}</div>`;
// }



// const id = getQueryParam("id");
// const jacketUrl = `${url}/${id}`;
// if(!id){
//   window.location.href="/";
// }

//add this to each article first of all
/* <a href="details.html?id=${jacket.id}"> */