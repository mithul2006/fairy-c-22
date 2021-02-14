var starImg, fairyImg, bgImg;
var fairy , fairyVoice,fairyImg2;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
  fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
  fairyImg2 = loadImage("images/fairy.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	engine = Engine.create();
	world = engine.world;

	//DO:- PALY THE SOUND
	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyFlying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	var options={
		'restitution':0.5,
		'isStatic':true
	}

	starBody = Bodies.circle(650 , 30 , 5 ,options);
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  if(star.y > 470 && starBody.position.y > 470 ){
    Matter.Body.setStatic(starBody,true);
    fairy.addImage("change",fairyImg2)
    fairy.changeAnimation("change")
  }

  drawSprites();

}

function keyPressed() {

	if(keyCode === RIGHT_ARROW){

		//do:- ADD RIGHT MOVEMENT TO FAIRY
        fairy.x = fairy.x+20;
	}
	
    if(keyCode === LEFT_ARROW){

		//DO:- ADD LEFT MOVEMENT TO FAIRY
        fairy.x = fairy.x-20;
	}

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
}