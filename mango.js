class mango{
    constructor(x, y) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1
        }
        this.image=loadImage("pm/mango.png");
        this.body = Bodies.circle(x, y,75,options);
        this.r=75;
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        imageMode(CENTER);
        strokeWeight(3);
        stroke("green");
        fill("green");
      // ellipse(0,0,this.r);
      image(this.image,0,0,this.r,this.r);
        pop();
      }
    }