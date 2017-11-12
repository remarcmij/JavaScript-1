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
    moves: 0,
    lastCommand: ''
  };

  const imageMap = {
    T: '<img src="img/tree.png"',
    W: '<img src="img/water.png"',
    F: '<img src="img/goal.png"',
    R: '<img src="img/robot.png"'
  };

  function render() {
    const target = document.getElementById('target');
    target.innerHTML = '';
    renderBoard(target);
    renderInput(target);
  }

  function renderInput(target) {
    const div = document.createElement('div');
    target.appendChild(div);

    const input = document.createElement('input');
    div.appendChild(input);
    input.setAttribute('id', 'command');
    input.setAttribute('type', 'text');
    input.setAttribute('value', state.lastCommand);
    input.focus();

    const button = document.createElement('button');
    div.appendChild(button);
    const label = document.createTextNode('Execute');
    button.appendChild(label);
    button.addEventListener('click', function () {
      state.lastCommand = input.value;
      executeCommand();
    });
  }

  function renderBoard(target) {
    const table = document.createElement('table');
    target.appendChild(table);
    for (let row = state.board.length - 1; row >= 0; row--) {
      const cells = state.board[row];
      const tr = document.createElement('tr');
      table.appendChild(tr);
      let rowHtml = '';
      for (let col = 0; col < cells.length; col++) {
        const cell = cells[col];
        const img = imageMap[cell] || '';
        if (cell === 'R') {
          let classString = state.robot.dir;
          if (state.flagReached) {
            classString += ' at-flag';
          }
          rowHtml += `<td class="${classString}">${img}</td>`;
        } else {
          rowHtml += `<td>${img}</td>`;
        }
      }
      tr.innerHTML = rowHtml;
    }
  }

  function executeCommand() {
    switch (state.lastCommand) {
      case 'move':
        move();
        break;
      case 'turn-left':
        turn('left');
        break;
      case 'turn-right':
        turn('right');
        break;
      default:
        console.log('ignoring command:', state.lastCommand);
    }
    render();
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
      state.board[state.robot.y][state.robot.x] = '';
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
      return;
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
})();
