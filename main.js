//board

const blockSize = 25;
const rows = 20;
const cols = 20;
let gameBoard;
let context;

window.onload = function() {
    gameBoard = document.getElementById("gameBoard");
    gameBoard.height = rows * blockSize;
    gameBoard.width = cols * blockSize;
    context = board.getContext("2d");

    update();
}

function update() {
    context.fillStyle="black";
    
}