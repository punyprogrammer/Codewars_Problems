class MoveStrategy {
  move() {
    throw new Error("This should be overridren");
  }
}
class Fly extends MoveStrategy {
  move(context) {
    context.position += 10;
  }
}

class Walk extends MoveStrategy {
  move(context) {
    context.position += 1;
  }
}

class Viking {
  constructor() {
    this.position = 0;
    this.moveBehavior = new Walk();
  }

  move() {
    this.moveBehavior.move(this);
  }
 
}
