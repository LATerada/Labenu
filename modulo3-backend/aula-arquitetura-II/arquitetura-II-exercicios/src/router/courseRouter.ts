import express from "express";
import { CourseController } from "../controller/CourseController";

export const courseRouter = express.Router();

const courseController = new CourseController();

courseRouter.get("/", courseController.getCourses);
courseRouter.post("/", courseController.postCourse);
