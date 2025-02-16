import { loadLocalStorage } from "../../events/auth/loadLocalStorage.mjs";

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
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("flex", "justify-between");


      const deleteButton = document.createElement("button");
      deleteButton.classList.add("bg-red-400", "text-white", "rounded-full", "px-8", "md:px-24", "mt-10", "py-2", "text-sm", "hover:bg-slate-800");
      deleteButton.innerText = "Delete";

      const editButton = document.createElement("button");
      editButton.classList.add("bg-green-400", "text-white", "rounded-full", "px-8", "md:px-24", "mt-10", "py-2", "text-sm", "hover:bg-slate-800");
      editButton.innerText = "Edit Post";
      
      article.append(buttonContainer)
      buttonContainer.append(deleteButton);
      buttonContainer.append(editButton);
    }
  }
}