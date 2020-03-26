const parsePlayerCount = (data) => {
    return parseInt(data.split("joueurs")[0].trim().split(" ").join(""));
};

module.exports = class PlayerCounts {

    constructor($){
        const globalCounts = $(".funhead-stats-toggler");
        this.totalOnline = parsePlayerCount(globalCounts.get(0).children[1].children[0].data);
        this.recordPlayerOnline = parsePlayerCount(globalCounts.get(0).children[3].children[1].children[3].children[0].data);
        this.registeredPlayers = parsePlayerCount(globalCounts.get(0).children[3].children[3].children[3].children[0].data);
        this.premiumUsers = parsePlayerCount(globalCounts.get(0).children[3].children[5].children[3].children[0].data);
        this.nonPremiumUsers = parsePlayerCount(globalCounts.get(0).children[3].children[7].children[3].children[0].data);

        const gameCounts = $(".game-status");
        this.freecube = parsePlayerCount(gameCounts.get(0).children[0].data);
        this.rush = parsePlayerCount(gameCounts.get(1).children[0].data);
        this.hikabrain = parsePlayerCount(gameCounts.get(2).children[0].data);
        this.skywars = parsePlayerCount(gameCounts.get(3).children[0].data);
        this.infecte = parsePlayerCount(gameCounts.get(4).children[0].data);
        this.others = parsePlayerCount(gameCounts.get(5).children[0].data);
    }

}
