var bx;
var by;
var boxSize = 75;
var speed = 3;
var song;
var nSpeed,pSpeed;

function preload() {
  song = loadSound("music01.mp3");
}

function setup() {
    // Position Variables
    x = 0;
    y = 0;
 
// Speed - Velocity
    vx = 0;
    vy = 0;
 
// Acceleration
    ax = 0;
    ay = 0;

    vMultiplier = 0.1;
    bMultiplier = 0.6;
    
  getAudioContext().resume();

  createCanvas(displayWidth, displayHeight);

  bx = 0;
  by = 0;
  rectMode(RADIUS);
  strokeWeight(0);
   
  nSpeed = -3;
  pSpeed = 3;
    
}

function draw() { 
  background(237,34,93);
    
    
  // Draw the box
  rect(x, y, boxSize, boxSize);

}

function rectMove() {

	ax = accelerationX;
	ay = accelerationY;

	vx = vx + ay;
	vy = vy + ax;

	// Bounce when touch the edge of the canvas
	if (x < 0) { 
		x = 0; 
		vx = -vx * bMultiplier; 
	}
 	if (y < 0) { 
 		y = 0; 
 		vy = -vy * bMultiplier; 
 	}
 	if (x > displayWidth - 20) { 
 		x = displayWidth - 20; 
 		vx = -vx * bMultiplier; 
 	}
 	if (y > displayHeight - 20) { 
 		y = displayHeight - 20; 
 		vy = -vy * bMultiplier; 
 	}
}

function deviceShaken(){
    if (song.isPlaying() == 0){
        song.play();
        y = y + vy * vMultiplier; 
	    x = x + vx * vMultiplier;
    }

}
