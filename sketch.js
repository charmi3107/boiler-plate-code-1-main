var a,b;
function setup(){
createCanvas(800,400);

a=createSprite(400,400,50,50);
b=createSprite(300,300,30,30);

a.shapeColor="green";
b.shapeColor="green";



}
function draw(){
  background(0);

console.log(a.x-b.x);
a.x=mouseX;
a.y=mouseY;

if(a.x-b.x<a.width/2+ b.width/2 && b.y-a.y<a.height/2+b.height/2){
  a.shapeColor="red";
  b.shapeColor="red";
}
else{
  a.shapeColor="green";
  b.shapeColor="green";
}

drawSprites();
}