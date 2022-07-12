class Character extends MovableObject {
  imgLinksWalk;
  constructor(x, y) {
    super(50, 235, 150, 300);
    this.setImage("./img/2_character_pepe/1_idle/idle/I-8.png");
    this.loadImages(this.imgLinks);
    this.imgLinksWalk = this.filterImageKeys("walk");
    this.imgLinksJump = this.filterImageKeys("jump");
    this.animate();
  }
  idle1 = "img/2_character_pepe/1_idle/idle/I-1.png";
  walkINTV;
  hurtTimeout = false;
  jumping = false;

  collidingWith = {};
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
  jump = () => {
    if (this.jumpingIterator % 10 === 0 && this.jumpingIterator > 0) {
      this.jumping = false;
      // this.pos_y = 250;
      this.jumpingIterator = 0;

      return;
    } else {
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
    console.log(curveInd <= 0 ? curveInd : curveInd - 1);
    return curveInd <= 0 ? curveInd * 17 : (curveInd - 1) * 17;
  };
  animate() {
    setInterval(() => {
      if (keyboard.left) {
        this.toLeft = true;
        if (this.pos_x > 0) {
          this.pos_x -= 5;
        }
      }
      if (keyboard.right) {
        this.toLeft = false;
        this.pos_x += 7;
        //this.moveWorld(true);
        this.movingWalk = true;
        this.world.camera_x -= 5;
        // this.world.ctx.translate(-5, 0);
      }
      if (keyboard.spacebar) {
        if (this.jumping === false) {
          // this.img =
          //   this.imageCache[this.imgLinksJump[this.jumpingIterator % 9]];
          // this.jumpingIterator++;
          this.jump();
        }
      }
      if (!keyboard.left) {
        this.toLeft = false;
      }
      if (!keyboard.right) {
        this.movingWalk = false;
      }
      this.chicken();
    }, 1000 / 60);
    /////////////
    //jumping
    //

    // walking
    setInterval(() => {
      if ((keyboard.right || keyboard.left) && this.jumping === false) {
        this.img = this.imageCache[this.imgLinksWalk[this.movingIterator % 6]];
        this.movingIterator++;
      }
    }, 70);
  }
  //
  //
  chicken = () => {
    //console.log(this.world.checkforCollisionElements);
    // console.log(this.collidingWith);
    // if (this.collidingWith) {
    //   console.log(
    //     "chicken:",
    //     this.collidingWith instanceof Chicken,
    //     "coin:",
    //     this.collidingWith instanceof Coin
    //   );
    // }
    //console.log(this.collidingWith.id);
    // console.log(
    //   this.collidingWith instanceof Coin,
    //   this.collidingWith instanceof Chicken
    // );
    if (this.collidingWith instanceof Coin) {
      // world.coins.forEach((coin, index) =>
      //   console.log(index, coin.id, this.collidingWith.id)
      // );
      this.checkAndSplice(this.world.coins, this.collidingWith.id);
      this.collidingWith = null;
    }
    // console.log(this.collidingWith instanceof Chicken);
    else if (this.collidingWith instanceof Chicken) {
      console.log(this.collidingWith instanceof Chicken);
      if (!this.hurtTimeout && !this.jumping) {
        this.checkAndSplice(this.world.enemies, this.collidingWith.id);
        this.hurtTimeout = true;
        this.world.healthbar.decPercentage();
        // setTimeout(() => (this.collidingWith = {}), 500);
        setTimeout(() => (this.hurtTimeout = false), 1500);
        // this.collidingWith = null;
      }
    }
    this.collidingWith = null;
  };
  moveWorld(bool) {
    //   this.world.background.forEach((background) => {
    //     bool ? (background.pos_x -= 6) : (background.pos_x += 6);
    //   });
    // Object.keys(world).forEach((key) => {
    //   if (
    //     // key !== "character" &&
    //     key !== "fixedBackground" &&
    //     key !== "canvas" &&
    //     typeof world[key] === "object"
    //   ) {
    //     Array.isArray(world[key])
    //       ? world[key].forEach((obj) => (obj.pos_x -= 5))
    //       : (world[key].pos_x -= 5);
    //   }
    // });
  }
}
