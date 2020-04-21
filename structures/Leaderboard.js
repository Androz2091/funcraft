module.exports = class Leaderboard {

    constructor($){

        const lb = []
        for (let i = 1; i <= 200; i += 2) {
            lb.push($("tbody").get(0).children[i].children[3].children[1].children[0].data.trim())
        }
        this.lb = lb

    }

}
