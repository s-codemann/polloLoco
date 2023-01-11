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

let ctx;
let keyboard = new Keyboard();
// clouds
// let clouds = new Clouds();
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
// clouds.setImage("img/5_background/layers/4_clouds/2.png");
// let world = new World();
// const ctx = canvas.getContext("2d");
// let world = new World(canvas);
// character.src = "img/2_character_pepe/1_idle/idle/I-1.png";

function init() {
  console.log("initialising");
  canvas = document.getElementById("game");
  canvascopy = document.createElement("canvas");

  canvascopy.id = "game";
  document.body.replaceChild(canvascopy, canvas);
  canvascopy.setAttribute("height", "600");
  canvascopy.setAttribute("width", "1000");
  //canvascopy.style.display = "block";

  canvas = canvascopy;
  canvasHeight = canvas.height;
  canvasWidth = canvas.width;
  ctx = canvas.getContext("2d");

  ctx.save();
  world = new World(canvas);
  //  backup = JSON.parse(JSON.stringify(world));
}
// character.addEventListener("load", init);

// function showOnCanvas() {
//   character.addEventListener("load", init);
// }
// window.addEventListener("DOMContentLoaded", init);

/*



CLASSES 
*/
window.addEventListener("DOMContentLoaded", init);
