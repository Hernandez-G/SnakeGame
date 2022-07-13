//board
const blockSize = 25;
const rows = 20;
const cols = 20;
let gameBoard;
let context;

//snake head

const snakeX = blockSize * 5;
const snakeY = blockSize * 5;

//snake food

let foodX;
let foodY;

//speed of snake

let velocityX = 0;
let velocityY = 0;

window.onload = function() {
    gameBoard = document.getElementById("gameBoard");
    gameBoard.height = rows * blockSize;
    gameBoard.width = cols * blockSize;
    context = gameBoard.getContext("2d");
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();
    //keyup = key board arrow -> once the key is not pressed = change direction

    setInterval(update, 1000/10); //100 millaseconds
}

function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, gameBoard.width, gameBoard.height);

    context.fillStyle="lime";
    snakeX += velocityX;
    snakeY += velocityY;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}


function placeFood() {
    //return a number between zero and one * col (num between 0-19.9999)
    //Math.floor gets rid of the decimal and converts 19.999 -> (0-19)
    //then multiply that by * 25 (blockSize)
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}

function changeDirection() {
    if (evt.code == "ArrowUp") {
        velocityX = 0;
        velocityY = -1

    }
    else if (evt.code == "ArrowDown") {
        velocityX = 0;
        velocityY = 1

    }
    else if (evt.code == "ArrowLeft") {
        velocityX = -1;
        velocityY = 0

    }
    if (evt.code == "ArrowRight") {
        velocityX = 1;
        velocityY = 0

    }

}