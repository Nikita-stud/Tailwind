import { API_POSTS } from "../../constants/constants.js";
import { API_KEY } from "../../constants/tokens.js";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";

export async function fetchSinglePost(postID){
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
  console.log("This is the single post",json)

  if(json){
    window.location.href = "/feed/post/";
  }
  
  // if(!json.ok){
  //   throw new Error(json.errors?.[0]?.message);
  // }
}