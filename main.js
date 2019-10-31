const game = new Game();
let gameStart = 0;

function setup() {
  console.log("setup");
  createCanvas(displayWidth, displayHeight);
  game.setup();
}

function draw() {
  clear();
  if (gameStart == 0) {
    fill(0, 100, 0);
    rect(0, 0, displayWidth, displayHeight);

    text("Get to the cake before Ebba the dog!", 650, 500);
    text("Press enter to start", 300, 550);
    noFill();
    image(introImage, 320, 150, 500, 300);
  }
  if (gameStart == 1) {
    game.draw();
  }
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
  if (keyCode === 13) {
    gameStart = 1;
  }
}
