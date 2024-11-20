import express, { Application } from "express";

const app: Application = express();

// Middleware
app.use(express.json()); // For parsing JSON requests
 
app.get("/", (_req, res) => {
  res.send("Welcome to the Church Report API, God bless you!");
});

export default app;
