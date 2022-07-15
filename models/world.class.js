class World {
  character = new Character();

  level = level0;
  enemies = this.level.enemies;
  canvas;
  ctx;
  clouds = new Clouds();
  healthbar = new Healthbar();
  bottlebar = new Bottlebar();
  coinbar = new Coinbar();
  thrownbottle;
  stopBottle = false;
  fixedBackground = [new FullBackground("./img/5_background/layers/air.png")];
  camera_x = -5;
  background = this.level.background;
  bottles = [
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
  coins = [
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
  checkforCollisionElements;
  coinsCollected = 0;
  bottlesCollected = 1;
  constructor(canvas, character, enemies, clouds) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    // this.character = character;
    // this.enemies = enemies;
    // this.clouds = clouds;
    this.setLevel(level1);
    this.setLevel(level2);
    this.character.world = this;

    this.checkforCollisionElements = this.enemies
      .concat(this.coins)
      .concat(this.bottles);
    this.checkCollision();
    this.draw();
  }
  setLevel = (level) => {
    this.level = level;
    this.enemies = this.enemies.concat(this.level.enemies);
    this.background = this.background.concat(this.level.background);
  };
  // checkforCollisionElements = this.enemies
  //   .concat(this.coins)
  //   .concat(this.bottles);
  isColliding = () => {
    this.checkforCollisionElements.forEach((obj, i) => {
      if (
        // obj.pos_x < this.character.pos_x + this.character.width &&
        // obj.pos_x + obj.width > this.character.pos_x &&
        // obj.pos_y + obj< this.character.pos_y + this.character.height
        this.character.pos_x + this.character.width > obj.pos_x &&
        this.character.pos_y + this.character.height > obj.pos_y &&
        this.character.pos_x < obj.pos_x &&
        this.character.pos_y < obj.pos_y + obj.height

        //  &&
        // this.character.jumping === false

        //   ||
        // (chick.pos_x < this.character.pos_x + this.character.width &&
        //   chicken.pos_x + chicken.width > this.character.pos_x)  &&
        // chick.pos_y > this.character.pos_y + this.character.height
      ) {
        // this.character.collidingWith = obj;
        // if (this.character.hurtTimeout === false) {
        //   console.log(this.character.hurtTimeout);
        //   this.character.hurtTimeout = true;
        //   this.healthbar.decPercentage();

        //   setTimeout(() => (this.character.hurtTimeout = false), 1500);
        // }
        // console.log(obj instanceof Chicken);
        // console.log(obj instanceof Chicken, obj instanceof Coin);
        this.character.collidingWith = obj;
      }

      // else {
      //   setTimeout(() => (this.character.collidingWith = null)), 50;
      // }
    });
    if (this.thrownBottle) {
      this.enemies.forEach((enemy) => {
        if (
          enemy.pos_x + enemy.width > this.thrownBottle.pos_x &&
          enemy.pos_y + enemy.height > this.thrownBottle.pos_y &&
          enemy.pos_x < this.thrownBottle.pos_x &&
          enemy.pos_y < this.thrownBottle.pos_y + this.thrownBottle.height
        ) {
          enemy.die();
          this.stopBottle = true;
        }
      });
    }
  };
  checkCollision = () => {
    setInterval(this.isColliding, 1000 / 60);
  };

  draw() {
    //background
    //character
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.camera_x, 0);

    this.addMultiple(this.fixedBackground);
    this.addMultiple(this.background);
    this.addToMap(this.healthbar);
    this.addToMap(this.bottlebar);
    this.addToMap(this.coinbar);
    this.addToMap(this.character);
    // this.ctx.drawImage(
    //   this.character.img,
    //   this.character.pos_x,
    //   this.character.pos_y,
    //   this.character.width,
    //   this.character.height
    // );
    //chickens
    this.addMultiple(this.enemies);
    // this.enemies.forEach((chicken) => {
    //   this.ctx.drawImage(
    //     chicken.img,
    //     chicken.pos_x,
    //     chicken.pos_y,
    //     chicken.width,
    //     chicken.height
    //   );
    // });
    //clouds
    this.addMultiple(this.coins);
    this.addMultiple(this.bottles);
    this.ctx.drawImage(
      this.clouds.img,
      this.clouds.pos_x,
      this.clouds.pos_y,
      this.clouds.width,
      this.clouds.height
    );

    if (this.thrownBottle) {
      this.addToMap(this.thrownBottle);
    }
    this.ctx.translate(-this.camera_x, 0);
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }
  addMultiple(elements) {
    elements.forEach((element) => this.addToMap(element));
  }
  addToMap(element) {
    if (
      element instanceof Character ||
      element instanceof Chicken ||
      element instanceof Coin
    ) {
      this.ctx.strokeRect(
        element.pos_x,
        element.pos_y,
        element.width,
        element.height
      );
    }
    if (element.toLeft) {
      this.ctx.save();
      this.ctx.translate(element.pos_x * 2, 0);
      this.ctx.scale(-1, 1);
      // this.ctx.scale(-5, 1);

      element.width = element.width * -1;
    }
    this.ctx.drawImage(
      element.img,
      element.pos_x,
      element.pos_y,
      element.width,
      element.height
    );
    if (element.toLeft) {
      element.width = element.width * -1;
      this.ctx.restore();
    }
  }
}
