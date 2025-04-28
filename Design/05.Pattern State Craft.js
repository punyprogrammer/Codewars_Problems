class State {
  constructor() {
    this.canMove = false;
    this.damage = -20;
  }
}

class TankState extends State {
  constructor() {
    super();
    this.canMove = true;
    this.damage = 5; // not 0, based on your test
  }
}

class SiegeState extends State {
  constructor() {
    super();
    this.canMove = false;
    this.damage = 20;
  }
}

class Tank {
  constructor() {
    this._state = new TankState();
  }

  set state(newState) {
    this._state = newState;
  }

  get state() {
    return this._state;
  }

  get canMove() {
    return this._state.canMove;
  }

  get damage() {
    return this._state.damage;
  }
}
