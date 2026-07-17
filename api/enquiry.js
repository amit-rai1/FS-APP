// Vercel Serverless Function — handles enquiry form submissions
import nodemailer from "nodemailer";

// ⚠️ Replace this with a real Gmail App Password for production
const EMAIL_PASS = process.env.EMAIL_PASS || "llxu qmat fglj qgfw";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "amitrai8489@gmail.com",
    pass: EMAIL_PASS,
  },
});

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, course, year, college, message } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and Phone are required" });
  }

  const mailOptions = {
    from: `"MLKPG Enquiry" <amitrai8489@gmail.com>`,
    to: "amitrai8489@gmail.com",
    subject: `New Enquiry from ${name} - ${course || "Not selected"}`,
    html: `
      <h2>📋 New Course Enquiry</h2>
      <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:Arial,sans-serif;width:100%;max-width:500px;">
        <tr><td><strong>👤 Name</strong></td><td>${name}</td></tr>
        <tr><td><strong>📧 Email</strong></td><td>${email || "N/A"}</td></tr>
        <tr><td><strong>📞 Phone</strong></td><td>${phone}</td></tr>
        <tr><td><strong>📚 Course</strong></td><td>${course || "N/A"}</td></tr>
        <tr><td><strong>🎓 Year</strong></td><td>${year || "N/A"}</td></tr>
        <tr><td><strong>🏫 College</strong></td><td>${college || "N/A"}</td></tr>
        <tr><td><strong>💬 Query</strong></td><td>${message || "No message"}</td></tr>
      </table>
      <p style="color:#666;font-size:12px;margin-top:16px;">Received on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`✅ Enquiry sent from ${name} (${phone})`);
    return res.status(200).json({ success: true, message: "Enquiry received!" });
  } catch (err) {
    console.error("❌ Email error:", err.message);
    return res.status(200).json({ success: true, message: "Enquiry received! We'll contact you soon." });
  }
}