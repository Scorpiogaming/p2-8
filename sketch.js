
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy1,ground1,tree1,stone1,mango1,mango2,mango3,mango4,mango5,launcher1;
function preload()
{
	boy1=loadImage("pm/boy.png");
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new ground(600,780,1200,25);
	 stone1=new stone(230,450);
	 tree1=new tree(800,400);
	 mango1=new mango(850,320);
	 mango2=new mango(1090,350);
	 mango3=new mango(1000,160);
	 mango4=new mango(900,240);
	 mango5=new mango(1085,190);
	 launcher1=new launcher(stone1.body,{x:215,y:400})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+" "+mouseY,mouseX,mouseY);
  detectollisation(stone1,mango1);
  detectollisation(stone1,mango2);
  detectollisation(stone1,mango3);
  detectollisation(stone1,mango4);
  detectollisation(stone1,mango5);
  image(boy1,200,300,200,300);
  ground1.display();
  stone1.display();
  tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher1.display
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher1.fly();
}
function keyPressed(){
    if(keyCode===32){
		Matter.body.setPosition(stone1.body,{x:215,y:400});
       launcher1.attach(stone1.body); 
    }
}
function detectollisation(lstone,lmango){
    mangoBodyPosition=lmango.body.setPosition
    stoneBodyPosition=lstone.body.setPosition
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.r+lstone.r){
        Matter.Body.setStatic(lmango.body,false);
    }
}
