// Pie chart data
let data = [30, 20, 15, 25, 10];
let labels = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'];
let currentSlice = null;
let angles = [];
let animationStarted = true;

function setup() {
  createCanvas(400, 400);
  textAlign(CENTER, CENTER);
  initializeAngles();
}

function draw() {
  background(220);
  pieChart(200, 200, 150, data);
  if (currentSlice !== null) {
    fill(255);
    rect(140, 360, 120, 30);
    fill(0);
    text(labels[currentSlice] + ': ' + data[currentSlice], 200, 375);
  }
  if (animationStarted) {
    animateChart();
  }
}

function pieChart(x, y, radius, data) {
  let lastAngle = 0;
  for (let i = 0; i < data.length; i++) {
    let gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    let angle = lastAngle + radians(angles[i]);
    arc(x, y, radius * 2, radius * 2, lastAngle, angle);
    if (isMouseOver(x, y, radius, lastAngle, angle)) {
      currentSlice = i;
    }
    lastAngle = angle;
  }
}

function isMouseOver(x, y, radius, startAngle, endAngle) {
  let mx = mouseX - x;
  let my = mouseY - y;
  let d = dist(mouseX, mouseY, x, y);
  if (d > radius) return false;

  let angle = atan2(my, mx);
  if (angle < 0) angle += TWO_PI;
  return angle >= startAngle && angle < endAngle;
}

function initializeAngles() {
  for (let i = 0; i < data.length; i++) {
    angles[i] = 0;
  }
}

function animateChart() {
  let shouldAnimate = false;
  for (let i = 0; i < data.length; i++) {
    let targetAngle = calcAngle(data[i], sum(data));
    let speed = (targetAngle - angles[i]) * 0.05;
    angles[i] += speed;
    if (abs(targetAngle - angles[i]) > 0.01) {
      shouldAnimate = true;
    }
  }
  if (!shouldAnimate) {
    animationStarted = false;
  } else {
    redraw();
  }
}

function sum(data) {
  return data.reduce((a, b) => a + b, 0);
}

function calcAngle(value, total) {
  return (value / total) * 360;
}
