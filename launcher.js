class launcher{
     constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:2,
            stiffness:0.04
        }
        this.launcher=Constraint.create(options);
        World.add(world,this.launcher);
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(body){
        this.launcher.bodyA = body;
    }

    display(){
        if(this.launcher.bodyA){
            var pointA=this.launcher.bodyA.position;
            var pointB=this.pointB;
            strokeWeight(5);
            stroke("green");
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        }
}