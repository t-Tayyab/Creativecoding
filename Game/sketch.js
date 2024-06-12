let player;
let enemies = [];
let bullets = [];
let gameState = "menu";
let level = "Easy";

// Load images
let playerImg, enemyImg, gameOverImg;

function preload() {
  playerImg = loadImage('spaceship.png');
  enemyImg = loadImage('enemy.png');
  gameOverImg = loadImage('game_over.png');
}

function setup() {
  createCanvas(800, 600);
  player = new Player();
}

function draw() {
  background(0);

  if (gameState === "menu") {
    showMenu();
  } else if (gameState === "playing") {
    playGame();
  } else if (gameState === "levelComplete") {
    showLevelComplete();
  } else if (gameState === "gameOver") {
    showGameOver();
  }
}

function showMenu() {
  textAlign(CENTER);
  fill(255);
  textSize(32);
  text("Select Level", width / 2, height / 2 - 50);

  fill(0, 255, 0);
  textSize(24);
  text("Easy", width / 2, height / 2);
  text("Normal", width / 2, height / 2 + 50);
  text("Hard", width / 2, height / 2 + 100);
}

function mousePressed() {
  if (gameState === "menu") {
    if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50) {
      if (mouseY > height / 2 - 12 && mouseY < height / 2 + 12) {
        level = "Easy";
        startGame();
      } else if (mouseY > height / 2 + 38 && mouseY < height / 2 + 62) {
        level = "Normal";
        startGame();
      } else if (mouseY > height / 2 + 88 && mouseY < height / 2 + 112) {
        level = "Hard";
        startGame();
      }
    }
  } else if (gameState === "levelComplete") {
    gameState = "menu";
  } else if (gameState === "gameOver") {
    gameState = "menu";
  }
}

function startGame() {
  gameState = "playing";
  enemies = [];
  bullets = [];
  player = new Player();

  let enemyRows, enemyCols;
  if (level === "Easy") {
    enemyRows = 2;
    enemyCols = 5;
  } else if (level === "Normal") {
    enemyRows = 3;
    enemyCols = 7;
  } else if (level === "Hard") {
    enemyRows = 4;
    enemyCols = 9;
  }

  for (let i = 0; i < enemyCols; i++) {
    for (let j = 0; j < enemyRows; j++) {
      enemies.push(new Enemy(i * 80 + 60, j * 60 + 60));
    }
  }
}

function playGame() {
  player.show();
  player.move();

  for (let bullet of bullets) {
    bullet.show();
    bullet.move();
  }

  let edge = false;

  for (let enemy of enemies) {
    enemy.show();
    enemy.move();

    if (enemy.x > width - enemy.r * 2 || enemy.x < 0) {
      edge = true;
    }

    // Check for collision with player
    if (player.hits(enemy)) {
      gameState = "gameOver";
    }
  }

  if (edge) {
    for (let enemy of enemies) {
      enemy.shiftDown();
    }
  }

  // Check for bullet-enemy collisions
  for (let i = bullets.length - 1; i >= 0; i--) {
    for (let j = enemies.length - 1; j >= 0; j--) {
      if (bullets[i] && enemies[j] && bullets[i].hits(enemies[j])) {
        enemies.splice(j, 1);
        bullets.splice(i, 1);
        break;
      }
    }
  }

  // Check for game over
  if (enemies.length === 0) {
    gameState = "levelComplete";
  }
}

function showLevelComplete() {
  textAlign(CENTER);
  fill(255);
  textSize(32);
  text("Level Passed!", width / 2, height / 2);
  textSize(24);
  text("Click to return to the menu", width / 2, height / 2 + 50);
}

function showGameOver() {
  image(gameOverImg, 200, 200, 400, 200);
  textAlign(CENTER);
  fill(255);
  textSize(32);
  textSize(24);
  text("Click to return to the menu", width / 2, height / 2 + 50);
}

function keyPressed() {
  if (gameState === "playing") {
    if (key === ' ') {
      let bullet = new Bullet(player.x + 15, height - 60);
      bullets.push(bullet);
    }

    if (keyCode === RIGHT_ARROW) {
      player.setDir(1);
    } else if (keyCode === LEFT_ARROW) {
      player.setDir(-1);
    }
  }
}

function keyReleased() {
  if (key !== ' ') {
    player.setDir(0);
  }
}

class Player {
  constructor() {
    this.x = width / 2;
    this.xdir = 0;
    this.size = 60; // Size of the player image
  }

  show() {
    image(playerImg, this.x - this.size / 2, height - 2 * this.size, this.size, this.size);  // Draw player image
  }

  setDir(dir) {
    this.xdir = dir;
  }

  move() {
    this.x += this.xdir * 5;
    // Prevent player from moving out of bounds
    this.x = constrain(this.x, 0 + this.size / 2, width - this.size / 2);
  }

  hits(enemy) {
         let d = dist(this.x, height - this.size, enemy.x, enemy.y);
    return d < this.size / 2 + enemy.r; // Check if the distance between player and enemy is less than the sum of their radii
  }
}

class Bullet {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 4;
  }

  show() {
    fill(255, 0, 0);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
  }

  move() {
    this.y = this.y - 5;
  }

  hits(enemy) {
    let d = dist(this.x, this.y, enemy.x, enemy.y);
    return d < this.r + enemy.r;
  }
}

class Enemy {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.r = 40; // Increase the size of the enemy image
    this.xdir = 1;
  }

  show() {
    image(enemyImg, this.x - this.r / 2, this.y - this.r / 2, this.r, this.r);  // Draw enemy image
  }

  move() {
    this.x += this.xdir;
  }

  shiftDown() {
    this.xdir *= -1;
    this.y += this.r * 2;  // Move down by 2 rows
  }
}
  
