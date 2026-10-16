import express from "express";
import { handleContact } from "./contact.controller.js";
import { upload } from "../../middleware/upload.middleware.js";

const router = express.Router();

// Supports both application/json and multipart/form-data (with optional attachments)
router.post("/", upload.any(), handleContact);
router.post("/send", upload.any(), handleContact);

export default router;
