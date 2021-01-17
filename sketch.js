
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var mango,stone,ground,rope;
function preload()
{
treeimg=loadImage("tree.png")
boyimg=loadImage("boy.png")
}

function setup() {
	createCanvas(800, 700);
	boy=createSprite(100,640,60,100);
	boy.addImage(boyimg);
	boy.scale=0.1112
	tree=createSprite(500,500,200,200);
	tree.addImage(treeimg);
	tree.scale=0.4
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground=new Ground(400,680,800,20);
mango=new Mango(430,480,20,20);
mango1=new Mango(350,500,20,20);
mango2=new Mango(300,460,20,20);
mango3=new Mango(460,440,20,20);
mango4=new Mango(400,520,20,20);
stone=new Stone(100,640,20,20);
rope=new Rope(stone.body,{x:70,y:620});
Engine.run(engine);
  
}


function draw() {
	  rectMode(CENTER);
  background(255);
  ground.display();
  mango.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  stone.display();
  rope.display();
  detectCollision(mango,stone);
  detectCollision(mango1,stone);
  detectCollision(mango2,stone);
  detectCollision(mango3,stone);
  detectCollision(mango4,stone);
  drawSprites();
 
}
function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})

	}
	function mouseReleased(){
	rope.fly();
	}
function detectCollision(box,box1){
boxp=box.body.position;
box1p=box1.body.position;
var distance=dist(boxp.x,boxp.y,box1p.x,box1p.y)
if(distance<=box.width+box1.width){
	Matter.Body.setStatic(box.body,false)
}

}