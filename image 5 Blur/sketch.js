var flower;

function preload(){
  flower = loadImage("track1.jpg");
}

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(220);
  
  image(flower, 0, 0, width, height);
  
  filter(BLUR,2)
  
}
