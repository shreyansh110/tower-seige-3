class Box{
constructor(x,y,width,height){
var options={

'restitution':0.4,
'friction':0.9,
'density':1.2,
isStatic:false

}
this.Visibility=255
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("wood1.png");
World.add(world,this.body);

}

display(){
    
    
    push();
if(this.body.speed<3){

this.body.visible=true
}else{
World.remove(world,this.body)

this.Visibility=this.Visibility-5
tint(255,this.Visibility);    


}
//translate(this.body.position.x,this.body.position.y)
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);




pop();
}
compscore(){

    if(this.Visibility<0&&this.Visibility>-1005){
    
    compscore++;
    
    }
    
    }

}

