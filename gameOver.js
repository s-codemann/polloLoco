let overScreen;

function gameOver(src) {
  world.character.pos_x = 0;
  let gameOverDiv = document.createElement("div");
  gameOverDiv.style.top = canvas.getBoundingClientRect().top + "px";
  gameOverDiv.classList.add("game_over_div");
  let gameOver = document.createElement("img");
  src === "win"
    ? (gameOver.src = "img/9_intro_outro_screens/game_over/game over!.png")
    : (gameOver.src = src);
  gameOver.style.top = canvas.getBoundingClientRect().top + "px";
  gameOver.style.width = getComputedStyle(canvas).width;
  gameOver.style.height = getComputedStyle(canvas).height;
  gameOver.classList.add("game_over");
  console.log("hihi", canvas);
  let restart = document.createElement("div");
  restart.classList.add("restart");
  restart.textContent = "Play Again!";
  restart.addEventListener("click", () => {
    document.body.removeChild(overScreen);
    restartGame();
  });
  let score = world.coinsCollected * 100 + world.character.health * 200;
  let scoreDiv = document.createElement("div");
  scoreDiv.textContent = "Score:" + "\n" + score;
  scoreDiv.classList.add("score-div");
  //   document.body.append(scoreDiv);
  //   document.body.append(gameOver);
  //   document.body.append(gameOverDiv);
  //   document.body.append(restart);
  setTimeout(() => gameOverDiv.append(scoreDiv, 800));
  setTimeout(() => gameOverDiv.append(restart), 1500);
  gameOverDiv.append(gameOver);
  overScreen = gameOverDiv;
  document.body.append(gameOverDiv);
}

function restartGame() {
  init();

  world.camera_x = 0;
  world.bottlesCollected = 1;
  world.coins = [
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
    new Coin(),
  ];
  world.bottles = [
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
    new Bottle(),
  ];
  world.gameStarted = true;
  world.coinsCollected = 0;
  world.character.pos_x = 20;
  world.character.health = 100;
  world.character.dead = false;
  world.character.dying = false;
  world.character.stopWalk = false;
  world.enemies = [];
  world.background = [];
  //   level0.setOffset();
  //   level1.setOffset();
  //   level2.setOffset();
  world.setLevel(level0);
  world.setLevel(level1);
  world.setLevel(level2);
  world.healthbar.setStandard();
  world.healthbar.toStart();
  world.bottlebar.toStart();
  world.bottlebar.setStandard();
  world.coinbar.toStart();
  world.coinbar.setStandard();
  world.checkforCollisionElements = world.enemies
    .concat(world.bottles)
    .concat(world.coins);
  world.enemies.forEach((enemy) => {
    enemy.dead = false;
    clearInterval(enemy.animateWalk);
    enemy.startWalk();
    enemy.walkInts = [];
    //enemy.walkLeft();
    [level0, level1, level2].forEach((level) => {
      let check = level.savedPositions.find((savedEnemy) => {
        return savedEnemy.id === enemy.id;
      });
      if (check) {
        enemy.pos_x = check.pos;
        enemy.pos_y = check.posY;
        if (enemy instanceof Boss) {
          clearInterval(enemy.animateWalk);
          clearInterval(enemy.fall);
          clearTimeout(enemy.animateDead());
          enemy.dead = false;
          enemy.charClose = false;
          enemy.alerted = false;
          enemy.attack_set = false;
          enemy.blub;
          enemy.blab;
          enemy.lives = 5;
          enemy.setImage("img/4_enemie_boss_chicken/1_walk/G1.png");
          enemy.animateAlert();
        }
      }
    });
  });

  document.getElementById("game").style.scale = "1";
}
