import { PlaylistDB, PlaylistDBWithCreatorName } from "../models/Playlist";
import { BaseDatabase } from "./BaseDatabase";
import { UserDatabase } from "./UserDatabase";

export class PlaylistDatabase extends BaseDatabase {
  public static TABLE_PLAYLIST = "playlists";

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
}
