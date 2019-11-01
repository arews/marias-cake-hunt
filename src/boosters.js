class Boosters {
  constructor() {
    this.x = random(width, 200);
    this.y = random(0, 50);

    this.width = 70;
    this.height = 120;
    this.img = loadImage("assets/pepsi-tilted-right.png");
  }

  preload() {}

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.x -= 3;
    this.y += 1;
  }
}
