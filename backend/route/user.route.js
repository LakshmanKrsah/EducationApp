import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import User from "../model/user.model.js"; // Ensure the correct User model path
import { login } from "../controller/user.controller.js";

dotenv.config(); // Load environment variables

const router = express.Router();

router.post("/login", login);  // ✅ Login route

// ✅ ADD SIGNUP ROUTE
router.post("/signup", async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            fullname,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        // Create JWT token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: "7d" });

        res.status(201).json({ message: "Signup successful", user: newUser, token });
    } catch (error) {
        console.error("❌ Signup Error:", error);
        res.status(500).json({ message: "Server error" });
    }
});

// ✅ Forgot Password Route (Send Reset Link)
router.post("/forgot-password", async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Email is required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // 🔹 Generate Reset Token (JWT)
        const resetToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "15m" });

        // 🔹 Store Reset Token in Database
        user.resetToken = resetToken;
        user.resetTokenExpiration = Date.now() + 15 * 60 * 1000; // 15 minutes
        await user.save();

        const resetLink = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

        // 🔹 Setup Nodemailer Transporter (SMTP)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        // 🔹 Email Content
        const mailOptions = {
            from: process.env.SMTP_USER,
            to: email,
            subject: "Password Reset Request",
            html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
        };

        await transporter.sendMail(mailOptions);
        res.json({ message: "Reset link sent to your email!" });

    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

// 🔹 Reset Password Route (Change Password)
router.post("/reset-password", async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        if (!token || !newPassword) {
            return res.status(400).json({ error: "Token and new password are required" });
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            return res.status(400).json({ error: "Invalid or expired token" });
        }

        const user = await User.findOne({ _id: decoded.id, resetToken: token });
        if (!user || user.resetTokenExpiration < Date.now()) {
            return res.status(400).json({ error: "Invalid or expired token" });
        }

        // 🔹 Hash and Update Password
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        user.resetToken = null; // Remove token after reset
        user.resetTokenExpiration = null;
        await user.save();

        res.json({ message: "Password reset successful!" });

    } catch (error) {
        console.error("❌ Error:", error);
        res.status(500).json({ error: "Server error" });
    }
});

export default router;
