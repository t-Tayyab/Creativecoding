let mic;
let fft;

function setup() {
  createCanvas(800, 600);
  noFill();
  colorMode(HSB, 255);  // Set color mode to HSB for vibrant colors

  // Create an audio input and FFT object
  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(0);

  // Get the waveform
  let wave = fft.waveform();
  
  // Tran  slate to the center of the canvas
  translate(width / 2, height / 2);
  
  // Draw concentric circles
  for (let i = 0; i < wave.length; i += 10) {  // Step by 10 for performance
    let radius = map(wave[i], -1, 1, 50, 300);
    let hue = map(i, 0, wave.length, 0, 255);
    stroke(hue, 255, 255);
    strokeWeight(5);
    ellipse(0, 0, radius * 2);
  }
}
