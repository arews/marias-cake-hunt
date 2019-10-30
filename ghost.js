class Ghost {
  constructor() {
    this.x = 80;
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpCount = 0;
    this.ebbaFrames = [];
    this.counter = 0;
  }

  preload() {
    this.ebbaFrames.push(loadImage("assets/Ebba-run1.png"));
    this.ebbaFrames.push(loadImage("assets/Ebba-run2.png"));
    this.ebbaFrames.push(loadImage("assets/Ebba-run3.png"));
    this.ebbaFrames.push(loadImage("assets/Ebba-run5.png"));
    this.ebbaFrames.push(loadImage("assets/Ebba-run6.png"));
    this.ebbaFrames.push(loadImage("assets/Ebba-run7.png"));
  }

  setup() {
    this.y = height - 220;

    this.originalY = this.y;

    /*         this.width = this.img2.width;
    this.height = this.img2.height; */
  }

  draw() {
    this.velocity += this.gravity;
    this.y += this.velocity;

    if (frameCount % 16 === 0) {
      this.counter = (this.counter + 1) % this.ebbaFrames.length;
    }

    if (this.y > this.originalY) {
      this.y = this.originalY;
    }

    this.x += 0.2;

    this.ebbaFrame = this.ebbaFrames[this.counter];

    this.width = this.ebbaFrame.width;
    this.height = this.ebbaFrame.height;

    image(this.ebbaFrame, this.x, this.y, this.width, this.height);
  }
}
