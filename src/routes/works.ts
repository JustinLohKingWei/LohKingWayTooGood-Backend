import express from "express";
import { createWork, getAllWorks } from "../controllers/workController";

const worksRouter = express.Router();

worksRouter.get("", getAllWorks);

worksRouter.post("",createWork);

export default worksRouter;
