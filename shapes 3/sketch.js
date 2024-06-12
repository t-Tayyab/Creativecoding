function setup() {
  createCanvas(400, 400);
  background(150);
}
function draw() {
  fill(255, 0, 0);
  rectMode(CENTER);
  rect(width / 2, height / 2, 150, 70);
  
  fill(0, 255, 0); 
  ellipseMode(CENTER);
  ellipse(width / 2, height / 2, 70, 70);
  
  fill(0, 0, 255); 
  rectMode(CENTER);
  square(width / 2, height / 2, 50);
}
