# Momentum by Javascript

![Momentum](https://user-images.githubusercontent.com/52039229/74095396-2be40300-4b33-11ea-980d-46b1d945f2f8.png)

Chrome 확장 프로그램 중 하나로 현재 시간을 보여주고 Todo List를 작성할 수 있는 프로그램입니다.
더 자세한 설명은 블로그에 있습니다.

[블로그 바로가기](https://rman1992.tistory.com/category/JavaScript/Momentum)

## index.html

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <title>momentum</title>
        <link rel="stylesheet" href="./index.css" />
    </head>
    <body>
        <div class="js_main">
            <div class="js_clock">
                <h1 class="clock_text">00:00</h1>
            </div>
            <h4 class="js_displayName displayName"></h4>
            <form class="js_form form">
                <input type="text" placeholder="What is your name?" />
            </form>
            <form class="js_form_toDo form_toDo">
                <input type="text" placeholder="What are you doing?" />
            </form>
            <ul class="js_list_toDo"></ul>
        </div>
        <div class="weather">
            <span class="js_weather"></span>
        </div>
        <script src="JS/clock.js"></script>
        <script src="JS/showYourName.js"></script>
        <script src="JS/toDo.js"></script>
        <script src="js/bgImage.js"></script>
        <script src="js/weather.js"></script>
    </body>
</html>
```

## clock.js

```javascript
const clockContainer = document.querySelector(".js_clock");
const clockText = clockContainer.querySelector("h1");

const getTime = () => {
    // 시간에 관한 methods
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    //삼항연산자
    clockText.innerText = `${hour < 10 ? `0${hour}` : hour}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

function init() {
    getTime();
    setInterval(getTime, 1000); //setinterval
}

init();
```

### 시간에관한 methods

![시간에 관한 메서드](https://user-images.githubusercontent.com/52039229/74095505-37d0c480-4b35-11ea-8b72-c91cd3e6fce1.png)  
 javascript에서는현재 시간을 구하기 위해 new Date()라는 함수를 제공합니다. new Date 함수의 반환값은 위의 사진에서 보다시피 요일, 월, 일, 년, 시, 분, 초 입니다. 반환값의 각 요소들에 따로 접근이 가능한데 위의 사진에서과 같이 getHours(), getMinutes() 등이 있습니다. 특이한 점은 요일의 경우에는 월요일은 1, 화요일은 2 처럼 숫자로 요일을 반환해 줍니다.

### setinterval

우리가 시간이 흐른다고 느끼는 최소단위는 '초'입니다. 시계 초침이 1초 간격으로 움직인다던지, 혹은 전자시계처럼 숫자로 시간이 표시되는 경우에는 초가 1초씩 더해지는 것을 보고 시간이 흐른다고 느끼는 것입니다. 우리가 만든 함수가 1초마다 실행되고, 그 값이 브라우어제 1초마다 반영된다면 실시간으로 시간이 흐르는것처럼 보일겁니다.

### 삼항연산자

우리가 흔히 쓰는 조건문인 if문 대신 짧게 조건문을 쓸 경우 삼항 연산자를 사용할 수 있습니다.
삼항연산자의 사용방법은 아래와 같습니다.

```
( 조건 ) ? 명령문1(조건이 true 경우 실행) : 명령문2(조건이 false 경우 실행);
```

우리가 작성한 시간 중 초를 예로 들어보겠습니다. 초가 10보다 작을 경우에는 앞에 0을 붙여서 출력하고 초가 10 이상일 경우에는 그대로 출력하게 되면 우리가 원하는 형태로 시간이 출력될 것입니다.

### showYourName.js

localStorage를 이용하여 브라우저가 내가 입력한 값을 기억하도록 했습니다.

```javascript
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
```

## toDo.js

To Do : 완료 목록과 대기 목록으로 할 수 있도록 변경하기!

```javascript
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
    console.log(li);
    const loadToDos = localStorage.getItem(toDo_LS_KEY);
    const parsedToDos = JSON.parse(loadToDos);
    parsedToDos.forEach(function(a) {
        if (a.id === parseInt(li.id)) {
            if (a.checked === false) {
                a.checked = true;
                li.classList.add(SUCCESS_CLASS_NAME);
                toDos = parsedToDos;
                saveToDoAtLocal();
            } else {
                a.checked = false;
                li.classList.remove(SUCCESS_CLASS_NAME);
                toDos = parsedToDos;
                saveToDoAtLocal();
            }
        }
    });
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
    const successBtn = document.createElement("input");
    successBtn.type = "checkbox";
    successBtn.innerText = "□";
    successBtn.addEventListener("click", checkToDo);
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
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
```

## bgImage.js

랜덤으로 백그라운드 이미지를 변경

```javascript
const body = document.querySelector("body");

const IMAGE_NUMBER = 3;
const IMAGE_CLASS_NAME = "bgimage";

function printImage(imageNum) {
    const image = new Image();
    image.src = `images/${imageNum}.jpg`;
    image.classList.add(IMAGE_CLASS_NAME);
    body.appendChild(image);
}

function genRandom() {
    const number = Math.floor(Math.random() * IMAGE_NUMBER) + 1;
    return number;
}

function init() {
    const randomNumber = genRandom();
    printImage(randomNumber);
}

init();
```

## weather.js

Web API를 이용하여 현재 경도 위도 데이터를 저장하고 그 데이터를 활용하여 날씨 데이터르 가져온다.

```javascript
const weather = document.querySelector(".js_weather");
const COORDS = "coords";
const API_KEY = "2760203de2fddbfea61f0b27c4152aca";

function getWeather(lat, lon) {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    )
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} & ${place}`;
        });
}

function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
}

function handleGeoError() {
    console.log("Can`t not find location");
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    } else {
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();
```
