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


window.onload = function() {
    gameBoard = document.getElementById("gameBoard");
    gameBoard.height = rows * blockSize;
    gameBoard.width = cols * blockSize;
    context = gameBoard.getContext("2d");
    
    placeFood();

    update();
}

function update() {
    context.fillStyle="black";
    context.fillRect(0, 0, gameBoard.width, gameBoard.height);

    context.fillStyle="lime";
    context.fillRect(snakeX, snakeY, blockSize, blockSize);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);
}


function placeFood() {
    //
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}