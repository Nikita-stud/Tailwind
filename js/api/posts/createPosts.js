export function createPosts(posts){
  const postsContainer = document.getElementById('posts_container')

  const newArray = posts.filter((post)=>{
    return post.body && post.title.trim().length >= 4;
  });
  console.log(newArray)

  for(let i=0; i < newArray.length; i++ ){

    const article = document.createElement("article");
    article.classList.add("p-10", "w-100", "bg-slate-50", "shadow-md", "rounded-xl");
    article.setAttribute("id", newArray[i].id);

    const title = document.createElement("h3");
    title.classList.add("text-2xl","mb-4", "font-serif", "font-medium", "underline", "underline-offset-4");
    const capitalTitle = newArray[i].title.toUpperCase();
    title.innerText = capitalTitle;

    const img = document.createElement("img");
    if(newArray[i].media && newArray[i].media.url){
      img.classList.add("w-100", "mb-4", "h-100", "m-auto", "object-cover", "bg-no-repeat");
      img.src = newArray[i].media.url;
      img.alt = newArray[i].media.alt || "Post image which is not described"
    }

    const text = document.createElement("p");
    text.classList.add("text-lg", "font-medium", "font-sans")
    text.innerText = newArray[i].body;

    postsContainer.append(article);
    article.append(title);
    article.append(img);
    article.append(text);
  }
}