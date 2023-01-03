import express, { Request, Response } from "express";
import { CreateHobby, getAllHobbies } from "../controllers/hobbyController";

// creates Router Instance
const hobbiesRouter = express.Router();

hobbiesRouter.get("/",getAllHobbies);

hobbiesRouter.post("/", CreateHobby);

export default hobbiesRouter;
