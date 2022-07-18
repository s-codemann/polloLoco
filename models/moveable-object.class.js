class MovableObject extends DrawableObject {
  pos_x;
  pos_y;
  img = new Image();
  height;
  width;
  imageCache = {};
  jumpingIterator = 0;
  movingWalk = false;
  movingIterator = 0;
  idCounter = 0;
  constructor(x, y, width, height) {
    super();
    this.pos_y = y;
    this.pos_x = x;
    // this.img.src = img;
    this.height = height;
    this.width = width;
  }

  // incCounter() {
  //   this.idCounter++;
  //   console.log(this.id);
  // }
}
