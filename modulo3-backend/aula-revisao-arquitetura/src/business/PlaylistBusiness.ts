import { PlaylistDatabase } from "../database/PlaylistDatabase";
import {
  CreatePlaylistInputDTO,
  CreatePlaylistOutputDTO,
} from "../dtos/playlist/createPlaylist.dto";
import {
  GetPlaylistsInputDTO,
  GetPlaylistsOutputDTO,
} from "../dtos/playlist/getPlaylists.dto";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { Playlist } from "../models/Playlist";
import { IdGenerator } from "../services/IdGenerator";
import { TokenManager } from "../services/TokenManeger";

export class PlaylistBusiness {
  constructor(
    private playlistDatabase: PlaylistDatabase,
    private idGenerator: IdGenerator,
    private tokeManeger: TokenManager
  ) {}

  public createPlaylist = async (
    input: CreatePlaylistInputDTO
  ): Promise<CreatePlaylistOutputDTO> => {
    const { name, token } = input;

    const playload = this.tokeManeger.getPayload(token);

    if (!playload) {
      throw new UnauthorizedError("Token inválido");
    }

    const id = this.idGenerator.generate();

    const playlist = new Playlist(
      id,
      name,
      0,
      0,
      new Date().toISOString(),
      new Date().toISOString(),
      playload.id,
      playload.name
    );

    const playlistDB = playlist.toDBModel();

    await this.playlistDatabase.insertPlaylist(playlistDB);

    const output: CreatePlaylistOutputDTO = undefined;

    return output;
  };

  public getPlaylists = async (
    input: GetPlaylistsInputDTO
  ): Promise<GetPlaylistsOutputDTO> => {
    const { token } = input;

    const playload = this.tokeManeger.getPayload(token);

    if (playload === null) {
      throw new UnauthorizedError("Token inválido");
    }

    const playlistsDBWithCreatorName =
      await this.playlistDatabase.findPlaylistsWithCreatorName();

    const playlists = playlistsDBWithCreatorName.map(
      (playlistsWithCreatorName) => {
        const playlist = new Playlist(
          playlistsWithCreatorName.id,
          playlistsWithCreatorName.creator_id,
          playlistsWithCreatorName.likes,
          playlistsWithCreatorName.dislikes,
          playlistsWithCreatorName.created_at,
          playlistsWithCreatorName.updated_at,
          playlistsWithCreatorName.creator_id,
          playlistsWithCreatorName.creator_name
        );
        return playlist.toBusinessModel();
      }
    );

    const output: GetPlaylistsOutputDTO = playlists;

    return output;
  };
}
