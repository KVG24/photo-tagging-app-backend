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

router.get("/leaderboard", async (req, res) => {
    try {
        const leaderboard = await db.getLeaderboard();
        res.status(200).json(leaderboard);
    } catch (err) {
        console.error("Error fetching leaderboard: " + err);
        res.status(500).json({ error: "Error fetching leaderboard" });
    }
});

router.post("/leaderboard/post", async (req, res) => {
    try {
        const { mode, name, time } = req.body;
        await db.createLeaderboardRecord(mode, name, time);
        res.status(201);
    } catch (err) {
        console.error("Error creating leaderboard record: " + err);
        res.status(500).json({ error: "Error creating leaderboard record" });
    }
});

module.exports = router;
