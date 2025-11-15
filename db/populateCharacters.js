const { PrismaClient } = require("../generated/prisma");
const characters = require("./characters");

const prisma = new PrismaClient();

async function main() {
    try {
        for (const key in characters) {
            const c = characters[key];
            await prisma.character.create({
                data: {
                    name: c.name,
                    img: c.img,
                    maxX: c.maxX,
                    minX: c.minX,
                    maxY: c.maxY,
                    minY: c.minY,
                },
            });
        }
        console.log("'Character' db table populated");
    } catch (err) {
        console.log(err);
    } finally {
        await prisma.$disconnect();
    }
}

main();
