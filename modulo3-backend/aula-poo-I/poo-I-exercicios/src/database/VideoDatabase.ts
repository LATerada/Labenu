import { TVideoDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class VideoDatabase extends BaseDatabase {
  public static TABLE_VIDEOS = "videos";

  public async findVideos(q: string | undefined): Promise<TVideoDB[]> {
    let videosDB;
    if (q) {
      const result: TVideoDB[] = await BaseDatabase.connection(
        VideoDatabase.TABLE_VIDEOS
      ).where("title", "LIKE", `%${q}%`);
      videosDB = result;
    } else {
      const result: TVideoDB[] = await BaseDatabase.connection(
        VideoDatabase.TABLE_VIDEOS
      );
      videosDB = result;
    }
    return videosDB;
  }

  public async findVideoById(id: string): Promise<TVideoDB | undefined> {
    const [videoDB]: TVideoDB[] | undefined[] = await BaseDatabase.connection(
      VideoDatabase.TABLE_VIDEOS
    ).where({
      id,
    });
    return videoDB;
  }

  public async insertVideo(newVideo: TVideoDB): Promise<void> {
    await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS).insert(newVideo);
  }

  public async updateVideo(newVideo: TVideoDB): Promise<void> {
    await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS)
      .update(newVideo)
      .where({ id: newVideo.id });
  }

  public async deleteVideo(id: string): Promise<void> {
    await BaseDatabase.connection(VideoDatabase.TABLE_VIDEOS)
      .del()
      .where({ id });
  }
}
