(function () {
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

  const trailIndicators = {
    left: '←',
    right: '→',
    up: '↑',
    down: '↓'
  };


  function render() {
    const target = document.getElementById('target');
    target.innerHTML = '';
    const table = document.createElement('table');
    target.appendChild(table);
    for (let row = state.board.length - 1; row >= 0; row--) {
      const cells = state.board[row];
      const tr = document.createElement('tr');
      table.appendChild(tr);
      let rowHtml = '';
      for (let col = 0; col < cells.length; col++) {
        const cell = cells[col] === '.' ? '' : cells[col];
        rowHtml += `<td>${cell}</td>`;
      }
      tr.innerHTML = rowHtml;
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

  state.board.reverse();
  render();

  move();
  turn('right');
  move();
  move();
  move();
  turn('left');
  move();
  move();
})();
