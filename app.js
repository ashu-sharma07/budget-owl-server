import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to the Spend Savvy API",
  });
});

export default app;
