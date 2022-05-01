var testInput =
    [3, 4, 3, 1, 2];

var realInput =
    [4, 3, 3, 5, 4, 1, 2, 1, 3, 1, 1, 1, 1, 1, 2, 4, 1, 3, 3, 1, 1, 1, 1, 2, 3, 1, 1, 1, 4, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 4, 2, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 3, 2, 2, 3, 1, 1, 1, 4, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 3, 1, 1, 2, 4, 1, 1, 3, 2, 4, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 3, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 4, 1, 5, 1, 3, 4, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 3, 5, 1, 1, 1, 1, 3, 5, 1, 1, 1, 2, 1, 1, 4, 1, 1, 5, 1, 4, 1, 2, 1, 3, 1, 5, 1, 4, 3, 1, 3, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 3, 1, 3, 4, 1, 1, 4, 1, 1, 3, 1, 3, 1, 1, 4, 5, 4, 3, 2, 5, 1, 1, 1, 1, 1, 1, 2, 1, 5, 2, 5, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 5, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 5, 1, 3, 5, 5, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1];

var expectedResult =
    ``;


function processSwarm(swarm) {
    let newArray = [];
    for (let index = 0; index < swarm.length; index++) {
        if (swarm[index] == 0) {
            newArray.push(6);
            newArray.push(8);
        } else {
            newArray.push(swarm[index] - 1);
        }
    }
    return newArray;
}

// var initialField;
// var arraySize = 1000;

function solve(lanternFish, days) {

    let newSwarm = lanternFish;
    // console.log('Initial state: ', lanternFish);
    for (let index = 0; index < days; index++) {
        newSwarm = processSwarm(newSwarm);
        // console.log('After ', index + 1, ' days:', newSwarm.join(','));
    }
    return newSwarm.length;
}


var assert = require('assert');
describe('testMySolution', function () {
    it('Beispiele', function () {
        assert.equal(solve(testInput, 18), 26);
        console.log(solve(realInput, 80));
    });
});
