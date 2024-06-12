let song;
let fft;

function preload() {
  // Load your audio file here
  song = loadSound('sound.mp3');
}

function setup() {
  createCanvas(800, 600);
  noFill();
  colorMode(HSB, 255);  // Set color mode to HSB for vibrant colors

  // Create a new FFT object
  fft = new p5.FFT();
  
  // Start playing the song
  song.loop();
}

function draw() {
  background(0);

  // Get the waveform
  let waveform = fft.waveform();
  
  // Translate to the center of the canvas
  translate(width / 2, height / 2);
  
  // Draw concentric circles
  for (let i = 0; i < waveform.length; i += 10) {  // Step by 10 for performance
    let radius = map(waveform[i], -1, 1, 50, 300);
    let hue = map(i, 0, waveform.length, 0, 255);
    stroke(hue, 255, 255);
    strokeWeight(2);
    ellipse(0, 0, radius * 2);
  }
}

function mousePressed() {
  if (song.isPlaying()) {
    song.pause();
  } else {
    song.play();
  }
}
