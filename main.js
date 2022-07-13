//board
const blockSize = 25;
const rows = 20;
const cols = 20;
let gameBoard;
let context;



//snake head

let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

//speed of snake

let velocityX = 0;
let velocityY = 0;

//snakeBody
let snakeBody = []

//snake food

let foodX;
let foodY;


//game over
let gameOver = false;

window.onload = function() {
    gameBoard = document.getElementById("gameBoard");
    gameBoard.height = rows * blockSize;
    gameBoard.width = cols * blockSize;
    context = gameBoard.getContext("2d");
    
    placeFood();
    document.addEventListener("keyup", changeDirection);
    // update();

    //keyup = keyboard arrow -> once the key is not pressed = change direction
    setInterval(update, 1000/10); //100 millaseconds
}

function update() {

    //stops drawing when game is over
    if (gameOver) {
        return;
    }


    context.fillStyle="black";
    context.fillRect(0, 0, gameBoard.width, gameBoard.height);

    context.fillStyle="red";
    context.fillRect(foodX, foodY, blockSize, blockSize);

    if (snakeX == foodX && snakeY == foodY) {
        snakeBody.push([foodX, foodY]);
        placeFood();
    }

    for (let i = snakeBody.length -1; i > 0; i--) {
        snakeBody[i] = snakeBody[i-1];
    }

    //if snake has a body then set [0] (before the head) = head [snakeX, snakeY]
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }

    context.fillStyle="lime";
    snakeX += velocityX * blockSize;
    snakeY += velocityY * blockSize;
    context.fillRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {
        context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize)
    }
    //gameOver Logic
    if (snakeX < 0 || snakeX > cols*blockSize || snakeY < 0 || snakeY > rows*blockSize) {
        gameOver = true;
        alert("Game Over");

    }
    //using a for loop because we want to read each segment
    for (let i = 0; i < snakeBody.length; i++){
        if (snakeX = snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            alert("Game Over!")
        }
    }



}

// "&& velocityY != 1" restricting from going in opposite direction
//ex. if L ! R // if U ! D
function changeDirection(e) {
    if (e.code == "ArrowUp" && velocityY != 1) {
        velocityX = 0;
        velocityY = -1

    }
    else if (e.code == "ArrowDown" && velocityY != -1) {
        velocityX = 0;
        velocityY = 1

    }
    else if (e.code == "ArrowLeft" && velocityX != 1) {
        velocityX = -1;
        velocityY = 0

    }
    else if (e.code == "ArrowRight" && velocityX != -1) {
        velocityX = 1;
        velocityY = 0

    }
console.log(e);
}


function placeFood() {
    //return a number between zero and one * col (num between 0-19.9999)
    //Math.floor gets rid of the decimal and converts 19.999 -> (0-19)
    //then multiply that by * 25 (blockSize)
    foodX = Math.floor(Math.random() * cols) * blockSize;
    foodY = Math.floor(Math.random() * rows) * blockSize;
}


