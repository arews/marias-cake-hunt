function preload() {
  console.log("preload");
  game.preload();
}

function setup() {
  console.log("setup");
  createCanvas(displayWidth, displayHeight);
  game.setup();
}

function draw() {
  game.draw();
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}

const game = new Game();
