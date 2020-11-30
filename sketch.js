const E = Matter.Engine;
const W = Matter.World;
const B = Matter.Bodies;
const Body = Matter.Body;
var ball, wall1, wall2, wall3, ground; 
var engine,world;

function setup() {
	createCanvas(800, 700);
	engine = E.create();
	world = engine.world;
	ball = new Paper(100, 350); 
	ground = new Wall(400, 650, 800, 20);
	wall1 = new Wall(550, 600, 20, 81)
	wall2 = new Wall(700, 600, 20, 81)
	wall3 = new Wall(625, 630, 162, 20)
	E.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220); 
  fill('orange')
  ball.display();
  ground.display();
  fill('red');
  wall3.display();
  wall1.display();
  wall2.display(); 
}

function keyPressed() {
	if (keyCode === 32) {
		Body.applyForce(ball.body, ball.body.position, {x:57,y:-57})
	}
}


