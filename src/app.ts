import express, { Application } from "express"; 
import cors from "cors";
import reportRoutes from "./routes/report.routes"; 
import monetaryRoutes from "./routes/monetary.routes"

const app: Application = express();

//enables cors for all origins (but here am restricting for only this server)
app.use(cors());


// Middleware
app.use(express.json()); // For parsing JSON requests

app.use('/reports', reportRoutes) 
app.use('/monetary', monetaryRoutes)
 
app.get("/", (_req, res) => {
  res.send("Welcome to the Church Report API, God bless you!");
});

export default app;
