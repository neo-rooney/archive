const body = document.querySelector('body');

const IMAGE_NUMBER = 3;
const IMAGE_CLASS_NAME = "bgimage"

function printImage(imageNum) {
    const image = new Image();
    image.src = `images/${imageNum}.jpg`
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

init()