import { createPosts } from "../../api/posts/createPosts.js";

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
    console.log("Filtered Posts",filteredPosts)
    createPosts(filteredPosts);
  });
}