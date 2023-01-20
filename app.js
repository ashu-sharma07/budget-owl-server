import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { handleError } from "./middleware/error.js";

const app = express();
// app.use(cors());
app.use(cookieParser());
app.use(express.json());
var corsOptions = {
  origin: "http://localhost:8080",
  optionsSuccessStatus: 200, // For legacy browser support
};

app.use(cors(corsOptions));
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
app.use((req, res, next) => {
  res.status(404).json({
    message:
      "Ohh you are lost, read the API documentation to find your way back home :)",
  });
});

export default app;
