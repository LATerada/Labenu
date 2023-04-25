import { Request, Response } from "express";
import { CourseBusiness } from "../business/CourseBusiness";
import { BaseError } from "../errors/BaseError";

export class CourseController {
  getCourses = async (req: Request, res: Response) => {
    try {
      const input = {
        q: req.params.q,
      };

      const courseBusiness = new CourseBusiness();
      const output = await courseBusiness.getCourses(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado.");
      }
    }
  };

  postCourse = async (req: Request, res: Response) => {
    try {
      const input = {
        id: req.body.id,
        name: req.body.name,
        lessons: req.body.lessons,
      };

      const courseBusiness = new CourseBusiness();
      const output = await courseBusiness.postCourse(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado.");
      }
    }
  };

  deleteCourse = async (req: Request, res: Response) => {
    const input = { idToDelete: req.params.id };

    const courseBusiness = new CourseBusiness();
    const output = await courseBusiness.deleteCourse(input);

    res.status(201).send(output);
  };
}
