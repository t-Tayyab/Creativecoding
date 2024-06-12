var flower;

function preload(){
  flower = loadImage("landscape.jpg");
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  image(flower, 0, 0, width, height);
  
  var m = map(mouseX,0,width,2,20)
  
  filter(POSTERIZE, m)
}