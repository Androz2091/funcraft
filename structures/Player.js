const GameStats = require("./GamesStats")

module.exports = class Player {

    constructor($, period){

        const playerName = $(".playername").get(0)

        this.username = $("ol.breadcrumb").get(0).children[5].children[0].data.trim()
        this.avatar = $("img").get(1).attribs.src
        if (['Admin', 'Joueur', 'SuperModo', 'Modo', 'Helper', 'Youtuber', 'Builder', 'Graphiste'].includes(playerName.children[1].children[0].data.trim().split(' ')[0])) {
            this.grade = playerName.children[1].children[0].data.trim().split(' ')[0]
        } else {
            let error
            try {
                playerName.children[1].children[2].data.trim()
            } catch (e) {
                if (e instanceof TypeError) {
                    this.grade = ''
                    for (let i = 1; i < playerName.children.length - 2; i++) this.grade += playerName.children[i].children[0].data
                    error = true
                }
            }
            if (!error) this.grade = playerName.children[1].children[2].data.trim()
        }

        this.registeredAt = $(".info-entry").get(0).children[3].attribs.title
        this.lastConnection = $(".info-entry").get(1).children[3].attribs.title
        this.banned = Boolean($(".player-alert").get(0))

        this.gloryCount = parseInt($(".info-stats").get(0).children[1].children[2].data.trim().split(" Gloires")[0].split(" ").join(""))
        this.totalGameCount = parseInt($(".info-stats").get(0).children[3].children[0].data.trim().split(" ")[0])

        this.rush = new GameStats($, period).rush
        this.hikaBrain = new GameStats($, period).hikaBrain
        this.skyWars = new GameStats($, period).skyWars
        this.octogone = new GameStats($, period).octogone
        this.shootCraft = new GameStats($, period).shootCraft
        this.infecte = new GameStats($, period).infecte
        this.survival = new GameStats($, period).survival
        this.blitz = new GameStats($, period).blitz
        this.PvPSmash = new GameStats($, period).PvPSmash
        this.landRush = new GameStats($, period).landRush

    }

    get totalPoint() {
        return this.rush.points
        + this.hikaBrain.points
        + this.skyWars.points
        + this.octogone.points
        + this.shootCraft.points
        + this.infecte.points
        + this.survival.points
        + this.blitz.points
        + this.PvPSmash.points
        + this.landRush.points
    }

    get totalWin() {
        return this.rush.victoryCount
        + this.hikaBrain.victoryCount
        + this.skyWars.victoryCount
        + this.octogone.victoryCount
        + this.shootCraft.victoryCount
        + this.infecte.victoryCount
        + this.survival.victoryCount
        + this.blitz.victoryCount
        + this.PvPSmash.victoryCount
        + this.landRush.victoryCount
    }

    get totalDefeat() {
        return this.rush.defeatCount
        + this.hikaBrain.defeatCount
        + this.skyWars.defeatCount
        + this.octogone.defeatCount
        + this.shootCraft.defeatCount
        + this.infecte.defeatCount
        + this.survival.defeatCount
        + this.blitz.defeatCount
        + this.PvPSmash.defeatCount
        + this.landRush.defeatCount
    }

    get totalGameTime() {
        return this.rush.gameTime
        + this.hikaBrain.gameTime
        + this.skyWars.gameTime
        + this.octogone.gameTime
        + this.shootCraft.gameTime
        + this.infecte.gameTime
        + this.survival.gameTime
        + this.blitz.gameTime
        + this.PvPSmash.gameTime
        + this.landRush.gameTime
    }

    get totalKill() {
        return this.rush.killCount
        + this.hikaBrain.killCount
        + this.skyWars.killCount
        + this.octogone.killCount
        + this.shootCraft.killCount
        + this.infecte.killCount
        + this.survival.killCount
        + this.blitz.killCount
        + this.PvPSmash.killCount
        + this.landRush.killCount
    }

    get totalDeath() {
        return this.rush.deathCount
        + this.hikaBrain.defeatCount
        + this.skyWars.deathCount
        + this.octogone.deathCount
        + this.shootCraft.deathCount
        + this.infecte.deathCount
        + this.survival.deathCount
        + this.blitz.deathCount
        + this.PvPSmash.deathCount
        + this.landRush.deathCount
    }

}
