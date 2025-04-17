function mazeRunner(maze, directions) {
  const n = maze.length;
  let startX, startY;

  // Find starting position (value 2)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        startX = i;
        startY = j;
        break;
      }
    }
  }

  const dirMap = {
    N: [-1, 0],
    S: [1, 0],
    E: [0, 1],
    W: [0, -1],
  };

  let x = startX;
  let y = startY;

  for (const dir of directions) {
    const [dx, dy] = dirMap[dir];
    x += dx;
    y += dy;

    // Check out-of-bounds or wall
    if (x < 0 || y < 0 || x >= n || y >= maze[0].length || maze[x][y] === 1) {
      return "Dead";
    }

    // Check if reached the finish
    if (maze[x][y] === 3) {
      return "Finish";
    }
  }

  return "Lost";
}
