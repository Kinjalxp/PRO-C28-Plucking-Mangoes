class Mango{
    constructor(x,y,radius){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.r = radius;
        this.image = loadImage("Plucking mangoes/mango.png");
    }
    display(){
        var POS = this.body.position;
        var angles = this.body.angle;
        push();
        translate(POS.x,POS.y);
        rotate(angles);
        imageMode(CENTER);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}