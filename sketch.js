var thickness,wall ; 
var bullet,speed,weight ; 

function setup() {
createCanvas(1600,400);
 

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,85)


 bullet =  createSprite(50,200,50,20);
 
 wall = createSprite(1200,200,thickness,height/2);
 
}

function draw() {
  background("#00cc00");  
bullet.velocityX = speed  

  
if(wall.x - bullet.x < wall.width/2 + bullet.width/2) {
  bullet.velocityX = 0 

  var deformation=0.5*weight*speed*speed/22500;
    if (deformation>180)
    

      {


        

  bullet.shapeColor = color("#000000");
      }
    if(deformation < 180 && deformation  > 100 ) 
      {

bullet.shapeColor = color(230,230,0);
      }
      if(deformation < 100 ) 
      {
      bullet.shapeColor = color("#000000");
      }
      if (hasCollided(bullet,wall))
      {
        bullet.velocityX=0;
        var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
      
      if(damage>10)
      {
        wall.shapeColor=color("#cc5201");
  
      }
  
  
      if(damage<10)
      {
        wall.shapeColor=color("#0000ff");
      }
      }
    
    
    
    } 
  
  
    drawSprites();
}
function hasCollided(lbullet,lwall)
{
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
return false;
}
