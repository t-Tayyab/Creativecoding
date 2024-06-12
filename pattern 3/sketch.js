function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  let numCircles = 10;
  let maxRadius = min(width, height) / 2;

  for (let i = 0; i < numCircles; i++) {
    let radius = map(i, 0, numCircles, maxRadius, 0);
    if (i % 2 == 0) {
      fill(0);
    } else {
      fill(255, 0, 0);
    }
    ellipse(width / 2, height / 2, radius * 2, radius * 2);
  }
}
