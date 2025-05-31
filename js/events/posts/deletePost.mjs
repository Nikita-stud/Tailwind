import { API_POSTS } from "../../constants/constants.mjs";
import { createAllowedRequest } from "../helpers/createAllowedRequest.mjs";

export async function deletePost(buttonID){
  const button = document.getElementById(buttonID);
  const article = button.closest("article");
  const id = article.id;
  try{
    const object = createAllowedRequest("DELETE");
    const response = await fetch(`${API_POSTS}/${id}`, object);
    if(!response.ok){
      throw new Error("Did not manage to delete post")
    }else{
      location.reload();
    }
  }catch(error){
    window.alert("Error deleting the post")
  }
}