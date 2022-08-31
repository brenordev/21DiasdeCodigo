const emailInput = document.querySelector('#email');
const passworldInput = document.querySelector('#passworld');
const submitButton = document.querySelector('#submit');
const errorMessageEmail = document.querySelector('.span_error_email');
const errorMessagePassworld = document.querySelector('.span_error_passworld');

submitButton.addEventListener('click', (e)=>{
    e.preventDefault()
    const emailValue = emailInput.value;
    const passworldValue = passworldInput.value;
        if (emailValue === ""){
            errorMessageEmail.textContent = "Email não preenchido"};
        if (passworldValue === ""){
            errorMessagePassworld.textContent = "Senha não preenchida";
        };
})
