var testInput =
    `0, 9 -> 5, 9
8, 0 -> 0, 8
9, 4 -> 3, 4
2, 2 -> 2, 1
7, 0 -> 7, 4
6, 4 -> 2, 0
0, 9 -> 2, 9
3, 4 -> 1, 4
0, 0 -> 8, 8
5, 5 -> 8, 2`;

var expectedResult =
    `.......1..
..1....1..
..1....1..
.......1..
.112111211
..........
..........
..........
..........
222111....`;


function initBoard(board) {
    for (let index = 0; index < board.length; index++) {
        const element = board[index];
        board[index] = {
            value: element,
            checked: false
        }
    }
}

function markBoardWithNumber(board, m) {
    for (let index = 0; index < board.length; index++) {
        const element = board[index].value;
        if (element == m) {
            board[index].checked = true;
        }
    }
}

function checkBingo(board) {

    var score = 0;

    for (let i = 0; i < 5; i++) {
        // get row i:
        var result = board.filter((value, index) => (index >= i * 5 && index < (i + 1) * 5));

        var tmpArray = result.filter((elem) => elem.checked == true);
        if (tmpArray.length == 5) {
            return getScore(board);
        }

        // get columnf i:
        result = board.filter((value, index) => (index % 5 == i));

        tmpArray = result.filter((elem) => elem.checked == true);
        if (tmpArray.length == 5) {
            return getScore(board);
        }

    }
    return 0;
}
function getScore(board) {
    var score = board.reduce(function (accumVariable, curValue) {
        if (curValue.checked) {
            return accumVariable;
        } else {
            return accumVariable + curValue.value;
        }
    }, 0);

    return score;
}

function processVent(vent) {
    var points = vent.split(' -> ');
    var startPoint = points[0];
    var endPoint = points[1];
    var x1 = parseInt(startPoint.split(', ')[0]);
    var y1 = parseInt(startPoint.split(', ')[1]);
    var x2 = parseInt(endPoint.split(', ')[0]);
    var y2 = parseInt(endPoint.split(', ')[1]);

    var xMin = Math.min(x1, x2);
    var xMax = Math.max(x1, x2);
    var yMin = Math.min(y1, y2);
    var yMax = Math.max(y1, y2);

    if (xMin == xMax) {
        for (let yValue = yMin; yValue < yMax; yValue++) {
            initialField[yValue][xMin] = initialField[yValue][xMin] + 1;
        }
    } else if (yMin == yMax) {
        for (let xValue = xMin; xValue < xMax; xValue++) {
            initialField[yMin][xValue] = initialField[yMin][xValue] + 1;
        }
    } else {
        // ignore for now
    }
}

var rowSize = 10;
var initialField;
function solve(ventsUnderTest) {

    var vents = ventsUnderTest.split(/\n/);
    console.log(vents);
    var rows = columns = vents.length;
    initialField = new Array(rows).fill(new Array(columns).fill(0));

    for (let index = 0; index < rows; index++) {
        const vent = vents[index];
        processVent(vent);
    }


    console.log(initialField);
    console.log('----------------------');
    console.log(initialField.join('').replace(/,/g, ''));
    return;

    var result = 0;


    for (let index = 0; index < boardsUnderTest.length; index++) {
        initBoard(boardsUnderTest[index]);
        possibleBoards.add(index);
    }
    for (let index = 0; index < numbers.length; index++) {
        var m = numbers[index];

        for (let boardIndex = 0; boardIndex < boardsUnderTest.length; boardIndex++) {
            var board = boardsUnderTest[boardIndex];

            if (possibleBoards.has(boardIndex) == true) {
                // only execute if board hasn't been identified as winner yet.

                markBoardWithNumber(board, m);

                result = checkBingo(board, possibleBoards);
                if (result != 0) {

                    if (possibleBoards.size == 1) {
                        var resultIndex = Array.from(possibleBoards.entries())[0][1];
                        return m * getScore(boardsUnderTest[resultIndex]);
                    }
                    possibleBoards.delete(boardIndex);
                }
            } else {
            }
        }
    }
    return 0;
}

var assert = require('assert');
describe('testMySolution', function () {
    it('Beispiele', function () {
        assert.equal(solve(testInput), expectedResult);
        // console.log(solve(realInput));
    });
});
