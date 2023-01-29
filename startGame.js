let startScreenEl;
window.addEventListener("DOMContentLoaded", startScreen);
function startScreen() {
  let startDiv = document.createElement("div");
  let startBtn = document.createElement("div");
  startBtn.classList.add("start_btn");
  startBtn.textContent = "START GAME";
  startBtn.addEventListener("click", initGame);
  startDiv.classList.add("start");
  startDiv.style.top = canvas.getBoundingClientRect().top;
  document.body.append(startDiv);
  setTimeout(() => startDiv.append(startBtn), 1000);
  startScreenEl = startDiv;
}
function initGame() {
  world.gameStarted = true;
  document.body.removeChild(startScreenEl);

  restartGame();
}
