export function catchAndDisplay(container="#errorContainer", message ="There was an unexpected error"){
  const inside = document.querySelector(container);
  inside.classList.add("p-2", "mb-5", "text-red-700", "border-2", "border-red-700", "bg-red-700",)
  inside.innerHTML =`<p class="text-red-700">${message}</p>`;
}