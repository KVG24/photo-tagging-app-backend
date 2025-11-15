const { Router } = require("express");
const router = Router();
const db = require("../db/queries");

router.get("/characters", async (req, res) => {
    try {
        const characters = await db.getCharacters();
        res.status(200).json(characters);
    } catch (err) {
        console.error("Error fetching characters data: " + err);
        res.status(500).json({ error: "Error fetching characters" });
    }
});

module.exports = router;
