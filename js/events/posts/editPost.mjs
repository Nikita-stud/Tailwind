import { API_POSTS } from "../../constants/constants.mjs";
import { API_KEY } from "../../constants/tokens.mjs";
import { loadLocalStorage } from "../auth/loadLocalStorage.mjs";

export async function editPost(buttonID){
  const button = document.getElementById(buttonID);

  const article = button.closest("article");
  const id = article.id;
  const header = article.querySelector("h3");
  const image = article.querySelector("img");
  const text = article.querySelector("p");

  const originalHtml = article.innerHTML;

  article.innerHTML = `<form id="editPosts" method="PUT" class="w-100 bg-slate-50 shadow-md rounded-xl">
                          <fieldset class="mb-5 p-5 grid md:flex md:flex-col gap-5 text-2xl">
                            <div class="flex flex-col -mt-2">
                              <label for="title" class="pb-1 text-xl md:text-2xl">Change title</label>
                              <input 
                                type="text" 
                                id="title" 
                                name="title" 
                                value="${header.innerText}"
                                placeholder="Your title"
                                class="text-lg py-1 pl-5 outline shadow-md rounded-xl md:text-xl md:max-w-60"
                              />
                            </div>
                            <div class="flex flex-col -mt-2">
                              <label for="image" class="pb-1 text-xl md:text-2xl">Change image</label>
                              <input 
                                type="url" 
                                id="image"
                                name="image"
                                value="${image.src}"
                                placeholder="Add image URL here" 
                                class="text-lg py-1 pl-5 outline shadow-md rounded-xl md:text-xl md:max-w-80"
                              />
                            </div>
                            <div class="flex flex-col -mt-2">
                              <label for="text" class="pb-1 text-xl md:text-2xl">Change text</label>
                              <textarea 
                                id="text"
                                name="text"
                                placeholder="What is on your mind?" 
                                class="text-lg py-1 pl-5 outline shadow-md rounded-xl md:text-xl h-20">${text.innerText}</textarea>
                            </div>
                            <div class="flex justify-between">
                              <button type="button" id="cancelButton" class="bg-black text-white rounded-full px-8 md:px-8 py-2 text-xl hover:bg-slate-800">Cancel</button>
                              <button type="submit" class="bg-black text-white rounded-full px-10 md:px-10 py-2 text-xl hover:bg-slate-800">Save</button>
                            </div>
                          </fieldset>
                        </form>`;

  const cancelButton = document.getElementById("cancelButton");
  cancelButton.addEventListener("click", ()=>{
    article.innerHTML = originalHtml;
  });
                        
  const editedForm = article.querySelector("#editPosts");
  editedForm.addEventListener("submit", async (e)=>{
    e.preventDefault()

    const title = editedForm.querySelector("#title").value;
    const img = editedForm.querySelector("#image").value;
    const body = editedForm.querySelector("#text").value;

    const bodyData = {
      title: title,
        body: body,
    };
    if(img){
      bodyData.media = {
        url: img,
      };
    }
    const object = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${loadLocalStorage('token')}`,
        "X-Noroff-API-Key": API_KEY,
      }, 
      body: JSON.stringify(bodyData),  
    };

    try{
      const response = await fetch(`${API_POSTS}/${id}`, object);
      if(!response.ok){
        throw new Error("Did not manage to edit post")
      }
      location.reload();
    }catch(error){
      console.log(error)
      window.alert("Failed to update, try again");
    }
  });
}