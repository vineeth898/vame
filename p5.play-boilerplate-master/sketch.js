/*
*
My own very castle. #DifferentFromOthers
*
*/

const myengine=Matter.Engine;
const newbody=Matter.Bodies;
const myworld=Matter.World;

var engine,world;

var ground;

var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;

function setup() {
  engine=myengine.create();
  world=engine.world;
  createCanvas(1450,845);

  block1=new dome(1450/2,650,300);
  block2=new block(1450/2,650,600,50);
  ground=new block(1450/2,835,1450,20);
  block3=new block(1450/2,550,500,45);
  block4=new block(1450/2,450,350,40);
  block5=new block(1450/2,370,100,30);
  block6=new block(1450/2,750,500,45);
  block7=new block(1450/2,835,350,40);
  block8=new dome(1450/2,650,300);
}

function draw() {
  myengine.update(engine);
  background(0);  
  block1.display(200,200,200,600,600);
  block8.display(105, 176,205 ,200,600);
  block7.display(135);
  block2.display(135);
  ground.display("brown");
  block3.display(135);
  block4.display(135);
  block5.display(135);
  block6.display(135);
  drawSprites();
}