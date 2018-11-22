
var draww;
var tool;
var brushsize = 10;
function setup() {
 createCanvas(windowHeight, windowWidth);
 tool = "Pencil";
}

function draw() {
  document.getElementById("tool").innerHTML = "Tool: "+tool;
  document.getElementById("bsize").innerHTML = "Brushsize: "+brushsize.toString();
  if (draww === "draw"){
    fill(0,0,0);
    noStroke();
    ellipse(mouseX, mouseY, brushsize, brushsize);
  }
  if (draww === "erasing"){
    fill(255,255,255);
    noStroke();
    ellipse(mouseX, mouseY, brushsize, brushsize);
  }
}

function mousePressed(){
   if (mouseButton == LEFT){
     if (draww === "eraser"){
       draww = "erasing";
       console.log(draww);
     }else{
       draww = "draw";
       console.log(draww);
     }
   }
   
}

function mouseReleased(){
  if (draww === "erasing"){
    draww = "eraser";
  }else{
     draww = "none";
     tool = "Pencil";
  }
}

function keyPressed(){
   if (keyCode === RIGHT_ARROW){
     brushsize += 2;
     console.log(brushsize)
   }
   if (keyCode === LEFT_ARROW){
     brushsize -= 2;
     console.log(brushsize)
   }
   if (keyCode === CONTROL){
     if (draww === "eraser"){
       draww = "none";
       tool = "Pencil";
     }else{
       draww = "eraser";
       tool = "Eraser";
     }
   }
}
