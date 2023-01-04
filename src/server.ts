import express, { Express, Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
import "dotenv/config";
import hobbiesRouter from "./routes/hobbies";
import worksRouter from "./routes/works";
import skillsRouter from "./routes/skills";

const app: Express = express();
const port = process.env.PORT;
const mongoURI: string = process.env.MONGO_URI ?? "NO URI DEFINED";

// Connect to MongoDB or MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => {
    app.listen(port, () =>
      console.log(`Express app listening on port ${port}!`)
    );
  })
  .catch((error) => {
    console.log(error);
  });

// Middleware
app.use(express.json());
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/hobbies", hobbiesRouter);
app.use("/api/works", worksRouter);
app.use("/api/skills",skillsRouter)
