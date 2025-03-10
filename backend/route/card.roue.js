const express = require("express");
const router = express.Router();
const Card = require("../models/Card"); // Your Mongoose Model

// Get details of a single card by ID
router.get("/api/cards/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
