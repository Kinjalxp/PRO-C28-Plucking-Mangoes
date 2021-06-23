class Tree{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,450,10,options);
        this.image = loadImage("Plucking mangoes/tree.png");
        World.add(myWorld,this.body);
    }
    display(){
        var POS = this.body.position;
        push ();
        translate(POS.x,POS.y);
        imageMode(CENTER) 
        image(this.image,0,100,450,600);
        pop ();
    }
}