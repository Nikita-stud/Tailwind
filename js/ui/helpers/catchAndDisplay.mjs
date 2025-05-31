export function catchAndDisplay(container="#errorContainer", message ="There was an unexpected error"){
  const inside = document.querySelector(container);
  inside.classList.add("p-2", "mb-5", "border-2")
  inside.innerHTML =`<p class="text-red-700">${message}</p>`;
}