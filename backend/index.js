// main server file (e.g., index.js or server.js)
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import courseRoute from './route/course.route.js';
import userRoute from './route/user.route.js';
import contactRoute from './route/contact.route.js';
import CourseModel from './model/Course.model.js';
import carouselRoute from './route/carousel.route.js';
import teacherRoutes from './route/addteacher.route.js';
import TeacherModel from './model/teacher.model.js';
import enquiryRoutes from './route/enquiryRoutes.js';
import updateRoutes from './route/updateRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB Connection Error:", err));

  



// Defining routes
app.use('/course', courseRoute);
app.use('/user', userRoute);
app.use('/api', contactRoute);
app.use('/api', enquiryRoutes);
app.use('/carousel', carouselRoute);
app.use('/api/teachers', teacherRoutes);
app.use('/api/update', updateRoutes);

// ✅ POST Route to Add Teacher
app.post("/api/teachers", async (req, res) => {
  try {
    // console.log("Received data:", req.body); // ✅ Debugging log
    const newTeacher = new TeacherModel(req.body); // ✅ Fixed import issue
    await newTeacher.save();
    res.status(201).json({ message: "Teacher added successfully!" });
  } catch (error) {
    console.error("Error saving teacher:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

// ✅ GET Course by ID
app.get("/course/:id", async (req, res) => {
  try {
    const courseId = parseInt(req.params.id, 10); // Convert to number
    const course = await CourseModel.findOne({ id: courseId });

    if (!course) {
      return res.status(404).json({ error: "Course not found" });
    }

    res.json(course);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server is listening on port ${PORT}`);
});
