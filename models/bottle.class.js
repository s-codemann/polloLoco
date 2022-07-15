class Bottle extends MovableObject {
  constructor() {
    let randX = Math.random() * (canvasWidth * 2 - 200) + 200;
    let randY = Math.random() * 300 + 100;
    super(randX, canvasHeight - 150, 100, 100);

    this.setImage("img/6_salsa_bottle/1_salsa_bottle_on_ground.png");
  }
}
