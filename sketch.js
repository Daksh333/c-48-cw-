
var pacman , pacman_running
var healthyfood ,healthyfoodImage, obstacle, obstacleImage
var covid
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  
pacman_running = loadAnimation("pacman.png")
  healthyfoodImage = loadImage("healthy food.png");
  obstaceImage = loadImage("covid.png");

 
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  ground=createSprite(0,400,1500,10)
  
   pacman=createSprite(90,370,10,10)
 pacman.addAnimation("pacman_running",pacman_running)
  pacman.scale=0.1
  

  }
function draw() {
  background("cyan")
  
  if(keyDown("space")&&pacman.y >= 350){
    pacman.velocityY=-10
  }
  pacman.velocityY = pacman.velocityY + 0.3
  pacman.collide(ground)

  if(score==20){
    text("WEAR A MASK " , 325,210)
    text(" BE SAFE", 340 , 250)
    gameState = end ;
  }
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(pacman.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+2
      }
      if(pacman.isTouching(obstacleGroup)){
        text("YOU ARE DEAD", 335 ,200)
        gameState= end;
        
         }
 
 drawSprites()
  fill("white") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  var survivalTime=Math.round(getFrameRate()/1);
  text("Survival Time: "+ survivalTime,350,50)
  
}

function fruits(){
  healthyfood=createSprite(670,Math.round(random(170,230)),10,10)
  healthyfood.addImage(healthyfoodImage)
  healthyfood.scale=0.1
  healthyfood.velocityX=-3
  FoodGroup.add(healthyfood)
}

function stones(){
  obstacle=createSprite(670,380,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-4
  obstacle.scale=0.05
  obstacleGroup.add(obstacle)

}
