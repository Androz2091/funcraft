const ms = require("human-ms");

module.exports = class SurvivalStats {

    constructor($){

        const stats = $(".player-stats-info").get(6);

        this.points = parseInt(stats.children[5].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameCount = parseInt(stats.children[7].children[3].children[0].data.split(" ").join("")) || 0;
        this.top1Count = parseInt(stats.children[9].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameTime = ms(stats.children[11].children[3].children[0].data) || 0;
        this.killCount = parseInt(stats.children[13].children[3].children[0].data.split(" ").join("")) || 0;
        this.deathCount = parseInt(stats.children[15].children[3].children[0].data.split(" ").join("")) || 0;

    }

};
