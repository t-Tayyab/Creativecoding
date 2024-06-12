function setup() {
  createCanvas(600, 400);
  background(135, 206, 235); // Sky blue background
}

function draw() {
  background(135, 206, 235); // Clear background each frame

  // Draw the water
  fill(0, 191, 255);
  rect(0, height - 50, width, 50);

  // Draw the boat base
  fill(139, 69, 19); // Brown color
  arc(300, height - 50, 200, 100, PI, TWO_PI);

  // Draw the mast
  fill(160, 82, 45); // Dark brown color
  rect(295, height - 250, 10, 150);

  // Draw the sail
  fill(255); // White color
  triangle(300, height - 250, 300, height - 100, 400, height - 100);

  // Draw a small flag on the top of the mast
  fill(255, 0, 0); // Red color
  triangle(300, height - 250, 300, height - 270, 320, height - 260);
}
