class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.ghost = new Ghost();
    this.cake = new Cake();
    this.boosters = [];
    this.slowers = [];
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
    gameSong.loop();
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.ghost.draw();
    if (frameCount > 150 && frameCount % 100 === 0) {
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
        this.boosters.splice(index, 1);
      }
    });

    if (frameCount > 400 && frameCount % 130 === 0) {
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
        this.slowers.splice(index, 1);
      }
    });

    if (frameCount >= 2400) {
      this.cake.draw();
    }

    if (this.isCollision(this.cake, this.player)) {
      console.log("You win!");
      noLoop();
      image(charWins, 320, 150, 200, 200);
    }

    if (this.isCollision(this.cake, this.ghost)) {
      console.log("You loose!");
      noLoop();
      image(ebbaWins, 300, 100, 600, 600);
      text("Ebba ate the cake, and is now a happy dog!", 500, 350);
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
