const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getCharacters() {
    return await prisma.character.findMany();
}

async function getLeaderboard() {
    return await prisma.leaderboard.findMany();
}

async function createLeaderboardRecord(mode, name, time) {
    await prisma.leaderboard.create({
        data: {
            mode,
            name,
            time,
        },
    });
}

module.exports = {
    getCharacters,
    getLeaderboard,
    createLeaderboardRecord,
};
