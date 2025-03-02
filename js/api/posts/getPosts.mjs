import { API_POSTS } from "../../constants/constants.mjs";
import { createAllowedRequest } from "../../events/helpers/createAllowedRequest.mjs";
import { catchAndDisplay } from "../../ui/helpers/catchAndDisplay.mjs";

/**
 * Gets all Posts on Feed page by sending method
 * @returns {Array} Array of Objects of all the posts fetched
 * 
 * @example
 * ```js
 *  //Sending request to get all posts
 * const fetchPosts = createAllowedRequest("GET")
 * const response = await fetch(API_POSTS, fetchPosts);
 * ```
 */

export async function getPosts(){
  let jsonValue = {};
  try{
    const fetchPosts = createAllowedRequest("GET")
      const response = await fetch(API_POSTS, fetchPosts);
      const json = await response.json();
      jsonValue = json;
      if(!response.ok){
        throw new Error(json.errors?.[0]?.message || "Getting Posts failed");
      }
      return json;
  }catch(error){
      catchAndDisplay("#posts_container", jsonValue.errors?.[0]?.message)
    }
}