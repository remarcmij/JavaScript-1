const state = {
  board: [
    ['T', 'T', '.', 'F'],
    ['T', '.', '.', '.'],
    ['.', '.', '.', '.'],
    ['.', '.', '.', 'W']
  ],
  robot: {
    x: 0,
    y: 0,
    dir: 'up',
  },
  flagReached: false,
  moves: 0
};

