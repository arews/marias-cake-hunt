let cakeImg;
let coke;
let gameSong;
let ebbaWins;
let charWins;
let introImage;
let menuSong;
let fontRegular;
let powerup;
let ouch;
let winSong;
let looseSong;
let jump;
let supersooster;
let superslower;
let superslowsound;
let superboostsound;

function preload() {
  console.log("preload");
  game.preload();
  cakeImg = loadImage("assets/cake.png");
  coke = loadImage("assets/coca-cola-tilted-left.png");
  gameSong = loadSound("assets/music-game.mp3");
  ebbaWins = loadImage("assets/ebba-wins.png");
  charWins = loadImage("assets/cake-eating.jpg");
  introImage = loadImage("assets/intro-image.jpg");
  menuSong = loadSound("assets/music-menu.mp3");
  fontRegular = loadFont("assets/PressStart2P.ttf");
  powerup = loadSound("assets/powerup.wav");
  ouch = loadSound("assets/ouch.mp3");
  winSong = loadSound("assets/happy-song.mp3");
  looseSong = loadSound("assets/sad-song.mp3");
  jump = loadSound("assets/jump.wav");
  superBooster = loadImage("assets/pepsi-pack.png");
  superSlower = loadImage("assets/coke-pack.png");
  superslowsound = loadSound("assets/superslow.wav");
  superboostsound = loadSound("assets/superboost.wav");
}
