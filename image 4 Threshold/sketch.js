var flower;

function preload(){
  flower = loadImage("img.png");
}

function setup() {
  createCanvas(700, 400);
}

function draw() {
  background(220);
  
  image(flower, 0, 0, width, height);
  
  filter(THRESHOLD);
  
}
