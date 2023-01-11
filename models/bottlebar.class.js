class Bottlebar extends Bar {
  name = "bottle";
  imgLinks = [
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",

    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
    "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
  ];
  constructor(x, y, w, h) {
    super(20, 55, 250, 70);
    this.setImage(
      "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png"
    );
    this.loadImages();
  }
  defaultImg = "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png";

  //   imgLinks = [
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",

  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/0.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/20.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/40.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/60.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/80.png",
  //     "img/7_statusbars/1_statusbar/3_statusbar_bottle/green/100.png",
  //   ];
}
