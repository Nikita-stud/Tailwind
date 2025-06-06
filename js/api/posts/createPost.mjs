/**
 * Creating a single Post that has been clicked on
 * 
 * @param {Object} post The Object contains post data
 * 
 * @example
 * ```js
 *  //Getting rid of loading indicator
 * postsContainer.innerHTML = "";
 * //Creating an article inside the container and adding all data needed
 * postsContainer.append(article);
 * article.append(title);
 * article.append(img);
 * article.append(text);
 * article.append(comments);
 * article.append(reactions);
 * article.append(tags);
 * article.append(time);
 * ```
 */



export function createPost(post){
  const postObject = post.data;
  const postsContainer = document.getElementById('postContainer');
  postsContainer.innerHTML = "";

  const article = document.createElement("article");
  article.classList.add("p-10", "w-100", "bg-slate-50", "shadow-md", "rounded-xl");

  const title = document.createElement("h3");
  title.classList.add("text-3xl","mb-4", "font-serif", "font-medium", "underline", "underline-offset-4");
  const capitalTitle = postObject.title.toUpperCase();
  title.innerText = capitalTitle;

  const img = document.createElement("img");
  if(postObject.media && postObject.media.url){
    img.classList.add("w-100", "p-10", "h-100", "m-auto", "object-cover", "bg-no-repeat");
    img.src = postObject.media.url;
    img.alt = postObject.media.alt || "Post image which is not described"
  }

  const text = document.createElement("p");
  text.classList.add("text-2xl", "font-medium", "font-sans")
  text.innerText = postObject.body;

  const comments = document.createElement("p");
  comments.classList.add("text-lg", "font-serif")
  comments.innerText = `Comments: ${postObject._count.comments}`; 

  const reactions = document.createElement("p");
  reactions.classList.add("text-lg", "font-serif")
  reactions.innerText = `Reactions: ${postObject._count.reactions}`;

  const tags = document.createElement("p");
  tags.classList.add("text-lg", "font-serif")
  tags.innerText = `Tags: ${postObject.tags}`; 
  if(postObject.tags == ""){
    tags.innerText = "Tags: None"
  }

  const time = document.createElement("p");
  time.classList.add("text-lg", "font-serif")
  const date = new Date(postObject.created);
  time.innerText = `Created on the: ${date}`; 

  postsContainer.append(article);
  article.append(title);
  article.append(img);
  article.append(text);
  article.append(comments);
  article.append(reactions);
  article.append(tags);
  article.append(time);
}