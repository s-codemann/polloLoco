class Keyboard {
  up = false;
  left = false;
  right = false;
  spacebar = false;
  f = false;
}
// window.addEventListener("keydown", (ev) => {
//   console.log(ev);
//   switch (ev.key) {
//     case "ArrowRight":
//       world.character.pos_x += 10;
//       world.clouds.pos_x -= 1;
//       world.background.forEach((background) => {
//         background.pos_x -= 5;
//         if (world.character.movingWalk === false) {
//           world.character.animateWalk();
//         } else
//           window.addEventListener("keyup", () => {
//             world.character.setImage(world.character.idle1);
//             clearInterval(world.character.walkINTV);
//             character.movingWalk = false;
//           });
//       });
//       break;
//     case "ArrowLeft":
//       world.character.pos_x -= 10;
//       world.clouds.pos_x += 3;
//       break;
//   }
// });
