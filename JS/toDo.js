const form_toDo = document.querySelector(".js_form_toDo");
const input_toDo = form_toDo.querySelector("input");
const list_toDo = document.querySelector(".js_list_toDo");

const toDo_LS_KEY = "toDos";
let toDos = [];
const SUCCESS_CLASS_NAME = "success";
const CHECK_LS_KEY = "check";

function checkToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.querySelector("span");
    console.log(li);
    console.log(span);
    const loadToDos = localStorage.getItem(toDo_LS_KEY);
    const parsedToDos = JSON.parse(loadToDos);
    parsedToDos.forEach(function(a) {
        if (a.id === parseInt(li.id)) {
            if (a.checked === false) {
                a.checked = true;
                span.classList.add(SUCCESS_CLASS_NAME);
                toDos = parsedToDos;
                saveToDoAtLocal();
            } else {
                a.checked = false;
                span.classList.remove(SUCCESS_CLASS_NAME);
                toDos = parsedToDos;
                saveToDoAtLocal();
            }
        }
    });
    saveToDoAtLocal();
}

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    list_toDo.removeChild(li);
    const cleanToDos = toDos.filter(function(a) {
        return a.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDoAtLocal();
}

function printToDos(text) {
    const li = document.createElement("li");
    const successBtn = document.createElement("button");
    successBtn.innerText = "o";
    successBtn.addEventListener("click", checkToDo);
    const delBtn = document.createElement("button");
    delBtn.innerText = "x";
    delBtn.addEventListener("click", deleteToDo);
    const span = document.createElement("span");
    span.innerText = text;
    const newId = toDos.length + 1;
    li.appendChild(successBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    list_toDo.appendChild(li);
    const toDoObj = {
        checked: false,
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDoAtLocal();
}

function saveToDoAtLocal() {
    localStorage.setItem(toDo_LS_KEY, JSON.stringify(toDos));
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const currentValue = input_toDo.value;
    printToDos(currentValue);
    input_toDo.value = "";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(toDo_LS_KEY);
    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(a) {
            printToDos(a.text);
        });
    }
}

function init() {
    loadToDos();
    form_toDo.addEventListener("submit", handleTodoSubmit);
}

init();
