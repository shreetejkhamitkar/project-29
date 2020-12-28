const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var polygon,polygonImg;
var groundObj,standObj1,standObj2;
var block1,block2,block3,block4,block5,block6,block7,block8,block9;
var slingshot;
function preload(){
polygonImg=loadImage("polygon.png")
}
function setup(){
    groundObj=new Ground(800,205,250,20);
    standObj1=new Ground(550,305,250,20);
    standObj2=new Ground(500,390,1000,20);

    block1=new Box(330,235,30,40);
    block2=new Box(360,235,30,40);
    block3=new Box(360,235,30,40);
    block4=new Box(390,235,30,40);
    block5=new Box(420,235,30,40);
    //level three
    block6=new Box(360,195,30,40);
    block7=new Box(390,195,30,40);
    block8=new Box(420,195,30,40);
    //top
    block9=new Box(390,155,30,40);

    var options={
    density:2.5,
    restitution:0.5,
    friction:1,

}
polygon=Bodies.circle(50,220,20);
World.add(world,polygon);

slingshot=new SlingShot(this.polygon,{x:100,y:200})

}
function draw(){
background("cyan");
Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
fill(191,50,163);
block6.display();
block7.display();
block8.display();
block9.display();
fill(312,74,75);
groundObj.display();
standObj1.display();
standObj2.display();

imageMode(CENTER);

image(polygonImg,polygon.position.x,polygon.position.y,40,40);

drawSprites()
}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}
function mouseReleased(){
    sling.fly();
}