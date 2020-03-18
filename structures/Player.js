const RushStats = require("./RushStats");
const HikaBrainStats = require("./HikaBrainStats");
const SkywarsStats = require("./SkywarsStats");
const OctogoneStats = require("./OctogoneStats");
const ShootCraftStats = require("./ShootCraftStats");
const InfecteStats = require("./InfecteStats");
const SurvivalStats = require("./SurvivalStats");
const BlitzStats = require("./BlitzStats");
const PvPSmashStats = require("./PvPSmashStats");
const LandRushStats = require("./LandRushStats");

module.exports = class Player {

    constructor($){

        this.username = $("ol.breadcrumb").get(0).children[5].children[0].data.trim();

        this.avatar = $("img").get(1).attribs.src;

        this.registeredAt = $(".info-entry").get(0).children[3].attribs.title;
        this.lastConnection = $(".info-entry").get(1).children[3].attribs.title;

        this.gloryCount = parseInt($(".info-stats").get(0).children[1].children[2].data.trim().split(" Gloires")[0].split(" ").join(""));
        this.gameCount = parseInt($(".info-stats").get(0).children[3].children[0].data.trim().split(" ")[0]);

        this.banned = Boolean($(".player-alert").get(0));

        this.rush = new RushStats($);
        this.hikaBrain = new HikaBrainStats($);
        this.skywars = new SkywarsStats($);
        this.octogone = new OctogoneStats($);
        this.shootCraft = new ShootCraftStats($);
        this.infecte = new InfecteStats($);
        this.survival = new SurvivalStats($);
        this.blitz = new BlitzStats($);
        this.pvPSmash = new PvPSmashStats($);
        this.landRush = new LandRushStats($);
    }

}
