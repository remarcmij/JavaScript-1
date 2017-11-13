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

    const trailIndicators = {
        left: '←',
        right: '→',
        up: '↑',
        down: '↓'
    };

    state.board.reverse();

    function renderText() {
        console.log('move:', state.moves);
        for (let row = state.board.length - 1; row >= 0; row--) {
            const cells = state.board[row];
            let line = '';
            for (let col = 0; col < cells.length; col++) {
                const cell = cells[col];
                line += ' ' + cell + ' ';
            }
            console.log(line);
        }

        if (state.flagReached) {
            console.log('Hurray! Flag reached!');
        }
    }

    function renderBoard(targetDiv) {
        const table = document.createElement('table');
        targetDiv.appendChild(table);
        for (let row = state.board.length - 1; row >= 0; row--) {
            const tr = document.createElement('tr');
            table.appendChild(tr);
            const cells = state.board[row];
            for (let col = 0; col < cells.length; col++) {
                const td = document.createElement('td');
                tr.appendChild(td);
                // console.log('td', td);
                td.innerHTML = cells[col];
                // console.log('tr', tr);
            }
        }
    }

    function renderInput(targetDiv) {
        const div = document.createElement('div');
        targetDiv.appendChild(div);
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('value', state.lastCommand);
        div.appendChild(input);
        const button = document.createElement('button');
        div.appendChild(button);
        const label = document.createTextNode('Execute');
        button.appendChild(label);
        button.addEventListener('click', function () {
            state.lastCommand = input.value;
            executeCommand(state.lastCommand);
        });
    }

    function render() {
        const target = document.getElementById('target');
        target.innerHTML = '';
        renderBoard(target);
        renderInput(target);
    }

function move() {
    let x = state.robot.x;
    let y = state.robot.y;
    const dir = state.robot.dir;

    switch (dir) {
        case 'up':
            y = (y < state.board.length - 1) ? y + 1 : y;
            break;
        case 'down':
            y = (y > 0) ? y - 1 : 0;
            break;
        case 'left':
            x = (x > 0) ? x - 1 : 0;
            break;
        case 'right':
            x = (x < state.board[y].length - 1) ? x + 1 : x;
            break;
        default:
            console.log('Huh?', dir);
    }

    const targetContents = state.board[y][x];
    if (targetContents === '.' || targetContents === 'F') {
        state.board[state.robot.y][state.robot.x] = trailIndicators[state.robot.dir];
        state.robot.x = x;
        state.robot.y = y;
        state.board[y][x] = 'R';
        if (targetContents === 'F') {
            state.flagReached = true;
        }
    } else {
        console.log('Bumped into', targetContents);
    }

    state.moves += 1;

    render();
}

    function turn(turnDirection) {
        if (turnDirection !== 'left' && turnDirection !== 'right') {
            console.log('Unknown direction:', turnDirection);
            return;
        }
        switch (state.robot.dir) {
            case 'up':
                if (turnDirection === 'left') {
                    state.robot.dir = 'left';
                } else {
                    state.robot.dir = 'right';
                }
                break;
            case 'down':
                if (turnDirection === 'left') {
                    state.robot.dir = 'right';
                } else {
                    state.robot.dir = 'left';
                }
                break;
            case 'left':
                if (turnDirection === 'left') {
                    state.robot.dir = 'down';
                } else {
                    state.robot.dir = 'up';
                }
                break;
            case 'right':
                if (turnDirection === 'left') {
                    state.robot.dir = 'up';
                } else {
                    state.robot.dir = 'down';
                }
                break;
            default:
                console.log('unknown robot direction:', state.robot.dir);
        }

    }

    function executeCommand(command) {
        switch (command) {
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
                console.log('ignoring invalid command:', command)
        }
    }

    render();

    // move();
    // turn('right');
    // move();
    // move();
    // move();
    // turn('left');
    // move();
    // move();
})();