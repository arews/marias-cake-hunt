class Game {
  constructor() {
    // background
    this.background = new Background();
    this.player = new Player();
    this.ghost = new Ghost();
  }

  preload() {
    console.log("game preload");
    this.background.preload();
    this.player.preload();
    this.ghost.preload();
  }

  setup() {
    this.player.setup();
    this.ghost.setup();
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.ghost.draw();
  }
}
