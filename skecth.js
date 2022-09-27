let value = 0;
class Block{ 
  constructor(x,y,width,height,speedX,speedY,clr){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speedX = speedX;
  this.speedY = speedY;
  this.clr = clr;
  this.xD = this.xD;
  }
   display() {
    fill(this.clr);
    rect(this.x,this.y,this.width,this.height) 
  }
  move(){
    this.x = frameCount*-280 % width + width
    if( this.xD < 0){}
    //this.x = +1(frameCount*120) % width
  }
  }
  let Block1 = new Block(1,300,80,20,405,1,255);
  let Block2 = new Block(1,400,80,20,405,1,255);
  let Block3 = new Block(1,500,80,20,405,1,255);
  let Block4 = new Block(1,600,80,20,405,1,255);
  let Block5 = new Block(1,700,80,30,405,1,255);
function setup() {
  createCanvas(1900,900);
 
  //button = createButton('Change Color');
  //button.position(0, 860);
  //button.mousePressed(changeBG);
  
  checkbox = createCheckbox('Stop', true);
  checkbox.changed(checkLoop);
  colBG = color(0);
  colFill = color(255);
}
function changeBG() {
  if (isLooping()) {
    colBG = color(random(255), random(255), random(255));
    colFill = color(random(255), random(255), random(255));
  }
}
function checkLoop() {
  if (this.checked()) {
    loop();
  } else {
    noLoop();
  }
}
function draw() {
  background(colBG);
  fill(value);
  fill(colFill);
  rect((frameCount)*200 % width, 450 , 35);
  rect((frameCount)*200 % width, 650 , 35);
  rect((frameCount)*200 % width, 550 , 35);
  rect((frameCount)*200 % width, 350 , 35);
  rect((frameCount)*200 % width, 250 , 35);
    rect(0,190,2800,5);
    rect(0,200,2800,5);
    rect(0,790,2800,5);
    rect(0,800,2800,5);
    circle(1600, 100, 150);
    fill(255);
    textSize(20);
    fill(0, 0, 0);
    Block1.display();
    Block1.move();
    Block2.display();
    Block2.move();
    Block3.display();
    Block3.move();
    Block4.display();
    Block4.move();
    Block5.display();
    Block5.move();
}
function keyPressed() {
  if (value === 0) {
    value = changeBG;
  } else {
    value = 0;
  }
}
button = createButton('Change Color');
button.position(0, 760);
button.mousePressed(changeBG);
//hotdog