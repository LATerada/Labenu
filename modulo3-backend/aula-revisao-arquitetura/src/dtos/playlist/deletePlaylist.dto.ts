import z from "zod";

export interface DeletePlaylistInputDTO {
  idToDelete: string;
  token: string ;
}

export type DeletePlaylistOutputDTO = undefined;

export const DeletePlaylistSchema = z
  .object({
    idToDelete: z.string().min(1),
    token: z.string().min(1),
  })
  .transform((data) => data as DeletePlaylistInputDTO);
