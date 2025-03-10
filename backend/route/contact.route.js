import express from 'express';
import Contact from '../model/Contact.js';

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email,phone } = req.body;
  console.log('Received request:', req.body); // Log request data

  try {
    const newContact = new Contact({ name, email, phone});
    await newContact.save();
    console.log('Contact saved successfully.');
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

export default router;
