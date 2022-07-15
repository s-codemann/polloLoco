class Background extends MovableObject {
  constructor(imagePath) {
    super(0, canvasHeight - 600, canvasWidth, 600).setImage(imagePath);
  }
}
