class Block{ 
  constructor(x,y,width,height,speedX,speedY,clr){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.speedX = speedX;
  this.speedY = speedY;
  this.clr = clr;
  }
   display() {
    fill(this.clr);
    rect(this.x,this.y,this.width,this.height)
    
  }
  move(){
    this.x = this.x + this.speedX
    if (this.x > (windowWidth - this.width) || this.x<= 0){
      this.speedX = this.speedX* -1
    }
  }
  }
  let Block1 = new Block(20,300,80,20,205,1,255);
  let Block2 = new Block(20,400,80,20,205,1,255);
  let Block3 = new Block(20,500,80,20,205,1,255);
  let Block4 = new Block(20,600,80,20,205,1,255);
function setup() {
  createCanvas(1900,900);

  button = createButton('Change Color');
  button.position(0, 760);
  button.mousePressed(changeBG);


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
  fill(colFill);
  rect((frameCount)*120 % width, height/ 2, 25);

    rect(0,200,2800,5);
    rect(0,690,2800,5);
    rect(0,190,2800,5);
    rect(0,700,2800,5);
    circle(1600, 100, 150);
    circle(1000, 800, 200);
    circle(750, 800, 200);
    circle(1000, 800, 190);
    circle(750, 800, 190);
    fill(255);
    circle(1000, 800, 20);
    circle(750, 800, 20);
    circle(875, 750, 0);
    textSize(20);
    text('0 MPH', 845, 870);
    fill(0, 0, 0);
    line(750,800,750,890);
    line(1000,800,1000,890);
    Block1.display();
    Block1.move();
    Block2.display();
    Block2.move();
    Block3.display();
    Block3.move();
    Block4.display();
    Block4.move();   
}
