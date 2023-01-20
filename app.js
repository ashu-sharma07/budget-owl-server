import express from "express";

const app = express();
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

export default app;
