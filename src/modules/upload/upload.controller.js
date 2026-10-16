import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "../../uploads");

export const uploadSingleFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "No file was uploaded. Please provide a file.",
    });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

  return res.status(201).json({
    success: true,
    message: "File uploaded successfully",
    file: {
      originalname: req.file.originalname,
      filename: req.file.filename,
      mimetype: req.file.mimetype,
      size: req.file.size,
      url: fileUrl,
      relativePath: `/uploads/${req.file.filename}`,
    },
  });
};

export const uploadMultipleFiles = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({
      success: false,
      message: "No files were uploaded. Please provide at least one file.",
    });
  }

  const files = req.files.map((file) => ({
    originalname: file.originalname,
    filename: file.filename,
    mimetype: file.mimetype,
    size: file.size,
    url: `${req.protocol}://${req.get("host")}/uploads/${file.filename}`,
    relativePath: `/uploads/${file.filename}`,
  }));

  return res.status(201).json({
    success: true,
    message: `${files.length} file(s) uploaded successfully`,
    files,
  });
};

export const deleteUploadedFile = async (req, res, next) => {
  try {
    const { filename } = req.params;
    if (!filename) {
      return res.status(400).json({
        success: false,
        message: "Filename is required",
      });
    }

    // Prevent directory traversal attacks
    const safeFilename = path.basename(filename);
    const filePath = path.join(uploadDir, safeFilename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).json({
        success: false,
        message: "File not found",
      });
    }

    await fs.promises.unlink(filePath);

    return res.status(200).json({
      success: true,
      message: `File '${safeFilename}' deleted successfully`,
    });
  } catch (error) {
    next(error);
  }
};
