
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	dustbin1= new Dustbin(600,620,30,60);
	dustbin2= new Dustbin(675,640,120,20);
	dustbin3= new Dustbin(720,620,30,60);
	ground= new Ground(400,650,800,10);
	paper= new Paper(100,100,50);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground.display();
  paper.display();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:55,y:-53})
	}
}



