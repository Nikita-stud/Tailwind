import { getPosts } from "../js/api/posts/getPosts.js";

function pathEvents(){
  const pathName = window.location.pathname;
  console.log(pathName);

  switch(pathName){
    case "/feed/":
      getPosts()
      break;
  }
}
pathEvents()