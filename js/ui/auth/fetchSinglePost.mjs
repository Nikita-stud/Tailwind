import { createPost } from "../../api/posts/createPost.mjs";
import { API_POSTS } from "../../constants/constants.mjs";
import { createAllowedRequest } from "../../events/helpers/createAllowedRequest.mjs";
import { getQueryParam } from "../../events/helpers/getQueryParam.mjs";

export async function fetchSinglePost(){
  const postID = getQueryParam("id");
  if(!postID){
    window.location.href="/"
  }
  try{
    const post = createAllowedRequest("GET");
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