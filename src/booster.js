class Obstacle {
    constructor() {
      this.x = width; // canvas width
      this.y = height - 100;
  
      this.y = random(0, height);
  
      this.width = 100;
      this.height = 50;
    }
  
    draw() {
      rect(this.x, this.y, this.width, this.height);
      this.x -= 4;
    }
  }
  