# Funcraft Scraper

## Examples

```js
const funcraft = require("funcraft");

// Gets Saethyios stats
funcraft.fetchPlayer("Saethyios").then((player) => {
    console.log(player);
    /*
    {
        username: 'Saethyios',
        avatar: 'https://d31zb6ev5hmn3f.cloudfront.net/_u/avatar/head/Saethyios/m2/f6484bb54772cbfe93f4afab68a0d4cc35a8dd6c',
        registeredAt: '19 juin 2019, 19h33',
        lastConnection: '12 mars 2020, 18h32',
        gloryCount: 447827,
        gameCount: 4935,
        banned: true,
        rush: {
            points: 123473,
            gameCount: 321,
            victoryCount: 158,
            defeatCount: 163,
            gameTime: 225660000,
            killCount: 1868,
            deathCount: 2443,
            destroyedBedCount: 311
        },
        skywars {
            points: 129036,
            gameCount: 2949,
            top1Count: 600,
            gameTime: 343680000,
            killCount: 4305,
            deathCount: 2406
        },
        hikaBrain: {
            points: 24251,
            gameCount: 198,
            victoryCount: 109,
            defeatCount: 89,
            gameTime: 48660000,
            killCount: 2711,
            deathCount: 3044
        },
        octogone: {
            points: 5362,
            gameCount: 82,
            top1Count: 10,
            gameTime: 10140000,
            killCount: 96,
            deathCount: 72,
            damageCount: 3776
        }
    }
    */
});
```
