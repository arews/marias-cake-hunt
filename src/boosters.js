class Boosters {
  constructor() {
    this.x = width; // canvas width
    this.y = height;

    this.y = random(250, 500);
    /*   this.x = random(0, height); */

    this.width = 100;
    this.height = 160;
    this.img = loadImage("assets/pepsi-tilted-right.png");
  }

  preload() {}

  draw() {
    image(this.img, this.x, this.y, this.width, this.height);
    this.x -= 6;
  }
}
