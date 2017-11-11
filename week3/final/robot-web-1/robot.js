(function() {
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

  function render() {
  }

  render();
})();
