import { sendContactEmail } from "../../utils/email/send.email.js";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const handleContact = async (req, res, next) => {
  try {
    // Support both lowercase and PascalCase property names from frontend
    const name = (req.body.name || req.body.Name || "").trim();
    const email = (req.body.email || req.body.Email || "").trim();
    const subject = (req.body.subject || req.body.Subject || "").trim();
    const message = (
      req.body.message ||
      req.body.Message ||
      req.body.body ||
      req.body.Body ||
      ""
    ).trim();

    // Validations
    if (!name) {
      return res.status(400).json({
        success: false,
        message: "Name is required",
      });
    }

    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    if (!message) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    // Prepare attachments if files were uploaded with the contact request
    const attachments = [];
    if (req.file) {
      attachments.push({
        filename: req.file.originalname,
        path: req.file.path,
      });
    } else if (req.files && Array.isArray(req.files)) {
      req.files.forEach((file) => {
        attachments.push({
          filename: file.originalname,
          path: file.path,
        });
      });
    }

    await sendContactEmail({
      name,
      email,
      subject,
      message,
      attachments,
    });

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    next(error);
  }
};
