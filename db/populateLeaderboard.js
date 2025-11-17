const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

function randomTime() {
    return Math.floor(Math.random() * 15 * 60 * 1000);
}

const records = {
    0: { mode: "wally", name: "Alice", time: randomTime() },
    1: { mode: "tmnt", name: "Bob", time: randomTime() },
    2: { mode: "simpsons", name: "Charlie", time: randomTime() },
    3: { mode: "futurama", name: "Diana", time: randomTime() },
    4: { mode: "wally", name: "Ethan", time: randomTime() },
    5: { mode: "tmnt", name: "Fiona", time: randomTime() },
    6: { mode: "simpsons", name: "George", time: randomTime() },
    7: { mode: "futurama", name: "Hannah", time: randomTime() },
    8: { mode: "wally", name: "Ivan", time: randomTime() },
    9: { mode: "tmnt", name: "Julia", time: randomTime() },
    10: { mode: "simpsons", name: "Kevin", time: randomTime() },
    11: { mode: "futurama", name: "Laura", time: randomTime() },
    12: { mode: "wally", name: "Mike", time: randomTime() },
    13: { mode: "tmnt", name: "Nina", time: randomTime() },
    14: { mode: "simpsons", name: "Oscar", time: randomTime() },
    15: { mode: "futurama", name: "Paula", time: randomTime() },
    16: { mode: "wally", name: "Quentin", time: randomTime() },
    17: { mode: "tmnt", name: "Rachel", time: randomTime() },
    18: { mode: "simpsons", name: "Sam", time: randomTime() },
    19: { mode: "futurama", name: "Tina", time: randomTime() },
};

async function main() {
    try {
        for (const key in records) {
            const r = records[key];
            await prisma.leaderboard.create({
                data: {
                    mode: r.mode,
                    name: r.name,
                    time: r.time,
                },
            });
        }
        console.log("'Leaderboard' db table populated");
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect();
    }
}

main();
