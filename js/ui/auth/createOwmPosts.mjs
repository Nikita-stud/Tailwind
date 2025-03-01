import { API_POSTS } from "../../constants/constants.mjs";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";
import { createAllowedDataRequest } from "../../events/helpers/createAllowedDataRequest.mjs";

export async function createOwnPost(postData){
  const email = loadLocalStorage('email');
  try{
    const bodyData = {
      title: postData.title,
        body: postData.text,
        tags: [email],
    };
  
    if(postData.image){
      bodyData.media = {
        url: postData.image,
      };
    }
    const post = createAllowedDataRequest("POST", bodyData);
    const fetched = await fetch(API_POSTS, post);
    const json = await fetched.json();
    location.reload();
    
    if(!fetched.ok){
      throw new Error(json.errors?.[0]?.message || "Registration failed");
    }
  }catch(error){
    console.log(error)
  }
}