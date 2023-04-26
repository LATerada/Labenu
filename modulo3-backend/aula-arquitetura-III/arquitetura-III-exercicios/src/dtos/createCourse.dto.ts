import z from "zod";
export interface CreateCourseInputDTO {
  id: string;
  name: string;
  lessons: number;
}

export interface CreateCourseOutputDTO {
  message: string;
  course: {
    id: string;
    name: string;
    lessons: number;
    createdAt: string;
  };
}

export const CreateCourseSchema = z
  .object({
    id: z
      .string({
        required_error: "'id' é obrigatória",
        invalid_type_error: "'id' deve ser do tipo string",
      })
      .min(1, "'id' deve possuir no mínimo 1 caractere"),
    name: z
      .string({
        required_error: "'name' é obrigatório",
        invalid_type_error: "'name' deve ser do tipo string",
      })
      .min(2, "'name' deve possuir no mínimo 2 caracteres"),
    lessons: z
      .number({
        required_error: "'lessons' é obrigatório",
        invalid_type_error: "'lessons' deve ser do tipo number",
      })
      .gt(0, "'lessons' não pode ser menor ou igual a 0"),
  })
  .transform((data) => data as CreateCourseInputDTO);
