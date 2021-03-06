class Superhero{
    constructor(x, y, radius){
        var options = {
            density: 0.8,
            frictionAir:0.005
        }
        
        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("Images/Superhero-01.png")
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y )
        rotate(angle);
        imageMode(CENTER)
        image(this.image,0, 0, this.radius, this.radius)
        pop();
    }
 } 