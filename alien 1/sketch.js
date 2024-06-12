function setup() {
  createCanvas(600, 400);
  background(255);
}

function draw() {
  background(135, 206, 235); // Sky blue background

  // Draw the road
  fill(50);
  rect(0, height - 100, width, 100);

  // Draw the car body
  fill(255, 0, 0); // Red color
  rect(200, height - 150, 200, 50);
  rect(230, height - 200, 140, 50);

  // Draw the car windows
  fill(0, 191, 255); // Light blue color
  rect(240, height - 190, 50, 40);
  rect(310, height - 190, 50, 40);

  // Draw the car wheels
  fill(0);
  ellipse(240, height - 100, 50, 50);
  ellipse(360, height - 100, 50, 50);

  // Draw the hubcaps
  fill(200);
  ellipse(240, height - 100, 20, 20);
  ellipse(360, height - 100, 20, 20);
}
