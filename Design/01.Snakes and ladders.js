// https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript


class SnakesLadders {
  constructor() {
    this.activePlayer = 1;
    this.playerPositions = [0, 0];
    this.winner = null;
    this.ladders = [
      { from: 2, to: 38 },
      { from: 7, to: 14 },
      { from: 8, to: 31 },
      { from: 15, to: 26 },
      { from: 21, to: 42 },
      { from: 28, to: 84 },
      { from: 36, to: 44 },
      { from: 51, to: 67 },
      { from: 71, to: 91 },
      { from: 78, to: 98 },
      { from: 87, to: 94 },
    ];

    this.snakes = [
      { from: 16, to: 6 },
      { from: 46, to: 25 },
      { from: 49, to: 11 },
      { from: 62, to: 19 },
      { from: 64, to: 60 },
      { from: 74, to: 53 },
      { from: 89, to: 68 },
      { from: 92, to: 88 },
      { from: 95, to: 75 },
      { from: 99, to: 80 },
    ];
  }
  getNewPosition(prevPosition, increment) {
    if (prevPosition + increment <= 100) return prevPosition + increment;
    const excess = prevPosition + increment - 100;
    return 100 - excess;
  }
  play(die1, die2) {
    // disallow if we already have a result
    if (this.winner) {
      return `Game over!`;
    }
    const currentPlayer = this.activePlayer;
    const currentPosition = this.playerPositions[currentPlayer - 1];
    let newPosition = currentPosition + die1 + die2;
    // if overshoot
    if (newPosition > 100) {
      const excessMove = newPosition - 100;
      newPosition = 100 - excessMove;
    }
    if (newPosition === 100) {
      this.winner = this.activePlayer;
    }
    // if ladder
    const ladder = this.ladders.find((item) => item.from === newPosition);
    if (ladder) {
      newPosition = ladder.to;
    }
    const snake = this.snakes.find((item) => item.from === newPosition);
    if (snake) {
      newPosition = snake.to;
    }
    // check for win
    if (this.winner) {
      return `Player ${currentPlayer} Wins!.`;
    }
    // toggle player and return position
    if (die1 !== die2) {
      this.activePlayer = this.activePlayer === 2 ? 1 : 2;
     
    }
//     update position
     this.player
     return `Player ${currentPlayer} is on square ${newPosition}`;
  }
}

