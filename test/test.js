const assert = require('assert');
const funcraft = require('../');

describe('Player Stats', function () {
    it('should return a valid object', (done) => {
        funcraft.fetchPlayer('Awekooo', 'always').then((player) => {
            done();
        });
    });
});

describe('Leaderboard', function () {
    it('should return a valid array', (done) => {
        funcraft.fetchLeaderboard('blitz').then((leaderboard) => {
            done();
        });
    });
});

describe('Player Count', function () {
    it('should return a valid object', (done) => {
        funcraft.fetchPlayerCounts().then((counts) => {
            done();
        });
    });
});
