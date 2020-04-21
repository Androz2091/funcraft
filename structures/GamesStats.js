const ms = require("human-ms")

module.exports = class GamesStats {

    constructor($, period){

        const psi = $(".player-stats-info")
        let d, r

        if (['month', 'last', 'lastMonth', '1', 'true'].includes(period)) {
            d = '.children[5].children[1].children[0].data'
            r = '.children[5].children[1].children[1].children[0].data'
        } else {
            d = '.children[3].children[0].data'
            r = '.children[3].children[1].children[0].data'
        }

        const path = (obj, path) => path.replace(/\[|]\.?/g, '.').split('.').filter(s => s).reduce((acc, val) => acc && acc[val], obj)

        const c = num => num.replace(/ /g,'')

        const gameStats = (stats, gt, kc, dc) => ({
            points: parseInt(c(path(stats.children[5], d))) || 0,
            gameCount: parseInt(c(path(stats.children[7], d))) || 0,
            victoryCount: parseInt(c(path(stats.children[9], d))) || 0,
            defeatCount: parseInt(c(path(stats.children[11], d))) || 0,
            gameTime: ms(path(stats.children[gt], d)) || 0,
            killCount: parseInt(c(path(stats.children[kc], d))) || 0,
            deathCount: parseInt(c(path(stats.children[dc], d))) || 0,
            kd: parseInt((c(path(stats.children[kc], d)) / c(path(stats.children[dc], d)))*100) || 0,
            wl: parseInt((c(path(stats.children[9], d)) / c(path(stats.children[11], d)))*100) || 0,
            winRate: parseInt((c(path(stats.children[9], d)) / c(path(stats.children[7], d)))*100) || 0,
        })

        const rank = stats => {
            if(!isNaN(parseInt(path(stats.children[3], d)))) return parseInt(path(stats.children[3], d))
            else {
                if (isNaN(parseInt(path(stats.children[3], r)))) return 0
                return parseInt(path(stats.children[3], r))
            }
        }

        this.rush = gameStats(psi.get(0), 13, 15, 17)
        this.rush.rank = rank(psi.get(0)) || 0
        this.rush.destroyedBedCount = parseInt(c(path(psi.get(0).children[19], d))) || 0
        this.hikaBrain = gameStats(psi.get(1), 13, 15, 17)
        this.hikaBrain.rank = rank(psi.get(1)) || 0
        this.skyWars = gameStats(psi.get(2), 11, 13, 15)
        this.skyWars.rank = rank(psi.get(2)) || 0
        this.skyWars.defeatCount = this.skyWars.gameCount - this.skyWars.victoryCount || 0
        this.skyWars.wl = parseInt((this.rush.victoryCount / this.rush.defeatCount || 0)*100) || 0
        this.octogone = gameStats(psi.get(3), 11, 13, 15)
        this.octogone.rank = rank(psi.get(3)) || 0
        this.octogone.damageCount = parseInt(path(psi.get(3).children[17], d)) || 0
        this.octogone.defeatCount = this.octogone.gameCount - this.octogone.victoryCount || 0
        this.octogone.wl = parseInt((this.rush.victoryCount / this.rush.defeatCount || 0)*100) || 0
        this.shootCraft = gameStats(psi.get(4), 11, 13, 15)
        this.shootCraft.rank = rank(psi.get(4)) || 0
        this.shootCraft.defeatCount = this.shootCraft.gameCount - this.shootCraft.victoryCount || 0
        this.shootCraft.wl = parseInt((this.rush.victoryCount / this.rush.defeatCount || 0)*100) || 0
        this.infecte = gameStats(psi.get(5), 11, 13, 15)
        this.infecte.rank = rank(psi.get(5)) || 0
        this.infecte.defeatCount = this.infecte.gameCount - this.infecte.victoryCount || 0
        this.infecte.wl = parseInt((this.rush.victoryCount / this.rush.defeatCount || 0)*100) || 0
        this.survival = gameStats(psi.get(6), 11, 13, 15)
        this.survival.rank = rank(psi.get(6)) || 0
        this.survival.defeatCount = this.survival.gameCount - this.survival.victoryCount || 0
        this.survival.wl = parseInt((this.rush.victoryCount / this.rush.defeatCount || 0)*100) || 0
        this.blitz = gameStats(psi.get(7), 13, 15, 17)
        this.blitz.rank = rank(psi.get(7)) || 0
        this.blitz.nexusDamageCount= parseInt(c(path(psi.get(7).children[19], d))) || 0
        this.PvPSmash = gameStats(psi.get(8), 11, 13, 15)
        this.PvPSmash.rank = rank(psi.get(8)) || 0
        this.PvPSmash.damageCount = parseInt(c(path(psi.get(8).children[17], d))) || 0
        this.PvPSmash.defeatCount = this.PvPSmash.gameCount - this.PvPSmash.victoryCount || 0
        this.PvPSmash.wl = parseInt((this.rush.victoryCount / this.rush.defeatCount || 0)*100) || 0
        this.landRush = gameStats(psi.get(9), 13, 15, 17)
        this.landRush.rank = rank(psi.get(9)) || 0
        this.landRush.destroyedBedCount = parseInt(c(path(psi.get(9).children[19], d))) || 0

    }

}
