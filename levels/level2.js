class level2 extends Level {
  constructor() {
    super(
      1,
      [new Chicken(), new Chicken(), new Chicken()],
      [
        new FullBackground("img/5_background/layers/air.png"),
        new Background("img/5_background/layers/3_third_layer/1.png"),
        new Background("img/5_background/layers/2_second_layer/1.png"),
        new Background("img/5_background/layers/1_first_layer/1.png"),
      ]
    );
  }
}
