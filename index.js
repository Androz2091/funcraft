const fetch = require("node-fetch");
const cheerio = require("cheerio");

const Player = require("./structures/Player");
const Leaderboard = require("./structures/Leaderboard");

const baseURL = "https://www.funcraft.net/fr/";

module.exports = {

    fetchPlayer: (username) => {
        return new Promise(async (resolve, reject) => {
            const url = `${baseURL}joueurs?q=${username}`;
            const res = await fetch(url);
            const content = await res.text();
            const $ = cheerio.load(content);
            const error = $(".alert-danger").get(0);
            if(!error) resolve(new Player($));
                else reject("Player not found.");
        });
    },

    fetchLeaderboard: () => {
        return new Promise(async (resolve) => {
            const url = `${baseURL}classement`;
            const res = await fetch(url);
            const content = await res.text();
            const $ = cheerio.load(content);
            resolve(new Leaderboard($));
        });
    }

};