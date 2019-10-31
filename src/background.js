class Background {
  constructor() {
    //
    this.xGhostTrees = 0;
    this.xMistyTrees = 0;
    this.xTrees = 0;
    this.xGrass = 0;
    this.xFlowers = 0;
  }

  preload() {
    console.log("background preload");
    this.bgFlowers = loadImage("assets/layer1.png");
    this.bgGrass = loadImage("assets/layer2.png");
    this.bgTrees = loadImage("assets/layer3.png");
    this.bgMistyTrees = loadImage("assets/layer4.png");
    this.bgGhostTrees = loadImage("assets/layer5.png");
  }

  draw() {
    clear();

    this.xGhostTrees -= 1;
    image(this.bgGhostTrees, this.xGhostTrees, 0, width, displayHeight);
    image(this.bgGhostTrees, this.xGhostTrees + width, 0, width, displayHeight);

    if (this.xGhostTrees <= -width) {
      this.xGhostTrees = 0;
    }

    this.xMistyTrees -= 1.5;

    image(this.bgMistyTrees, this.xMistyTrees, 0, width, displayHeight);
    image(this.bgMistyTrees, this.xMistyTrees + width, 0, width, displayHeight);

    if (this.xMistyTrees <= -width) {
      this.xMistyTrees = 0;
    }

    this.xTrees -= 2;

    image(this.bgTrees, this.xTrees, 0, width, displayHeight);
    image(this.bgTrees, this.xTrees + width, 0, width, displayHeight);

    if (this.xTrees <= -width) {
      this.xTrees = 0;
    }

    this.xGrass -= 3;

    image(this.bgGrass, this.xGrass, 560, width);
    image(this.bgGrass, this.xGrass + width, 560, width);

    if (this.xGrass <= -width) {
      this.xGrass = 0;
    }

    this.xFlowers -= 4;
    image(this.bgFlowers, this.xFlowers, 750, width);
    image(this.bgFlowers, this.xFlowers + width, 750, width);

    if (this.xFlowers <= -width) {
      this.xFlowers = 0;
    }
  }
}
