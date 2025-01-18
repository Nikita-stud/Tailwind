export function getValuesFromForm(formID){
  formID.addEventListener("submit", (e)=>{
    e.preventDefault();
  
    const data = new FormData(e.target);
    const entries = Object.fromEntries(data.entries());
    console.log(entries)
    return entries;
  })
}