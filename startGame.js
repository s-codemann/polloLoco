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
  setTimeout(() => startDiv.append(startBtn), 1000);
  startScreenEl = startDiv;
  let instructionDiv = document.createElement("div");
  instructionDiv.innerHTML = ` <ul class="instructions">
      <li class="instruction">f: throw bottle</li>
      <li class="instruction">spacebar: jump</li>
      <li class="instruction">left-arrow: move left</li>
      <li class="instruction">right-arrow: move right</li>
    </ul>"`;
  startDiv.append(instructionDiv);
  //document.body.append(startDiv);
  document.body.insertBefore(startDiv, document.getElementById("game"));
}
function initGame() {
  world.gameStarted = true;
  document.body.removeChild(document.querySelector("div"));
  restartGame();
}
