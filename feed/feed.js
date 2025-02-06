import { createPosts } from "../js/api/posts/createPosts.js";
import { getPosts } from "../js/api/posts/getPosts.js";

function pathEvents(){
  const pathName = window.location.pathname;
  console.log(pathName);

  switch(pathName){
    case "/feed/":
      const fetchPosts = async () =>{
        try{
          const postsObjects = await getPosts()
          createPosts(postsObjects)
        }catch(error){
          console.log(error)
        }
      }
      fetchPosts();
      break;
  }
}
pathEvents()