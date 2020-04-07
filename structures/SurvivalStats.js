const ms = require("human-ms");

module.exports = class SurvivalStats {

    constructor($, period){

        const stats = $(".player-stats-info").get(6);
        let d, r;

        Object.byString = (beg, end) => {
            end = end.replace(/\[(\w+)]/g, '.$1');
            for (let i = 0; i < end.split(".").length; ++i)
                if (end.split(".")[i] in beg) beg = beg[end.split(".")[i]];
            return beg.replace(/ /g,'');
        };

        if (['month', 'last', 'lastMonth', '1', 'true'].includes(period)) {
            d = '.children[5].children[1].children[0].data';
            r = '.children[5].children[1].children[1].children[0].data';
        } else {
            d = '.children[3].children[0].data';
            r = '.children[3].children[1].children[0].data';
        }

        if(!isNaN(parseInt(Object.byString(stats.children[3], d)))) this.rank = parseInt(Object.byString(stats.children[3], d));
        else this.rank = parseInt(Object.byString(stats.children[3], r));
        if (isNaN(this.rank)) this.rank = 0;
        this.points = parseInt(Object.byString(stats.children[5], d)) || 0;
        this.gameCount = parseInt(Object.byString(stats.children[7], d)) || 0;
        this.top1Count = parseInt(Object.byString(stats.children[9], d)) || 0;
        this.gameTime = ms(Object.byString(stats.children[11], d)) || 0;
        this.killCount = parseInt(Object.byString(stats.children[13], d)) || 0;
        this.deathCount = parseInt(Object.byString(stats.children[15], d)) || 0;

    }

    get kd() {
        return (parseFloat(this.killCount / this.deathCount) || 0).toFixed(2);
    }
    
    get wl() {
        return (parseFloat(this.top1Count / this.defeatCount) || 0).toFixed(2);
    }
      
    get defeatCount() {
        return parseInt(this.gameCount - this.top1Count) || 0;
    }

    get winRate() {
        return (parseFloat(this.top1Count / this.gameCount * 100 || 0)).toFixed(2);
    }

};
