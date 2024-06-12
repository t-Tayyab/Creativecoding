var img,x,y;
function preload(){
  img = loadImage('flower.jpg')
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  x = mouseX;
  y = mouseY;
  image(img,0,0,width,height);
  var c = get(x,y);
  fill(c)
  ellipse(x,y,100,100)
}