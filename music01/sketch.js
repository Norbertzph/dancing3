var bx;
var by;
var boxSize = 75;
var overBox = false;
var locked = false;
var xOffset = 0.0; 
var yOffset = 0.0; 
var x = 0;
var y = 0;
var speed = 3;
var song;
var nSpeed,pSpeed;
var img;
var dim;



function preload() {
  song = loadSound("music01.mp3");
   img = loadImage("sprite1.png");
}

function setup() {
  getAudioContext().resume();
  
   
  createCanvas(displayWidth, displayHeight);

  bx = width/2.0;
  by = height/2.0;
  rectMode(RADIUS);
  strokeWeight(0);

   
  nSpeed = -3;
  pSpeed = 3;
    
  dim = width/2;
  background(0);
  colorMode(HSB, 360, 100, 100);
  noStroke();
  frameRate(1);
}

function draw() { 
    

  image(img, x, y, boxSize, boxSize);

    
        x = x + speed;
        y = y + speed;
    
        if (x > width){
            speed = nSpeed;  
}
            if (x < 0){
            speed = pSpeed;  
}

            if (y > width){
            speed = nSpeed;  
}
            if (y < 0){
            speed = pSpeed;  
}
  
  background(0);
  for (var x = 0; x <= width; x+=dim) {
  drawGradient(x, height/2);
  } 
}

function deviceShaken(){
    if (song.isPlaying() == 0){
        song.play();
    }
    nSpeed=-10;
    pSpeed=10;
    
}

function drawGradient(x, y) {
  var radius = dim/2;
  var h = random(0, 360);
  for (var r = radius; r > 0; --r) {
    fill(h, 90, 90);
    ellipse(x, y, r, r);
    h = (h + 1) % 360;
  }
}
