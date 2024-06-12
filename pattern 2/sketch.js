function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  let stripeWidth = 20;

  for (let i = 0; i < width / stripeWidth; i++) {
    if (i % 2 == 0) {
      fill(0);
    } else {
      fill(255, 0, 0);
    }
    beginShape();
    vertex(i * stripeWidth, 0);
    vertex((i + 1) * stripeWidth, 0);
    vertex(i * stripeWidth - height, height);
    vertex((i + 1) * stripeWidth - height, height);
    endShape(CLOSE);
  }
}
