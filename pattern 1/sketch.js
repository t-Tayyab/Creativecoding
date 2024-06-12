function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(255);
  let cols = 10;
  let rows = 10;
  let w = width / cols;
  let h = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * w + w / 2;
      let y = j * h + h / 2;
      if ((i + j) % 2 == 0) {
        fill(0);
      } else {
        fill(255, 0, 0);
      }
      ellipse(x, y, w * 0.8, h * 0.8);
    }
  }
}
