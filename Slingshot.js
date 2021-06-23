class Slingshot{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        this.bodyA = bodyA;
        World.add(myWorld,this.sling);
    }
    
    fly(){
        this.sling.bodyA = null;
    }

    attach(body){
        this.sling.bodyA = body;
    }

     display(){

       if(this.sling.bodyA){
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        
       }
    }

   
//     display(){
//       //  image(this.sling1,200,20);
//        // image(this.sling2,170,20);

//        if(this.sling.bodyA){
//         var pointA = this.sling.bodyA.position;
//         var pointB = this.pointB;
//         push();
//         stroke(48,22,8);

//         if(pointA.x < 220){
//         strokeWeight(8);
//         //line(pointA.x,pointA.y,pointB.x,pointB.y);
//         //line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
//         //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
//         }
        
//         else{
//         strokeWeight(4);
//         //line(pointA.x,pointA.y,pointB.x,pointB.y);
//         //line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
//         //image(this.sling3,pointA.x-30,pointA.y-10,15,30);
//         }
//         pop();
//        }
//     }
 }