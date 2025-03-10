export const getTeachers = (req, res) => {
    // You can replace this with actual database logic later
    res.json({ message: "List of all teachers" });
};

export const addTeacher = (req, res) => {
    const { name, subject } = req.body;

    if (!name || !subject) {
        return res.status(400).json({ error: "Name and subject are required" });
    }

    // Simulating teacher addition (Replace this with actual DB logic)
    const newTeacher = { id: Date.now(), name, subject };

    res.status(201).json({
        message: "Teacher added successfully",
        teacher: newTeacher,
    });
};
