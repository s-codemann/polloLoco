class DrawableObject {
  constructor(x, y, w, h) {
    this.height = h;
    this.width = w;
    this.pos_x = x;
    this.pos_y = y;
    this.loadImages(this.imgLinks);
    this.id = counter++;
  }
  setImage = (path) => {
    this.img = new Image();
    this.img.src = path;
  };
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
    // console.log(arr[0].id)
    let toSplice = arr.find((el) => el.id === id);
    if (toSplice) {
      arr.splice(
        arr.findIndex((el) => el.id === id),
        1
      );
      world.checkforCollisionElements = world.enemies.concat(world.coins);
    } else return;
  };
}
