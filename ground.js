class ground{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body=Bodies.rectangle(x,y,width,height,{isStatic:true,restitution:0.3});
        World.add(world,this.body);
    }
    display(){
        push()
        rectMode(CENTER);
        rect(800,670,this.width,this.height);
        pop()
    }
}