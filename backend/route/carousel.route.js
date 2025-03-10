import express from 'express';
import CarouselModel from '../model/Carousel.model.js';

const router = express.Router();

// ✅ Get all carousel items
router.get('/', async (req, res) => {
    try {
        const carousels = await CarouselModel.find();
        res.json(carousels);
    } catch (error) {
        console.error("Error fetching carousel items:", error);
        res.status(500).json({ message: "Failed to fetch carousel data" });
    }
});

// ✅ Get a single carousel item by ID
router.get('/:id', async (req, res) => {
    try {
        const carousel = await CarouselModel.findById(req.params.id);
        if (!carousel) {
            return res.status(404).json({ message: "Carousel item not found" });
        }
        res.json(carousel);
    } catch (error) {
        console.error("Error fetching carousel:", error);
        res.status(500).json({ message: "Failed to fetch carousel data" });
    }
});

export default router;
