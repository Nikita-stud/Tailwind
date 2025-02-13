import { API_POSTS } from "../../constants/constants.js";
import { API_KEY } from "../../constants/tokens.js";
import { loadLocalStorage } from "../../events/auth/loadLocalStorage.js";

export async function createOwnPost(postData){

  console.log(API_KEY)
  console.log(loadLocalStorage('token'))

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
      media: {
        url: postData.image,
      }
    }),
  }

  const fetched = await fetch(API_POSTS, post);
  const json = await fetched.json();
  return json;
}