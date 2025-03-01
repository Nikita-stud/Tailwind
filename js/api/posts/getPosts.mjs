import { API_POSTS } from "../../constants/constants.mjs";
import { createAllowedRequest } from "../../events/helpers/createAllowedRequest.mjs";

export async function getPosts(){
  try{
    const fetchPosts = createAllowedRequest("GET")
      const response = await fetch(API_POSTS, fetchPosts);
      const json = await response.json();
      if(!response.ok){
        throw new Error(json.errors?.[0]?.message || "Getting Posts failed");
      }
      return json;
  }catch(error){
      console.log(error)
    }
}