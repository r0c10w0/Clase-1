function setup() {
  createCanvas(windowWidth, windowHeight).position(0,0).style('z-index',-1);
  createA("https://github.com/r0c10w0","Mi github","_blank").id("yop");
  textSize(50);
}

function draw() {
  text("🐭",mouseX,mouseY);
  text("🐁",mouseY,mouseX);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}