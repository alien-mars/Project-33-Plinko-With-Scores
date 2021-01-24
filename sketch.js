
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//declare variables
var ground;
var border1,border2,border3,border4;
var borderLine;
var particle;
var divisionHeight = 300;
var width = 480;
var score = 0;
var gameState = "play";
var turn = 5;

//var particles = [];
var plinkos = [];
var divisions = [];

function preload()
{
	//add images
}

function setup() {
	createCanvas(870,800);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.

  borderLine = createSprite(435,445,864,10);
  borderLine.shapeColor = ("yellow");

  border1 = new Ground(435,3,870,6);
  border2 = new Ground(435,797,870,6);
  border3 = new Ground(3,400,6,800);
  border4 = new Ground(867,400,6,800);

  ground = new Ground(435,794,870,20);

  //create divisions
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Divisions(k,800-(divisionHeight/2),10,divisionHeight));
  }

  //first row of plinkos
  for(var j=45; j <=  width; j = j + 50){
    plinkos.push(new Plinko(j,95));
  }

  //second row of plinkos
  for (var j = 20; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,195));
  }

  //third row of plinkos
  for (var j = 45; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,295));
  }

  //fourth row of plinkos
  for (var j = 20; j <=width-10; j=j+50) {   
    plinkos.push(new Plinko(j,395));
  }

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  //display score
  fill("white");
  textSize(25);
  text("Score: " + score,40,50);
  text("Turns left: " + turn,720,50);
  
  //display divisions
  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  //display plinkos
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display(); 
  }

  //display score values in divisions
  
  for(var i = 30; i < 870; i = i+790){
    fill(255);
    textSize(25);
    text("50",i,520);
  }

  for(var i = 100; i < 790; i = i+640){
    fill(255);
    textSize(25);
    text("100",i,520);
  }

  for(var i = 190; i < 710; i = i+480){
    fill(255);
    textSize(25);
    text("?",i,520);
  }

  for(var i = 260; i < 630; i = i+320){
    fill(255);
    textSize(25);
    text("300",i,520);
  }

  for(var i = 340; i < 550; i = i+160){
    fill(255);
    textSize(25);
    text("500",i,520);
  }

  fill(255);
  textSize(25);
  text("1000",410,520);
  
  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(5<particle.body.position.x && particle.body.position.x<72){
        score = score + 50;
        particle = null;
      }
      else if(808<particle.body.position.x && particle.body.position.x<862){
        score = score + 50;
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(88<particle.body.position.x && particle.body.position.x<152){
        score = score + 100;
        particle = null;
      }
      else if(728<particle.body.position.x && particle.body.position.x<792){
        score = score + 100;
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(168<particle.body.position.x && particle.body.position.x<228){
        score = score + 50*(Math.round(random(1,40)));
        particle = null;
      }
      else if(648<particle.body.position.x && particle.body.position.x<708){
        score = score + 50*(Math.round(random(1,40)));
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(248<particle.body.position.x && particle.body.position.x<308){
        score = score + 300;
        particle = null;
      }
      else if(568<particle.body.position.x && particle.body.position.x<628){
        score = score + 300;
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(328<particle.body.position.x && particle.body.position.x<388){
        score = score + 500;
        particle = null;
      }
      else if(488<particle.body.position.x && particle.body.position.x<548){
        score = score + 500;
        particle = null;
      }
    }
  }

  if(particle != null){
    particle.display();
    if(particle.body.position.y>760){
      if(408<particle.body.position.x && particle.body.position.x<468){
        score = score + 1000;
        particle = null;
      }
    }
  }

  if(turn === 0){
    gameState = "end";
    fill(255);
    textSize(38);
    text("Game Over!!",365,250);
    text("Reload To Start Again!",285,350);
  }

  fill("red");
  border1.display();
  border2.display();
  border3.display();
  border4.display();

  fill("white");
  ground.display();

  drawSprites();

}

function mouseClicked(){
  if (gameState === "play"){
      turn -= 1 ;
      particle = new Particle (mouseX ,30,10);
  }
}