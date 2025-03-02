import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";
import { generateUniqueId } from "../../events/helpers/generateUniqueId.mjs";
import { deletePost } from "../../events/posts/deletePost.mjs";
import { editPost } from "../../events/posts/editPost.mjs";

/**
 * Creating all unfiltered Posts for feed page
 * 
 * @param {Object} posts Objects of 100 last posts
 * 
 * @example
 * ```js
 *  //looping through the post to create an article for each one 
 * for(let i=0; i < posts.length; i++ )
 * //Creating an article for each Object inside the container and adding all data needed
 * postsContainer.append(article);
 * article.append(title);
 * article.append(img);
 * article.append(text);
 * //If there is a post I created, it will have my registered email in tags and add additional buttons
 * const email = loadLocalStorage('email');
 * const hasTag = posts[i].tags.includes(`${email}`);
 *  if(hasTag)
 * //The added buttons to my post will have a click event that will either delete or edit
 * if(ifButton){
 *      const buttonID = e.target.id;
 *      const action = e.target.dataset.action;
 *      if(action === "delete"){
 *        deletePost(buttonID);
 *      }else if(action === "edit"){
 *        editPost(buttonID);
 *      }
 *    }
 * ```
 */

export function createPosts(posts){
  const email = loadLocalStorage('email');
  const postsContainer = document.getElementById('posts_container')

  for(let i=0; i < posts.length; i++ ){
    const article = document.createElement("article");
    article.classList.add("p-10", "w-100", "bg-slate-50", "shadow-md", "rounded-xl");
    article.setAttribute("id", posts[i].id);

    const title = document.createElement("h3");
    title.classList.add("text-2xl","mb-4", "font-serif", "font-medium", "underline", "underline-offset-4");
    const capitalTitle = posts[i].title.toUpperCase();
    title.innerText = capitalTitle;

    const img = document.createElement("img");
    if(posts[i].media && posts[i].media.url){
      img.classList.add("w-100", "mb-4", "h-100", "m-auto", "object-cover", "bg-no-repeat");
      img.src = posts[i].media.url;
      img.alt = posts[i].media.alt || "Post image which is not described"
    }

    const text = document.createElement("p");
    text.classList.add("text-lg", "font-medium", "font-sans")
    text.innerText = posts[i].body;

    postsContainer.append(article);
    article.append(title);
    article.append(img);
    article.append(text);

    const hasTag = posts[i].tags.includes(`${email}`);
    if(hasTag){
      const ctaDeleteId = generateUniqueId();
      const ctaEditID = generateUniqueId();
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("flex", "justify-between", "mt-5");

      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("id", ctaDeleteId);
      deleteButton.setAttribute("data-action", "delete");
      deleteButton.classList.add("text-black", "font-semibold", "underline", "px-0", "md:px-10", "md:text-xl", "mt-10", "py-2");
      deleteButton.innerHTML = `Delete <i class="fa-solid fa-trash text-sm pl-2"></i>`;

      const editButton = document.createElement("button");
      editButton.setAttribute("id", ctaEditID);
      editButton.setAttribute("data-action", "edit");
      editButton.classList.add("text-black", "font-semibold", "underline", "px-0", "md:px-10", "md:text-xl", "mt-10", "py-2");
      editButton.innerHTML =`Edit Post <i class="fa-solid fa-pen text-sm pl-2 mt-1"></i>`;
      
      article.append(buttonContainer)
      buttonContainer.append(deleteButton);
      buttonContainer.append(editButton);
    }
    article.addEventListener("click", (e) => {
      const article = e.target.closest("article");
      const ifButton = e.target.tagName === "BUTTON";

      if(article && !ifButton && !article.querySelector("#editPosts")){
        window.location.href =`/feed/post/?id=${article.id}`;
      }

      if(ifButton){
        const buttonID = e.target.id;
        const action = e.target.dataset.action;
        if(action === "delete"){
          deletePost(buttonID);
        }else if(action === "edit"){
          editPost(buttonID);
        }
      }
    });
  }
}