const { PrismaClient } = require("../generated/prisma");

const prisma = new PrismaClient();

async function getCharacters() {
    return await prisma.character.findMany();
}

module.exports = {
    getCharacters,
};
