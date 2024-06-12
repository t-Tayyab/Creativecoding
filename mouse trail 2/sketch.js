let particles = [];

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  // Add a new particle at the mouse position
  let p = new Particle(mouseX, mouseY);
  particles.push(p);

  // Update and display all particles
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].display();

    // Remove particles that are no longer visible
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-1, 1);
    this.vy = random(-1, 1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 5;
  }

  display() {
    noStroke();
    fill(255, this.alpha);
    ellipse(this.x, this.y, 24); // Increased the diameter from 16 to 24
  }
}
