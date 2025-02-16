import { formHandler } from "./events/auth/formHandler.js";
import { userFormValidation } from "./ui/userFormValidation.js";
import { createPosts } from "./api/posts/createPosts.js";
import { getPosts } from "./api/posts/getPosts.js";
import { searchPosts } from "./events/posts/searchPosts.mjs";
import { filterPosts } from "./events/posts/filterPosts.mjs";

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
  }
}
pathEvents()





// export function filterPosts(){

// }

// export function filterSinglePost(){

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