class Cake {
  constructor() {
    /*     this.width = 200;
    this.height = 200; */
    this.x = 1400;
    this.y = 200;

    /*     this.y = random(0, height); */
  }

  preload() {}

  draw() {
    image(cakeImg, this.x - 10, 620, 150, 150);
    this.x -= 3;
  }
}
