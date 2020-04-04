class dome{
    constructor(x,y,r){
    var opt={
        isStatic:true
    }
    this.body=Matter.Bodies.circle(x,y,r,opt);
    this.radius=r;
    myworld.add(world,this.body);
    }
    display(r,g,b,x,y){
    fill(r,g,b);
    //ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,x,y);
     }
}