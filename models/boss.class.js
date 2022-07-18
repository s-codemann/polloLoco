class Boss extends Chicken {
  constructor() {
    super();
    this.setImage("img/4_enemie_boss_chicken/1_walk/G1.png");
    this.pos_x = 300;
    this.width = 300;
    this.height = 300;
    this.pos_y = canvasHeight - this.height - 30;
    this.walkingSpeed = 0;
    clearInterval(this.animateWalk);

    this.loadImages();
    this.imgLinksAlert = this.filterImageKeys("alert");
    this.imgLinksAttack = this.filterImageKeys("attack");
    this.imgLinksHurt = this.filterImageKeys("hurt");
    this.imgLinksDead = this.filterImageKeys("dead");
    // this.imgHurt = this.filterImageKeys("hurt");
  }
  charClose = false;
  alerted = false;
  lives = 4;
  imgLinks = [
    "img/4_enemie_boss_chicken/1_walk/G1.png",
    "img/4_enemie_boss_chicken/1_walk/G2.png",
    "img/4_enemie_boss_chicken/1_walk/G3.png",
    "img/4_enemie_boss_chicken/1_walk/G4.png",
    "img/4_enemie_boss_chicken/2_alert/G5.png",
    "img/4_enemie_boss_chicken/2_alert/G6.png",
    "img/4_enemie_boss_chicken/2_alert/G7.png",
    "img/4_enemie_boss_chicken/2_alert/G8.png",
    "img/4_enemie_boss_chicken/2_alert/G9.png",
    "img/4_enemie_boss_chicken/2_alert/G10.png",
    "img/4_enemie_boss_chicken/2_alert/G11.png",
    "img/4_enemie_boss_chicken/2_alert/G12.png",
    "img/4_enemie_boss_chicken/3_attack/G13.png",
    "img/4_enemie_boss_chicken/3_attack/G14.png",
    "img/4_enemie_boss_chicken/3_attack/G15.png",
    "img/4_enemie_boss_chicken/3_attack/G16.png",
    "img/4_enemie_boss_chicken/3_attack/G17.png",
    "img/4_enemie_boss_chicken/3_attack/G18.png",
    "img/4_enemie_boss_chicken/3_attack/G19.png",
    "img/4_enemie_boss_chicken/3_attack/G20.png",
    "img/4_enemie_boss_chicken/4_hurt/G21.png",
    "img/4_enemie_boss_chicken/4_hurt/G22.png",
    "img/4_enemie_boss_chicken/4_hurt/G23.png",
    "img/4_enemie_boss_chicken/5_dead/G24.png",
    "img/4_enemie_boss_chicken/5_dead/G25.png",
    "img/4_enemie_boss_chicken/5_dead/G26.png",
  ];
  imgLinksAlert;
  die() {
    if (!this.dead) {
      this.lives--;
      this.animateHurt();
    }
    if (this.lives === 0) {
      this.animateDead();
      this.dead = true;
      this.pos_y -= 100;
      setInterval(() => (this.pos_y += 4), 10);
    }
  }
  blub = setInterval(() => {
    this.isClose();
    this.animateAlert();
  }, 50);
  isClose = () => {
    if (this.pos_x - world.character.pos_x < 400) {
      this.charClose = true;
      console.log("close");
    }
  };
  animateAlert() {
    if (this.iterator >= this.imgLinksAlert.length - 1 && this.alerted) {
      //this.alerted = true;
      this.iterator = 0;
      return;
    } else if (this.charClose) {
      this.alerted = true;
      clearInterval(this.blub);
      setTimeout(() => {
        this.img = this.imageCache[this.imgLinksAlert[this.iterator]];
        this.iterator++;
        this.animateAlert();
      }, 100);
    }
  }
  animateAttack() {
    console.log(this.img.src);
    if (this.iterator >= this.imgLinksAttack.length) {
      this.iterator = 0;
      return;
    } else {
      setTimeout(() => {
        this.img = this.imageCache[this.imgLinksAttack[this.iterator]];
        this.iterator++;
        this.animateAttack();
        console.log(this.img.src);
      }, 150);
    }
  }
  animateHurt() {
    console.log(this.img.src);
    if (this.iterator >= this.imgLinksHurt.length) {
      this.iterator = 0;
      return;
    } else {
      setTimeout(() => {
        this.img = this.imageCache[this.imgLinksHurt[this.iterator]];
        this.iterator++;
        this.animateHurt();
        console.log(this.img.src);
      }, 150);
    }
  }
  animateDead() {
    console.log(this.img.src);
    if (this.iterator >= this.imgLinksDead.length) {
      this.iterator = 0;
      return;
    } else {
      setTimeout(() => {
        this.img = this.imageCache[this.imgLinksDead[this.iterator]];
        this.iterator++;
        this.animateDead();
        console.log(this.img.src);
      }, 200);
    }
  }
}
