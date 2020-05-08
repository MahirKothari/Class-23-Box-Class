class Box{
 constructor(x,y,width,height){
    var box_options={
        restitution :1
    }
     this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(x,y,width,height,box_options)
    World.add(world,this.body)
   
 }
 display(){
     push();
     translate(this.body.position.x,this.body.position.y);
     rotate(this.body.angle);
      rectMode(CENTER)
      angleMode(RADIANS)
     rect(0,0,this.width,this.height);
     pop();
 }
}




