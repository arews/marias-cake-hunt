class Cake {
  constructor() {
    this.x = 1400;
    this.y = 200;

  }

  draw() {
    image(cakeImg, this.x - 10, 620, 150, 150);
    this.x -= 3;
  }
}
