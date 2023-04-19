let btnLogin = document.querySelector('#iniciar');
let openLogin = document.querySelector('#modal-login');
let closeLogin = document.querySelector('#close-login');
let boxSesion = document.querySelector('.sesion');

btnLogin.addEventListener('click', e=>{
    e.preventDefault();
    openLogin.classList.add("active")
    boxSesion.classList.add('none')
})

closeLogin.addEventListener('click', e=>{
    e.preventDefault()
    openLogin.classList.remove("active")
    boxSesion.classList.remove('none')
})

let btnSignUp = document.querySelector('#Registrarse');
let openSignUp = document.querySelector('#modal-SignUp');
let closeSignUp = document.querySelector('#close-SignUp');

btnSignUp.addEventListener('click', e=>{
    e.preventDefault();
    openSignUp.classList.add("active")
    boxSesion.classList.add('none')
})

closeSignUp.addEventListener('click', e=>{
    e.preventDefault()
    openSignUp.classList.remove("active")
    boxSesion.classList.remove('none')
})