module.exports = class Leaderboard {

    constructor($){

        const gameCount = $(".name").length;

        for(let i = 0; i < gameCount; i++){
            const game = {
                username: $(".name").get(i).children[0].data.trim(),
                avatar: $(".head").get(i).children[1].attribs.src
            };
            const gameName = $(".spodium").get(i).attribs.class.split("ulbg-")[1];
            this[gameName] = game;
        }
    }

}
