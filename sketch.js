var girl,zombie,bg,obs,gameover;
var backgroundimg,girlimg,zombieimg,obsimg,gameoverimg;
var score;
function preload(){
backgroundimg=loadImage("road.jpg");
girlimg=loadImage("backgrond.jpg");
zombieimg=loadImage("OLP.jpg");
obsimg=loadImage("box.jpg");
gameoverimg=loadImage("go.jpg")
}

function setup() {
  createCanvas(575,400);
  bg=createSprite(width/1,400,);
  bg.addImage(backgroundimg);
  bg.scale=5;
bg.velocityX=-4;
girl = createSprite(width/3 ,height-250,20,20);
girl.addImage(girlimg);
girl.scale=0.6;
zombie=createSprite(width/13,height-250,20,20);
zombie.addImage(zombieimg);
zombie.scale=0.5;


}

function draw() {
  edges= createEdgeSprites();
  girl.collide(edges);
  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  if(keyDown("space")&& girl.y >= 100) {
    girl.velocityY = -12;
}
if(girl.isTouching)(obs){

}

createObs();
girl.y = World.mouseY;
zombie.y=girl.y
drawSprites();
}
function createObs(){
if (World.frameCount % 575 == 0) {
  
   var box = createSprite(Math.round(random(575, width-100),40, 10, 10));
   box.addImage(obsImg);
 obs.scale=0.12;
 obs.velocityY = 5;
 obs.lifetime = 2399;
 }
}
