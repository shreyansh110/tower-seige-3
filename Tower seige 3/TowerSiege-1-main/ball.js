class Ball{
    constructor(x, y,radius) {
        var options = {
            'restitution':1.0,
            'friction':0.5,
            'density':2.0,
            isStatic:false
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius=radius
        this.image=loadImage("polygon.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        //var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        imageMode(CENTER);
        //fill(255);
        image(this.image,0,0,50,70);
        
       // this.body.position.x=mouseX;
    //this.body.position.y=mouseY; 
        pop();
      }




}