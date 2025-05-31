import { API_POSTS } from "../../constants/constants.mjs";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";
import { createAllowedDataRequest } from "../../events/helpers/createAllowedDataRequest.mjs";
import { catchAndDisplay } from "../helpers/catchAndDisplay.mjs";

export async function createOwnPost(postData){
  const email = loadLocalStorage('email');
  const {title, image, text} = postData;
  let jsonValue = {};
  try{
    const bodyData = {
      title: title,
        body: text,
        tags: [email],
    };
    if(postData.image){
      bodyData.media = {
        url: image,
      };
    }
    const post = createAllowedDataRequest("POST", bodyData);
    const fetched = await fetch(API_POSTS, post);
    const json = await fetched.json();
    jsonValue = json;
    
    if(!fetched.ok){
      throw new Error(json.errors?.[0]?.message || "Sending Post to server failed");
    }else{
      location.reload();
    }
  }catch(error){
    catchAndDisplay("#errorCreatePostContainer", jsonValue.errors?.[0]?.message)
  }
}