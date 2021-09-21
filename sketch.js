
  
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var destiny
var wizard1,wizard2
var fire
var thunder
var attack=0
function preload(){
 destinyImage=loadImage("shadow fighter.jpg")
backgroundImage=loadImage("background1.jpg")
wizard1Image=loadImage("fire wizard.jpg")
wizard2Image=loadImage("thunder wizard.jpg")
fireImage=loadImage("fire.png")
thunderImage=loadImage("thunder.jpg")
destinyhealthImage=loadAnimation("hb6.png")
enemyhealthImage=loadImage("healthbar2.png")
healthbrImage=loadImage("hb1.png")
healthbr2Image=loadImage("hb2.png")
healthbr3Image=loadImage("hb3.png")
healthbr4Image=loadImage("hb4.png")
healthbr5Image=loadImage("hb5.png")
healthbr6Image=loadImage("hb6.png")

}
function setup() {
  createCanvas(displayWidth,displayHeight);
 
  engine = Engine.create();
  world = engine.world;
  bg=createSprite(width/2,height/2)
  bg.addImage("background",backgroundImage)
  bg.velocityX=-1
  bg.x=bg.width/2
destinyhealth=createSprite(width-140,35)
destinyhealth.addAnimation("healthbar",destinyhealthImage)
destinyhealth.addAnimation("healthbar",healthbrImage)
destinyhealth.addAnimation("healthbar",healthbr2Image)
destinyhealth.addAnimation("healthbar",healthbr3Image)
destinyhealth.addAnimation("healthbar",healthbr4Image)
destinyhealth.addAnimation("healthbar",healthbr5Image)
destinyhealth.addAnimation("healthbar",healthbr6Image)
destinyhealth.scale=0.6
  destiny=createSprite(width/8-20,height/2,50,50);
  destiny.addImage("shadow fighter",destinyImage)
  destiny.scale=0.59
  destiny.debug=false
  destiny.setCollider("rectangle",0,0,400,150)
  wizard1=createSprite(width-140,height/2,45,45)
  wizard1.addImage("firewizard",wizard1Image)
  wizard1.scale=0.1
  wizard1.debug=false
  wizard1.setCollider("rectangle",0,0,2400,1600)
wizard2=createSprite(width/2 -50,height/2,45,45)
wizard2.addImage("thunderwizard",wizard2Image)
wizard2.scale=0.18
wizard2.debug=false
wizard2.setCollider("rectangle",0,0,1200,900)
enemyhealth=createSprite(width-140,135)
enemyhealth.addImage("healthbar2",enemyhealthImage)
enemyhealth.scale=0.7
fireGroup=new Group()
thunderGroup=new Group()

}

function draw() {
  background("black")  
  console.log(bg.x)
  if(bg.x<width/2){
bg.x=bg.width/2

  }
  Engine.update(engine);
// moving destiny with arrow keys
if(keyDown("right")){
  destiny.x=destiny.x+4
}
if(keyDown("left")){
  destiny.x=destiny.x-4
}
if(keyDown("up")){
  destiny.y=destiny.y-4
}
if(keyDown("down")){
  destiny.y=destiny.y+4
}
if(destiny.isTouching(wizard1)){
  fireAttack()
}
if(destiny.isTouching(wizard2)){
  thunderAttack()
}
destinyhb()
  drawSprites();
}

function fireAttack(){
  if(frameCount % 60 === 0) {
    fire=createSprite(width-100,height/2-20,25,25)
    fire.addImage(fireImage)
    fire.scale=0.05
    fire.velocityX=-3
    fireGroup.add(fire)
  }


   
 }
 
function thunderAttack(){
if(frameCount % 60 === 0){
thunder=createSprite(width/2,height/2-20,25,25)
thunder.addImage(thunderImage)
thunder.scale=0.2
thunder.velocityX=-2
thunderGroup.add(thunder)
}

}

function destinyhb(){
if(thunderGroup.isTouching(destiny)){
attack=attack+1
if(attack!==0){
  switch (attack){
    case 1:destinyhealth.changeAnimation("healthbar",healthbrImage)
      break;
      case 2:destinyhealth.changeAnimation("healthbar",healthbr2Image)
      break;
      case 3:destinyhealth.changeAnimation("healthbar",healthbr3Image)
      break;
      case 4:destinyhealth.changeAnimation("healthbar",healthbr4Image)
      break;
      case 5:destinyhealth.changeAnimation("healthbar",healthbr5Image)
      break;
case 6:destinyhealth.changeAnimation("healthbar",healthbr6Image)
break;
default :text("Game Ended",width/2,height/2)
break;


  }
}
}

}