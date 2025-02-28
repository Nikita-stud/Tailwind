import { createPosts } from "../../api/posts/createPosts.mjs";

export function searchPosts(posts){
  const form = document.getElementById("searchForm");
  const postsArray = [...posts.data];

  form.addEventListener("input", (e) => {
    const searchTarget = e.target.value.trim().toLowerCase();

    const filteredPosts = postsArray.filter((post)=>{
      return post.title.toLowerCase().startsWith(searchTarget)
    });
    const postsContainer = document.getElementById('posts_container')
    postsContainer.innerHTML = "";

    if(filteredPosts.length === 0){
      const article = document.createElement("article");
      article.classList.add("p-10", "w-100", "bg-slate-50", "shadow-md", "rounded-xl");
      article.innerHTML = `<div class="text-3xl font-sans">
                              <p class"text-red-500">! There are no Posts starting with the search letters, try other combinations !</p>
                           </div>`;
      postsContainer.append(article);
    }
    createPosts(filteredPosts);
  });
}