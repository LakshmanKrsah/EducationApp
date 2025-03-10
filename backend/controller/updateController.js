import Update from "../model/Updated";

// Fetch Latest Update
export const getLatestUpdate = async (req, res) => {
  try {
    const updates = await Update.findOne(); // Fetch the latest update
    res.json(updates);
  } catch (error) {
    res.status(500).json({ error: "Error fetching updates" });
  }
};

// Add or Update Update Section
export const addOrUpdateUpdate = async (req, res) => {
  try {
    const updateData = req.body;
    let update = await Update.findOne();

    if (update) {
      // Update existing record
      update = await Update.findOneAndUpdate({}, updateData, { new: true });
    } else {
      // Create new record
      update = new Update(updateData);
      await update.save();
    }

    res.status(200).json({ message: "Update section saved successfully", update });
  } catch (error) {
    res.status(500).json({ error: "Error saving update section" });
  }
};
