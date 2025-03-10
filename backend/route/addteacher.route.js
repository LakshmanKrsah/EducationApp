import express from 'express';
const router = express.Router();

// Define routes here
router.post('/add', async (req, res) => {
  res.send('Teacher added');
});

export default router;
