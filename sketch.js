const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer,  playerArcher;
var arrow;
var baseimage;
var playerimage;
var playerBase ;
function preload() {
  
 
  playerimage = loadImage("assets/player.png");
  base1image = loadImage("assets/base1.png");
  base2image = loadImage("assets/base2.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

 

 

 
playerBase = new PlayerBase(300,random(450-height - 300),180,150);
player = new Player(285,playerBase.body.position.y-153,50,180);
  

  computerBase= new ComputerBase(
   width -172,
   random(450,height-300),
    180,
    150
  );

 computer = new Computer(
   width-100,
    computerBase.body.position.y,
    80,
    280
  );
}

function draw() {
  background("grey");
 
  Engine.update(engine);
  player.display();
  playerBase.display();
  computer.display();
  computerBase.display();


 

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}