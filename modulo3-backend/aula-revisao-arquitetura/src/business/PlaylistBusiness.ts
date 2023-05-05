import { PlaylistDatabase } from "../database/PlaylistDatabase";
import {
  CreatePlaylistInputDTO,
  CreatePlaylistOutputDTO,
} from "../dtos/playlist/createPlaylist.dto";
import {
  DeletePlaylistInputDTO,
  DeletePlaylistOutputDTO,
} from "../dtos/playlist/deletePlaylist.dto";
import {
  EditPlaylistInputDTO,
  EditPlaylistOutputDTO,
} from "../dtos/playlist/editPlaylist.dto";
import {
  GetPlaylistsInputDTO,
  GetPlaylistsOutputDTO,
} from "../dtos/playlist/getPlaylists.dto";
import { ForbiddenError } from "../errors/ForbiddenError";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { Playlist } from "../models/Playlist";
import { USER_ROLES } from "../models/User";
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
          playlistsWithCreatorName.name,
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

  public editPlaylist = async (
    input: EditPlaylistInputDTO
  ): Promise<EditPlaylistOutputDTO> => {
    const { idToEdit, name, token } = input;

    const playload = this.tokeManeger.getPayload(token);

    if (playload === null) {
      throw new UnauthorizedError("Token inválido");
    }

    const playlistDB = await this.playlistDatabase.findPlaylistById(idToEdit);

    if (!playlistDB) {
      throw new NotFoundError("playlist com essa id não existe");
    }

    if (playload.id !== playlistDB.creator_id) {
      throw new ForbiddenError("somente o criador da playlist pode editá-la");
    }

    const playlist = new Playlist(
      playlistDB.id,
      playlistDB.name,
      playlistDB.likes,
      playlistDB.dislikes,
      playlistDB.created_at,
      playlistDB.updated_at,
      playload.id,
      playload.name
    );

    playlist.setName(name);

    const updatedPlaylistDB = playlist.toDBModel();

    await this.playlistDatabase.updatePlaylist(updatedPlaylistDB);

    const output: EditPlaylistOutputDTO = undefined;

    return output;
  };

  public deletePlaylist = async (
    input: DeletePlaylistInputDTO
  ): Promise<DeletePlaylistOutputDTO> => {
    const { idToDelete, token } = input;

    const playload = this.tokeManeger.getPayload(token);

    if (playload === null) {
      throw new UnauthorizedError("Token inválido");
    }

    const playlistDB = await this.playlistDatabase.findPlaylistById(idToDelete);

    if (!playlistDB) {
      throw new NotFoundError("playlist com essa id não existe");
    }

    if (playload.role !== USER_ROLES.ADMIN) {
      if (playload.id !== playlistDB.creator_id) {
        throw new ForbiddenError(
          "somente o criador da playlist pode deletá-la"
        );
      }
    }

    await this.playlistDatabase.removePlaylist(idToDelete);

    const output: DeletePlaylistOutputDTO = undefined;

    return output;
  };
}
