const state = {
  board: [
    ['T', 'T', '.', 'F'],
    ['T', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['R', '.', '.', 'W']
  ],
  robot: {
    x: 0,
    y: 0,
    dir: 'up',
  },
  flagReached: false,
  moves: 0
};

state.board.reverse();

const trailIndicators = {
  left: '←',
  right: '→',
  up: '↑',
  down: '↓'
};

function render() {
  console.log('\n ' + state.moves + ':');
  for (let row = state.board.length - 1; row >= 0; row--) {
    const cells = state.board[row];
    let line = '';
    for (let col = 0; col < cells.length; col++) {
      line += ' ' + cells[col] + ' ';
    }
    console.log(line);
  }
  if (state.flagReached) {
    console.log('\nHurray! Flag reached in ' + state.moves + ' steps!');
  }
}

function move() {
  let x = state.robot.x;
  let y = state.robot.y;

  switch (state.robot.dir) {
    case 'up':
      y = y < state.board.length - 1 ? y + 1 : y;
      break;
    case 'down':
      y = y > 0 ? y - 1 : y;
      break;
    case 'left':
      x = x > 0 ? x - 1 : x;
      break;
    case 'right':
      x = x < state.board[0].length - 1 ? x + 1 : x;
      break;
  }

  const cellContents = state.board[y][x];

  if (cellContents === '.' || cellContents === 'F') {
    state.board[state.robot.y][state.robot.x] = trailIndicators[state.robot.dir];
    state.robot.x = x;
    state.robot.y = y;
    state.board[y][x] = 'R';
    if (cellContents === 'F') {
      state.flagReached = true;
    }
  }

  state.moves += 1;
  render();
}

function turn(turnDirection) {
  if (turnDirection !== 'left' && turnDirection !== 'right') {
    console.log('ignoring invalid turn', turnDirection);
  }
  switch (state.robot.dir) {
    case 'up':
      state.robot.dir = turnDirection === 'left' ? 'left' : 'right';
      break;
    case 'down':
      state.robot.dir = turnDirection === 'left' ? 'right' : 'left';
      break;
    case 'left':
      state.robot.dir = turnDirection === 'left' ? 'down' : 'up';
      break;
    case 'right':
      state.robot.dir = turnDirection === 'left' ? 'up' : 'down';
      break;
  }
}

render();

move();
turn('right');
move();
move();
move();
turn('left');
move();
move();
