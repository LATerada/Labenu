import { CourseDB } from "../types";
import { BaseDataBase } from "./BaseDatabase";

export class CourseDatabase extends BaseDataBase {
  public static TABLE_COURSES = "courses";

  public async findCourses(q: string | undefined): Promise<CourseDB[]> {
    if (q) {
      const courseDB: CourseDB[] = await BaseDataBase.connection(
        CourseDatabase.TABLE_COURSES
      ).where("name", "LIKE", `%${q}%`);
      return courseDB;
    } else {
      const courseDB: CourseDB[] = await BaseDataBase.connection(
        CourseDatabase.TABLE_COURSES
      );
      return courseDB;
    }
  }

  public async findCourseById(id: string): Promise<CourseDB | undefined> {
    const [courseDB]: CourseDB[] | undefined[] = await BaseDataBase.connection(
      CourseDatabase.TABLE_COURSES
    ).where({ id });
    return courseDB;
  }

  public async insertCourse(newCourse: CourseDB): Promise<void> {
    await BaseDataBase.connection(CourseDatabase.TABLE_COURSES).insert(
      newCourse
    );
  }

  public async editCourse(
    newCourse: CourseDB,
    idToEdit: string
  ): Promise<void> {
    await BaseDataBase.connection(CourseDatabase.TABLE_COURSES)
      .update(newCourse)
      .where({ id: idToEdit });
  }

  public async removeCourse(id: string): Promise<void> {
    await BaseDataBase.connection(CourseDatabase.TABLE_COURSES)
      .del()
      .where({ id });
  }
}
