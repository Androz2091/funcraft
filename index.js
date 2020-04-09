const fetch = require("node-fetch");
const cheerio = require("cheerio");

const Player = require("./structures/Player");
const Leaderboard = require("./structures/Leaderboard");
const PlayerCounts = require("./structures/PlayerCounts");

const baseURL = "https://www.funcraft.net/fr/";

module.exports = {

    fetchPlayer: (username, period) => {
        return new Promise(async (resolve, reject) => {
            const url = `${baseURL}joueurs?q=${username}`;
            const res = await fetch(url);
            const content = await res.text();
            const $ = cheerio.load(content);
            const error = $(".alert-danger").get(0);
            if(!error) resolve(new Player($, period));
                else reject("Player not found.");
        });
    },

    fetchLeaderboard: (game,period = "/") => {
        return new Promise(async (resolve, reject) => {
            if(!["/","always"].includes(period)) reject("Period not found")
            const url = `${baseURL}classement/${game}/${period}`;
            const res = await fetch(url);
            const content = await res.text();
            const $ = cheerio.load(content);
            const error = $(".list-links").get(0);
            if (!error) resolve(new Leaderboard($));
                else reject("Game not found.");
        });
    },

    fetchPlayerCounts: () => {
        return new Promise(async (resolve) => {
            const url = `${baseURL}jeux`;
            const res = await fetch(url);
            const content = await res.text();
            const $ = cheerio.load(content);
            resolve(new PlayerCounts($));
        });
    }

};
