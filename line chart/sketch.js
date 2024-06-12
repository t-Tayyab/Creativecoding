let table;
let fruits = [];
let quantities = [];
let prices = [];
let maxX, maxY;

function preload() {
  table = loadTable('fruit_sales.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1000, 600);
  extractData();
  drawInfographicChart();
}

function extractData() {
  let rowCount = table.getRowCount();
  for (let r = 0; r < rowCount; r++) {
    let fruit = table.getString(r, 'Fruit');
    let quantity = table.getNum(r, 'Quantity');
    let price = table.getNum(r, 'Price per Unit');
    fruits.push(fruit);
    quantities.push(quantity);
    prices.push(price);
  }
  maxX = max(quantities);
  maxY = max(prices);
}

function drawInfographicChart() {
  background(255);

  // Set fonts and colors
  textFont('Arial');
  stroke(200);

  // Draw grid lines
  stroke(220);
  for (let i = 0; i <= maxX; i += 5) {
    let x = map(i, 0, maxX, 100, width - 50);
    line(x, height - 50, x, 50);
  }
  for (let i = 0; i <= maxY; i += 0.1) {
    let y = map(i, 0, maxY, height - 50, 50);
    line(100, y, width - 50, y);
  }

  // Draw axes
  stroke(0);
  line(100, height - 50, width - 50, height - 50); // x-axis
  line(100, height - 50, 100, 50); // y-axis

  // Draw x-axis labels
  textSize(12);
  fill(0);
  for (let i = 0; i <= maxX; i += 5) {
    let x = map(i, 0, maxX, 100, width - 50);
    let label = nf(i, 0, 0);
    textAlign(CENTER);
    text(label, x, height - 30);
  }

  // Draw y-axis labels
  for (let i = 0; i <= maxY; i += 0.1) {
    let y = map(i, 0, maxY, height - 50, 50);
    let label = nf(i, 0, 2);
    textAlign(RIGHT);
    text(label, 90, y);
  }

  // Draw line chart
  stroke(0, 0, 255);
  strokeWeight(2);
  noFill();
  beginShape();
  for (let i = 0; i < fruits.length; i++) {
    let x = map(quantities[i], 0, maxX, 100, width - 50);
    let y = map(prices[i], 0, maxY, height - 50, 50);
    vertex(x, y);
  }
  endShape();

  // Draw data points
  fill(0, 0, 255);
  noStroke();
  for (let i = 0; i < fruits.length; i++) {
    let x = map(quantities[i], 0, maxX, 100, width - 50);
    let y = map(prices[i], 0, maxY, height - 50, 50);
    ellipse(x, y, 6, 6);
  }

  // Draw axis labels
  fill(0);
  textAlign(CENTER, CENTER);
  text('Quantity', width / 2, height - 20);
  textAlign(RIGHT, CENTER);
  text('Price per Unit', 80, height / 2);

  // Add title and styling elements
  textSize(24);
  textAlign(CENTER, CENTER);
  fill(100, 100, 250);
  text('Fruit Sales Data', width / 2, 30);

  // Add icons or additional styling as needed
  // Example: adding a simple icon
  // image(icon, 50, 50, 40, 40);
}
