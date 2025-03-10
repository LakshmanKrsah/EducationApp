import mongoose from "mongoose";

// Define Schema with Collection Name
const ParentsEnquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: {type:Number, required: true},
    message: { type: String, required: true },
  },
  { timestamps: true, collection: "ParentsEnquiry" } // Explicit collection name
);

// Create Model
const ParentsEnquiry = mongoose.model("ParentsEnquiry", ParentsEnquirySchema);

export default ParentsEnquiry;
