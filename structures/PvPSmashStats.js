const ms = require("human-ms");
let stats;

module.exports = class PvPSmashStats {

    constructor($){

        stats = $(".player-stats-info").get(8);

        this.points = parseInt(stats.children[5].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameCount = parseInt(stats.children[7].children[3].children[0].data.split(" ").join("")) || 0;
        this.top1Count = parseInt(stats.children[9].children[3].children[0].data.split(" ").join("")) || 0;
        this.gameTime = ms(stats.children[11].children[3].children[0].data) || 0;
        this.killCount = parseInt(stats.children[13].children[3].children[0].data.split(" ").join("")) || 0;
        this.deathCount = parseInt(stats.children[15].children[3].children[0].data.split(" ").join("")) || 0;
        this.damageCount = parseInt(stats.children[17].children[3].children[0].data.split(" ").join(" ")) || 0;

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
        return (parseFloat(this.victoryCount / this.defeatCount) || 0).toFixed(2);
    }
      
    get defeatCount() {
        return parseInt(this.gameCount - this.top1Count) || 0;
    }

};
