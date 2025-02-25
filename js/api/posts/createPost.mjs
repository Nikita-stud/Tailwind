export function createPost(post){
  console.log(post)
  const postsContainer = document.getElementById('postContainer')

  const article = document.createElement("article");
  article.classList.add("p-10", "w-100", "bg-slate-50", "shadow-md", "rounded-xl");

  const title = document.createElement("h3");
  title.classList.add("text-2xl","mb-4", "font-serif", "font-medium", "underline", "underline-offset-4");
  const capitalTitle = post.title.toUpperCase();
  title.innerText = capitalTitle;

  const img = document.createElement("img");
  if(posts.media && post.media.url){
    img.classList.add("w-100", "mb-4", "h-100", "m-auto", "object-cover", "bg-no-repeat");
    img.src = post.media.url;
    img.alt = post.media.alt || "Post image which is not described"
  }

  const text = document.createElement("p");
  text.classList.add("text-lg", "font-medium", "font-sans")
  text.innerText = post.body;

  postsContainer.append(article);
  article.append(title);
  article.append(img);
  article.append(text);
}