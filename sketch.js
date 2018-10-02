var col = 0;


function setup() {
  createCanvas(600, 400);
}

function draw() {
    col = map(mouseX,0,600,0,255);
    background(col);
    fill(250,0,0);
    rect(mouseX, 102, 102,102);
}