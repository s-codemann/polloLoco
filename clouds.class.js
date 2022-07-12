class Clouds extends MovableObject {
  constructor(x, y, w, h) {
    super(0, 0, 1000, 500);
    setInterval(() => (this.pos_x -= 1), 500);
  }
}
