// import { createPosts } from "../../api/posts/createPost.mjs";
import { createPost } from "../../api/posts/createPost.mjs";
import { API_POSTS } from "../../constants/constants.mjs";
import { API_KEY } from "../../constants/tokens.mjs";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";
import { getQueryParam } from "../../events/helpers/getQueryParam.mjs";

export async function fetchSinglePost(){
  const postID = getQueryParam("id");
  if(!postID){
    window.location.href="/"
  }

  try{
    const post = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loadLocalStorage('token')}`,
        "X-Noroff-API-Key": `${API_KEY}`,
      },
    }
    const fetched = await fetch(`${API_POSTS}/${postID}`, post);
    const json = await fetched.json();
    createPost(json);
    
    if(!response.ok){
      throw new Error(json.errors?.[0]?.message);
    }
  }catch(error){
    console.log(error);
  }
}