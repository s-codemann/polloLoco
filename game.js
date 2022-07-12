let canvas;
let canvasHeight;
let canvasWidth;
let counter = 0;

// let character = new Character(50, 250);
// character.setImage("./img/2_character_pepe/1_idle/idle/I-8.png");
// let chicken1 = new Chicken();
// let chicken2 = new Chicken();
// let chicken3 = new Chicken();
// let enemies = [chicken1, chicken2, chicken3];
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
  canvasHeight = canvas.height;
  canvasWidth = canvas.width;
  ctx = canvas.getContext("2d");
  world = new World(canvas);
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
