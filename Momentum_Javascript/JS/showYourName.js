const form = document.querySelector(".js_form");
const input = form.querySelector("input");
const displayName = document.querySelector(".js_displayName");

const LS_key = "name";
const SHOWING_CLASS_NAME = "show";

const saveNameAtLoacl = text => {
    localStorage.setItem(LS_key, text);
};

const handleSubmit = e => {
    e.preventDefault();
    const currentValue = input.value;
    sayHello(currentValue);
    saveNameAtLoacl(currentValue);
};

const askName = () => {
    form.classList.add(SHOWING_CLASS_NAME);
    form.addEventListener("submit", handleSubmit);
};

const sayHello = text => {
    form.classList.remove(SHOWING_CLASS_NAME);
    displayName.classList.add(SHOWING_CLASS_NAME);
    displayName.innerText = `Good morning, ${text}`;
};

const saveName = () => {
    const userName = localStorage.getItem(LS_key);
    if (userName === null) {
        askName();
    } else {
        sayHello(userName);
    }
};

function init() {
    saveName();
}

init();
