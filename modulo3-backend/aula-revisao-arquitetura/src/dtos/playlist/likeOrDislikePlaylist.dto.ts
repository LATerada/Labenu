import z from "zod";

export interface LikeOrDislikePlaylistInputDTO {
  idToLikeOrDislike: string;
  token: string;
  like: boolean;
}

export type LikeOrDislikePlaylistOutputDTO = undefined;

export const LikeOrDislikePlaylistSchema = z
  .object({
    idToLikeOrDislike: z.string().min(1),
    token: z.string().min(1),
    like: z.boolean(),
  })
  .transform((data) => data as LikeOrDislikePlaylistInputDTO);
