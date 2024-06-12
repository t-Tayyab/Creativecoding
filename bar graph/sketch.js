let data = [400, 250, 200, 300, 350, 275, 450];
let labels = ['2016', '2017', '2018', '2019', '2020', '2021', '2022'];
let bars = [];
let spacing = 30; // Adjust this value to change the spacing between bars
let margin = 80;

function setup() {
  createCanvas(1000, 600);
  let barWidth = (width - margin * 2 - (data.length - 1) * spacing) / data.length;
  for (let i = 0; i < data.length; i++) {
    let x = margin + i * (barWidth + spacing);
    bars.push(new Bar(x, height - margin, barWidth, 0, data[i]));
  }
}

function draw() {
  background(220);
  drawTitle();
  drawYAxis();
  for (let i = 0; i < bars.length; i++) {
    bars[i].update();
    bars[i].show();
    drawLabel(bars[i].x + bars[i].width / 2, height - margin + 10, labels[i]);
  }
}

function drawTitle() {
  textAlign(CENTER);
  textSize(28);
  text('Global Smartphone Sales (in millions of units)', width / 2, margin / 2);
}

function drawYAxis() {
  stroke(0);
  line(margin, margin, margin, height - margin);
  noStroke();
  textSize(14);
  textAlign(RIGHT, CENTER);
  for (let i = 0; i <= 1600; i += 200) {
    let y = map(i, 0, 1600, height - margin, margin);
    text(i + 'M', margin - 10, y);
    stroke(200);
    line(margin, y, width - margin, y);
    noStroke();
  }
}

function drawLabel(x, y, label) {
  textSize(14);
  textAlign(CENTER, TOP);
  text(label, x, y);
}

class Bar {
  constructor(x, y, w, h, targetHeight) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.targetHeight = targetHeight;
    this.easing = 0.05;
  }

  update() {
    let diff = this.targetHeight - this.height;
    this.height += diff * this.easing;
  }

  show() {
    fill(0, 102, 204); // Blue color for the bars
    noStroke();
    rect(this.x, this.y - this.height, this.width, this.height);
    fill(0);
    textAlign(CENTER);
    textSize(14);
    text(this.targetHeight + 'M', this.x + this.width / 2, this.y - this.height - 10);
  }
}
