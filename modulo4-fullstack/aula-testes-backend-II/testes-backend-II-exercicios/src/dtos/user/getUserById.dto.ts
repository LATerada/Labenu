import z from "zod";
import { UserModel } from "../../models/User";

export interface GetUserByIdInputDTO {
  token: string;
  id: string;
}

export type GetUserByIdOutputDTO = UserModel;

export const GetUserByIdSchema = z
  .object({
    token: z.string().min(1),
    id: z.string().min(1),
  })
  .transform((data) => data as GetUserByIdInputDTO);
