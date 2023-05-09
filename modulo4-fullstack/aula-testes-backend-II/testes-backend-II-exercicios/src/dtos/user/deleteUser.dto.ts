import z from "zod";

// export interface DeleleUserInputDTO {
//   token: string;
//   idToDelete: string;
// }

// export interface DeleteUserOutputDTO {
//   message: string;
// }

export const DeleteUserSchemaInput = z.object({
  token: z.string().min(1),
  idToDelete: z.string().min(1),
});
// .transform((data) => data as DeleteUserInputDTO);

export type DeleteUserInputDTO = z.infer<typeof DeleteUserSchemaInput>;

export const deleteUserSchemaOutput = z.object({
  message: z.string().min(1),
});
export type DeleleUserOutputDTO = z.infer<typeof deleteUserSchemaOutput>;
