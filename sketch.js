const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Contraint = Matter.Constraint;

var engine, world
var ground, superhero, rope;

function preload() {
//preload the images here
backgroudImg = loadImage("Images/GamingBackground.png")

}

function setup() {
  createCanvas(1400, 800);
  
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,600,1100,20);
  superhero = new Superhero(200,200,40);
  rope = new Rope(superhero.body, {x:350, y:50})

}

function draw() {
  background("backgroundImg");
  Engine.update(engine);

  ground.display();
  superhero.display();
  rope.display()

}

