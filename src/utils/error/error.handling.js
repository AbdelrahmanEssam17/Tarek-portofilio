import multer from "multer";

export const globalErrorhandling = (error, req, res, next) => {
  // Handle Multer errors
  if (error instanceof multer.MulterError) {
    if (error.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({
        success: false,
        message: "File is too large. Maximum allowed size is 15MB.",
      });
    }
    return res.status(400).json({
      success: false,
      message: `File upload error: ${error.message}`,
    });
  }

  const statusCode = error.statusCode || error.cause || 500;
  return res.status(statusCode).json({
    success: false,
    message: error.message || "An unexpected error occurred",
    ...(process.env.NODE_ENV === "development" && { stack: error.stack }),
  });
};
