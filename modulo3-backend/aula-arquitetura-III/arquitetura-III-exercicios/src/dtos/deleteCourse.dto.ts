import z from "zod";

export interface DeleteCourseInputDTO {
  idToDelete: string;
}

export interface DeleteCourseOutputDTO {
  message: string;
  course: {
    id: string;
    name: string;
    lessons: number;
    createdAt: string;
  };
}

export const DeleteCourseSchema = z
  .object({
    idToDelete: z
      .string({
        required_error: "'id' é obrigatória",
        invalid_type_error: "'id' deve ser do tipo string",
      })
      .min(1, "'id' deve conter pelo menos 1 caractere"),
  })
  .transform((data) => data as DeleteCourseInputDTO);
