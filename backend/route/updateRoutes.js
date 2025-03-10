import express from "express";
import mongoose from "mongoose";
import Update from "../model/Updated.js"; // Ensure this path is correct

const router = express.Router();

// Fetch latest update
router.get("/", async (req, res) => {
  try {
    const latestUpdate = await Update.findOne().sort({ _id: -1 }); // Fetch latest entry
    if (!latestUpdate) {
      return res.status(404).json({ message: "No updates found" });
    }
    res.json(latestUpdate);
  } catch (error) {
    console.error("Error fetching update:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
