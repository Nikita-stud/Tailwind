import { API_POSTS } from "../../constants/constants.js";

export async function sendPostToApi(postData){
  const post = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  }

  const fetched = await fetch(API_POSTS, post);
  const json = fetched.json();
}