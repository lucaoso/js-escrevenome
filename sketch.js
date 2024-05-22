
function setup() {
  createCanvas(600, 600);
  background("black");
}

function draw() {
  background(220);
  stroke("blue");
  
 if (mouseIsPressed){
  rect (mouseX, mouseY, 20, 35);  
 }

}