let cakeImg;
let coke;
let gameSong;
let ebbaWins;
let charWins;
let introImage;
let menuSong;

function preload() {
  console.log("preload");
  game.preload();
  cakeImg = loadImage("assets/cake.png");
  coke = loadImage("assets/coca-cola-tilted-left.png");
  gameSsong = loadSound("assets/music-game.mp3");
  ebbaWins = loadImage("assets/ebba-wins.png");
  charWins = loadImage("assets/char-wins.png");
  introImage = loadImage("assets/intro-image.png");
  menuSong = loadSound("assets/music-menu.mp3");
}
