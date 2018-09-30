var song;

function preload(){
    song = loadSound("test1.mp3");
}

function setup() {
  // put setup code here
    createCanvas(400, 400);
    song.play();
}

function draw() {
  // put drawing code here
    background(220);
}