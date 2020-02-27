var fixedRect, movingRect,fixedR1,fixedR2

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  // movingRect.debug = true;
fixedR1=createSprite(100,100,50,50);
fixedR2=createSprite(200,100,50,50);
fixedR1.shapeColor="blue";
fixedR2.shapeColor="cyan";



}
function istouching(movingRect,fixedR1){

  if (movingRect.x - fixedR1.x < fixedR1.width/2 + movingRect.width/2
    && fixedR1.x - movingRect.x < fixedR1.width/2 + movingRect.width/2
    && movingRect.y - fixedR1.y < fixedR1.height/2 + movingRect.height/2
    && fixedR1.y - movingRect.y < fixedR1.height/2 + movingRect.height/2)
     {
   return true;
}
else{
return false;

}







}






function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // istouching()
if(istouching(movingRect,fixedR2)){
  movingRect.shapeColor = "purple";
  fixedR2.shapeColor = "purple";
}

else{
  movingRect.shapeColor = "green";
  fixedR2.shapeColor = "blue"; 




}




drawSprites();
}