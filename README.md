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

// Obtenir le top 100 du Blitz
funcraft.fetchLeaderboard(blitz).then((leaderboard) => {
    console.log(leaderboard.lb[76]); // _Hunam
    console.log(leaderboard).lb[0]; // ErwiX
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

### Récupération du top 100 du jeu choisi

```js
const funcraft = require("funcraft");

// Obtenir le top 100 du Blitz
funcraft.fetchLeaderboard("blitz").then((leaderboard) => {
    console.log(leaderboard);
    /*
    {

        lb: [
            'ErwiX',
            'PrinceZoulette',
            'anto3441',
            'Eriko0711',
            'leboss_974',
            'MacCraft',
            'Akito_o',
            'enzobds',
            'Ice_Infinity',
            'Icxe',
            'Sauron974',
            'LeReglement',
            'nasgoz',
            'RestezChezVous',
            'galatasaray03',
            'Dabra',
            'VeustyElFranco',
            'NasgozLeBest',
            '_Iraky',
            'Dahnico1',
            'CaLiLaX',
            'UnCaCa44',
            'Lun4rd11',
            'WaSaX',
            'MickeyMouseYT',
            'Mastokeut',
            'loukaloret',
            'MathildeMyBae',
            'CaptainRoshi',
            'Alpha___a',
            'SonicJoestar',
            'TrapLex_',
            'LiberTume',
            'alexandre911544',
            'Quenlbg34',
            'DeydeyLeBegey',
            'Neytei',
            'youri976976',
            'ForgedCarbon',
            'LaSauceSalade_',
            'the_adventurer07',
            'keithcool1',
            'xSnowZ_',
            'Optifine_HD_U_B6',
            'MaZe_',
            'NARUGOZEBI',
            'qwerty55',
            'NeyVii',
            'TheVitOne',
            'CocoLaGazelle',
            '_Cupidon',
            'noyabuo',
            'Gennesi',
            'Scheefti',
            'scavanger_armor',
            'Mr_Caticat',
            'Dark_',
            'mafiosa',
            'SvN',
            'Burrrrrrrito',
            'Zold_g111',
            'Xeleft',
            '___Aiden___',
            'Tropic_ALL',
            'SkyNova_',
            'Cesarion_',
            'demon45',
            'jujoh',
            'ZozoInLove_PYV',
            'FaoW',
            'S1RON',
            'Yoddw',
            'Nutellol',
            'L1L13N',
            'SaiAv',
            'LordNeka',
            '_Hunam',
            'cypskrt',
            'Ayuchi_',
            'Darth_America9',
            'breizh76',
            'Mika4ever',
            'SXDIIK',
            'chelsea13',
            'TheFrenchBaker',
            'Herobryness',
            'xraydu60',
            'Capricorne587',
            'GravityOutburst',
            'Ironein',
            'GRZZI1',
            'RipouAkaLeClown',
            'DarkSword89',
            'PX_Dreygon',
            'SawPeez_',
            'JDTwins',
            'TypiqueBadPlayer',
            'Rkz21',
            'colorman',
            'combattant974'
        ]
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
