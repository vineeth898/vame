class block{
    constructor(x,y,b,h){
    var opt={
        isStatic:true
    }
    this.body=Matter.Bodies.rectangle(x,y,b,h,opt);
    this.width=b;
    this.height=h;
    myworld.add(world,this.body);
    }
    display(c){
    fill(c);
    rectMode(CENTER);
    rect(this.body.position.x,this.body.position.y,this.width,this.height);
     }
}