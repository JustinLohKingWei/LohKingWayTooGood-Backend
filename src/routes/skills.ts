import express from "express";
import { createSkill, getAllSkills } from "../controllers/skillController";

const skillsRouter = express.Router();

skillsRouter.get("/", getAllSkills);

skillsRouter.post("/", createSkill);

export default skillsRouter;
