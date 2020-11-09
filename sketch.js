var bullet,wall,thickness;
var speed,  weight;





function preload() {
  
}

function setup() {
  createCanvas(1600, 400);
  thickness = random(22,83)
  speed = random(223, 321);
 
  weight = random(30, 52);
  bullet = createSprite(140, 50, 200, 20);
 
  
  bullet.velocityX = speed;
  
  wall = createSprite(1200, 50, thickness, height/2);
  
  wall.shapeColor = "gold";
  
}

function draw() {
  background(0);

if(hasCollided(bullet, wall))
{
bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

if(damage>10){
  wall.shapeColor=color(255, 0, 0);
}

if(damage<10){
wall.shapeColor = color(0, 255, 00);

}



}
 
drawSprites();
}

function hasCollided(Lbullet, Lwall){
bulletRightEdge = Lbullet.x +Lbullet.width;

wallLeftEdge = Lwall.x;
if(bulletRightEdge >= wallLeftEdge){

  return true
}
return false;


}








