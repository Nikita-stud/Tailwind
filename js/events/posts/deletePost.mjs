import { API_POSTS } from "../../constants/constants.mjs";
import { createAllowedRequest } from "../helpers/createAllowedRequest.mjs";

export async function deletePost(buttonID){
  const button = document.getElementById(buttonID);
  const article = button.closest("article");
  const id = article.id;

  const object = createAllowedRequest("DELETE");
  try{
    const response = await fetch(`${API_POSTS}/${id}`, object);
    if(!response.ok){
      throw new Error("Did not manage to delete post")
    }
    location.reload();
  }catch(error){
    console.log("Error deleting the post:", error)
  }
}