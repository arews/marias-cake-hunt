class Slowers {
  constructor() {
    this.x = random(width, 200);
    this.y = random(0, 200);

    this.width = 40;
    this.height = 65;
  }

  draw() {
    image(coke, this.x, this.y, this.width, this.height);
    this.x -= 3;
    this.y += 1;
  }
}
