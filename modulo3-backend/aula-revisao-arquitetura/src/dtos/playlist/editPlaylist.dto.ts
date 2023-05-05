import z from "zod";

export interface EditPlaylistInputDTO {
  idToEdit: string;
  token: string | undefined;
  name: string;
}

export interface EditPlaylistOutputDTO {}

export const EditPlaylistSchema = z.object({
  idToEdit: z.string().min(1),
  token: z.string().min(1),
  name: z.string().min(1),
});
