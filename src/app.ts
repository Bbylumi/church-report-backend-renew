import express, { Application } from "express"; 
import reportRoutes from "./routes/report.routes";

const app: Application = express();

// Middleware
app.use(express.json()); // For parsing JSON requests

app.use('/reports', reportRoutes)
 
app.get("/", (_req, res) => {
  res.send("Welcome to the Church Report API, God bless you!");
});

export default app;
