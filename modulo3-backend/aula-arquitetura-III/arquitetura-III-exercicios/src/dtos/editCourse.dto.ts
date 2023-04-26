import z from "zod";

export interface EditCourseInputDTO {
  idToEdit: string;
  id?: string;
  name?: string;
  lessons?: number;
}

export interface EditCourseOutputDTO {
  message: string;
  course: {
    id: string;
    name: string;
    lessons: number;
    createdAt: string;
  };
}
export const EditCourseSchema = z
  .object({
    idToEdit: z
      .string({
        required_error: "'id' deve ser obrigatório",
        invalid_type_error: "'id' deve ser do tipo string",
      })
      .min(1, "'id' deve possuir no mínimo 1 caractere"),
    id: z
      .string({
        invalid_type_error: "'id' deve ser do tipo string",
      })
      .min(1, "'id' deve possuir no mínimo 1 caractere")
      .optional(),
    name: z
      .string({
        invalid_type_error: "'name' deve ser do tipo string",
      })
      .min(2, "'name' deve possuir no mínimo 2 caracteres")
      .optional(),
    lessons: z
      .number({
        invalid_type_error: "'lessons' deve ser do tipo number",
      })
      .gt(0, "'lessons' não pode ser menor ou igual a 0")
      .optional(),
  })
  .transform((data) => data as EditCourseInputDTO);
