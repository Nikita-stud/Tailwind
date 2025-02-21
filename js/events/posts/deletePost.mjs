import { API_POSTS } from "../../constants/constants.js";
import { API_KEY } from "../../constants/tokens.js";
import { loadLocalStorage } from "../auth/loadLocalStorage.mjs";

export async function deletePost(buttonID){
  const button = document.getElementById(buttonID);
  const article = button.closest("article");
  const id = article.id;

  const object = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${loadLocalStorage('token')}`,
      "X-Noroff-API-Key": API_KEY,
    },
  }

  try{
    const response = await fetch(`${API_POSTS}/${id}`, object);
    if(!response.ok){
      throw new Error("Did not manage to delete post")
    }
  }catch(error){
    console.log("Error deleting the post:", error)
  }
}