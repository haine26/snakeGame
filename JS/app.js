"use strict  ";
const startGameBtn = document.querySelector(".START GAME");
const GRID_SIZE = 20;

const WITDH = 440;
const HEIGHT = 440;
const INIT_SPEED = 10;
// const SNAKE_SPEED = 12;

let snake, food, score;
var speed = 5,
  count = 0;
var x = INIT_SPEED;
function setup() {
  frameRate(x);
  createCanvas(WITDH, HEIGHT);
  newGame();
}

function draw() {
  background(205, 226, 183);

  if (!snake.isDead) {
    drawSnake();
  } else {
    reset();
    newGame();
  }
}

function drawSnake() {
  // update every SNAKE_SPEED frame
  if (frameCount % speed == 0) {
    snake.update();
  }

  console.log(frameRate());

  food.show();
  snake.show();
  if (snake.score >= 2) {
    stone.show();
  }

  // Handle when snake eat food
  if (snake.head.x == food.x && snake.head.y == food.y) {
    eatFood();
  }
}

function newGame() {
  snake = new Snake();
  food = new Food();
  stone = new Stone();
}

function eatFood() {
  snake.length++;
  snake.score++;
  document.getElementById("score").innerHTML = snake.score;
  food.newFood();
  stone.newStone();
  // cứ ăn được x * 2 mồi thì sẽ tăng tốc lên 2 đơn vị
  if (snake.score % 2 == 0) {
    frameRate((x += 2));
    count++;
    console.log(count);
  }
}

function reset() {
  document.getElementById("score").innerHTML = 0;
  snake.score = 0;
  frameRate(INIT_SPEED);
  x = INIT_SPEED;
  console.log(frameRate(x));
}

function keyPressed() {
  if (keyCode == UP_ARROW && snake.vel.y != 1) {
    snake.vel.y = -1;
    snake.vel.x = 0;
  } else if (keyCode == DOWN_ARROW && snake.vel.y != -1) {
    snake.vel.y = 1;
    snake.vel.x = 0;
  } else if (keyCode == LEFT_ARROW && snake.vel.x != 1) {
    snake.vel.y = 0;
    snake.vel.x = -1;
  } else if (keyCode == RIGHT_ARROW && snake.vel.x != -1) {
    snake.vel.y = 0;
    snake.vel.x = 1;
  }
}

