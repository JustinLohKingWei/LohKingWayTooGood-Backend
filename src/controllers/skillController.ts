import { Request, Response } from "express";
import SkillModel from "../models/skillModel";

//  Get ALL Skills
export const getAllSkills = async (req: Request, res: Response) => {
  console.log("Getting ALL Skill Entries");
  const skills = SkillModel.find({});
  res.status(200).json(skills);
};

// Create A Skill
export const createSkill = async (req: Request, res: Response) => {
  console.log("Creating a skill entry");

  const { name, description, rating, projectLinks } = req.body;

  try {
    const skill = await SkillModel.create({
      name,
      description,
      rating,
      projectLinks,
    });
    res.status(200).json(skill);
  } catch (e) {
    const error = e as Error;
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
};
