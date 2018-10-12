
var rad = 20; // Width of the shape
var ypos, ypos; // Starting position of shape

var xspeed = 20; // Speed of the shape
var yspeed = 2.2; // Speed of the shape

var xdirection = 1; // Left or Right
var ydirection = 1; // Top to Bottom

function setup() {
  createCanvas(1200, 700);
  noStroke();
  frameRate(30);
  ellipseMode(RADIUS);
  // Set the starting position of the shape
  xpos = width / 20;
  ypos = height / 2;
}

function draw() {
  background(10);

  // Update the position of the shape
  xpos = xpos + xspeed * xdirection;
  ypos = ypos + xspeed * ydirection;

  // Test to see if the shape exceeds the boundaries of the screen
  // If it does, reverse its direction by multiplying by -1
  if (xpos > width - rad || xpos < rad) {
    xdirection *= -1;
  }
  if (ypos > height - rad || ypos < rad) {
    ydirection *= -1;
  }

  // Draw the shape
  ellipse(xpos, ypos, rad, rad);
}
