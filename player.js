class Player {
  constructor() {
    this.x = 180;
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpCount = 0;
  }

  preload() {
    this.img = loadImage("assets/char-right.png");
  }

  setup() {
    this.y = height - 430;

    this.originalY = this.y;

    this.width = this.img.width * 1.5;
    this.height = this.img.height * 1.5;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > this.originalY) {
      this.y = this.originalY;
    }

    image(this.img, this.x, this.y, this.width, this.height);
  }

  jump() {
    //
    if (this.jumpCount < 2) {
      this.velocity = -10;
      this.jumpCount++;
    }
  }
}
