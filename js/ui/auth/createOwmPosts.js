import { API_POSTS } from "../../constants/constants.js";
import { API_KEY } from "../../constants/tokens.js";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";

export async function createOwnPost(postData){
  const email = loadLocalStorage('email');

  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loadLocalStorage('token')}`,
      "X-Noroff-API-Key": `${API_KEY}`,
    },
    body: JSON.stringify({
      title: postData.title,
      body: postData.text,
      tags: [
        email
      ],
      media: {
        url: postData.image,
      }
    }),
  }

  const fetched = await fetch(API_POSTS, post);
  const json = await fetched.json();
  location.reload();
  
  if(!json.ok){
    throw new Error(json.errors?.[0]?.message || "Registration failed");
  }
}