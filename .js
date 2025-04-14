// submit button color transition
const input = document.getElementById("email");

input.addEventListener("focus", () => {
    input.style.transition = "border-color 0.5s ease, opacity 0.5s ease";
});

// sign up/login form-boxes transition
const login = document.querySelector('.form-box-login');
const signup = document.querySelector('.form-box-sign-up');
const loginLink = document.querySelector('.login');
const signupLink = document.querySelector('.sign-up');
const btnPopUp = document.querySelector('.btn-login');
const close = document.querySelector('.icon-close');

signupLink.addEventListener('click', () => {
    signup.classList.add('active');
    login.classList.add('active');
    login.classList.remove('active-popup');
});

loginLink.addEventListener('click', () => {
    signup.classList.remove('active');
    login.classList.remove('active');
    login.classList.add('active-popup');
});

btnPopUp.addEventListener('click', () => {
    login.classList.add('active-popup');
});