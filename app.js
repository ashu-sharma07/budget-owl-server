import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { handleError } from "./middleware/error.js";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Spend Savvy API",
  });
});

// Routes import
import userRoutes from "./routes/userRoute.js";
app.use("/api/v1", userRoutes);
// Middleware for error handling
app.use(handleError);

export default app;
