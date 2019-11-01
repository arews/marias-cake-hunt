class Superslowers {
  constructor() {
    this.x = random(width, 200);
    this.y = random(0, 50);

    this.width = 100;
    this.height = 60;
    this.img = superSlower;
  }

  preload() {}

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.x -= 3;
    this.y += 1;
  }
}
