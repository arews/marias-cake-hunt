let cakeImg;
let coke;
let gameSong;
let ebbaWins;
let charWins;
let introImage;
let menuSong;
let fontRegular;
let slurp;
let scream;
let winSong;
let looseSong;
let jump;

function preload() {
  console.log("preload");
  game.preload();
  cakeImg = loadImage("assets/cake.png");
  coke = loadImage("assets/coca-cola-tilted-left.png");
  gameSong = loadSound("assets/music-game.mp3");
  ebbaWins = loadImage("assets/ebba-wins.png");
  charWins = loadImage("assets/cake-eating.jpg");
  introImage = loadImage("assets/intro-image.png");
  menuSong = loadSound("assets/music-menu.mp3");
  fontRegular = loadFont("assets/PressStart2P.ttf");
  slurp = loadSound("assets/slurp.mp3");
  scream = loadSound("assets/scream.mp3");
  winSong = loadSound("assets/happy-song.mp3");
  looseSong = loadSound("assets/sad-song.mp3");
  jump = loadSound("assets/jump.wav");
}
