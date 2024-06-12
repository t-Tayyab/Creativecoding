function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  let side = 20;
  let h = sqrt(3) * side;
  let rows = height / h;
  let cols = width / (1.5 * side);

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      let x = c * 1.5 * side;
      let y = r * h + (c % 2 == 0 ? 0 : h / 2);
      fill(random(255), random(255), random(255));
      drawHexagon(x, y, side);
    }
  }
}

function drawHexagon(x, y, s) {
  beginShape();
  for (let i = 0; i < 6; i++) {
    let angle = TWO_PI / 6 * i;
    let px = x + cos(angle) * s;
    let py = y + sin(angle) * s;
    vertex(px, py);
  }
  endShape(CLOSE);
}
