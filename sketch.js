const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    box3 = new Box(700,230,70,70);
    box4 = new Box(920,230,70,70);
    ground = new Ground(600,height,1200,20)
    pig1 = new pig(800,350);
    pig2 = new pig(800,210);
    box5 = new Box(800,150,70,70);
    Log1 = new Log(815,280,300,PI/2);
    Log2 = new Log(815,180,300,PI/2);
    Log3 = new Log(760,120,150,PI/7);
    Log4 = new Log(880,120,150,-PI/7);
    bird1 = new Bird(100,100)
    


}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    Log1.display();
    Log2.display();
    box3.display();
    box4.display();
    pig2.display();
    box5.display();
    Log3.display();
    Log4.display();
    bird1.display();
}