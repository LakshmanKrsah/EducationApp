import ParentsEnquiry from "../model/ParentsEnquiry.js"; 

// Store Enquiry Data
export const createEnquiry = async (req, res) => {
  try {
    const newEnquiry = new ParentsEnquiry(req.body);
    await newEnquiry.save();
    res.status(201).json({ message: "Enquiry saved successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Failed to save enquiry" });
  }
};

// Fetch All Enquiries
export const getEnquiries = async (req, res) => {
  try {
    const enquiries = await ParentsEnquiry.find();
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch enquiries" });
  }
};
