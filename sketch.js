let marty; 


function preload (){
 marty = loadImage('marty.png');
}


function setup() {
 createCanvas(750,450);
   
}
function draw (){ 
  if (mouseIsPressed) {
    
  image (marty, mouseX, mouseY, 200, 200);
}
  else {
    fill (mouseX+85, mouseY-100, mouseX-20);
    noStroke ();
    ellipse (mouseX, mouseY, 50,50);
  }
}
