const clockContainer = document.querySelector(".js_clock");
const clockText = clockContainer.querySelector("h1");

const getTime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clockText.innerText = `${hour < 10 ? `0${hour}` : hour}:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();
