
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700)
	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
	var plane_options={
		isStatic: true
	}

	var particle_options={
		restitution: 0.4,
		friction: 0.02
	}

	Engine.run(engine);
  
	block1 = Bodies.rectangle(30, 350, 160, 310, { isStatic: true }, );
    World.add(world, block1);

	block2 = Bodies.rectangle(160, 350, 160, 310, { isStatic: true });
    World.add(world, block1);

	rotator1 = Bodies.rectangle(250, 200, 150, 20, { isStatic: true });
    World.add(world, block1);
	rotator1.angle1 = 60

	rotator2 = Bodies.rectangle(250, 200, 150, 20, { isStatic: true });
    World.add(world, block1);
	rotator2.angle2 = 60

	rotator3 = Bodies.rectangle(250, 200, 150, 20, { isStatic: true });
    World.add(world, block1);
	rotator3.angle3 = 60

	Matter.Body.rotate(rotator1, angle1)
	push();
	translate(rotator1.position.x,rotator1.position.y);
	rotate(angle1);
	rect(0,0,150,20);
	pop();
	angle1 +=0.2;

	Matter.Body.rotate(rotator2, angle2)
	push();
	translate(rotator2.position.x,rotator2.position.y);
	rotate(angle2);
	rect(0,0,150,20);
	pop();
	angle2 +=0.2;

	Matter.Body.rotate(rotator3, angle3)
	push();
	translate(rotator3.position.x,rotator3.position.y);
	rotate(angle3);
	rect(0,0,150,20);
	pop();
	angle3 +=0.2;

	particle1 = bodies.circle(220,10,10,particle_options);
	World.add(world,particle1)

	particle2 = bodies.circle(220,10,10,particle_options);
	World.add(world,particle2)

	particle3 = bodies.circle(220,10,10,particle_options);
	World.add(world,particle3)

	particle4 = bodies.circle(220,10,10,particle_options);
	World.add(world,particle4)

	particle5 = bodies.circle(220,10,10,particle_options);
	World.add(world,particle5)

function draw() {
  rectMode(CENTER);
  //background(100,1000,100);
  engine.update(0)
  drawSprites();

  ellipse(150, 150, 280, 180)
 
}


}
