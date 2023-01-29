let canvas;
let world;
console.log("now");
let backup;
let chicken_alert = new Audio("audio/chicken-alert.wav");
let chicken_dead = new Audio("audio/chicken-dead.wav");
let coin = new Audio("audio/coin.wav");
let jump = new Audio("audio/jump.wav");
let walking = new Audio("audio/walk.wav");
let char_hurt = new Audio("audio/char-hurt.wav");
let char_dead = new Audio("audio/char-dead.wav");
let boss_scream = new Audio("audio/boss-scream.wav");
let firstCtx;

let firstRun = true;
let initialState;

let ctx;
let keyboard = new Keyboard();
window.addEventListener("keydown", (ev) => {
  switch (ev.key) {
    case "ArrowRight":
      keyboard.right = true;
      break;
    case "ArrowLeft":
      keyboard.left = true;
      break;
    case "ArrowUp":
      keyboard.up = true;
      break;
    case " ":
      keyboard.spacebar = true;
      break;
    case "f":
      keyboard.f = true;
  }
});
window.addEventListener("keyup", (ev) => {
  switch (ev.key) {
    case "ArrowRight":
      keyboard.right = false;
      break;
    case "ArrowLeft":
      keyboard.left = false;
      break;
    case "ArrowUp":
      keyboard.up = false;
      break;
    case " ":
      keyboard.spacebar = false;
      break;
    case "f":
      keyboard.f = false;
  }
});

function init() {
  console.log("initialising");
  canvas = document.getElementById("game");

  canvasHeight = canvas.height;
  canvasWidth = canvas.width;
  ctx = canvas.getContext("2d");
  ctx.save();

  world = new World(canvas);
}

window.addEventListener("DOMContentLoaded", init);
