const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var backgroundImg;
var thrower;
var compscore=0
function preload(){
  getBackgroundImg();
}



function setup(){

var canvas=createCanvas(1800,800);
engine=Engine.create();
world=engine.world;

//ground
ground=new Platform(900,785,1800,20);

//ball
thrower=new Ball(200,500,70);


//both platforms
platform1=new Platform(800,400, 350,20);
platform2=new Platform(1500,600,400,20);

box1=new Box(700,355,50,70);
box2=new Box(750,355,50,70);
box3=new Box(800,355,50,70);
box4=new Box(850,355,50,70);
box5=new Box(900,355,50,70);
box6=new Box(750,285,50,70);
box7=new Box(800,285,50,70);
box8=new Box(850,285,50,70);
box9=new Box(800,215,50,70);
//platform 2 line no .1
box10=new Box(1370,555,50,70);
box11=new Box(1420,555,50,70);
box12=new Box(1470,555,50,70);
box13=new Box(1520,555,50,70);
box14=new Box(1570,555,50,70);
box15=new Box(1620,555,50,70);
//platform 2 second line
box16=new Box(1420,485,50,70);
box17=new Box(1470,485,50,70);
box18=new Box(1520,485,50,70);
box19=new Box(1570,485,50,70);
//platform 2 line no.3
box20=new Box(1470,415,50,70);
box21=new Box(1520,415,50,70);
chain=new Slingshot(thrower.body,{x:200,y:350});

}


function draw(){
if(backgroundImg)
 
    background(backgroundImg);




Engine.update(engine);



thrower.display();
platform1.display();
platform2.display();

box1.display();
box1.compscore();
box2.display();
box2.compscore();
box3.display();
box3.compscore();
box4.display();
box4.compscore();
box5.display();
box5.compscore();
box6.display();
box6.compscore();
box7.display(); 
box7.compscore();
box8.display();
box8.compscore();
box9.display();
box9.compscore();
box10.display();
box10.compscore();
box11.display();
box11.compscore();
box12.display();
box12.compscore();
box13.display();
box13.compscore();
box14.display();
box14.compscore();
box15.display();
box15.compscore();
box16.display();
box16.compscore();
box17.display();
box17.compscore();
box18.display();
box18.compscore();
box19.display();
box19.compscore();
box20.display();
box20.compscore();
box21.display();
box21.compscore();
ground.display();
chain.display();
console.log(compscore);
drawSprites();


textSize(35);
fill("red");
text("Score"+compscore,1500,50);

}


function mouseDragged(){
Matter.Body.setPosition(thrower.body,{x:mouseX,y:mouseY});

}

function mouseReleased(){
chain.fly();


}

function keyPressed(){
if(keyCode===32){

chain.attach(thrower.body);

}


}




async function getBackgroundImg(){

var response= await fetch ("http://worldtimeapi.org/api/timezone/America/new_york")
var responseJSON=await response.json();

var datetime=responseJSON.datetime;
var hour=datetime.slice(11,13);

if(hour>=0600 && hour<=1900){
bg="bg1.png"

}else{
    bg="bg2.jpg"
}

backgroundImg=loadImage(bg);
console.log(backgroundImg)



}