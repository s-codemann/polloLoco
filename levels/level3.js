class level3 extends Level {
  constructor() {
    super(
      2,
      [new Boss()],
      [
        new FullBackground("img/5_background/layers/air.png"),
        new Background("img/5_background/layers/3_third_layer/2.png"),
        new Background("img/5_background/layers/2_second_layer/2.png"),
        new Background("img/5_background/layers/1_first_layer/2.png"),
      ]
    );
  }
}
