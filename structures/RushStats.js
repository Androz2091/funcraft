const ms = require("human-ms");

module.exports = class RushStats {

    constructor($){
        
        const stats = $(".player-stats-info").get(0);

        this.points = parseInt(stats.children[5].children[3].children[0].data.split(" ").join("")) || null;
        this.gameCount = parseInt(stats.children[7].children[3].children[0].data.split(" ").join("")) || null;
        this.victoryCount = parseInt(stats.children[9].children[3].children[0].data.split(" ").join("")) || null;
        this.defeatCount = parseInt(stats.children[11].children[3].children[0].data.split(" ").join("")) || null;
        this.gameTime = ms(stats.children[13].children[3].children[0].data) || null;
        this.killCount = parseInt(stats.children[15].children[3].children[0].data.split(" ").join("")) || null;
        this.deathCount = parseInt(stats.children[17].children[3].children[0].data.split(" ").join("")) || null;
        this.destroyedBedCount = parseInt(stats.children[19].children[3].children[0].data.split(" ").join("")) || null;

    }

};
