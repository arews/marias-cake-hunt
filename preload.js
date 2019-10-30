let cakeImg;
let coke;
let song;

function preload() {
  console.log("preload");
  game.preload();
  cakeImg = loadImage("assets/cake.png");
  coke = loadImage("assets/coca-cola-tilted-left.png");
  song = loadSound("assets/music-game.mp3");
}
