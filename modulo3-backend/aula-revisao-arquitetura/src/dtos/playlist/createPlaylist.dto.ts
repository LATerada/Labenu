import z from "zod";

export interface CreatePlaylistInputDTO {
  token: string;
  name: string;
}

export type CreatePlaylistOutputDTO = undefined;

export const CreatePlaylistSchema = z
  .object({
    token: z.string().min(1),
    name: z.string().min(1),
  })
  .transform((data) => data as CreatePlaylistInputDTO);
