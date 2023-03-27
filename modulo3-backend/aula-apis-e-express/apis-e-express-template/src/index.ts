import express, { Request, Response } from "express";
import cors from "cors";
import { courses } from "./database";
import { COURSE_STACK, TCourse } from "./types";
import { students } from "./student-database";
import { TStudent } from "./student-types";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003");
});

app.get("/ping", (req: Request, res: Response) => {
  res.send("Pong!");
});

// getCourses
app.get("/courses", (req: Request, res: Response) => {
  res.status(200).send(courses);
});

//getCoursesSearch
app.get("/courses/search", (req: Request, res: Response) => {
  const q = req.query.q as string;
  const result = courses.filter((course) => {
    return course.name.toLowerCase().includes(q.toString().toLowerCase());
  });
  res.status(200).send(result);
});

//postNewCourse
app.post("/courses", (req: Request, res: Response) => {
  const id = req.body.id as string;
  const name = req.body.name as string;
  const lessons = req.body.lessons as number;
  const stack = req.body.stack as COURSE_STACK;

  const newCourse: TCourse = {
    id,
    name,
    lessons,
    stack,
  };

  courses.push(newCourse);
  res.status(201).send("Curso registrado com sucesso");
});

//exercicio de FIXACAO
// getAllStudents
app.get("/students", (req: Request, res: Response) => {
  res.status(200).send(students);
});

// getStudentsByName
app.get("/students/search", (req: Request, res: Response) => {
  const q = req.query.q;
  const result: TStudent = students.find((student) => {
    return student.name.toLowerCase() === q.toString().toLowerCase();
  });
  res.status(200).send(result);
});

// postStudent
app.post("/students", (req: Request, res: Response) => {
  const id = req.body.id as string;
  const name = req.body.name as string;
  const age = req.body.name as number;

  const newStudent: TStudent = {
    id,
    name,
    age,
  };
  students.push(newStudent)
  res.status(201).send("Estudante cadastrado com sucesso")
});
