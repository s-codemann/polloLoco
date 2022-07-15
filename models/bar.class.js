class Bar extends DrawableObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);

    console.log(this.imgLinks);

    // this.loadImages(this.imgLinks);
  }

  incPercentage() {
    // console.log(this.parseLinkDec(this.img.src));
    this.img = this.imageCache[this.parseLinkInc(this.img.src)];
  }
  decPercentage() {
    this.img = this.imageCache[this.parseLinkDec(this.img.src)];
  }
  parseLinkInc(link) {
    let linkEnd = link.match(/[0-9]+.png/g);
    let pathReplaced = link.replace(
      linkEnd,
      (parseInt(linkEnd) + 20).toString() + ".png"
    );
    let retLink = pathReplaced.substring(pathReplaced.indexOf("img"));
    console.log(retLink);
    return retLink;
  }
  parseLinkDec(link) {
    let linkEnd = link.match(/[0-9]+.png/g);
    let pathReplaced = link.replace(
      linkEnd,
      (parseInt(linkEnd) - 20).toString() + ".png"
    );
    let retLink = pathReplaced.substring(pathReplaced.indexOf("img"));
    return retLink;
  }
}
