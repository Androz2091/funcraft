const ms = require("human-ms");
let stats;

module.exports = class InfecteStats {

    constructor($){

        stats = $(".player-stats-info").get(5);

        this.points = parseInt(stats.children[5].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameCount = parseInt(stats.children[7].children[3].children[0].data.split(" ").join("")) || 0;
        this.victoryCount = parseInt(stats.children[9].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameTime = ms(stats.children[11].children[3].children[0].data) || 0;
        this.killCount = parseInt(stats.children[13].children[3].children[0].data.split(" ").join("")) || 0;
        this.deathCount = parseInt(stats.children[15].children[3].children[0].data.split(" ").join("")) || 0;

    }

    get rank() {
        let issue = false;
        if (!isNaN(parseInt(stats.children[3].children[3].children[0].data))) {
            return parseInt(stats.children[3].children[3].children[0].data)
        } else {
            try {
                parseInt(stats.children[3].children[3].children[1].children[0].data);
            } catch (e) {
                if (e instanceof TypeError) {
                    issue = true;
                    return 0;
                }
            }
        }
        if (issue === false) return parseInt(stats.children[3].children[3].children[1].children[0].data);
    }

    get kd() {
        return (parseFloat(this.killCount / this.deathCount) || 0).toFixed(2);
    }

    get wl() {
        return (parseFloat(this.victoryCount / this.deathCount) || 0).toFixed(2);
    }

    get defeatCount() {
        return parseInt(this.gameCount - this.victoryCount) || 0;
    }

};
