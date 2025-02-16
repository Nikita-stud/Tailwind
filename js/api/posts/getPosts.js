import { API_KEY } from "../../constants/tokens.js"
import { API_POSTS } from "../../constants/constants.js";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";

export async function getPosts(){
  try{
    const fetchPosts = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loadLocalStorage('token')}`,
        "X-Noroff-API-Key": API_KEY,
      },
    }
      const response = await fetch(API_POSTS, fetchPosts);
      const json = await response.json();
      return json;

  }catch(error){
      console.log(error)
    }
}