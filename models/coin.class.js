class Coin extends MovableObject {
  constructor() {
    let randX = Math.random() * (canvasWidth * 2 - 200) + 200;
    let randY = Math.random() * 400;
    super(randX, randY, 150, 150);

    this.setImage("img/8_coin/coin_1.png");
    // console.log(super.idCounter);
  }
}
