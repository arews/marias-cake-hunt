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
    rect(0, 0, displayWidth, displayHeight, 20);
    fill(0);
    textSize(22);
    textFont(fontRegular);
    text("Get the cake before Ebba the dog eats it!", 260, 580);
    textSize(25);
    text("Press enter to start", 450, 680);
    image(introImage, 400, 150, 600, 350);
    if (!menuSong.isPlaying()) {
      menuSong.loop();
    }
  }
  if (gameStart == 1) {
    game.draw();
    menuSong.stop();
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
