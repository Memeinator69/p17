var PLAY=1
var END=0
var gameState=PLAY
var sword
var swordImage
var fruit1,fruit2,fruit3,fruit4
var monster,monsterImage
var gameOver,gameOverImage
var fruitGroup
var enemyGroup
var score=0

function preload(){
  swordImage = loadImage("sword.png");
  monsterImage=loadAnimation("alien1.png","alien2.png") 
    fruit1 = loadImage("fruit1.png"); 
    fruit2 = loadImage("fruit2.png"); 
    fruit3 =  loadImage("fruit3.png");
    fruit4 = loadImage("fruit4.png"); 
   gameOverImage =  loadImage("gameover.png")
}

function setup() {
  createCanvas(400,400)
  sword=createSprite(40,200,20,20)
  sword.addImage(swordImage)
  sword.scale=0.7
  fruitGroup=new Group();
  enemyGroup=new Group();
  
  
}
function draw(){
  background("orange")
  if(gameState===PLAY){
    createFruit();
    enemy();
    sword.y=World.mouseY
    sword.x=World.mouseX
   if(fruitGroup.isTouching(sword)){                      fruitGroup.destroyEach(); 
      score=score+2; }     
  
  else {
    if(enemyGroup.isTouching(sword)){
    gameState=END; 
    fruitGroup.destroyEach();  
    enemyGroup.destroyEach();
    fruitGroup.setVelocityXEach(0);
    enemyGroup.setVelocityXEach(0);  
    sword.addImage(gameOverImage); 
    sword.x=200;
    sword.y=200; } } }
       

  
  drawSprites();
  text("score:"+score,200,100)
}
function createFruit(){
  if(frameCount%60===0){
    fruit=createSprite(350,420,30,30)
    var rand=Math.round(random(1,4))
    switch(rand){
        case 1:fruit.addImage(fruit1)
        break;
        case 2:fruit.addImage(fruit2)
        break;
        case 3:fruit.addImage(fruit3)
        break;
        case 4:fruit.addImage(fruit4)
        break;
    }
    fruit.y=Math.round(random(50,350))
    fruit.velocityX=-7
    fruit.lifetime=100
    fruitGroup.add(fruit)
    fruit.scale=0.2
  }
}


function enemy(){
  if(World.frameCount%200===0){
    monster=createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y=Math.round(random(100,300));
    monster.velocityX=-8;
    monster.setLifetime=50;
    
    enemyGroup.add(monster);
  }
}
  
