class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.ghost = new Ghost();
    this.cake = new Cake();
    this.boosters = [];
    this.slowers = [];
    this.superboosters = [];
    this.superslowers = [];
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
    if (!gameSong.isPlaying()) {
      gameSong.loop();
    }
    this.background.draw();
    this.player.draw();
    this.ghost.draw();

    if (frameCount > 300 && frameCount % 70 === 0) {
      this.boosters.push(new Boosters());
    }

    this.boosters.forEach((booster, index) => {
      booster.draw();

      if (booster.x + booster.width <= 0) {
        this.boosters.splice(index, 1);
      }

      if (this.isCollision(booster, this.player)) {
        console.log("Boost");
        this.player.x += 50;
        powerup.play();
        this.boosters.splice(index, 1);
      }
    });

    if (frameCount > 400 && frameCount % 80 === 0) {
      this.slowers.push(new Slowers());
    }

    this.slowers.forEach((slower, index) => {
      slower.draw();

      if (slower.x + slower.width <= 0) {
        this.slowers.splice(index, 1);
      }

      if (this.isCollision(slower, this.player)) {
        console.log("Slow");
        this.player.x += -50;
        ouch.play();
        this.slowers.splice(index, 1);
      }
    });

    if (frameCount > 1200 && frameCount % 170 === 0) {
      this.superboosters.push(new Superboosters());
    }

    this.superboosters.forEach((superbooster, index) => {
      superbooster.draw();

      if (superbooster.x + superbooster.width <= 0) {
        this.superboosters.splice(index, 1);
      }

      if (this.isCollision(superbooster, this.player)) {
        console.log("Superboost");
        this.player.x += 150;
        superboostsound.play();
        this.superboosters.splice(index, 1);
      }
    });

    if (frameCount > 1300 && frameCount % 190 === 0) {
      this.superslowers.push(new Superslowers());
    }

    this.superslowers.forEach((superslower, index) => {
      superslower.draw();

      if (superslower.x + superslower.width <= 0) {
        this.superslowers.splice(index, 1);
      }

      if (this.isCollision(superslower, this.player)) {
        console.log("Superslow");
        this.player.x -= 150;
        superslowsound.play();
        this.superslowers.splice(index, 1);
      }
    });

    if (frameCount >= 2800) {
      this.cake.draw();
    }

    if (this.isCollision(this.cake, this.player)) {
      noLoop();
      gameSong.stop();
      winSong.play();
      fill(0);
      rect(0, 0, displayWidth, displayHeight);
      image(charWins, 0, 0, 700, 900);
      fill(255, 255, 255);
      textSize(25);
      textFont(fontRegular);
      text("You did it!", 910, 400);
      textSize(20);
      text("(Play again? Refresh your browser!)", 720, 650);
    }

    if (this.isCollision(this.cake, this.ghost)) {
      noLoop();
      gameSong.stop();
      looseSong.play();
      fill(0);
      rect(0, 0, displayWidth, displayHeight);
      image(ebbaWins, 0, 0, 900, 900);
      fill(255, 255, 255);
      textSize(18);
      textFont(fontRegular);
      text("Ebba ate the cake,", 950, 400);
      text("and is happy!", 950, 430);
      text("... but you are not.", 940, 500);
      textSize(24);
      text("Refresh the browser", 950, 650);
      text("to play again.", 950, 680);
    }
  }

  isCollision(object, player) {
    if (
      player.x + player.width <= object.x ||
      object.x + object.width < player.x
    ) {
      return false;
    }
    if (
      player.y > object.y + object.height ||
      object.y > player.y + player.height
    ) {
      return false;
    }
    return true;
  }
}
