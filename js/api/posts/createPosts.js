import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";
import { generateUniqueId } from "../../events/helpers/generateUniqueId.mjs";
import { deletePost } from "../../events/posts/deletePost.mjs";
import { editPost } from "../../events/posts/editPost.mjs";

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

      const ctaDeleteId = generateUniqueId()
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("flex", "justify-between");

      const deleteButton = document.createElement("button");
      deleteButton.setAttribute("id", ctaDeleteId);
      deleteButton.setAttribute("data-action", "delete");
      deleteButton.classList.add("bg-slate-400", "text-white", "rounded-full", "px-8", "md:px-10", "mt-10", "py-2", "text-sm", "hover:bg-slate-800");
      deleteButton.innerText = "Delete";

      const editButton = document.createElement("button");
      editButton.setAttribute("id", "editButton")
      editButton.setAttribute("data-action", "edit");
      editButton.classList.add("bg-slate-700", "text-white", "rounded-full", "px-8", "md:px-10", "mt-10", "py-2", "text-sm", "hover:bg-slate-800");
      editButton.innerText = "Edit Post";
      
      article.append(buttonContainer)
      buttonContainer.append(deleteButton);
      buttonContainer.append(editButton);

      article.addEventListener("click", (e) => {
        if(e.target.tagName === "BUTTON"){
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
}