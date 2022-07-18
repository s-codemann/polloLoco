class DrawableObject {
  constructor(x, y, w, h) {
    this.height = h;
    this.width = w;
    this.pos_x = x;
    this.pos_y = y;
    this.loadImages(this.imgLinks);
    this.id = counter++;
  }
  iterator = 0;
  setImage = (path) => {
    this.img = new Image();
    this.img.src = path;
  };
  setStandard() {
    this.img = this.imageCache[this.defaultImg];
  }
  imageCache = {};
  filterImageKeys(filter) {
    return Object.keys(this.imageCache).filter((key) => key.includes(filter));
  }
  imgLinks = [];
  loadImages = () => {
    this.imgLinks.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imageCache[path] = img;
    });
    // console.log(this);
  };
  checkAndSplice = (arr, id) => {
    console.log(id);
    let toSplice = arr.find((el) => el.id === id);
    if (toSplice) {
      arr.splice(
        arr.findIndex((el) => el.id === id),
        1
      );
      world.checkforCollisionElements = world.enemies
        .concat(world.coins)
        .concat(world.bottles);
    } else return;
  };
}
