class Ghost {
  constructor() {
    this.x = 80;
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpCount = 0;
  }

  preload() {
    this.img2 = loadImage("assets/ebba-right.png");
  }

  setup() {
    this.y = height - 220;

    this.originalY = this.y;

    this.width = this.img2.width;
    this.height = this.img2.height;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > this.originalY) {
      this.y = this.originalY;
    }

    this.x += 0.5;

    image(this.img2, this.x, this.y, this.width, this.height);
  }
}
