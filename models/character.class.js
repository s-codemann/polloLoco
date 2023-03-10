class Character extends MovableObject {
  imgLinksWalk;
  constructor(x, y) {
    super(50, 235, 150, 300);
    this.setImage("./img/2_character_pepe/1_idle/idle/I-8.png");
    this.loadImages(this.imgLinks);
    this.imgLinksWalk = this.filterImageKeys("walk");
    this.imgLinksJump = this.filterImageKeys("jump");
    this.imgLinksHurt = this.filterImageKeys("hurt");
    this.imgLinksDead = this.filterImageKeys("dead");
    this.animate();
  }
  health = 100;
  idle1 = "img/2_character_pepe/1_idle/idle/I-1.png";
  walkINTV;
  moving = false;
  hurtTimeout = false;
  jumping = false;
  throwingIterator = 0;
  throwingBottle = false;
  collidingWith = {};
  stopWalk = false;
  hurting = false;
  dying = false;
  dead = false;
  imgLinks = [
    //idle
    "img/2_character_pepe/1_idle/idle/I-1.png",
    "img/2_character_pepe/1_idle/idle/I-2.png",
    "img/2_character_pepe/1_idle/idle/I-3.png",
    "img/2_character_pepe/1_idle/idle/I-4.png",
    "img/2_character_pepe/1_idle/idle/I-5.png",
    "img/2_character_pepe/1_idle/idle/I-6.png",
    "img/2_character_pepe/1_idle/idle/I-7.png",
    "img/2_character_pepe/1_idle/idle/I-8.png",
    "img/2_character_pepe/1_idle/idle/I-9.png",
    "img/2_character_pepe/1_idle/idle/I-10.png",
    "img/2_character_pepe/1_idle/long_idle/I-11.png",
    "img/2_character_pepe/1_idle/long_idle/I-12.png",
    "img/2_character_pepe/1_idle/long_idle/I-13.png",
    "img/2_character_pepe/1_idle/long_idle/I-14.png",
    "img/2_character_pepe/1_idle/long_idle/I-15.png",
    "img/2_character_pepe/1_idle/long_idle/I-16.png",
    //walk
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png",
    //jump
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png",
    //hurt
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png",
    //dead
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png",
  ];
  //
  //jumping
  //
  defaultImg = "img/2_character_pepe/1_idle/idle/I-8.png";
  jump = () => {
    if (this.jumpingIterator % 10 === 0 && this.jumpingIterator > 0) {
      setTimeout(() => (this.jumping = false), 100);
      // this.pos_y = 250;
      this.jumpingIterator = 0;

      return;
    } else {
      this.moving = true;
      this.jumping = true;
      setTimeout(() => {
        this.img = this.imageCache[this.imgLinksJump[this.jumpingIterator % 9]];
        this.pos_y -= this.airtime();
        this.jumpingIterator++;
        this.jump();
      }, 120);
    }
  };
  airtime = () => {
    let curveInd = 5 - (this.jumpingIterator % 10);
    return curveInd <= 0 ? curveInd * 17 : (curveInd - 1) * 17;
  };
  animate() {
    setInterval(() => {
      if (keyboard.left && !this.dead) {
        this.toLeft = true;
        if (this.pos_x > this.world.camera_x * -1) {
          this.pos_x -= 5;
          this.moving = true;
          this.movingWalk = true;
        }
      } else if (keyboard.right && !this.stopWalk && !this.dead) {
        this.toLeft = false;
        this.pos_x += 5.5;
        this.world.healthbar.pos_x = -1 * this.world.camera_x + 20;
        this.world.coinbar.pos_x = -1 * this.world.camera_x + 20;
        this.world.bottlebar.pos_x = -1 * this.world.camera_x + 20;
        this.movingWalk = true;
        this.world.camera_x -= 5;
        if (this.world.camera_x < canvasWidth * -1.7) {
          this.stopWalk = true;
        }
        // this.world.ctx.translate(-5, 0);
      } else if (keyboard.right && !this.dead) {
        this.pos_x += 4;
        this.movingWalk = true;
        this.moving = true;
      }
      if (keyboard.spacebar && !this.dead) {
        if (this.jumping === false) {
          // this.img =
          //   this.imageCache[this.imgLinksJump[this.jumpingIterator % 9]];
          // this.jumpingIterator++;
          jump.play();
          this.jump();
          this.moving = true;
        }
      } else if (!keyboard.left) {
        this.toLeft = false;
      } else if (!keyboard.right) {
        this.movingWalk = false;
      }
      if (keyboard.f) {
        this.throwBottle();
      }
      this.chicken();
      if (
        !keyboard.left &&
        !keyboard.right &&
        !this.throwingBottle &&
        !this.jumping &&
        !this.hurting &&
        !this.dying
      ) {
        this.moving = false;
      } else this.moving = true;
    }, 1000 / 60);
    /////////////
    //jumping
    //

    // walking
    setInterval(() => {
      walking.pause();
      if (
        (keyboard.right || keyboard.left) &&
        this.pos_y === 235 &&
        !this.hurting &&
        !this.dead
      ) {
        this.img = this.imageCache[this.imgLinksWalk[this.movingIterator % 6]];
        this.movingIterator++;
        walking.play();
      } else if (!this.moving) {
        this.setStandard();
      }
    }, 70);
  }
  //
  //
  chicken = () => {
    // if (this.collidingWith) {
    //     this.collidingWith instanceof Chicken,
    //     "coin:",
    //     this.collidingWith instanceof Coin
    //   );
    // }
    //   this.collidingWith instanceof Coin,
    //   this.collidingWith instanceof Chicken
    // );
    if (this.collidingWith instanceof Coin) {
      // world.coins.forEach((coin, index) =>
      // );
      this.checkAndSplice(this.world.coins, this.collidingWith.id);
      this.collidingWith = null;
      this.world.coinsCollected++;
      if (this.world.coinsCollected % 3 === 0) {
        this.world.coinbar.incPercentage();

        coin.play();
      }
    } else if (this.collidingWith instanceof Chicken && !this.dead) {
      console.log(
        this.collidingWith instanceof Chicken,
        this.collidingWith instanceof Boss,
        this.pos_x,
        this.world.enemies.find((enemy) => enemy instanceof Boss).pos_x
      );
      if (
        !this.hurtTimeout &&
        !this.jumping &&
        this.collidingWith.dead === false
      ) {
        this.hurtTimeout = true;
        this.world.healthbar.decPercentage();
        this.health -= 20;
        if (this.health <= 0) {
          gameOver("img/9_intro_outro_screens/game_over/you lost.png");
          this.animateDead();
          char_dead.play();
        }

        if (this.health > 0) {
          char_hurt.play();
          this.animateHurt();
        }
        // setTimeout(() => this.setStandard(), 400);
        // setTimeout(() => (this.collidingWith = {}), 500);
        setTimeout(() => (this.hurtTimeout = false), 1500);
        // this.collidingWith = null;
      } else if (this.jumping) {
        // this.hurtTimeout = true;
        this.collidingWith.die();
        // setTimeout(() => (this.hurtTimeout = false), 1500);
      }
    } else if (this.collidingWith instanceof Bottle) {
      this.checkAndSplice(this.world.bottles, this.collidingWith.id);
      this.world.bottlesCollected++;
      if (this.world.bottlesCollected % 3 === 0) {
        this.world.bottlebar.incPercentage();
      }
    }
    this.collidingWith = null;
  };
  throwBottle() {
    if (this.world.bottlesCollected > 0 && this.throwingBottle === false) {
      let thrownBottle = new Bottle();
      thrownBottle.pos_x = this.pos_x;
      thrownBottle.pos_y = this.pos_y + this.height / 2;
      thrownBottle.setImage("img/6_salsa_bottle/salsa_bottle.png");
      this.world.thrownBottle = thrownBottle;
      this.animateBottle(this.world.thrownBottle);
      this.rotateBottle();
      if (this.world.bottlesCollected % 3 === 0) {
        this.world.bottlebar.decPercentage();
      }
      if (this.world.bottlesCollected > 0) {
        this.world.bottlesCollected--;
      }
    }
  }
  animateBottle = (bottle) => {
    if (bottle.pos_y > canvasHeight || this.world.stopBottle) {
      this.throwingIterator = 0;
      this.throwingBottle = false;
      this.world.thrownBottle = null;
      bottle.pos_y = Number.POSITIVE_INFINITY;
      this.world.stopBottle = false;
      return;
    } else {
      this.throwingBottle = true;
      setTimeout(() => {
        this.throwingIterator++;
        bottle.pos_x += 13 - Math.random() * 10;
        bottle.pos_y += setY();
        this.animateBottle(bottle);
      }, 10);
    }
    let setY = () => {
      let bottleTranslate = -20 + this.throwingIterator;
      return bottleTranslate;
    };
  };
  rotateBottle() {
    let rotBottle = this.world.thrownBottle;
    if (rotBottle) {
      setInterval(() => {
        rotBottle.setImage(
          "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
        );
        setTimeout(
          () =>
            rotBottle.setImage(
              "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png"
            ),
          50
        );
        setTimeout(
          () =>
            rotBottle.setImage(
              "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png"
            ),
          100
        );
        setTimeout(
          () =>
            rotBottle.setImage(
              "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png"
            ),
          150
        );
      }, 150);
    }
  }
  animateHurt() {
    this.hurting = true;
    if (this.iterator >= this.imgLinksHurt.length) {
      this.iterator = 0;
      this.hurting = false;

      return;
    } else {
      this.img = this.imageCache[this.imgLinksHurt[this.iterator]];
      this.iterator++;
      setTimeout(() => this.animateHurt(), 150);
    }
  }
  animateDead() {
    this.dying = true;
    if (this.iterator >= this.imgLinksDead.length) {
      this.iterator = 0;
      this.dead = true;
      return;
    } else {
      this.img = this.imageCache[this.imgLinksDead[this.iterator]];
      this.iterator++;
      setTimeout(() => this.animateDead(), 150);
    }
  }
}
