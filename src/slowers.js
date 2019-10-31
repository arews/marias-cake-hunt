class Slowers {
  constructor() {
    this.x = width; // canvas width

    this.y = random(250, 500);
    /*   this.x = random(0, height); */

    this.width = 60;
    this.height = 100;
  }

  draw() {
    image(coke, this.x, this.y, this.width, this.height);
    this.x -= 6;
  }
}
