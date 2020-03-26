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
        this.banned = Boolean($(".player-alert").get(0));

        this.gloryCount = parseInt($(".info-stats").get(0).children[1].children[2].data.trim().split(" Gloires")[0].split(" ").join(""));
        this.totalgameCount = parseInt($(".info-stats").get(0).children[3].children[0].data.trim().split(" ")[0]);

        this.rush = new RushStats($);
        this.hikaBrain = new HikaBrainStats($);
        this.skywars = new SkywarsStats($);
        this.octogone = new OctogoneStats($);
        this.shootCraft = new ShootCraftStats($);
        this.infecte = new InfecteStats($);
        this.survival = new SurvivalStats($);
        this.blitz = new BlitzStats($);
        this.PvPSmash = new PvPSmashStats($);
        this.landRush = new LandRushStats($);
    }

    get totalPoint() {
        return this.rush.points
        + this.hikaBrain.points
        + this.skywars.points
        + this.octogone.points
        + this.shootCraft.points
        + this.infecte.points
        + this.survival.points
        + this.blitz.points
        + this.PvPSmash.points
        + this.landRush.points;
    }

    get totalWin() {
        return this.rush.victoryCount
        + this.hikaBrain.victoryCount
        + this.skywars.top1Count
        + this.octogone.top1Count
        + this.shootCraft.top1Count
        + this.infecte.victoryCount
        + this.survival.top1Count
        + this.blitz.victoryCount
        + this.PvPSmash.top1Count
        + this.landRush.victoryCount;
    }

    get totalDefeat() {
        return this.rush.defeatCount
        + this.hikaBrain.defeatCount
        + this.skywars.defeatCount
        + this.octogone.defeatCount
        + this.shootCraft.defeatCount
        + this.infecte.defeatCount
        + this.survival.defeatCount
        + this.blitz.defeatCount
        + this.PvPSmash.defeatCount
        + this.landRush.defeatCount;
    }

    get totalGameTime() {
        return this.rush.gameTime
        + this.hikaBrain.gameTime
        + this.skywars.gameTime
        + this.octogone.gameTime
        + this.shootCraft.gameTime
        + this.infecte.gameTime
        + this.survival.gameTime
        + this.blitz.gameTime
        + this.PvPSmash.gameTime
        + this.landRush.gameTime;
    }

    get totalKill() {
        return this.rush.killCount
        + this.hikaBrain.killCount
        + this.skywars.killCount
        + this.octogone.killCount
        + this.shootCraft.killCount
        + this.infecte.killCount
        + this.survival.killCount
        + this.blitz.killCount
        + this.PvPSmash.killCount
        + this.landRush.killCount;
    }

    get totalDeath() {
        return this.rush.deathCount
        + this.hikaBrain.defeatCount
        + this.skywars.deathCount
        + this.octogone.deathCount
        + this.shootCraft.deathCount
        + this.infecte.deathCount
        + this.survival.deathCount
        + this.blitz.deathCount
        + this.PvPSmash.deathCount
        + this.landRush.deathCount;
    }

};
