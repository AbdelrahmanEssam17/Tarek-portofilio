import express from "express";
import { upload } from "../../middleware/upload.middleware.js";
import {
  uploadSingleFile,
  uploadMultipleFiles,
  deleteUploadedFile,
} from "./upload.controller.js";

const router = express.Router();

// Single file upload - accepts field names 'file', 'image', 'photo', or 'attachment'
router.post("/single", (req, res, next) => {
  upload.single("file")(req, res, (err) => {
    if (err) return next(err);
    if (req.file) return uploadSingleFile(req, res);

    // Fallback: check if uploaded under 'image'
    upload.single("image")(req, res, (err2) => {
      if (err2) return next(err2);
      return uploadSingleFile(req, res);
    });
  });
});

// Backward-compatible alias for /addphoto or /file
router.post("/file", upload.single("file"), uploadSingleFile);
router.post("/photo", upload.single("image"), uploadSingleFile);

// Multiple files upload (up to 10 files)
router.post("/multiple", upload.array("files", 10), uploadMultipleFiles);

// Delete an uploaded file
router.delete("/:filename", deleteUploadedFile);

export default router;
