import { formHandler } from "./events/auth/formHandler.mjs";
import { userFormValidation } from "./ui/userFormValidation.mjs";
import { createPosts } from "./api/posts/createPosts.mjs";
import { getPosts } from "./api/posts/getPosts.mjs";
import { searchPosts } from "./events/posts/searchPosts.mjs";
import { filterPosts } from "./events/posts/filterPosts.mjs";
import { fetchSinglePost } from "./ui/auth/fetchSinglePost.mjs";

function pathEvents(){
  const pathName = window.location.pathname;
  switch(pathName){
    case "/index.html":
    case "/":
      formHandler('#loginForm', pathName);
      break;
    case "/register.html":
      case "/register":
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
          }finally{
            const loadingContainer = document.getElementById("loadingContainer");
            loadingContainer.remove();
          }
        }
        fetchPosts()
       break;
    case "/feed/post/":
      fetchSinglePost();
      break;
  }
}
pathEvents();