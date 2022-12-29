import express, { Express, Request, Response, NextFunction } from "express";
import { WorkList } from "./WorkData";
import 'dotenv/config';
import { HobbyList } from "./HobbyData";

const app: Express = express();
const port = process.env.PORT

app.use((req: Request, res: Response,next : NextFunction)=>{
  console.log(req.path,req.method);
  next();
})

//routes
app.get("/", (req: Request, res: Response) =>
  res.send("Hello World! I am typescript!")
);
app.get("/work", (req: Request, res: Response) => res.send(WorkList));
app.get("/hobbies", (req: Request, res: Response) => res.send(HobbyList));


app.listen(port , () => console.log(`Express app listening on port ${port}!`));


