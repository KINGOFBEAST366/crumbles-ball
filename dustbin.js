class Dustbin{
    constructor(x,y,width,height){
      var options ={
      isStatic:true  
    }
    this.width=width;
this.height=height;

this.body=Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)

 
}
  display(){


    
    push()
    
    rectMode(CENTER)
    strokeWeight(3);
    fill(255,0,255)
    rect(this.body.position.x,this.body.position.y, this.width, this.height);
    pop();
  
  }
}