var wave1, wave2;
var slider1, slider2;
var p1, p2;

function setup() {
  createCanvas(600, 440);
  p1 = createP();
  slider1 = createSlider(1, 50, 20, 0.1);
  p2 = createP();
  slider2 = createSlider(1, 50, 20, 0.1);
  strokeWeight(2);
  wave1 = new Wave(50, 20, 50);
  wave2 = new Wave(50, 1, 101);
  wave1.color = createVector(200, 50, 0);
  wave2.color = createVector(0, 50, 200);
}

function draw() {
  background(255);
  noFill();
  p1.html('Wave 1 length = ' + slider1.value());
  p2.html('Wave 2 length = ' + slider2.value());
  wave1.len = slider1.value();
  wave2.len = slider2.value();
  wave1.run();
  wave2.run();
  addWaves(wave1, wave2);
}




class Wave{
  constructor(amp, len, averagey, yoff) {
    this.amp = amp;
    this.len = len;
    this.averY = averagey;
    this.xoff = 0;
    this.yoff = yoff || 0;
    this.color = createVector(0, 0, 0);
  }
  
  run() {
    noFill();
    stroke(this.color.x, this.color.y, this.color.z);
    translate(0, this.averY);
    beginShape();
    for(let x = 0; x < width; x++) {
      vertex(x, this.amp*sin((x + this.yoff + this.xoff) / this.len));
    }
    endShape();
    this.xoff += 1;
  }
}

function addWaves(wave1, wave2) {
  noFill();
  let color = wave1.color.copy().add(wave2.color);
  stroke(color.x, color.y, color.z);
  translate(0, height / 2.5);
  beginShape();
  let xoff 
    for(let x = 0; x < width; x++) {
      let y1 = wave1.amp * 
          sin((x + wave1.xoff + wave1.yoff) / wave1.len);
      let y2 = wave2.amp * 
          sin((x + wave2.xoff + wave2.yoff) / wave2.len);
      vertex(x, y1 + y2);
    }
  endShape();
}