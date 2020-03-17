const RushStats = require("./RushStats");
const SkywarsStats = require("./SkywarsStats");
const HikaBrainStats = require("./HikaBrainStats");
const OctogoneStats = require("./OctogoneStats");

module.exports = class Player {

    constructor($){

        this.username = $("ol.breadcrumb").get(0).children[5].children[0].data.trim();

        this.avatar = $("img").get(1).attribs.src;

        this.registeredAt = $(".info-entry").get(0).children[3].attribs.title;
        this.lastConnection = $(".info-entry").get(1).children[3].attribs.title;

        this.gloryCount = parseInt($(".info-stats").get(0).children[1].children[2].data.trim().split(" Gloires")[0].split(" ").join(""));
        this.gameCount = parseInt($(".info-stats").get(0).children[3].children[0].data.trim().split(" ")[0]);

        this.banned = new Boolean($(".player-alert").get(0));

        this.rush = new RushStats($);
        this.skywars = new SkywarsStats($);
        this.hikaBrain = new HikaBrainStats($);
        this.octogone = new OctogoneStats($);
    }

}
