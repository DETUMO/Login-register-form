const container = document.querySelector('.container');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', ()=> {
    container.classList.add('active');
});

loginlink.addEventListener('click', ()=>{
    container.classList.remove('active');
});

const btnPopup = document.querySelector('.btnLogin-popup');

btnPopup.addEventListener('click', ()=> {
    container.classList.add('active-popup');
});

const closeicon = document.querySelector('.close-icon');

closeicon.addEventListener('click', ()=> {
    container.classList.remove('active-popup');
});

