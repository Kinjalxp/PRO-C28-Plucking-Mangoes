class Stone{
    constructor(x,y,radius){
        var options = {
            isStatic:false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        this.image = loadImage("Plucking mangoes/stone.png");
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        var angles = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate (angles);
        image(this.image,0,0,this.r,this.r);
        pop();
        
    }
    fly(){
        this.sling.bodyA = null;
    }

    
}