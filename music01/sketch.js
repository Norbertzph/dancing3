var bx;
var by;
var boxSize = 75;
var overBox = false;
var locked = false;
var xOffset = 0.0; 
var yOffset = 0.0; 
var x = 0;
var speed = 3;
var song;


function preload() {
  song = loadSound("music01.mp3");
}

function setup() {
  getAudioContext().resume();

  createCanvas(displayWidth, displayHeight);

  bx = width/2.0;
  by = height/2.0;
  rectMode(RADIUS);
  strokeWeight(0);
    
}

function draw() { 
  background(237,34,93);

  // Draw the box
  rect(x, by, boxSize, boxSize);
    
        x = x + speed;
    
        if (x > width){
            speed = -3;  
}
            if (x < 0){
            speed = 3;  
}

}

function deviceShaken(){
    
    if (song.isPlaying() == 0){
        song.play();
    }
}




