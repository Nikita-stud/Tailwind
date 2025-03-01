import { API_POSTS } from "../../constants/constants.mjs";
import { API_KEY } from "../../constants/tokens.mjs";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";

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
  
    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loadLocalStorage('token')}`,
        "X-Noroff-API-Key": `${API_KEY}`,
      },
      body: JSON.stringify(bodyData),
    }
  
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