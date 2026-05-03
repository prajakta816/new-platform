const TryCatch = (handler) => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      console.error("API Error:", error);
      res.status(500).json({
        message: error.message || "Internal Server Error",
        error: process.env.NODE_ENV === "development" ? error.stack : undefined,
      });
    }
  };
};

export default TryCatch;
