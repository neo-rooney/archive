const form = document.querySelector('.js_form');
const input = form.querySelector('input');
const displayName = document.querySelector('.js_displayName');

const LS_key = "name";
const SHOWING_CLASS_NAME = "show";

function saveNameAtLoacl(text) {
    localStorage.setItem(LS_key,text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = input.value;
    sayHello(currentValue);
    saveNameAtLoacl(currentValue);
}

function askName() {
    form.classList.add(SHOWING_CLASS_NAME);
    form.addEventListener('submit', handleSubmit)
}

function sayHello(text) {
    form.classList.remove(SHOWING_CLASS_NAME);
    displayName.classList.add(SHOWING_CLASS_NAME);
    displayName.innerText = `Good morning ${text}`
}

function saveName() {
    const userName = localStorage.getItem(LS_key);
    if(userName === null) {
        askName();
    }else {
        sayHello(userName);
    }
}

function init() {
    saveName();
}
init();