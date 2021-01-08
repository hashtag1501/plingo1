var particle=[];
var plingo=[];
var division=[];
var divisionHeight=300;


function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  for(var k =0;k<=Width;k=k+80){
    division.push(new division(k,height/2,10,divisionHeight))
  }
  drawSprites();
}