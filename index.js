import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import ratelimit from "express-rate-limit";

import contactRoutes from "./src/modules/contact/contact.routes.js";
import uploadRoutes from "./src/modules/upload/upload.routes.js";
import { globalErrorhandling } from "./src/utils/error/error.handling.js";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.static(path.join(__dirname, "public")));

// Rate limiting for contact form to prevent email spam
const contactLimiter = ratelimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      "Too many messages sent from this IP. Please try again after 15 minutes.",
  },
});

app.get("/cv", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "cv.html"));
});

app.get("/api", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Portfolio Backend API is running successfully",
    endpoints: {
      contact: "POST /api/contact (or /contact)",
      uploadSingle: "POST /api/upload/single (or /upload/single)",
      uploadMultiple: "POST /api/upload/multiple (or /upload/multiple)",
      deleteFile: "DELETE /api/upload/:filename (or /upload/:filename)",
      staticFiles: "GET /uploads/:filename",
    },
  });
});

// Routes
app.use("/api/contact", contactLimiter, contactRoutes);
app.use("/contact", contactLimiter, contactRoutes);

app.use("/api/upload", uploadRoutes);
app.use("/upload", uploadRoutes);

// 404 Route
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route '${req.originalUrl}' not found`,
  });
});

// Global Error Handler
app.use(globalErrorhandling);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Ready to handle contact emails and file uploads.`);
});
