var bx;
var by;
var boxSize = 75;
var overBox = false;
var locked = false;
var xOffset = 0.0; 
var yOffset = 0.0; 
var col = 0;
var song;


function preload() {
  
  song = loadSound("music01.mp3");
}

function setup() {
    
  getAudioContext().resume();
  createCanvas(600, 400);
  bx = width/2.0;
  by = height/2.0;
  rectMode(RADIUS);
  strokeWeight(0);
}

function draw() { 
  col = mouseX;
  background(col);
  
  // Test if the cursor is over the box 
  if (mouseX > bx-boxSize && mouseX < bx+boxSize && 
      mouseY > by-boxSize && mouseY < by+boxSize) {
    overBox = true;  
     
  } else {
    stroke(156,39,176);
    fill(244,122,158);
    overBox = false;
  }
  
  // Draw the box
  rect(mouseX, by, boxSize, boxSize);
    
    if(mouseX < 200){
    console.log(song.isPlaying);
    if (song.isPlaying() == 0) 
    {
   song.play();
    }
  }else{
    song.pause();
  }
}

function mousePressed() {
  if(overBox) { 
    locked = true; 
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX-bx; 
  yOffset = mouseY-by; 

}

function mouseDragged() {
  if(locked) {
    bx = mouseX-xOffset; 
    by = mouseY-yOffset; 
  }
}

function mouseReleased() {
  locked = false;
}
