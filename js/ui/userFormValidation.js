export function userFormValidation(formID, submitButton){
  const form = document.querySelector(`${formID}`)
  const cta = document.querySelector(`${submitButton}`);
  const name = document.getElementById(`name`)
  const email = document.getElementById(`email`)
  const password = document.getElementById(`password`)

  const nameMessage = document.getElementById("nameMessage");
  const emailMessage = document.getElementById("emailMessage");
  const passwordMessage = document.getElementById("passwordMessage");
  
  const validation ={
    name: false,
    email: false,
    password: false,
  }

  function isFormValid(validation){
    let {name, email, password} = validation;
    const pathName = window.location.pathname;
    if(pathName === "/" || pathName === "/index.html"){
      name = true;
    }
    return name && email && password;
  }

  form.addEventListener("input", (event)=>{
    const currentInput = event.target;
    const inputName = event.target.name;

    function displayError(input) {
      input.classList.add("border-red-400");
      input.classList.remove("border-green-400");
    }
    function validateName(name){
      const re = /^[A-Za-z0-9_]+$/;
      return re.test(String(name));
    }
    function validateMail(email) {
      const re = /^[^@]+@(stud\.|)(noroff\.no)$/;
      return re.test(String(email).toLowerCase());
    }
    
    function updateSubmitButton(){
      if(isFormValid(validation)){
        cta.disabled = false;
        cta.classList.remove("bg-stone-600")
        cta.classList.add("bg-black")
      }else{
        cta.disabled = true;
        cta.classList.remove("bg-black")
        cta.classList.add("bg-stone-600")
      }
    }

    if(inputName ==="name"){
      if(!name.value || !validateName(name.value)){
        displayError(currentInput);
        nameMessage.innerText = "Please use _ to separate words";
        validation.name = false;
      }else{
        currentInput.classList.add("border-green-400")
        nameMessage.innerText = "";
        validation.name = true;
      }
    }
    if(inputName === "email"){
      if(!email.value|| !validateMail(email.value) ){
        displayError(currentInput);
        emailMessage.innerText = "Requires noroff email address";
        validation.email = false;
      }else{
        currentInput.classList.add("border-green-400")
        emailMessage.innerText = "";
        validation.email = true;
      }
    }
    if(inputName === "password"){
      if(!password.value|| password.value.length < 8 ){
        displayError(currentInput);
        passwordMessage.innerText = "Must contain at least 8 letters";
        validation.password = false;
      }else{
        currentInput.classList.add("border-green-400")
        passwordMessage.innerText = "";
        validation.password = true;
      }
    }
    updateSubmitButton()
  });


    cta.addEventListener("click", ()=> {
      cta.innerText = "Submitting...";
      // const fieldset = document.querySelector("fieldset");
      // fieldset = disabled
      
    });

    cta.disabled = true;
}