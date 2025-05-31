import { createPosts } from "../../api/posts/createPosts.mjs";

export function filterPosts(posts){
  const radioButtons = document.querySelectorAll("input[name=radio]");

  radioButtons.forEach(radio =>{
    radio.addEventListener("change", ()=>{
      const timeNow = new Date();
      const postsContainer = document.getElementById("posts_container");

      let filteredPosts;

      switch (radio.id){
        case "todays":
          filteredPosts = posts.data.filter(post =>{
            return new Date(post.created).toDateString() === timeNow.toDateString();
          })
          break;
        case "weeks":
          filteredPosts = posts.data.filter(post =>{
            const postDate = new Date(post.created);
            const weekPosts = new Date (timeNow.getTime() - 7 * 24 * 60 * 60 * 1000);
            return postDate >= weekPosts;
          })
          break;
        case "months":
          filteredPosts = posts.data.filter(post =>{
            const postDate = new Date(post.created);
            return(
              postDate.getMonth() === timeNow.getMonth() &&
              postDate.getFullYear() === timeNow.getFullYear()
            );
          });
          break;
      }
      postsContainer.innerHTML ="";

      if(filteredPosts.length === 0){
        const article = document.createElement("article");
        article.classList.add("p-10", "w-100", "bg-slate-50", "shadow-md", "rounded-xl");
        article.innerHTML = `<div class="text-3xl font-sans">
                                <p class"text-red-500">! There are no Posts in this filter, try another filter !</p>
                             </div>`;
        postsContainer.append(article);
      }
      createPosts(filteredPosts);
    })
  })
}