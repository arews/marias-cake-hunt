class Player {
  constructor() {
    this.x = 180;
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpCount = 0;
    this.mariaFrames = [];
    this.counter = 0;
  }

  preload() {
    this.mariaFrames.push(loadImage("assets/char-right.png"));
    this.mariaFrames.push(loadImage("assets/run1.png"));
    this.mariaFrames.push(loadImage("assets/run2.png"));
    this.mariaFrames.push(loadImage("assets/run3.png"));
    this.mariaFrames.push(loadImage("assets/run4.png"));
    this.mariaFrames.push(loadImage("assets/run5.png"));
    this.mariaFrames.push(loadImage("assets/run6.png"));
  }

  setup() {
    this.y = height - 350;

    this.originalY = this.y;
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (frameCount % 8 === 0) {
      this.counter = (this.counter + 1) % this.mariaFrames.length;
    }

    if (this.y > this.originalY) {
      this.y = this.originalY;
    }

    this.mariaFrame = this.mariaFrames[this.counter];
    this.width = this.mariaFrame.width;
    this.height = this.mariaFrame.height;
    image(this.mariaFrame, this.x, this.y, this.width, this.height);
  }

  jump() {
    if (this.jumpCount < 1) {
      this.velocity = -10;
      this.jumpCount++;
    }
    if ((this.y = height - 350)) {
      this.jumpCount = 0;
    }
  }
}
