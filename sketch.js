
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function setup() {
	createCanvas(800, 700);



	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper = new PaperGlass (100,600,10);

	ground = new Ground(400,680,800,20);

	leftSideDustbin = new Dustbin(550,620,20,100);
	rightSideDustbin = new Dustbin(610,660,100,20);
	bottomDustbin = new Dustbin (670,620,20,100);





Engine.run(engine)


	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  leftSideDustbin.display();
  rightSideDustbin.display();
  bottomDustbin.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:15, y:-15})
		}

	}



