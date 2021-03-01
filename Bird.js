class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

this.smokeImage = loadImage("sprites/smoke.png")
//main array
this.path = []

  }

  display() {

    var position = [this.body.position.x, this.body.position.y]

this.path.push(position)
//for loop is used for giving smoke image on every position in path array
for(var i = 0; i<this.path.length; i++){
image(this.smokeImage, this.path[i][0] ,this.path[i][1])
}

    super.display();
  }
}
