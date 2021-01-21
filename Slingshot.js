class Slingshot{
    constructor(firstbody,firstpoint){
        var options={
            bodyA: firstbody,
            pointB: firstpoint,
            length: 40
        }
      this.body=Matter.Constraint.create(options);
      World.add(world,this.body);
      this.bodyA=firstbody;
      this.pointB=firstpoint;
    }
    display(){
       if(this.body.pointB){
        line(this.bodyA.position.x,this.bodyA.position.y,this.pointB.x,this.pointB.y);
       }
    }

    break(){
        this.body.pointB=null;
    }
}