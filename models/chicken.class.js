class Chicken extends MovableObject {
  constructor(x, y) {
    let randX = 300 + Math.random() * 500;

    super(randX, 470, 70, 70);

    this.setImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.startWalk();
    this.loadImages();
    this.walkLeft();

    console.log("newchick");
  }
  imgLinks = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];
  animateWalk;
  walkingSpeed = 0.4 + Math.random() * 6;
  dead = false;
  moveRight() {
    console.log(this);
  }
  die() {
    this.dead = true;
    chicken_dead.play();
    setTimeout(
      () =>
        this.setImage("img/3_enemies_chicken/chicken_normal/2_dead/dead.png"),
      30
    );
    setTimeout(() => this.checkAndSplice(world.enemies, this.id), 1300);
  }

  moveRight() {}
  moveLeft() {
    if (world.gameStarted) {
      this.pos_x -= this.walkingSpeed;
    }
  }
  walkInts = [];
  startWalk = () => {
    this.animateWalk = setInterval(() => {
      let one;
      let two;
      let three;
      if (!this.dead)
        one = setTimeout(
          () => (this.img = this.imageCache[this.imgLinks[0]]),
          100
        );
      two = setTimeout(
        () => (this.img = this.imageCache[this.imgLinks[1]]),
        200
      );
      three = setTimeout(
        () => (this.img = this.imageCache[this.imgLinks[2]]),
        300
      );
      this.walkInts.push(one, two, three);

      // if (this.dead) {
      //   clearTimeout(one);
      //   clearTimeout(two);
      //   clearTimeout(three);
      // }
    }, 300);
  };
  walkLeft() {
    setInterval(() => {
      if (!this.dead) {
        this.moveLeft();
        //  console.log(intv);
      } else {
        //clearInterval(intv);
        if (this.animateWalk) {
          clearInterval(this.animateWalk);
          clearTimeout(this.walkInts.pop());
          clearTimeout(this.walkInts.pop());
          clearTimeout(this.walkInts.pop());
          //this.walkLeft = () => 111;
          // setTimeout(
          //   () =>
          //this.setImage("img/3_enemies_chicken/chicken_normal/2_dead/dead.png");
          //   300
          // );
        }
      }
    }, 50);
  }
  eat() {}
}
