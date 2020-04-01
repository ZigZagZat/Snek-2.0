const canvas = document.getElementById('game');
const ctx = canvas.getContext('2d');
const w = canvas.width;
const h = canvas.height;
let keyPressed = false;

function draw(x, y, gridSize, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, gridSize, gridSize);
}

function clear() {
    ctx.fillStyle = '#23272a';
    ctx.fillRect(0, 0, w, h);
}

function end(game, length) {
    game.started = false;
    game.snake.length = length;
    game.snake.tail.length = length;
    game.snake.x = 0;
    game.snake.y = 0;
    game.snake.moveDir = [0, 0]
    game.food = new Food(game.makeFoodCoords(canvas.width), game.makeFoodCoords(canvas.height));
}

function text(text, line) {

}