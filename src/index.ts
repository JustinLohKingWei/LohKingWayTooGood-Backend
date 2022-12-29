import express, { Express, Request, Response } from "express";
import { WorkList } from "./WorkData";
const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) =>
  res.send("Hello World! I am typescript!")
);

app.get("/work", (req: Request, res: Response) => res.send(WorkList));
app.listen(port, () => console.log(`Express app listening on port ${port}!`));
