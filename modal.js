let btnLogin = document.querySelector('#iniciar');
let openLogin = document.querySelector('#modal-login');
let closeLogin = document.querySelector('#close-login');

btnLogin.addEventListener('click', e=>{
    e.preventDefault();
    openLogin.classList.add("active")
})

closeLogin.addEventListener('click', e=>{
    e.preventDefault()
    openLogin.classList.remove("active")
})

let btnSignUp = document.querySelector('#Registrarse');
let openSignUp = document.querySelector('#modal-SignUp');
let closeSignUp = document.querySelector('#close-SignUp');

btnSignUp.addEventListener('click', e=>{
    e.preventDefault();
    openSignUp.classList.add("active")
})

closeSignUp.addEventListener('click', e=>{
    e.preventDefault()
    openSignUp.classList.remove("active")
})