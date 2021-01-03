const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
//arrayss
var plinkos = [];
var particles = [];
var divisions = [];


function setup() {

createCanvas(480,windowHeight);
engine = Engine.create();
world = engine.world;

ground = new Ground(400,windowHeight,900,10);

ground1 = new Ground(0,windowHeight,20,1900);
ground2 = new Ground(480,windowHeight,20,1900);
///loops for partical
for(var d =5;d<=width;d = d+60){
  divisions.push(new DIV(d,750,10,250));
  
}  

for(var p = 1;p<=width;p=p+40){
  plinkos.push(new Plinko(p,50));
}
for(var p = 10;p<=width;p=p+50){
  plinkos.push(new Plinko(p,100));
}
for(var p = 19;p<=width;p=p+40){
  plinkos.push(new Plinko(p,150));
}
for(var p = 6;p<=width;p=p+60){
  plinkos.push(new Plinko(p,200));
}
for(var p = 4;p<=width;p=p+40){
  plinkos.push(new Plinko(p,250));
}
for(var p = 2;p<=width;p=p+60){
  plinkos.push(new Plinko(p,300));
}
for(var p = 0;p<=width;p=p+40){
  plinkos.push(new Plinko(p,350));
}
for(var p = 0;p<=width;p=p+60){
  plinkos.push(new Plinko(p,400));
}

for(var p = 0;p<=width;p=p+40){
  plinkos.push(new Plinko(p,450));
}
for(var p = 0;p<=width;p=p+60){
  plinkos.push(new Plinko(p,500));
}
for(var p = 0;p<=width;p=p+40){
  plinkos.push(new Plinko(p,550));
}

console.log(frameCount);


Engine.run(engine);
}

function draw() {
  background("black");
  ground.display();
  if(frameCount%30 === 0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  for(var j=0;j<plinkos.length;j++){
    plinkos[j].display();

  }
  for(var j=0;j<divisions.length;j++){
    divisions[j].display();

  }
  for(var j=0;j<particles.length;j++){
    particles[j].display();

  }
  
ground1.display()
  ground2.display()
  drawSprites();
                                                                        
}