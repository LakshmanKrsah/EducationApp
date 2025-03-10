import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const mailOptions = {
    from: process.env.SMTP_USER,
    to: "your_email@gmail.com",
    subject: "Test Email",
    text: "Hello! This is a test email.",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("❌ Error:", error);
    } else {
        console.log("✅ Email Sent Successfully:", info.response);
    }
});
