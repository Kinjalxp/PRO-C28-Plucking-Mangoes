const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine, myWorld;

var ground;
var boy,boy_image;
var mango1, mango2, mango3, mango4, mango5,mango6,mango7,mango8,mango9,mango10;
var rock;
var tree;
var ground;
var chain; 
function preload()
{
	boy_image = loadImage("Plucking mangoes/boy.png");
}

function setup() {
	createCanvas(1300, 700);
	myEngine = Engine.create();
	myWorld = myEngine.world;

	engine = Engine.create();
	world = engine.world;

	rock = new Stone(210,375,60);

	boy = createSprite(300,450,10,10);
	boy.addImage(boy_image);
	boy.scale = 0.1;

	mango1 = new Mango(1100,100,50);
	mango2 = new Mango(1170,130,50);
	mango3 = new Mango(1010,140,50);
	mango4 = new Mango(1000,70,50);
	mango5 = new Mango(1100,160,50);
	mango6 = new Mango(1200,170,50);
	mango7 = new Mango(900,230,50);
	mango8 = new Mango(1150,220,50);
	mango9 = new Mango(900,160,50);
	mango10 = new Mango(1000,220,50);

	tree = new Tree(1050,200);

	ground = new Base(width/2,600,width,20);

	chain = new Slingshot(rock.body,{
		x:235,
		y:420
	})
}

function draw() {
	  rectMode(CENTER);
   background(255);

   rock.display();
   tree.display();
   ground.display();
   mango1.display();
   mango2.display();
   mango3.display();
   mango4.display();
   mango5.display();
   mango6.display();
   mango7.display();
   mango8.display();
   mango9.display();
   mango10.display();
   chain.display();

   detectCollision(rock,mango1);
   detectCollision(rock,mango2);
   detectCollision(rock,mango3);
   detectCollision(rock,mango4);
   detectCollision(rock,mango5);
   detectCollision(rock,mango6);
   detectCollision(rock,mango7);
   detectCollision(rock,mango8);
   detectCollision(rock,mango9);
   detectCollision(rock,mango10);

   detectCollision();
   drawSprites();
}

function detectCollision(lrock,lmango){
	mangoBodyPosition = lmango.body.position
	rockBodyPosition = lrock.body.position

	var distance = dist(rockBodyPosition.x,rockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);

	if(distance<=lmango.r+lrock.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}

function mouseDragged(){
    Matter.Body.setPosition(rock.body,{
        x:mouseX,
        y:mouseY
    })
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
    if(keyCode === 32){
        chain.attach(rock.body);
    }
}