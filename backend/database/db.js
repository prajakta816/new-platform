import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✓ Database Connected Successfully");
  } catch (error) {
    console.error("✗ Database connection error:", error.message);
    console.error("Ensure MONGO_URI is correctly configured in .env file");
    process.exit(1);
  }
};
