import z from "zod";

export interface DeleleUserInputDTO {
  token: string;
  idToDelete: string;
}

export type DeleleUserOutputDTO = undefined;

export const DeleteUserSchema = z
  .object({
    token: z.string().min(1),
    idToDelete: z.string().min(1),
  })
  .transform((data) => data as DeleleUserInputDTO);
