export function createPosts(posts){
  const postsContainer = document.getElementById('posts_container')

  const newArray = posts.data.filter((post)=>{
    return post.body && post.title.trim().length >= 4;
  });

  for(let i=0; i < newArray.length; i++ ){
    console.log(newArray)

    const article = document.createElement("article");
    article.classList.add("p-10", "w-100", "bg-slate-50", "shadow-md", "rounded-xl");
    article.setAttribute("id", newArray[i].id);

    const title = document.createElement("h3");
    article.classList.add("text-2xl", "font-serif", "pb-5");
    const capitalTitle = newArray[i].title.toUpperCase();
    title.innerText = capitalTitle;


    const img = document.createElement("img");
    article.classList.add("w-100", "h-100", "pb-5", "m-auto", "object-cover", "bg-no-repeat");
    img.src = newArray[i].media.url
    img.alt = newArray[i].media.alt

    const text = document.createElement("p");
    text.innerText = newArray[i].body;

    postsContainer.append(article);
    article.append(title);
    article.append(img);
    article.append(text);
  }


}