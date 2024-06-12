function setup() {
  createCanvas(600, 400);
  background(135, 206, 235); // Sky blue background
}

function draw() {
  background(135, 206, 235); // Clear background each frame

  // Draw the ground
  fill(34, 139, 34);
  rect(0, height - 100, width, 100);

  // Draw the house body
  fill(255, 228, 181);
  rect(200, height - 200, 200, 150);

  // Draw the roof
  fill(165, 42, 42);
  triangle(200, height - 200, 400, height - 200, 300, height - 300);

  // Draw the door
  fill(139, 69, 19);
  rect(270, height - 100, 60, 50);

  // Draw windows
  fill(0, 191, 255); // Light blue color
  rect(230, height - 180, 40, 40);
  rect(330, height - 180, 40, 40);
}
