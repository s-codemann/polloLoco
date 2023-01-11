class Level {
  level;
  enemies;
  background;
  savedPositions = [];
  constructor(level, enemies, background, coins) {
    // console.log(level, enemies, background);
    this.enemies = enemies;
    this.background = background;
    this.level = level;
    this.setOffset();
  }
  setOffset() {
    console.log(this);
    Object.keys(this).forEach((key) => {
      if (Array.isArray(this[key])) {
        this[key].forEach((element) => {
          this.savedPositions.push({
            id: element.id,
            pos: element.pos_x + canvasWidth * this.level,
            posY: element.pos_y,
          });
          element.pos_x += canvasWidth * this.level + 2;
        });
      } else if (typeof this[key] === "object") {
        this.savedPositions.push({
          id: element.id,
          pos: element.pos_x + canvasWidth * this.level,
          posY: element.pos_y,
        });
        this[key].pos_x += canvasWidth * this.level;
      }
    });
  }
}