class Chicken extends MovableObject {
  constructor(x, y) {
    let randX = 500 + Math.random() * 300;

    super(randX, 470, 70, 70);

    this.setImage("./img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
  }
  moveRight() {
    console.log(this);
  }
  moveRight() {}
  moveLeft() {}

  eat() {}
}
