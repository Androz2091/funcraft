# Funcraft Scraper

## Installation

```sh
npm install --save funcraft
```

## Exemple

```js
const funcraft = require("funcraft");

// Obtenir les stats d'un joueur
funcraft.fetchPlayer("Saethyios").then((player) => {
    console.log(player.gameCount); // 4935
    console.log(player.rush.victoryCount); // 158
});

// Obtenir le classement des meilleurs joueurs pour chaque jeu
funcraft.fetchLeaderboard().then((leaderboard) => {
    console.log(leaderboard.rush.username); // Awekooo
    console.log(leaderboard.rush.avatar); // https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Awekooo/s/949f03f1d349208300be546a58d488c8a65f477a
});

// Obtenir le nombre de joueurs en ligne
funcraft.fetchPlayerCounts().then((counts) => {
    console.log(counts.totalOnline); // 2636
    console.log(counts.rush); // 428
});
```

## Méthodes

### Récupération des statistiques d'un joueur

```js
const funcraft = require("funcraft");

// Obtenir les stats de Saethyios
funcraft.fetchPlayer("Saethyios").then((player) => {
    console.log(player);
    /*
    {
        username: 'Saethyios',
        avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Saethyios/m2/f6484bb54772cbfe93f4afab68a0d4cc35a8dd6c',
        registeredAt: '19 juin 2019, 19h33',
        lastConnection: '12 mars 2020, 18h32',
        banned: true,
        gloryCount: 447827,
        gameCount: 4935,
        totalGameTime: 777660000,
        rush: {
            points: 123473,
            gameCount: 321,
            victoryCount: 158,
            defeatCount: 163,
            wl: 0.9,
            gameTime: 225660000,
            killCount: 1868,
            deathCount: 2443,
            kd: 0.8,
            destroyedBedCount: 311,
            rank: 82903,
            winRate: 90
        },
        skywars {
            points: 129036,
            gameCount: 2949,
            top1Count: 600,
            defeatCount: 2340,
            wl: 0.2,
            gameTime: 343680000,
            killCount: 4305,
            deathCount: 2406,
            kd: 1.9,
            rank: 0,
            winRate: 20
        },
        hikaBrain: {
            points: 24251,
            gameCount: 198,
            victoryCount: 109,
            defeatCount: 89,
            wl: 1.3,
            gameTime: 48660000,
            killCount: 2711,
            deathCount: 3044,
            kd: 0.9,
            rank: 0,
            winRate: 50
        },
        octogone: {
            points: 5362,
            gameCount: 82,
            top1Count: 10,
            defeatCount: 72,
            gameTime: 10140000,
            killCount: 96,
            deathCount: 72,
            kd: 1.2,
            damageCount: 3776,
            rank: 0
        },
        blitz: {
            points: 554,
            gameCount: 6,
            victoryCount: 4,
            defeatCount: 2,
            wl: 2,
            gameTime: 1260000,
            killCount: 9,
            deathCount: 12,
            kd: 0.9,
            nexusDamageCount: 3,
            rank: 0
        },
        shootCraft: {
            points: 160,
            gameCount: 4,
            top1Count: 0,
            defeatCount: 4
            wl: 0,
            gameTime: 1140000,
            killCount: 74,
            deathCount: 107,
            kd: 0.7,
            rank: 0
        },
        infecte: {
            points: 73,
            gameCount: 8,
            victoryCount: 0,
            defeatCount: 8,
            wl: 0,
            gameTime: 1380000,
            killCount: 10,
            deathCount: 13,
            kd: 0.9,
            rank: 0
        },
        survival: {
            points: 0,
            gameCount: 0,
            top1Count: 0,
            defeatCount: 0,
            gameTime: 0,
            killCount: 0,
            deathCount: 0,
            kd: 0,
            rank: 0
        },
        blitz: {
            points: 554,
            gameCount: 6,
            victoryCount: 4,
            defeatCount: 2,
            gameTime: 1260000,
            killCount: 9,
            deathCount: 12,
            nexusDamageCount: 3,
            rank: 0
        },
        PvPSmash: {
            points: 36249,
            gameCount: 1367,
            top1Count: 128,
            defeatCount: 1239,
            wl: 0.1,
            gameTime: 35880000,
            killCount: 1814,
            deathCount: 1228,
            kd: 1.4,
            damageCount: 64263,
            rank: 0
        },
        landRush: {
            points: 0,
            gameCount: 0,
            victoryCount: 0,
            defeatCount: 0,
            wl: 0,
            gameTime: 0,
            killCount: 0,
            deathCount: 0,
            ld: 0,
            destroyedBedCount: 0,
            rank: 0
        }
    }
    */
});
```

### Récupération des premiers membres de chaque jeu

```js
const funcraft = require("funcraft");

funcraft.fetchLeaderboard().then((leaderboard) => {
    console.log(leaderboard);
    /*
    {
        rush: {
            username: 'Awekooo',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Awekooo/s/949f03f1d349208300be546a58d488c8a65f477a'
        },
        hikabrain: {
            username: 'XeRRoX_',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/XeRRoX_/s/d87127aa9c55ddf7c8bf2b6bedaedfc4673b7f3e'
        },
        skywars: {
            username: 'Aymerouz',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Aymerouz/s/1e8b7d3db8b69ba247c800e0ea2ac14b33b50e94'
        },
        mma: {
            username: 'TSEW',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/TSEW/s/b06f8bba3cf0a60356c714adae5faaa9aab20d92'
        },
        shootcraft: {
            username: 'Welard_Manitou',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Welard_Manitou/s/470103adb29913f8058aeca7684c76b15a385e8b'
        },
        infected: {
            username: 'sweeetener',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/sweeetener/s/703a006a040646ead78368a903296181fe49e620'
        },
        survival: {
            username: '100dewinrateenhg',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/100dewinrateenhg/s/d18bd2cf8a4dd9d6baf8fcc33c35880cf3c8439e'
        },
        blitz: {
            username: 'CaVaEtreToutNoir',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/CaVaEtreToutNoir/s/44f8470780a5b22f11c0771ae9263940e256cb24'
        },
        pvpsmash: {
            username: 'atakee',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/atakee/s/8ebf1b61e2534a7fef7de6e3e397bde765ede1ce'
        },
        landrush: {
            username: 'OvD3_Nightmare',
            avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/OvD3_Nightmare/s/91559b230da165ca54e870136e15da324c20a983'
        }
    }
    */
});
```

### Récupération des nombres de joueurs

```js
const funcraft = require("funcraft");

funcraft.fetchPlayerCounts().then((counts) => {
    console.log(counts);
    /*
    {
        totalOnline: 2636,
        recordPlayerOnline: 18124,
        registeredPlayers: 1618964,
        premiumUsers: 702277,
        nonPremiumUsers: 916687,
        freecube: 478,
        rush: 428,
        hikabrain: 405,
        skywars: 304,
        infecte: 35,
        others: 986
    }
    */
});
```
