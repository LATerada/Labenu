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
import {
  LikeOrDislikePlaylistInputDTO,
  LikeOrDislikePlaylistOutputDTO,
} from "../dtos/playlist/likeOrDislikePlaylist.dto";
import { ForbiddenError } from "../errors/ForbiddenError";
import { NotFoundError } from "../errors/NotFoundError";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { likeDislikeDB, Playlist, PLAYLIST_LIKE } from "../models/Playlist";
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

  public likeOrDislikePlaylist = async (
    input: LikeOrDislikePlaylistInputDTO
  ): Promise<LikeOrDislikePlaylistOutputDTO> => {
    const { idToLikeOrDislike, token, like } = input;

    const playload = this.tokeManeger.getPayload(token);

    if (playload === null) {
      throw new UnauthorizedError("Token inválido");
    }

    const playlistDBWithCreatorName =
      await this.playlistDatabase.findPlaylistsWithCreatorNameById(
        idToLikeOrDislike
      );

    if (!playlistDBWithCreatorName) {
      throw new NotFoundError("playlist com essa id não existe");
    }

    const playlist = new Playlist(
      playlistDBWithCreatorName.id,
      playlistDBWithCreatorName.name,
      playlistDBWithCreatorName.likes,
      playlistDBWithCreatorName.dislikes,
      playlistDBWithCreatorName.created_at,
      playlistDBWithCreatorName.updated_at,
      playlistDBWithCreatorName.creator_id,
      playlistDBWithCreatorName.creator_name
    );

    const likeSQlite = like ? 1 : 0;

    const likeDislikeDB: likeDislikeDB = {
      user_id: playload.id,
      playlist_id: idToLikeOrDislike,
      like: likeSQlite,
    };

    const likeDislikeExists = await this.playlistDatabase.findLikeDislike(
      likeDislikeDB
    );

    if (likeDislikeExists === PLAYLIST_LIKE.ALREADY_LIKED) {
      if (like) {
        await this.playlistDatabase.removeLikeDislike(likeDislikeDB);
        playlist.removeLike();
      } else {
        await this.playlistDatabase.updateLikeDislike(likeDislikeDB);
        playlist.removeLike();
        playlist.addDislike();
      }
    } else if (likeDislikeExists === PLAYLIST_LIKE.ALREADY_DISLIKED) {
      if (like === false) {
        await this.playlistDatabase.removeLikeDislike(likeDislikeDB);
        playlist.removeDislike();
      } else {
        await this.playlistDatabase.updateLikeDislike(likeDislikeDB);
        playlist.removeDislike();
        playlist.addLike();
      }
    } else {
      await this.playlistDatabase.insertLikeDislike(likeDislikeDB);

      like ? playlist.addLike() : playlist.addDislike();
    }

    const updatedPlaylistDB = playlist.toDBModel();
    await this.playlistDatabase.updatePlaylist(updatedPlaylistDB);

    const output: DeletePlaylistOutputDTO = undefined;

    return output;
  };
}
