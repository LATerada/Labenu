import { CourseDatabase } from "../database/CourseDatabase";
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
}
