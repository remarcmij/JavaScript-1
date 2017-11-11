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

  state.board.reverse();

  render();
  render();
})();
