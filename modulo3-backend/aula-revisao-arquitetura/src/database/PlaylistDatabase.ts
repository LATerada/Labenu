import {
  likeDislikeDB,
  PlaylistDB,
  PlaylistDBWithCreatorName,
  PLAYLIST_LIKE,
} from "../models/Playlist";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";

export class PlaylistDatabase extends BaseDatabase {
  public static TABLE_PLAYLIST = "playlists";
  public static TABLE_LIKES_DISLIKES = "likes_dislikes";

  public insertPlaylist = async (playlistDB: PlaylistDB): Promise<void> => {
    await BaseDatabase.connection(PlaylistDatabase.TABLE_PLAYLIST).insert(
      playlistDB
    );
  };

  public findPlaylistsWithCreatorName = async (): Promise<
    PlaylistDBWithCreatorName[]
  > => {
    const result: PlaylistDB[] = await BaseDatabase.connection(
      PlaylistDatabase.TABLE_PLAYLIST
    )
      .select(
        `${PlaylistDatabase.TABLE_PLAYLIST}.id`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.creator_id`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.name`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.likes`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.dislikes`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.created_at`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.updated_at`,
        `${UserDatabase.TABLE_USERS}.name as creator_name`
      )
      .join(
        `${UserDatabase.TABLE_USERS}`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.creator_id`,
        "=",
        `${UserDatabase.TABLE_USERS}.id`
      );

    return result as PlaylistDBWithCreatorName[];
  };

  public findPlaylistById = async (
    id: string
  ): Promise<PlaylistDB | undefined> => {
    const [result] = await BaseDatabase.connection(
      PlaylistDatabase.TABLE_PLAYLIST
    ).where({ id });
    return result as PlaylistDB | undefined;
  };

  public updatePlaylist = async (playlistDB: PlaylistDB): Promise<void> => {
    await BaseDatabase.connection(PlaylistDatabase.TABLE_PLAYLIST)
      .update(playlistDB)
      .where({ id: playlistDB.id });
  };

  public removePlaylist = async (id: string): Promise<void> => {
    await BaseDatabase.connection(PlaylistDatabase.TABLE_PLAYLIST).del().where({
      id,
    });
  };

  public findPlaylistsWithCreatorNameById = async (
    id: string
  ): Promise<PlaylistDBWithCreatorName | undefined> => {
    const [result] = await BaseDatabase.connection(
      PlaylistDatabase.TABLE_PLAYLIST
    )
      .select(
        `${PlaylistDatabase.TABLE_PLAYLIST}.id`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.creator_id`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.name`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.likes`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.dislikes`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.created_at`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.updated_at`,
        `${UserDatabase.TABLE_USERS}.name as creator_name`
      )
      .join(
        `${UserDatabase.TABLE_USERS}`,
        `${PlaylistDatabase.TABLE_PLAYLIST}.creator_id`,
        "=",
        `${UserDatabase.TABLE_USERS}.id`
      )
      .where({ [`${PlaylistDatabase.TABLE_PLAYLIST}.id`]: id });

    return result as PlaylistDBWithCreatorName | undefined;
  };

  public findLikeDislike = async (
    likeDislikeDB: likeDislikeDB
  ): Promise<PLAYLIST_LIKE | undefined> => {
    const [result] = await BaseDatabase.connection(
      PlaylistDatabase.TABLE_LIKES_DISLIKES
    ).where({
      user_id: likeDislikeDB.user_id,
      playlist_id: likeDislikeDB.playlist_id,
    });

    if (result === undefined) {
      return undefined;
    } else if (result.like === 1) {
      return PLAYLIST_LIKE.ALREADY_LIKED;
    } else {
      return PLAYLIST_LIKE.ALREADY_DISLIKED;
    }
  };

  public removeLikeDislike = async (
    likeDislikeDB: likeDislikeDB
  ): Promise<void> => {
    await BaseDatabase.connection(PlaylistDatabase.TABLE_LIKES_DISLIKES)
      .del()
      .where({
        user_id: likeDislikeDB.user_id,
        playlist_id: likeDislikeDB.playlist_id,
      });
  };

  public updateLikeDislike = async (
    likeDislikeDB: likeDislikeDB
  ): Promise<void> => {
    await BaseDatabase.connection(PlaylistDatabase.TABLE_LIKES_DISLIKES)
      .update(likeDislikeDB)
      .where({
        user_id: likeDislikeDB.user_id,
        playlist_id: likeDislikeDB.playlist_id,
      });
  };

  public insertLikeDislike = async (
    likeDislikeDB: likeDislikeDB
  ): Promise<void> => {
    await BaseDatabase.connection(PlaylistDatabase.TABLE_LIKES_DISLIKES).insert(
      likeDislikeDB
    );
  };
}
