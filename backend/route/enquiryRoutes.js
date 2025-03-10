import express from "express";
import { createEnquiry, getEnquiries } from "../controller/enquiryController.js";

const router = express.Router();

// POST: Store enquiry in database
router.post("/enquiry", createEnquiry);

// GET: Fetch all enquiries
router.get("/enquiries", getEnquiries);

export default router;
