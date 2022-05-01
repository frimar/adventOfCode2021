var testInput =
    [3, 4, 3, 1, 2];

var realInput =
    [4, 3, 3, 5, 4, 1, 2, 1, 3, 1, 1, 1, 1, 1, 2, 4, 1, 3, 3, 1, 1, 1, 1, 2, 3, 1, 1, 1, 4, 1, 1, 2, 1, 2, 2, 1, 1, 1, 1, 1, 5, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 5, 1, 4, 2, 1, 1, 2, 1, 3, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 3, 2, 2, 3, 1, 1, 1, 4, 1, 1, 1, 1, 5, 1, 1, 1, 5, 1, 1, 3, 1, 1, 2, 4, 1, 1, 3, 2, 4, 1, 1, 1, 1, 1, 5, 5, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 3, 2, 1, 1, 5, 1, 1, 1, 1, 1, 1, 1, 5, 4, 1, 5, 1, 3, 4, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 1, 2, 3, 5, 1, 1, 1, 1, 3, 5, 1, 1, 1, 2, 1, 1, 4, 1, 1, 5, 1, 4, 1, 2, 1, 3, 1, 5, 1, 4, 3, 1, 3, 2, 1, 1, 1, 2, 2, 1, 1, 1, 1, 4, 5, 1, 1, 1, 1, 1, 3, 1, 3, 4, 1, 1, 4, 1, 1, 3, 1, 3, 1, 1, 4, 5, 4, 3, 2, 5, 1, 1, 1, 1, 1, 1, 2, 1, 5, 2, 5, 3, 1, 1, 1, 1, 1, 3, 1, 1, 1, 1, 5, 1, 2, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 3, 3, 1, 1, 5, 1, 3, 5, 5, 1, 1, 1, 2, 1, 2, 1, 5, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1];

var expectedResult =
    ``;


function processSwarm(allFish) {
    let tmp = allFish[0];
    allFish[0] = allFish[1];
    allFish[1] = allFish[2];
    allFish[2] = allFish[3];
    allFish[3] = allFish[4];
    allFish[4] = allFish[5];
    allFish[5] = allFish[6];
    allFish[6] = allFish[7] + tmp;
    allFish[7] = allFish[8];
    allFish[8] = tmp;
    return allFish;
    // for (let index = 0; index < swarm.length; index++) {
    //     if (swarm[index] == 0) {
    //         swarm[index] = 6;
    //         swarm.push(9);
    //     } else {
    //         swarm[index] = swarm[index] - 1;
    //     }
    // }
    // return swarm;
}

// var initialField;
// var arraySize = 1000;

function solve(lanternFish, days) {

    let allFish = [];

    for (let index = 0; index < 9; index++) {
        allFish[index] = lanternFish.filter(fish => fish == index).length;
    }
    // let newSwarm = lanternFish;
    // console.log('Initial state: ', lanternFish);
    for (let index = 0; index < days; index++) {
        processSwarm(allFish);
        // console.log('After ', index + 1, ' days:', newSwarm.join(','));
    }
    return allFish.reduce((partialSum, a) => partialSum + a, 0);
}


var assert = require('assert');
describe('testMySolution', function () {
    it('Beispiele', function () {
        assert.equal(solve(testInput, 18), 26);
        assert.equal(solve(testInput, 256), 26984457539);
        console.log(solve(realInput, 256));
    });
});
