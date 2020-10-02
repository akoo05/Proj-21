var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(200,200,50,50);
  bullet.shapeColor=color(255,255,255);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      //green
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<10){
      //red
      wall.shapeColor=color(0,255,0);
    }
  } 
  background(23,42,23); 
  drawSprites();
}
function hasCollided(bullet, wall)
{
  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
