function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  background(220, 10); 
  noStroke();
  fill(255, 0, 0); 
  ellipse(mouseX, mouseY, 50, 50);
}

function mousePressed(){
  background(0)
}
