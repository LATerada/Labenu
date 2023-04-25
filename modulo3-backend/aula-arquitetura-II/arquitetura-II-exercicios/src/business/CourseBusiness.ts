import { CourseDatabase } from "../database/CourseDatabase";
import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Course } from "../models/Course";
import { CourseDB } from "../types";

export class CourseBusiness {
  getCourses = async (input: any) => {
    const { q } = input;

    const courseDatabase = new CourseDatabase();
    const coursesDB: CourseDB[] = await courseDatabase.findCourses(q);

    const courses: Course[] = coursesDB.map(
      (courseDB) => new Course(courseDB.id, courseDB.name, courseDB.lessons)
    );

    const output = {
      courses,
    };

    return output;
  };

  postCourse = async (input: any) => {
    const { id, name, lessons } = input;

    if (typeof id !== "string") {
      throw new BadRequestError("'id' deve ser string");
    }

    if (typeof name !== "string") {
      throw new BadRequestError("'name' deve ser string");
    }

    if (typeof lessons !== "number") {
      throw new BadRequestError("'lessons' deve ser number");
    }

    const courseDatabase = new CourseDatabase();
    const courseDB = await courseDatabase.findCourseById(id);

    if (courseDB) {
      throw new BadRequestError("'id' iválido");
    }

    const newCourse = new Course(id, name, lessons);

    const newCourseDB: CourseDB = {
      id: newCourse.getId(),
      name: newCourse.getName(),
      lessons: newCourse.getLessons(),
    };

    await courseDatabase.insertCourse(newCourseDB);

    const output = {
      message: "Curso criado com sucesso",
      newCourse: newCourseDB,
    };

    return output;
  };

  deleteCourse = async (input: any) => {
    const { idToDelete } = input;

    const courseDatabase = new CourseDatabase();
    const courseDB = await courseDatabase.findCourseById(idToDelete);

    if (!courseDB) {
      throw new NotFoundError("'id' não encontrado");
    }

    await courseDatabase.removeCourse(courseDB.id);

    const output = {
      message: "Curso deletado com sucesso.",
    };

    return output;
  };
}
